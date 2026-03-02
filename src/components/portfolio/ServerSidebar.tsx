import { LayoutGrid, Activity, Gamepad2, Compass, Download, MessageSquare, Briefcase, GraduationCap, X, Menu, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSound } from '@/hooks/useSound';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ServerSidebarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

// Grupos separados según la solicitud
const primaryGroup = [
    { id: 'board', label: 'Inicio', icon: Compass, bgColor: 'bg-[#5865F2]' },
    { id: 'board', label: 'Proyectos Destacados', icon: LayoutGrid, bgColor: 'bg-[#5865F2]', anchor: '#proyectos' },
    { id: 'board', label: 'Experiencia', icon: Briefcase, bgColor: 'bg-[#f0b232]', anchor: '#experiencia' },
    { id: 'board', label: 'Educación & Certificaciones', icon: GraduationCap, bgColor: 'bg-[#00c2a8]', anchor: '#educacion' },
    { id: 'board', label: 'Envíame un mensaje', icon: MessageSquare, bgColor: 'bg-[#2b2d31]', anchor: '#contacto' },
];

const secondaryGroup = [
    { id: 'activity', label: 'Stack & Workflow', icon: Activity, bgColor: 'bg-[#eb459e]' },
    { id: 'hobbies', label: 'Mis Hobbies', icon: Gamepad2, bgColor: 'bg-[#3ba55d]' },
];

