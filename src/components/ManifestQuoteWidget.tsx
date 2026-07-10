import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Circle,
  Shield,
  Route,
  Warehouse,
} from "lucide-react";

type Region = {
  id: string;
  label: string;
  corridors: string[];
  baseLeadDays: [number, number];
  complianceMultipliers: { standard: number; enhanced: number };
};

type SizeBin = {
  id: string;
  label: string;
  unitsApprox: string;
  volumeMultiplier: number;
};

type ComplianceLevel = "standard" | "enhanced";

type Mode = "sourcing" | "automation" | "hybrid";

type StatusMode = "in-transit" | "cleared" | "delayed";

const regions: Region[] = [
  {
    id: "west-africa",
    label: "West Africa (Nigeria / Ghana / Benin)",
    corridors: ["Sea Freight", "Port Handling", "Road Final Mile"],
    baseLeadDays: [18, 28],
    complianceMultipliers: { standard: 1.0, enhanced: 1.12 },
  },
  {
    id: "east-asia",
    label: "East Asia (China / HK / Vietnam)",
    corridors: ["Origin Loading", "Ocean Transit", "Customs & Release"],
    baseLeadDays: [22, 34],
    complianceMultipliers: { standard: 1.0, enhanced: 1.15 },
  },
  {
    id: "europe",
    label: "Europe (EU / UK / Turkey)",
    corridors: ["Cross-border Docs", "Rail/Sea Mix", "Final Mile Delivery"],
    baseLeadDays: [16, 26],
    complianceMultipliers: { standard: 1.0, enhanced: 1.08 },
  },
];

const sizeBins: SizeBin[] = [
  {
    id: "s1",
    label: "Small",
    unitsApprox: "1–2 containers",
    volumeMultiplier: 0.9,
  },
  {
    id: "s2",
    label: "Medium",
    unitsApprox: "2–3 containers",
    volumeMultiplier: 1.0,
  },
  {
    id: "s3",
    label: "Large",
    unitsApprox: "3–5 containers",
    volumeMultiplier: 1.12,
  },
  {
    id: "s4",
    label: "XL",
    unitsApprox: "5–8 containers",
    volumeMultiplier: 1.25,
  },
  {
    id: "s5",
    label: "Bulk",
    unitsApprox: "8+ containers",
    volumeMultiplier: 1.4,
  },
];

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function formatPORef(seed: {
  regionId: string;
  binId: string;
  compliance: ComplianceLevel;
  mode: Mode;
}) {
  const now = new Date();
  const yy = now.getUTCFullYear().toString().slice(-2);
  const mm = String(now.getUTCMonth() + 1).padStart(2, "0");
  const hh = String(now.getUTCHours()).padStart(2, "0");

  // Simple deterministic-ish hash to keep output stable for the same inputs in a single session.
  const str = `${seed.regionId}|${seed.binId}|${seed.compliance}|${seed.mode}|${yy}${mm}${hh}`;
  let hash = 0;
  for (let i = 0; i < str.length; i++)
    hash = (hash * 31 + str.charCodeAt(i)) >>> 0;

  const last4 = String(hash % 10000).padStart(4, "0");
  return `DM-PO-${yy}${mm}-${last4}`;
}

function makeRiskFlags(args: {
  mode: Mode;
  compliance: ComplianceLevel;
  regionId: string;
  sizeBinId: string;
  status: StatusMode;
}) {
  const flags: {
    id: string;
    title: string;
    detail: string;
    severity: "low" | "med" | "high";
  }[] = [];

  // Demo logic (no claim about real-world guarantees).
  if (
    args.compliance === "standard" &&
    (args.mode === "automation" || args.mode === "hybrid")
  ) {
    flags.push({
      id: "docs",
      title: "Documentation review may slow automation",
      detail:
        "Enhanced compliance adds audit-ready logs and structured document checks.",
      severity: "med",
    });
  }

  if (args.status === "delayed") {
    flags.push({
      id: "delay",
      title: "Delay risk increased for this simulation",
      detail:
        "In a real system, we’d verify release documents and carrier ETA before committing.",
      severity: "high",
    });
  }

  if (args.sizeBinId === "s5" && args.compliance === "standard") {
    flags.push({
      id: "volume",
      title: "High volume needs stricter checklist",
      detail:
        "Large shipments benefit from enhanced compliance to reduce clearance friction.",
      severity: "med",
    });
  }

  if (args.regionId === "east-asia" && args.mode !== "sourcing") {
    flags.push({
      id: "handover",
      title: "Workflow handover across vendors",
      detail:
        "Automation flows should include supplier confirmations and document-ready checkpoints.",
      severity: "low",
    });
  }

  if (!flags.length) {
    flags.push({
      id: "clear",
      title: "Low risk (for this simulation)",
      detail: "No major bottlenecks detected for the current assumptions.",
      severity: "low",
    });
  }

  // Cap to keep UI clean.
  return flags.slice(0, 2);
}

