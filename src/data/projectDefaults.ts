/** Vista previa por defecto cuando un proyecto no tiene imagen propia. */
export const DEFAULT_PROJECT_PREVIEW = '/projects/placeholder.svg';

export function resolveProjectPreview(previewSrc?: string): string {
  const trimmed = previewSrc?.trim();
  return trimmed || DEFAULT_PROJECT_PREVIEW;
}
