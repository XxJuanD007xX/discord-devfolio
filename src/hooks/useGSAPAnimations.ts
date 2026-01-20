import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGSAPAnimations = () => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Animate profile card
    gsap.fromTo(
      '.profile-card',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.2,
      }
    );

    // Animate widgets with stagger
    gsap.fromTo(
      '.widget-animate',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.4,
      }
    );

    // Animate role tags
    gsap.fromTo(
      '.role-tag-animate',
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        stagger: 0.05,
        ease: 'back.out(1.7)',
        delay: 0.8,
      }
    );

    // Animate social links
    gsap.fromTo(
      '.social-animate',
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 1,
      }
    );

    // Scroll animations for widgets in right column
    ScrollTrigger.batch('.scroll-widget', {
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          }
        );
      },
      start: 'top 85%',
      once: true,
    });

    // Timeline items
    ScrollTrigger.batch('.timeline-animate', {
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: 'power2.out',
          }
        );
      },
      start: 'top 80%',
      once: true,
    });

    // Project cards
    ScrollTrigger.batch('.project-animate', {
      onEnter: (elements) => {
        gsap.fromTo(
          elements,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power2.out',
          }
        );
      },
      start: 'top 85%',
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
};
