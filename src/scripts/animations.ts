import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// El HTML es visible sin JavaScript. Cada recarga crea una nueva secuencia.
const motion = gsap.matchMedia();
motion.add('(prefers-reduced-motion: no-preference)', () => {
  const entrances = new Map<Element, gsap.core.Animation>();
  const intro = gsap.timeline({ defaults: { ease: 'expo.out', clearProps: 'opacity,transform,transition' } });
  gsap.set('header nav > *, [data-hero-copy] > *', { transition: 'none' });
  intro.from('header nav > *', { y: -8, opacity: 0, duration: .6, stagger: .05 }, 0);
  const hero = document.querySelector('[data-hero-copy]');
  if (hero) {
    intro.from(hero.children, { y: 22, opacity: 0, duration: 1, stagger: .08 }, .1);
    intro.from('#indice-heading, #indice-heading + ol > li', { y: 12, opacity: 0, duration: .8, stagger: .045 }, .3);
  }

  // Lámina: se descubre desde el medianil hacia afuera, como al abrir el pliego.
  document.querySelectorAll<HTMLElement>('[data-plate]').forEach(plate => {
    const fromRight = plate.closest('.spread--right') !== null;
    const tween = gsap.fromTo(plate,
      { clipPath: fromRight ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)' },
      {
        clipPath: 'inset(0 0% 0 0%)', duration: 1.1, ease: 'expo.out', clearProps: 'clipPath',
        scrollTrigger: { trigger: plate, start: 'top 88%', once: true },
      });
    entrances.set(plate, tween);
  });

  document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group] > *').forEach(element => {
    if (element.closest('[data-hero-copy]')) return;
    const group = element.parentElement?.hasAttribute('data-reveal-group');
    const order = group ? [...element.parentElement!.children].indexOf(element) % 4 : 0;
    // Evita que las transiciones de hover retrasen cada fotograma de GSAP.
    gsap.set(element, { transition: 'none' });
    const tween = gsap.from(element, {
      y: 16, opacity: 0, duration: .8, delay: order * .05, ease: 'expo.out',
      clearProps: 'opacity,transform,transition',
      scrollTrigger: { trigger: element, start: 'top 94%', once: true },
    });
    entrances.set(element, tween);
  });

  // Una entrada nunca debe ocultar el elemento al que se llega con Tab.
  const revealFocus = (event: FocusEvent) => {
    if (!(event.target instanceof Node)) return;
    if (document.getElementById('inicio')?.contains(event.target) || document.querySelector('header')?.contains(event.target)) intro.progress(1);
    entrances.forEach((tween, element) => {
      if (element.contains(event.target as Node) || element.parentElement?.contains(event.target as Node)) tween.progress(1);
    });
  };
  document.addEventListener('focusin', revealFocus);
  return () => document.removeEventListener('focusin', revealFocus);
});
