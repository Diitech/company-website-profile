import { useEffect } from "react";

type SEOHeadProps = {
  /**
   * Absolute canonical URL for the current route.
   * If omitted, SEOHead will not override canonical.
   */
  canonicalUrl?: string;

  /**
   * Document title override. If omitted, index.html title remains.
   */
  title?: string;

  /**
   * Meta description for the current route.
   */
  description?: string;

  /**
   * OpenGraph / Twitter description. If omitted, falls back to `description`.
   */
  ogDescription?: string;

  /**
   * OpenGraph image URL (optional)
   */
  ogImage?: string;

  /**
   * JSON-LD to inject (as an object or array of objects)
   */
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

type JsonLdValue = Record<string, unknown> | Array<Record<string, unknown>>;

function ensureMetaTag(selector: string, create: () => HTMLMetaElement) {
  const existing = document.head.querySelector(
    selector,
  ) as HTMLMetaElement | null;
  if (existing) return existing;
  const created = create();
  document.head.appendChild(created);
  return created;
}

function setOrUpdateMeta(
  nameOrProperty: string,
  value: string,
  isProperty: boolean,
) {
  const meta = isProperty
    ? ensureMetaTag(`meta[property="${nameOrProperty}"]`, () => {
        const m = document.createElement("meta");
        m.setAttribute("property", nameOrProperty);
        return m;
      })
    : ensureMetaTag(`meta[name="${nameOrProperty}"]`, () => {
        const m = document.createElement("meta");
        m.setAttribute("name", nameOrProperty);
        return m;
      });

  meta.content = value;
  return meta;
}

function upsertCanonical(canonicalUrl: string) {
  const selector = `link[rel="canonical"]`;
  const existing = document.head.querySelector(
    selector,
  ) as HTMLLinkElement | null;

  if (existing) {
    existing.href = canonicalUrl;
    return;
  }

  const link = document.createElement("link");
  link.setAttribute("rel", "canonical");
  link.href = canonicalUrl;
  document.head.appendChild(link);
}

function upsertTitle(title: string) {
  document.title = title;
}

function upsertJsonLd(key: string, json: JsonLdValue) {
  const selector = `script[data-seo-jsonld="${key}"]`;
  const existing = document.head.querySelector(
    selector,
  ) as HTMLScriptElement | null;

  const script = existing ?? document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-seo-jsonld", key);
  script.text = JSON.stringify(json);
  if (!existing) document.head.appendChild(script);
}

export function SEOHead(props: SEOHeadProps) {
  const { canonicalUrl, title, description, ogDescription, ogImage, jsonLd } =
    props;

  const jsonLdKey = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    // Canonical
    if (canonicalUrl) upsertCanonical(canonicalUrl);

    // Title (optional)
    if (title) upsertTitle(title);

    const desc = description ?? "";
    const ogDesc = ogDescription ?? description ?? "";

    // Ensure meta description
    if (desc) {
      setOrUpdateMeta("description", desc, false);
    }

    // OpenGraph tags
    if (ogDesc) {
      const ogTitle = title ?? document.title;
      const ogType = "website";
      const ogLocale = "en_US";
      const url = canonicalUrl ?? window.location.href;

      setOrUpdateMeta("og:title", ogTitle, true);
      setOrUpdateMeta("og:description", ogDesc, true);
      setOrUpdateMeta("og:type", ogType, true);
      setOrUpdateMeta("og:locale", ogLocale, true);
      setOrUpdateMeta("og:url", url, true);

      if (ogImage) setOrUpdateMeta("og:image", ogImage, true);
    }

    // Twitter tags (non-destructive update)
    if (desc || title) {
      const tTitle = title ?? document.title;
      const tDesc = ogDesc || desc;

      setOrUpdateMeta("twitter:card", "summary_large_image", false);
      setOrUpdateMeta("twitter:title", tTitle, false);
      setOrUpdateMeta("twitter:description", tDesc, false);
      // twitter:image intentionally not set unless ogImage provided
      if (ogImage) setOrUpdateMeta("twitter:image", ogImage, false);
    }

    // JSON-LD injection
    if (jsonLd) {
      const arr = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      upsertJsonLd("route", arr.length === 1 ? arr[0] : arr);
    }

    // Cleanup: only remove the JSON-LD script we added to avoid breaking others.
    return () => {
      const selector = `script[data-seo-jsonld="route"]`;
      const existing = document.head.querySelector(selector);
      if (existing) existing.remove();
    };
  }, [
    canonicalUrl,
    title,
    description,
    ogDescription,
    ogImage,
    // Keep dependency array statically checkable
    jsonLdKey,
    // Ensure jsonLd is tracked explicitly for React Hook correctness
    jsonLd,
  ]);

  return null;
}