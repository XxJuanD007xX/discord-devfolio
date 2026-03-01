import { LayoutGrid, Activity, Gamepad2, Compass, Download, MessageSquare, Briefcase, GraduationCap, X, Menu } from 'lucide-react';
import { useState } from 'react';
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

    const handleTabClick = (id: string, anchor?: string) => {
        playClick();
        onTabChange(id);
        if (isMobileOpen) setIsMobileOpen(false);

        if (anchor) {
            setTimeout(() => {
                const element = document.querySelector(anchor);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            // Al cambiar de pestaña principal, scroll al tope
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const renderServerIcon = (server: any, isHome: boolean = false) => {
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

                        <div className={`flex items-center justify-center w-12 h-12 transition-all duration-300 overflow-hidden
                            ${isActive ? `rounded-2xl ${server.bgColor} text-white shadow-lg`
                                : isHovered ? `rounded-2xl ${server.bgColor} text-white`
                                    : 'rounded-[24px] bg-[#313338] text-[#dbdee1] hover:text-white'}`}
                        >
                            <Icon className="w-[22px] h-[22px]" />
                        </div>

                        {isHome && !isActive && (
                            <div className="absolute bottom-0 right-3 w-4 h-4 rounded-full bg-[#f23f42] border-[3px] border-[#1e1f22] z-20" />
                        )}
                    </div>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={18} className="bg-[#111214] text-[#dbdee1] border-none shadow-xl text-sm font-bold leading-none py-2 px-3 animate-slide-right-fade">
                    <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#111214] rotate-45" />
                    {server.label}
                </TooltipContent>
            </Tooltip>
        );
    };

    return (
        <>
            <button
                className="lg:hidden fixed top-4 right-4 z-50 p-2 rounded-full bg-[#2b2d31] text-white shadow-lg border border-white/10"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div
                className={`fixed lg:sticky top-4 lg:top-8 max-h-[calc(100vh-2rem)] bg-[#1e1f22] rounded-[24px] flex flex-col items-center py-3 gap-2 shadow-2xl z-40 border border-white/5 transition-transform duration-300 ease-in-out w-[72px]
                    ${isMobileOpen ? 'translate-x-0' : '-translate-x-[150%] lg:translate-x-0'}
                `}
            >
                {/* Home */}
                {renderServerIcon(primaryGroup[0], true)}

                <div className="w-8 h-0.5 bg-[#2b2d31] rounded-full mx-auto my-1" />

                <div className="flex-1 w-full overflow-y-auto overflow-x-hidden custom-scrollbar-widget flex flex-col items-center gap-1.5 pt-1">
                    {/* Main Navigation (Scrolls) */}
                    {primaryGroup.slice(1).map(server => renderServerIcon(server))}

                    <div className="w-8 h-0.5 bg-[#2b2d31] rounded-full mx-auto my-2" />

                    {/* Secondary Groups (Tabs) */}
                    {secondaryGroup.map(server => renderServerIcon(server))}

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

            {isMobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/60 z-30 backdrop-blur-sm"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}
        </>
    );
};
