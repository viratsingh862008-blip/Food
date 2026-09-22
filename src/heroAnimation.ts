export function getHeroWordOffsets(progress: number, viewportWidth: number) {
  const p = Math.max(0, Math.min(1, progress));
  const scaleFactor = viewportWidth < 768 ? 0.5 : 1;
  const left = [0, 1, 2, 3].map((i) => -(60 + i * 40) * scaleFactor * (1 - p));
  const right = [0, 1, 2, 3].map((i) => +(60 + i * 40) * scaleFactor * (1 - p));
  const title = { foodY: -22 * p, plazaY: 46 * p, foodScale: 1 + 0.035 * p, plazaScale: 1 + 0.02 * p };
  return { left, right, title };
}

export function getHeroProgress(sectionTop: number, sectionHeight: number, viewportHeight: number) {
  const range = Math.max(1, sectionHeight - viewportHeight);
  return Math.max(0, Math.min(1, -sectionTop / range));
}
