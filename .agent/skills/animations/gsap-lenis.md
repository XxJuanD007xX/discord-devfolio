# Skill: GSAP & Lenis Professional Animations

## Contexto
Uso de animaciones avanzadas y scroll suave en el portafolio Discord-Devfolio.

## Reglas de Oro
1. **Siempre usa `useGSAP`:** No permitas que la IA use `useEffect` para animaciones. Debe importar el hook de `@gsap/react`.
2. **Contexto y Limpieza:** Todas las animaciones deben estar envueltas en un contexto de GSAP para asegurar que se limpien correctamente al desmontar el componente.
3. **Integración con Lenis:** Si se requiere una animación basada en el scroll, debe sincronizarse con la instancia de Lenis definida en `src/hooks/useLenis.ts`.
4. **Preferencias de Easing:** Para la estética Discord, usa `power2.out` para entradas rápidas y `expo.out` para transiciones elegantes.

## Ejemplo de Código Maestro
```tsx
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const AnimatedCard = () => {
  const container = useRef(null);

  useGSAP(() => {
    // Animación de entrada con stagger
    gsap.from(".item", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out"
    });
  }, { scope: container }); // El scope es vital para el rendimiento

  return (
    <div ref={container}>
      <div className="item">Contenido 1</div>
      <div className="item">Contenido 2</div>
    </div>
  );
};