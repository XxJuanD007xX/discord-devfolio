import { LayoutGrid, Activity, Gamepad2, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ActivityTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: 'board', label: 'Board', icon: LayoutGrid, description: 'Proyectos y experiencia', emoji: '📋' },
  { id: 'activity', label: 'Mi Stack', icon: Activity, description: 'Herramientas que uso', emoji: '⚡' },
  { id: 'hobbies', label: 'Mis Hobbies', icon: Gamepad2, description: 'Lo que me apasiona', emoji: '🎮' },
];

export const ActivityTabs = ({ activeTab, onTabChange }: ActivityTabsProps) => {
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  return (
    <div className="flex gap-2 mb-6 p-1.5 bg-[#1e1f22]/80 rounded-xl backdrop-blur-md border border-white/5 shadow-lg shadow-black/20">
      {tabs.map((tab, index) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        const isHovered = hoveredTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            onMouseEnter={() => setHoveredTab(tab.id)}
            onMouseLeave={() => setHoveredTab(null)}
            className={`
              relative flex items-center gap-2.5 px-5 py-3 text-sm font-bold 
              transition-all duration-300 rounded-lg group ripple-effect
              ${isActive
                ? 'bg-gradient-to-r from-[#5865F2] to-[#7289DA] text-white shadow-xl shadow-[#5865F2]/40'
                : 'text-[#949ba4] hover:text-white hover:bg-[#35373c]/90'
              }
            `}
            style={{
              animationDelay: `${index * 0.1}s`,
              transform: isActive ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            {/* Fondo con gradiente animado para tab activo */}
            {isActive && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] via-[#eb459e] to-[#5865F2] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ backgroundSize: '200% 100%', animation: 'shimmer 3s linear infinite' }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#5865F2] to-[#7289DA] rounded-lg" />
              </>
            )}

            {/* Glow effect pulsante para tab activo */}
            {isActive && (
              <div className="absolute inset-0 rounded-lg animate-intense-glow"
                style={{ color: '#5865F2' }} />
            )}

            {/* Sparkle decorativo */}
            {isActive && (
              <div className="absolute -top-1 -right-1 animate-float-gentle">
                <Sparkles className="w-3 h-3 text-[#f0b232]" />
              </div>
            )}

            {/* Emoji flotante en hover */}
            {isHovered && !isActive && (
              <span
                className="absolute -top-6 left-1/2 -translate-x-1/2 text-lg animate-slide-up-fade"
                style={{ animationDuration: '0.3s' }}
              >
                {tab.emoji}
              </span>
            )}

            {/* Icon con animación */}
            <Icon
              className={`w-4 h-4 relative z-10 transition-all duration-300 ${isActive
                ? 'animate-bounce-subtle drop-shadow-lg'
                : 'group-hover:scale-125 group-hover:rotate-12'
                }`}
              style={{
                animationDuration: isActive ? '2s' : undefined,
                filter: isActive ? 'drop-shadow(0 0 8px rgba(255,255,255,0.5))' : 'none'
              }}
            />

            {/* Label */}
            <span className="relative z-10 tracking-wide">{tab.label}</span>

            {/* Badge de notificación decorativo en el primer tab */}
            {tab.id === 'board' && (
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#f23f42] rounded-full animate-pulse shadow-lg shadow-[#f23f42]/50 z-20" />
            )}

            {/* Active indicator - línea inferior brillante */}
            {isActive && (
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse" />
            )}

            {/* Hover sparkle effect para tabs inactivos */}
            {!isActive && (
              <>
                <span className="absolute top-1 right-1 w-1 h-1 bg-[#5865F2] rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping" />
                <span className="absolute bottom-1 left-1 w-1 h-1 bg-[#eb459e] rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"
                  style={{ animationDelay: '0.5s' }} />
              </>
            )}

            {/* Tooltip con descripción */}
            {isHovered && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 bg-[#18191c] text-white text-xs rounded-lg whitespace-nowrap animate-slide-up-fade shadow-xl border border-white/10 z-50"
                style={{ animationDuration: '0.2s' }}
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#18191c] rotate-45 border-l border-t border-white/10" />
                <span className="mr-1">{tab.emoji}</span>
                {tab.description}
              </div>
            )}
          </button>
        );
      })}
    </div>
  );
};
