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
    <div
      className="flex gap-2 mb-6 p-1.5 rounded-xl backdrop-blur-md border border-white/5 shadow-lg shadow-black/20"
      style={{ background: 'color-mix(in srgb, var(--bg-main, #1e1f22) 80%, transparent)' }}
    >
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
                ? 'text-white shadow-xl'
                : 'hover:bg-[#35373c]/90'
              }
            `}
            style={{
              animationDelay: `${index * 0.1}s`,
              transform: isActive ? 'scale(1.02)' : 'scale(1)',
              color: isActive ? 'white' : 'var(--fg-muted, #949ba4)',
              ...(isActive ? {
                background: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.7))`,
                boxShadow: `0 10px 15px -3px hsl(var(--primary) / 0.4)`,
              } : {}),
            }}
          >
            {/* Fondo con gradiente animado para tab activo */}
            {isActive && (
              <>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to right, var(--gradient-start, #5865F2), var(--gradient-end, #eb459e), var(--gradient-start, #5865F2))`,
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 3s linear infinite',
                  }} />
                <div className="absolute inset-0 rounded-lg"
                  style={{ background: `linear-gradient(to right, hsl(var(--primary)), hsl(var(--primary) / 0.7))` }} />
              </>
            )}

            {/* Glow effect pulsante para tab activo */}
            {isActive && (
              <div className="absolute inset-0 rounded-lg animate-intense-glow"
                style={{ color: 'hsl(var(--primary))' }} />
            )}

            {/* Sparkle decorativo */}
            {isActive && (
              <div className="absolute -top-1 -right-1 animate-float-gentle">
                <Sparkles className="w-3 h-3" style={{ color: 'hsl(var(--accent-yellow))' }} />
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
              <span
                className="absolute -top-1 -right-1 w-2 h-2 rounded-full animate-pulse shadow-lg z-20"
                style={{ background: 'hsl(var(--accent-red))', boxShadow: '0 4px 12px hsl(var(--accent-red) / 0.5)' }}
              />
            )}

            {/* Active indicator - línea inferior brillante */}
            {isActive && (
              <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse" />
            )}

            {/* Hover sparkle effect para tabs inactivos */}
            {!isActive && (
              <>
                <span className="absolute top-1 right-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"
                  style={{ background: 'hsl(var(--primary))' }} />
                <span className="absolute bottom-1 left-1 w-1 h-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"
                  style={{ animationDelay: '0.5s', background: 'hsl(var(--accent-pink))' }} />
              </>
            )}

            {/* Tooltip con descripción */}
            {isHovered && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 px-3 py-1.5 text-xs rounded-lg whitespace-nowrap animate-slide-up-fade shadow-xl border border-white/10 z-50"
                style={{
                  animationDuration: '0.2s',
                  background: 'var(--bg-main, #18191c)',
                  color: 'var(--fg-main, #dbdee1)',
                }}
              >
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45 border-l border-t border-white/10"
                  style={{ background: 'var(--bg-main, #18191c)' }} />
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