function statusConfig(status: StatusMode) {
  switch (status) {
    case "cleared":
      return {
        label: "Cleared",
        dot: "bg-green-700",
        pill: "border-green-700/30 bg-green-700/10",
        icon: Check,
      };
    case "delayed":
      return {
        label: "Delayed",
        dot: "bg-amber-500",
        pill: "border-amber-500/30 bg-amber-500/10",
        icon: Shield,
      };
    default:
      return {
        label: "In transit",
        dot: "bg-[#1E4D8C]",
        pill: "border-[#1E4D8C]/30 bg-[#1E4D8C]/10",
        icon: Route,
      };
  }
}

export function ManifestQuoteWidget() {
  const reducedMotion = useReducedMotion();

  const [regionId, setRegionId] = useState(regions[0].id);
  const [sizeBinId, setSizeBinId] = useState(sizeBins[1].id);
  const [mode, setMode] = useState<Mode>("sourcing");
  const [compliance, setCompliance] = useState<ComplianceLevel>("standard");
  const [status, setStatus] = useState<StatusMode>("in-transit");

  const DISMISS_KEY = "dchoice-manifest-quote-dismissed";
  const THEME_KEY = "dchoice-manifest-quote-theme";

  // Dismiss (persistent)
  const [dismissed, setDismissed] = useState(() => {
    try {
      return localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  });

  const reopen = () => {
    setDismissed(false);
    try {
      localStorage.setItem(DISMISS_KEY, "0");
    } catch {
      // ignore
    }
  };

  const dismiss = () => {
    setDismissed(true);
    try {
      localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      // ignore
    }
  };

  // Theme (widget-local)
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      // ignore
    }

    if (typeof window !== "undefined" && window.matchMedia) {
      return window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
    }

    return "light";
  });

  const isLight = theme === "light";

  const persistTheme = (t: "light" | "dark") => {
    setTheme(t);
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {
      // ignore
    }
  };

  const region = useMemo(
    () => regions.find((r) => r.id === regionId) ?? regions[0],
    [regionId],
  );
  const sizeBin = useMemo(
    () => sizeBins.find((s) => s.id === sizeBinId) ?? sizeBins[1],
    [sizeBinId],
  );

  const leadTime = useMemo(() => {
    const [minBase, maxBase] = region.baseLeadDays;

    const modeMultiplier =
      mode === "sourcing" ? 1.0 : mode === "automation" ? 0.93 : 0.98;
    const complianceMultiplier = region.complianceMultipliers[compliance];
    const volumeMultiplier = sizeBin.volumeMultiplier;

    const statusMultiplier =
      status === "cleared" ? 0.92 : status === "delayed" ? 1.18 : 1.0;

    const min = Math.round(
      minBase *
        modeMultiplier *
        complianceMultiplier *
        volumeMultiplier *
        statusMultiplier,
    );
    const max = Math.round(
      maxBase *
        modeMultiplier *
        complianceMultiplier *
        volumeMultiplier *
        statusMultiplier,
    );

    return {
      min: clamp(min, 8, 120),
      max: clamp(max, 12, 160),
    };
  }, [region, compliance, mode, sizeBin, status]);

  const poRef = useMemo(
    () =>
      formatPORef({
        regionId,
        binId: sizeBinId,
        compliance,
        mode,
      }),
    [regionId, sizeBinId, compliance, mode],
  );

  const checklist = useMemo(() => {
    const common = [
      "Commercial invoice readiness",
      "Packing list confirmation",
      "Supplier document package validation",
      "Shipping method selection",
    ];

    const automationAdds = [
      "PO dashboard mapping (fields + approval workflow)",
      "Automated status updates & audit logs",
      "Exception routing rules (delayed/blocked checkpoints)",
    ];

    const enhancedAdds = [
      "Compliance audit-ready log pack",
      "Structured supplier verification references",
      "Document checkpoints with timestamped evidence",
      "Risk review sign-off stage",
    ];

    const items = [
      ...common,
      ...(mode === "automation" || mode === "hybrid" ? automationAdds : []),
      ...(compliance === "enhanced" ? enhancedAdds : []),
    ];

    return items.slice(0, 7);
  }, [mode, compliance]);

  const routeSegments = useMemo(() => {
    const base = region.corridors;
    const statusHint =
      status === "delayed"
        ? "(holds until documents confirmed)"
        : status === "cleared"
          ? "(released)"
          : "(moving)";

    const segments = [
      {
        id: "seg1",
        title: base[0],
        detail:
          mode === "sourcing" ? "Vendor onboarding + spec lock" : "Workflow handover + mappings",
        time: "T+0",
      },
      {
        id: "seg2",
        title: base[1] ?? "In-transit stage",
        detail:
          compliance === "enhanced"
            ? "Audit-ready evidence captured"
            : "Standard document flow",
        time: `T+${Math.max(3, Math.floor(leadTime.min / 2))}`,
      },
      {
        id: "seg3",
        title: base[2] ?? "Final mile",
        detail:
          status === "cleared" ? "Release confirmed" : "Delivery scheduling",
        time: `T+${leadTime.max}`,
      },
    ];

    if (mode !== "sourcing") {
      segments.splice(2, 0, {
        id: "segMid",
        title: "Automation checkpoint",
        detail: "Status events recorded with exception handling",
        time: `T+${Math.max(5, Math.floor((leadTime.min + leadTime.max) / 3))}`,
      });
    }

    return segments.map((s) => ({
      ...s,
      detail: `${s.detail} ${statusHint}`.trim(),
    }));
  }, [region, mode, compliance, status, leadTime]);

  const riskFlags = useMemo(
    () =>
      makeRiskFlags({
        mode,
        compliance,
        regionId,
        sizeBinId,
        status,
      }),
    [mode, compliance, regionId, sizeBinId, status],
  );

  const [demoUpdatedAt, setDemoUpdatedAt] = useState<number>(() => Date.now());

  const sCfg = statusConfig(status);
  const StatusIcon = sCfg.icon;

  return (
    <div className="relative" data-manifest-quote>
      {dismissed ? (
        <div className="absolute right-0 top-0">
          <button
            type="button"
            onClick={reopen}
            aria-label="Re-open manifest quote widget"
            className="min-h-11 min-w-11 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm text-white px-3 py-2 font-semibold text-sm hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          >
            Get a quote
          </button>
        </div>
      ) : (
        <section
          aria-label="Procurement quote estimator and shipment manifest generator"
          className={`w-full max-w-[380px] rounded-3xl border overflow-hidden ${
            isLight
              ? "bg-[#F8F6EF] text-[#0A1830] border-black/5"
              : "bg-[#0A1830] text-[#F8F6EF] border-white/10"
          }`}
        >
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className={`w-9 h-9 rounded-2xl border flex items-center justify-center ${
                      isLight ? "bg-white/60 border-black/10" : "bg-white/[0.06] border-white/[0.10]"
                    }`}
                  >
                    <Warehouse className="w-4 h-4" color="#C9A227" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h2
                      className="text-lg sm:text-xl font-bold"
                      style={{ letterSpacing: "-0.02em" }}
                    >
                      Manifest Quote Widget
                    </h2>
                    <p className={isLight ? "text-[#0A1830]/60 text-xs mt-0.5" : "text-white/60 text-xs mt-0.5"}>
                      Instant procurement estimates (simulation-ready)
                    </p>
                  </div>
                </div>
              </div>

              <div className="shrink-0 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => persistTheme(isLight ? "dark" : "light")}
                  aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
                  className={`min-h-11 min-w-11 rounded-2xl border backdrop-blur-sm flex items-center justify-center font-semibold focus:outline-none focus:ring-2 focus:ring-[#C9A227] ${
                    isLight
                      ? "bg-white/40 border-black/10 text-[#0A1830] hover:bg-white/60"
                      : "bg-white/[0.06] border-white/[0.10] text-[#F8F6EF] hover:bg-white/[0.10]"
                  }`}
                >
                  {isLight ? "☾" : "☀"}
                </button>

                <button
                  type="button"
                  onClick={dismiss}
                  aria-label="Dismiss quote widget"
                  className={`min-h-11 min-w-11 rounded-2xl border backdrop-blur-sm flex items-center justify-center font-semibold focus:outline-none focus:ring-2 focus:ring-[#C9A227] ${
                    isLight
                      ? "bg-white/40 border-black/10 text-[#0A1830] hover:bg-white/60"
                      : "bg-white/[0.06] border-white/[0.10] text-[#F8F6EF] hover:bg-white/[0.10]"
                  }`}
                >
                  ×
                </button>
              </div>
            </div>

            <div className="mt-3 flex justify-end">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-3 py-1 border ${sCfg.pill} ${
                  isLight ? "text-[#0A1830]" : "text-white"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${sCfg.dot}`} aria-hidden="true" />
                <StatusIcon className="w-4 h-4" />
                <span className="text-xs font-semibold">{sCfg.label}</span>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-4">
              {/* Inputs */}
              <div
                className={`rounded-2xl border ${
                  isLight ? "border-black/10 bg-white/40" : "border-white/[0.08] bg-white/[0.03]"
                } p-4`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className={isLight ? "text-sm font-bold" : "text-sm font-bold text-white/90"}>Inputs</h3>
                  <span
                    className={
                      isLight ? "text-[10px] text-black/40 font-semibold" : "text-[10px] text-white/40 font-semibold"
                    }
                  >
                    Updated{" "}
                    {new Date(demoUpdatedAt).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>

                <div className="space-y-3">
                  <label className="block">
                    <span className="text-[11px] font-semibold inline-block mb-1">Destination region</span>
                    <select
                      value={regionId}
                      onChange={(e) => setRegionId(e.target.value)}
                      className={`w-full rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A227] ${
                        isLight ? "bg-[#F8F6EF] text-[#0A1830]" : "bg-[#F8F6EF] text-[#0A1830]"
                      }`}
                    >
                      {regions.map((r) => (
                        <option key={r.id} value={r.id}>
                          {r.label}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="text-[11px] font-semibold inline-block mb-1">Shipment size</span>
                    <select
                      value={sizeBinId}
                      onChange={(e) => setSizeBinId(e.target.value)}
                      className={`w-full rounded-xl px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-[#C9A227] ${
                        isLight ? "bg-[#F8F6EF] text-[#0A1830]" : "bg-[#F8F6EF] text-[#0A1830]"
                      }`}
                    >
                      {sizeBins.map((b) => (
                        <option key={b.id} value={b.id}>
                          {b.label} · {b.unitsApprox}
                        </option>
                      ))}
                    </select>
                  </label>

                  <fieldset className="border-t border-black/10 pt-3">
                    <legend className="text-[11px] font-semibold">Engagement mode</legend>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                      {([
                        { id: "sourcing", label: "Sourcing" },
                        { id: "automation", label: "Automation" },
                        { id: "hybrid", label: "Hybrid" },
                      ] as const).map((m) => (
                        <button
                          key={m.id}
                          type="button"
                          onClick={() => setMode(m.id)}
                          className={`text-left rounded-xl px-3 py-2 border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A227] ${
                            mode === m.id
                              ? "bg-[#C9A227]/15 border-[#C9A227]/40 text-[#0A1830]"
                              : "bg-white/[0.03] border-white/[0.08] text-[#0A1830]"
                          }`}
                        >
                          {m.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <fieldset className="border-t border-black/10 pt-3">
                    <legend className="text-[11px] font-semibold">Compliance level</legend>
                    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {([
                        { id: "standard", label: "Standard" },
                        { id: "enhanced", label: "Enhanced" },
                      ] as const).map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setCompliance(c.id)}
                          className={`text-left rounded-xl px-3 py-2 border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#C9A227] ${
                            compliance === c.id
                              ? "bg-[#1E4D8C]/20 border-[#1E4D8C]/40 text-[#0A1830]"
                              : "bg-white/[0.03] border-white/[0.08] text-[#0A1830]"
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        const cycle: StatusMode[] = ["in-transit", "cleared", "delayed"];
                        const i = cycle.indexOf(status);
                        const next = cycle[(i + 1) % cycle.length];
                        setStatus(next);
                        setDemoUpdatedAt(Date.now());
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#C9A227] text-[#0A1830] font-bold px-4 py-2 text-sm transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                    >
                      Simulate update
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setRegionId(regions[0].id);
                        setSizeBinId(sizeBins[1].id);
                        setMode("sourcing");
                        setCompliance("standard");
                        setStatus("in-transit");
                        setDemoUpdatedAt(Date.now());
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/[0.03] border border-white/[0.10] text-[#0A1830] font-semibold px-4 py-2 text-sm hover:bg-white/[0.05] transition-colors"
                    >
                      Reset
                    </button>
                  </div>

                  <p className="text-[10px] mt-2 leading-relaxed opacity-60">
                    Demo estimator: numbers are illustrative. Replace with real data integrations during build-out.
                  </p>
                </div>
              </div>

              {/* Output */}
              <div
                className={`rounded-2xl border ${
                  isLight ? "border-black/10 bg-white/40" : "border-white/[0.08] bg-white/[0.03]"
                } p-4`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className={isLight ? "text-sm font-bold" : "text-sm font-bold text-white/90"}>Generated manifest summary</h3>
                  <span className={isLight ? "text-[10px] text-black/40 font-semibold" : "text-[10px] text-white/40 font-semibold"}>PO Ref</span>
                </div>

                <div className="rounded-2xl border border-white/[0.08] bg-[#0A1830] p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-[11px] text-white/50 font-semibold">Procurement order reference</div>
                      <div className="mt-1 font-mono text-[#C9A227] text-sm sm:text-base font-bold break-all">{poRef}</div>
                    </div>

                    <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-2">
                      <Circle className="w-4 h-4 text-white/70" />
                      <div>
                        <div className="text-[11px] text-white/50 font-semibold">Lead time</div>
                        <div className="font-mono font-bold text-white/90 text-sm">{leadTime.min}–{leadTime.max} days</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                      <div className="flex items-center gap-2 text-[11px] text-white/60 font-semibold">
                        <Shield className="w-4 h-4 text-[#1E4D8C]" />
                        Compliance handling
                      </div>
                      <div className="mt-2 text-white/80 text-sm leading-relaxed">
                        {compliance === "enhanced" ? (
                          <>Audit-ready checklist + timestamped document checkpoints.</>
                        ) : (
                          <>Standard document flow + basic verification checkpoints.</>
                        )}
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                      <div className="flex items-center gap-2 text-[11px] text-white/60 font-semibold">
                        <Route className="w-4 h-4 text-[#C9A227]" />
                        Mode impact
                      </div>
                      <div className="mt-2 text-white/80 text-sm leading-relaxed">
                        {mode === "sourcing" && <>Supplier verification + procurement execution focus.</>}
                        {mode === "automation" && <>Workflow automation + PO visibility + reporting artifacts.</>}
                        {mode === "hybrid" && <>Automation layer on top of sourcing verification workflows.</>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                      <Check className="w-4 h-4 text-[#C9A227]" />
                    </div>
                    <h4 className="text-sm font-bold text-white/90">Document checklist</h4>
                  </div>

                  <ul className="space-y-2">
                    {checklist.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C9A227]" aria-hidden="true" />
                        <span className="text-sm text-white/75 leading-relaxed">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                      <Route className="w-4 h-4 text-[#1E4D8C]" />
                    </div>
                    <h4 className="text-sm font-bold text-white/90">Route timeline</h4>
                  </div>

                  <div className="space-y-2">
                    {routeSegments.map((seg, i) => (
                      <div key={seg.id} className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-bold text-white/90">{seg.title}</div>
                            <div className="text-[11px] text-white/55 mt-1 leading-relaxed">{seg.detail}</div>
                          </div>
                          <div className="shrink-0 rounded-xl bg-white/[0.03] border border-white/[0.08] px-2.5 py-1">
                            <div className="text-[10px] text-white/45 font-semibold">{seg.time}</div>
                          </div>
                        </div>
                        {i < routeSegments.length - 1 && (
                          <div className="mt-2 h-px bg-gradient-to-r from-[#C9A227]/40 via-white/[0.10] to-transparent" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center">
                      <Shield className="w-4 h-4 text-[#C9A227]" />
                    </div>
                    <h4 className="text-sm font-bold text-white/90">Risk flags</h4>
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    {riskFlags.map((f) => (
                      <motion.div
                        key={f.id}
                        initial={reducedMotion ? undefined : { opacity: 0, y: 10 }}
                        animate={reducedMotion ? undefined : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.35 }}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-sm font-bold text-white/90">{f.title}</div>
                            <div className="text-[11px] text-white/55 mt-1 leading-relaxed">{f.detail}</div>
                          </div>
                          <span
                            className={`shrink-0 text-[10px] font-bold px-2 py-1 rounded-full border ${
                              f.severity === "high"
                                ? "border-amber-500/30 bg-amber-500/10 text-amber-200"
                                : f.severity === "med"
                                  ? "border-[#1E4D8C]/30 bg-[#1E4D8C]/10 text-[#93C5FD]"
                                  : "border-green-700/30 bg-green-700/10 text-green-200"
                            }`}
                          >
                            {f.severity.toUpperCase()}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-3 mt-3">
              <div className="absolute inset-0 bg-gradient-to-r from-[#C9A227]/20 via-transparent to-[#1E4D8C]/20" />
              <div
                className="absolute left-0 right-0 top-0 h-full"
                aria-hidden="true"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 10px 50%, rgba(249, 215, 128, 0.55) 2px, transparent 2.1px)",
                  backgroundSize: "20px 100%",
                }}
              />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

