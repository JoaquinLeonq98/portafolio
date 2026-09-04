const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 4;

const hits = new Map<string, number[]>();

function prune(now: number) {
  if (hits.size > 10_000) {
    for (const [ip, arr] of hits) {
      const next = arr.filter((t) => now - t < WINDOW_MS);
      if (next.length === 0) hits.delete(ip);
      else hits.set(ip, next);
    }
  }
}

/** true si se permite el envío; false si la IP superó el límite en la ventana. */
export function allowContactSubmission(ip: string): boolean {
  const now = Date.now();
  prune(now);
  const arr = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (arr.length >= MAX_PER_WINDOW) return false;
  arr.push(now);
  hits.set(ip, arr);
  return true;
}
