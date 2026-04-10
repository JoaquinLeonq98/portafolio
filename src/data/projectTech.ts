import type { StackIconId } from './stackIconIds';

/** Tecnología en tarjeta de proyecto: icono local (`StackIcon`) o remoto (Simple Icons CDN). */
export type ProjectTech =
  | { name: string; icon: StackIconId }
  | { name: string; remoteIcon: string };

export function isRemoteTech(t: ProjectTech): t is { name: string; remoteIcon: string } {
  return 'remoteIcon' in t;
}
