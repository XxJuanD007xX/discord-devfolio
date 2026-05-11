import { Heart, Code2, Coffee, Github } from 'lucide-react';

/**
 * Footer que cierra visualmente ambas columnas (Profile + Content) de la página.
 * Se renderiza al final, fuera del grid de columnas, ocupando todo el ancho.
 * Esto elimina los "espacios vacíos raros" cuando la columna de contenido
 * es más corta que el ProfileCard.
 */
export const PortfolioFooter = () => {
    const year = new Date().getFullYear();
    return (
        <footer
            className="mt-4 rounded-xl border border-white/5 shadow-xl px-4 py-5 sm:px-5 sm:py-4"
            style={{ background: 'var(--bg-secondary, #2b2d31)' }}
        >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-3 text-center md:text-left">
                {/* Left: meta */}
                <div className="flex items-center justify-center flex-wrap gap-2 text-[11px] leading-tight" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                    <div className="w-2 h-2 rounded-full animate-pulse shrink-0" style={{ background: 'hsl(var(--accent-green))' }} />
                    <span className="flex items-center gap-1 flex-wrap justify-center">
                        Construido con{' '}
                        <Heart className="w-3 h-3" style={{ color: 'hsl(var(--accent-pink))' }} fill="currentColor" />,{' '}
                        <Code2 className="w-3 h-3" style={{ color: 'hsl(var(--accent-blue))' }} /> &{' '}
                        <Coffee className="w-3 h-3" style={{ color: 'hsl(var(--accent-orange))' }} />
                    </span>
                </div>

                {/* Center: branding */}
                <div className="text-[11px] font-mono leading-tight" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                    <span className="block sm:inline">© {year} Juan Diego</span>
                    <span className="hidden sm:inline"> · </span>
                    <span className="block sm:inline">Discord-flavored portfolio</span>
                </div>

                {/* Right: source */}
                <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 text-[11px] hover:opacity-80 transition-opacity"
                    style={{ color: 'var(--fg-muted, #949ba4)' }}
                >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source code</span>
                </a>
            </div>
        </footer>
    );
};