export const ServerSidebar = ({ activeTab, onTabChange }: ServerSidebarProps) => {
    const [hoveredTab, setHoveredTab] = useState<string | null>(null);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { playClick, playHover } = useSound();

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [isMobileOpen]);

    const handleTabClick = (id: string, anchor?: string) => {
        playClick();
        onTabChange(id);
        setIsMobileOpen(false);

        if (anchor) {
            setTimeout(() => {
                const element = document.querySelector(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 150);
        } else {
            // Al cambiar de pestaña principal, scroll al tope
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // ============ DESKTOP: icon-only sidebar with tooltips ============
    const renderDesktopIcon = (server: typeof primaryGroup[0], isHome: boolean = false) => {
        const Icon = server.icon;
        const isActive = (isHome && activeTab === 'board') || (!isHome && activeTab === server.id && !server.anchor);
        const isHovered = hoveredTab === server.label;

        return (
            <Tooltip key={server.label} delayDuration={50}>
                <TooltipTrigger asChild>
                    <div
                        className="relative group flex justify-center w-full cursor-pointer transition-all duration-300 mb-1.5"
                        onClick={() => handleTabClick(server.id, server.anchor)}
                        onMouseEnter={() => { setHoveredTab(server.label); if (!isActive) playHover(); }}
                        onMouseLeave={() => setHoveredTab(null)}
                    >
                        <div className={`absolute left-0 w-1 bg-white rounded-r-full transition-all duration-300 top-1/2 -translate-y-1/2 ${isActive ? 'h-10' : isHovered ? 'h-5' : 'h-0 opacity-0'}`} />

                        <div className={`flex items-center justify-center w-12 h-12 transition-all duration-300 overflow-hidden border border-transparent
                            ${isActive ? `rounded-2xl ${server.bgColor} text-white shadow-lg`
                                : isHovered ? `rounded-2xl ${server.bgColor} text-white`
                                    : 'rounded-[24px] text-[var(--fg-main,#dbdee1)] hover:text-white'}`}
                            style={!isActive && !isHovered ? { backgroundColor: 'var(--bg-secondary, #2b2d31)' } : {}}
                        >
                            <Icon className="w-[22px] h-[22px]" />
                        </div>

                        {isHome && !isActive && (
                            <div className="absolute bottom-0 right-3 w-4 h-4 rounded-full bg-[#f23f42] border-[3px] z-20" style={{ borderColor: 'var(--bg-tertiary, #1e1f22)' }} />
                        )}
                    </div>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={18} className="bg-[#111214] text-white border-none shadow-xl text-sm font-bold leading-none py-2 px-3 animate-slide-right-fade">
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#111214] rotate-45" />
                    {server.label}
                </TooltipContent>
            </Tooltip>
        );
    };

    // ============ MOBILE: labeled row items ============
    const renderMobileItem = (server: typeof primaryGroup[0], isHome: boolean = false) => {
        const Icon = server.icon;
        const isActive = (isHome && activeTab === 'board') || (!isHome && activeTab === server.id && !server.anchor);

        return (
            <button
                key={server.label}
                className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200 group text-left ${isActive ? 'shadow-lg' : 'hover:opacity-90'}`}
                style={{
                    background: isActive
                        ? 'hsl(var(--primary) / 0.15)'
                        : 'transparent',
                    borderLeft: isActive ? '3px solid hsl(var(--primary))' : '3px solid transparent',
                }}
                onClick={() => handleTabClick(server.id, server.anchor)}
            >
                <div
                    className={`flex items-center justify-center w-10 h-10 rounded-xl shrink-0 transition-all duration-300 ${isActive ? `${server.bgColor} text-white shadow-md` : ''}`}
                    style={!isActive ? { backgroundColor: 'var(--bg-main, #1e1f22)', color: 'var(--fg-muted, #949ba4)' } : {}}
                >
                    <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                    <span
                        className="text-sm font-semibold block truncate"
                        style={{ color: isActive ? 'var(--fg-main, #dbdee1)' : 'var(--fg-muted, #949ba4)' }}
                    >
                        {server.label}
                    </span>
                </div>
                {server.anchor && (
                    <ChevronRight className="w-4 h-4 shrink-0 opacity-30" style={{ color: 'var(--fg-muted, #949ba4)' }} />
                )}
            </button>
        );
    };

    return (
        <>
            {/* ===================== MOBILE HAMBURGER BUTTON ===================== */}
            <button
                className={`lg:hidden fixed top-4 left-4 z-[60] p-2.5 rounded-xl shadow-lg border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 group ${isMobileOpen ? 'hidden' : ''}`}
                style={{
                    background: 'var(--bg-secondary, #2b2d31)',
                }}
                onClick={() => { setIsMobileOpen(true); playClick(); }}
                aria-label="Abrir menú de navegación"
            >
                <Menu className="w-5 h-5 transition-colors" style={{ color: 'var(--fg-main, #dbdee1)' }} />
                {/* Notification dot */}
                <span
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse border-2"
                    style={{ background: '#f23f42', borderColor: 'var(--bg-secondary, #2b2d31)' }}
                />
            </button>

            {/* ===================== MOBILE BACKDROP ===================== */}
            <div
                className={`lg:hidden fixed inset-0 z-[55] transition-all duration-300 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
                onClick={() => setIsMobileOpen(false)}
                data-lenis-prevent
            />

            {/* ===================== MOBILE SIDEBAR DRAWER ===================== */}
            <div
                className={`lg:hidden fixed top-0 left-0 z-[56] h-full w-[280px] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] border-r border-white/5 shadow-2xl ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}`}
                style={{ background: 'var(--bg-tertiary, #1e1f22)' }}
                data-lenis-prevent
            >
                {/* Mobile Sidebar Header */}
                <div className="flex items-center justify-between px-4 py-4 shrink-0 border-b border-white/5">
                    <div className="flex items-center gap-2.5">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center"
                            style={{ background: 'hsl(var(--primary))' }}
                        >
                            <Compass className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <h2 className="text-sm font-bold" style={{ color: 'var(--fg-main, #dbdee1)' }}>
                                Navegación
                            </h2>
                            <p className="text-[10px]" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                                Portfolio de Juan Diego
                            </p>
                        </div>
                    </div>
                    <button
                        className="p-2 rounded-lg transition-colors hover:bg-white/10"
                        style={{ color: 'var(--fg-muted, #949ba4)' }}
                        onClick={() => setIsMobileOpen(false)}
                        aria-label="Cerrar menú"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Mobile Nav Items */}
                <div className="flex-1 overflow-y-auto custom-scrollbar py-3 px-3 space-y-1">
                    {/* Section: Principal */}
                    <div className="px-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                            Principal
                        </span>
                    </div>
                    {renderMobileItem(primaryGroup[0], true)}
                    {primaryGroup.slice(1).map(server => renderMobileItem(server))}

                    {/* Divider */}
                    <div className="h-px mx-2 my-3" style={{ background: 'var(--border-palette, #3f4147)' }} />

                    {/* Section: Secciones */}
                    <div className="px-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                            Secciones
                        </span>
                    </div>
                    {secondaryGroup.map(server => renderMobileItem(server))}

                    {/* Divider */}
                    <div className="h-px mx-2 my-3" style={{ background: 'var(--border-palette, #3f4147)' }} />

                    {/* Download CV */}
                    <button
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-all duration-200 group text-left"
                        style={{ borderLeft: '3px solid transparent' }}
                        onClick={() => { playClick(); setIsMobileOpen(false); }}
                    >
                        <div
                            className="flex items-center justify-center w-10 h-10 rounded-xl shrink-0 border border-dashed transition-all duration-300"
                            style={{ borderColor: 'hsl(var(--accent-green))', color: 'hsl(var(--accent-green))' }}
                        >
                            <Download className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold" style={{ color: 'hsl(var(--accent-green))' }}>
                            Descargar CV
                        </span>
                    </button>
                </div>

                {/* Mobile Sidebar Footer - mini branding */}
                <div className="shrink-0 px-4 py-3 border-t border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'hsl(var(--accent-green))' }} />
                        <span className="text-[11px] font-medium" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                            Online · Disponible
                        </span>
                    </div>
                </div>
            </div>

            {/* ===================== DESKTOP SIDEBAR ===================== */}
            <div
                className="hidden lg:flex sticky top-8 h-auto max-h-[calc(100vh-2rem)] rounded-[24px] flex-col items-center py-3 gap-2 shadow-2xl z-50 border border-white/5 w-[72px]"
                style={{ background: 'var(--bg-tertiary, #1e1f22)' }}
            >
                {/* Home */}
                {renderDesktopIcon(primaryGroup[0], true)}

                <div className="w-8 h-0.5 rounded-full mx-auto my-1" style={{ background: 'var(--bg-secondary, #2b2d31)' }} />

                <div className="flex-1 w-full overflow-y-auto overflow-x-hidden custom-scrollbar-widget flex flex-col items-center gap-1.5 pt-1">
                    {/* Main Navigation (Scrolls) */}
                    {primaryGroup.slice(1).map(server => renderDesktopIcon(server))}

                    <div className="w-8 h-0.5 rounded-full mx-auto my-2" style={{ background: 'var(--bg-secondary, #2b2d31)' }} />

                    {/* Secondary Groups (Tabs) */}
                    {secondaryGroup.map(server => renderDesktopIcon(server))}

                    {/* DL CV Button */}
                    <Tooltip delayDuration={50}>
                        <TooltipTrigger asChild>
                            <div
                                className="relative group flex justify-center w-full cursor-pointer mt-2"
                                onMouseEnter={() => { setHoveredTab('cv'); playHover(); }}
                                onMouseLeave={() => setHoveredTab(null)}
                                onClick={() => playClick()}
                            >
                                <div className={`flex items-center justify-center w-12 h-12 transition-all duration-300 overflow-hidden border border-dashed hover:border-solid border-[#4f545c]
                                    ${hoveredTab === 'cv' ? 'rounded-2xl bg-[#23a559] text-white border-transparent'
                                        : 'rounded-[24px] bg-transparent text-[#23a559]'}`}
                                >
                                    <Download className="w-[22px] h-[22px]" />
                                </div>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent side="right" sideOffset={18} className="bg-[#111214] text-[#dbdee1] border-none shadow-xl text-sm font-bold leading-none py-2 px-3 animate-slide-right-fade">
                            <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#111214] rotate-45" />
                            Descargar CV
                        </TooltipContent>
                    </Tooltip>
                </div>
            </div>
        </>
    );
};
