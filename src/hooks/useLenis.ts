import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Module-level singleton para que cualquier componente acceda a la misma instancia
let lenisInstance: Lenis | null = null;

export const getLenis = (): Lenis | null => lenisInstance;

/**
 * Smooth scroll a un elemento o coordenada Y específica usando Lenis.
 * Si Lenis no está montado todavía, hace fallback a window.scrollTo.
 */
export const lenisScrollTo = (
  target: HTMLElement | number,
  options?: { duration?: number; offset?: number }
) => {
  const lenis = getLenis();
  const { duration = 1.4, offset = -16 } = options ?? {};

  if (lenis) {
    lenis.scrollTo(target, { duration, offset });
  } else {
    // Fallback nativo
    if (typeof target === 'number') {
      window.scrollTo({ top: target + offset, behavior: 'smooth' });
    } else {
      const rect = target.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + rect.top + offset, behavior: 'smooth' });
    }
  }
};

export const useLenis = () => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    lenisInstance = lenis;

    // Conectar Lenis con ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      if (lenisInstance === lenis) lenisInstance = null;
    };
  }, []);

  return lenisRef;
};
