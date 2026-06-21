import { useEffect, useMemo, useRef, useState } from "react";

function usePrefersReducedMotion() {
  return useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);
}

export function VideoInView({
  children,
  rootMargin = "200px 0px",
}: {
  children: (props: { isInView: boolean }) => React.ReactNode;
  rootMargin?: string;
}) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isInView, setIsInView] = useState(() => prefersReducedMotion);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.01 },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [prefersReducedMotion, rootMargin]);

  return (
    <div ref={sentinelRef} className="absolute inset-0 pointer-events-none">
      {/* sentinel occupies full area; guarantees intersection detection */}
      {children({ isInView })}
    </div>
  );
}
