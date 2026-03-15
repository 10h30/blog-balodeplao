import { R2_BASE } from "@/config/r2.mjs";

export function toR2Url(path?: string): string | undefined {
  if (!path) return undefined;
  if (path.startsWith("http")) return path;
  return `${R2_BASE}${path}`;
}
