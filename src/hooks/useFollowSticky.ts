import { useEffect, useRef } from 'react';

/**
 * useFollowSticky
 * ----------------
 * Hook que aplica el patrón "sticky que sigue al scroll" sobre un elemento
 * que puede ser MÁS ALTO que el viewport.
 *
 * Comportamiento esperado:
 *  - Si el elemento cabe en el viewport: sticky simple con margen superior.
 *  - Si el elemento es más alto que el viewport: el `top` se calcula
 *    DINÁMICAMENTE en negativo, de forma que el elemento empieza visible
 *    desde su tope, scrollea con la página, y se "engancha" cuando su
 *    parte inferior alcanza el bottom del viewport. A partir de ahí
 *    sigue al usuario con el fondo siempre visible.
 *
 * Sólo se aplica en desktop (>= lg / 1024px). En mobile el elemento
 * fluye normal sin sticky.
 *
 * Reacciona a:
 *  - resize de ventana
 *  - cambio de altura del elemento (vía ResizeObserver) — útil cuando
 *    componentes hijos como SpotifyActivity cambian de tamaño.
 *
 * Uso:
 *   const ref = useFollowSticky({ margin: 32, mobileBreakpoint: 1024 });
 *   return <div ref={ref} className="lg:sticky">...</div>
 */
interface Options {
    margin?: number;             // px de margen entre elemento y borde de viewport
    mobileBreakpoint?: number;   // ancho de viewport por debajo del cual NO aplicar sticky
}

export const useFollowSticky = <T extends HTMLElement = HTMLDivElement>(
    options: Options = {}
) => {
    const { margin = 32, mobileBreakpoint = 1024 } = options;
    const ref = useRef<T>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const update = () => {
            const isDesktop = window.innerWidth >= mobileBreakpoint;
            if (!isDesktop) {
                // En mobile: limpiar todo, dejar que fluya
                el.style.top = '';
                el.style.position = '';
                return;
            }

            const viewportH = window.innerHeight;
            const cardH = el.offsetHeight;

            if (cardH + margin * 2 <= viewportH) {
                // Cabe: sticky normal arriba con margen
                el.style.top = `${margin}px`;
            } else {
                // Es más alto que el viewport: top negativo así el bottom queda enganchado
                el.style.top = `${viewportH - cardH - margin}px`;
            }
        };

        update();

        // Re-medir cuando cambien tamaños
        const ro = new ResizeObserver(update);
        ro.observe(el);

        window.addEventListener('resize', update);
        return () => {
            window.removeEventListener('resize', update);
            ro.disconnect();
        };
    }, [margin, mobileBreakpoint]);

    return ref;
};
