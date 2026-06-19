// src/lib/utils.ts
// Move ALL non-component exports here to fix Fast Refresh warnings

export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export const WHATSAPP_NUMBER = "2348158484621";

export const serviceOptions = [
  'Website Development',
  'OTA Management',
  'Social Media Management',
  'AI & Automation',
  'International Sourcing',
  'Supplier Verification',
  'Digital Skills Training',
  'Import/Export Training',
] as const;
