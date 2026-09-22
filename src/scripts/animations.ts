import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// El HTML es visible sin JavaScript. Cada recarga crea una nueva secuencia.
const motion = gsap.matchMedia();
motion.add('(prefers-reduced-motion: no-preference)', () => {
  const entrances = new Map<Element, gsap.core.Tween>();
  const intro = gsap.timeline({ defaults: { ease: 'power3.out', clearProps: 'opacity,transform,transition' } });
  gsap.set('header nav > *, [data-hero-copy] > *', { transition: 'none' });
  intro.from('header nav > *', { y: -10, opacity: 0, duration: .55, stagger: .06 }, 0);
  const hero = document.querySelector('[data-hero-copy]');
  if (hero) {
    intro.from(hero.children, { y: 26, opacity: 0, duration: .85, stagger: .09 }, .12);
    intro.from('[data-hero-portrait]', { y: 24, scale: .97, opacity: 0, duration: 1 }, .25);
  }

  document.querySelectorAll<HTMLElement>('[data-reveal], [data-reveal-group] > *').forEach(element => {
    const group = element.parentElement?.hasAttribute('data-reveal-group');
    const order = group ? [...element.parentElement!.children].indexOf(element) % 4 : 0;
    // Evita que las transiciones de hover retrasen cada fotograma de GSAP.
    gsap.set(element, { transition: 'none' });
    const tween = gsap.from(element, {
      y: 24, opacity: 0, duration: .7, delay: order * .055, ease: 'power3.out',
      clearProps: 'opacity,transform,transition',
      scrollTrigger: { trigger: element, start: 'top 94%', once: true },
    });
    entrances.set(element, tween);
  });

  // Una entrada nunca debe ocultar el elemento al que se llega con Tab.
  const revealFocus = (event: FocusEvent) => {
    if (!(event.target instanceof Node)) return;
    if (hero?.contains(event.target) || document.querySelector('header')?.contains(event.target)) intro.progress(1);
    entrances.forEach((tween, element) => {
      if (element.contains(event.target as Node)) tween.progress(1);
    });
  };
  document.addEventListener('focusin', revealFocus);
  return () => document.removeEventListener('focusin', revealFocus);
});
