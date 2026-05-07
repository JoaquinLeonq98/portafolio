import type { ImageMetadata } from 'astro';

import node from '../assets/node.png';
import mongo from '../assets/mongodb.png';
import linux from '../assets/linux.png';

/**
 * Stack compacto alineado al CV (incluye herramientas de IA asistida al final). Para añadir tecnología:
 * - `remote`: icono desde Simple Icons CDN (slug y color en https://simpleicons.org )
 * - `image`: asset local en /src/assets
 * - `icon`: SVG en `StackIcon.astro` (ids en `stackIconIds.ts`)
 */
export type TechStackItem =
  | { type: 'remote'; label: string; src: string }
  | { type: 'image'; label: string; src: ImageMetadata; imgClass?: string }
  | { type: 'icon'; label: string; icon: 'astro' };

export const techStack: TechStackItem[] = [
  { type: 'remote', label: 'TypeScript', src: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { type: 'remote', label: 'Angular', src: 'https://cdn.simpleicons.org/angular/DD0031' },
  { type: 'remote', label: 'Flutter', src: 'https://cdn.simpleicons.org/flutter/02569B' },
  { type: 'remote', label: 'NestJS', src: 'https://cdn.simpleicons.org/nestjs/E0234E' },
  { type: 'image', label: 'Node.js', src: node, imgClass: 'w-12 object-contain' },
  { type: 'remote', label: 'Next.js', src: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
  { type: 'icon', label: 'Astro', icon: 'astro' },
  { type: 'remote', label: 'Docker', src: 'https://cdn.simpleicons.org/docker/2496ED' },
  { type: 'remote', label: 'PostgreSQL', src: 'https://cdn.simpleicons.org/postgresql/4169E1' },
  { type: 'image', label: 'MongoDB', src: mongo, imgClass: 'object-contain' },
  { type: 'remote', label: 'AWS', src: '/icons/aws.svg' },
  { type: 'remote', label: 'Vercel', src: 'https://cdn.simpleicons.org/vercel/ffffff' },
  { type: 'image', label: 'Linux', src: linux, imgClass: 'object-contain' },
  { type: 'remote', label: 'Cursor', src: 'https://cdn.simpleicons.org/cursor/ffffff' },
  { type: 'remote', label: 'GitHub Copilot', src: 'https://cdn.simpleicons.org/githubcopilot/ffffff' },
  { type: 'remote', label: 'Anthropic', src: 'https://cdn.simpleicons.org/anthropic' },
  { type: 'remote', label: 'OpenAI', src: 'https://cdn.simpleicons.org/openai' },
];
