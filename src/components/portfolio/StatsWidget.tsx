import { Code, GitBranch, Star, BarChart3, TrendingUp, Trophy, Flame, Award } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    icon: Code,
    value: 50,
    suffix: '+',
    label: 'Proyectos',
    sublabel: 'Desarrollados',
    color: 'text-accent-cyan',
    bgGlow: 'hsl(var(--accent-cyan))',
    progress: 85,
    rank: 1,
    trend: '+12/año',
  },
  {
    icon: GitBranch,
    value: 1200,
    suffix: '+',
    label: 'Commits',
    sublabel: 'GitHub Total',
    color: 'text-accent-green',
    bgGlow: 'hsl(var(--accent-green))',
    progress: 92,
    rank: 2,
    trend: '+34/año',
  },
  {
    icon: Star,
    value: 15,
    suffix: '+',
    label: 'Clientes',
    sublabel: 'Satisfechos',
    color: 'text-accent-yellow',
    bgGlow: 'hsl(var(--accent-yellow))',
    progress: 75,
    rank: 3,
    trend: '+5/año',
  },
];

const rankEmojis = ['🥇', '🥈', '🥉'];

const formatValue = (value: number, suffix: string): string => {
  if (value >= 1000) return `${(value / 1000).toFixed(1)}K${suffix}`;
  return `${value}${suffix}`;
};

// Hook sencillo para animación de conteo
const useCountUp = (target: number, duration = 1800, delay = 300) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const startTime = Date.now() + delay;
    const frame = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(frame);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [target, duration, delay]);

  return count;
};

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const count = useCountUp(stat.value, 1800, 400 + index * 200);

  return (
    <div
      className="relative p-4 rounded-xl border border-transparent transition-all duration-300 group overflow-hidden"
      style={{
        animationDelay: `${index * 0.1}s`,
        background: 'var(--bg-main, #1e1f22)',
        borderColor: 'transparent',
      }}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = 'hsl(var(--primary) / 0.3)'}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
        style={{ background: `radial-gradient(circle at center, ${stat.bgGlow}, transparent 70%)` }}
      />

      {/* Header: Icon + Rank */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div className="flex items-center gap-2">
          <div
            className={`p-1.5 rounded-lg ${stat.color} group-hover:scale-110 transition-transform duration-300`}
            style={{ background: 'var(--bg-secondary, #2b2d31)' }}
          >
            <stat.icon className="w-4 h-4" />
          </div>
          <span className="text-lg" title={`Ranking #${stat.rank}`}>
            {rankEmojis[stat.rank - 1]}
          </span>
        </div>
        <div
          className="flex items-center gap-1 text-[10px] font-bold px-1.5 py-0.5 rounded-full"
          style={{ color: 'hsl(var(--accent-green))', background: 'hsl(var(--accent-green) / 0.1)' }}
        >
          <TrendingUp className="w-2.5 h-2.5" />
          <span className="hidden sm:inline">{stat.trend}</span>
        </div>
      </div>

      {/* Value */}
      <div
        className="text-2xl sm:text-3xl font-black mb-0.5 tracking-tight relative z-10 tabular-nums"
        style={{ color: 'var(--fg-main, #dbdee1)' }}
      >
        {formatValue(count, stat.suffix)}
      </div>

      {/* Label */}
      <div className="text-[11px] font-bold uppercase tracking-wider relative z-10" style={{ color: 'var(--fg-muted, #b5bac1)' }}>{stat.label}</div>
      <div className="text-[10px] mt-0.5 relative z-10" style={{ color: 'var(--fg-muted, #949ba4)' }}>{stat.sublabel}</div>

      {/* Progress bar */}
      <div className="mt-3 relative z-10">
        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--bg-secondary, #2b2d31)' }}>
          <div
            className="h-full rounded-full transition-all duration-1000 ease-out"
            style={{
              width: `${stat.progress}%`,
              background: `linear-gradient(90deg, ${stat.bgGlow}88, ${stat.bgGlow})`,
              boxShadow: `0 0 8px ${stat.bgGlow}40`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const StatsWidget = () => {
  // XP total calculado
  const totalXP = 7850;
  const maxXP = 10000;
  const xpProgress = (totalXP / maxXP) * 100;
  const xpCount = useCountUp(totalXP, 2000, 800);

  return (
    <div className="widget widget-animate border-none shadow-xl" style={{ background: 'var(--bg-secondary, #2b2d31)' }}>
      {/* Header */}
      <div className="widget-header flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
          <span className="text-xs font-bold uppercase tracking-[0.02em]" style={{ color: 'var(--fg-muted, #b5bac1)' }}>Leaderboard / Stats</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold text-accent-green"
            style={{ background: 'var(--bg-main, #1e1f22)' }}
          >
            <TrendingUp className="w-3 h-3" />
            ACTIVE
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} />
        ))}
      </div>

      {/* XP Bar general */}
      <div className="mt-5 p-3.5 rounded-xl border border-white/5" style={{ background: 'var(--bg-main, #1e1f22)' }}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4" style={{ color: 'hsl(var(--accent-yellow))' }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--fg-main, #dbdee1)' }}>Experiencia Total</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 animate-pulse" style={{ color: 'hsl(var(--accent-red))' }} />
            <span className="text-xs font-bold tabular-nums" style={{ color: 'var(--fg-main, #dbdee1)' }}>{xpCount.toLocaleString()} / {maxXP.toLocaleString()} XP</span>
          </div>
        </div>
        <div className="h-3 rounded-full overflow-hidden relative" style={{ background: 'var(--bg-secondary, #2b2d31)' }}>
          <div
            className="h-full rounded-full transition-all duration-[2s] ease-out relative"
            style={{
              width: `${xpProgress}%`,
              background: `linear-gradient(90deg, var(--gradient-start, #5865F2), var(--gradient-end, #eb459e), hsl(var(--accent-yellow)))`,
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s linear infinite',
            }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse opacity-30" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-[10px] flex items-center gap-1" style={{ color: 'var(--fg-muted, #949ba4)' }}>
            <Award className="w-3 h-3" />
            Nivel 42
          </span>
          <span className="text-[10px]" style={{ color: 'var(--fg-muted, #949ba4)' }}>
            {maxXP - totalXP} XP para Nivel 43
          </span>
        </div>
      </div>
    </div>
  );
};
