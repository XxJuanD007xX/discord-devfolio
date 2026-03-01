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
    bgGlow: '#00c2a8',
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
    bgGlow: '#3ba55d',
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
    bgGlow: '#f0b232',
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
      className="relative bg-[#1e1f22] p-4 rounded-xl border border-transparent hover:border-[#5865f2]/30 transition-all duration-300 group overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
        style={{ background: `radial-gradient(circle at center, ${stat.bgGlow}, transparent 70%)` }}
      />

      {/* Header: Icon + Rank */}
      <div className="flex items-center justify-between mb-3 relative z-10">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-lg bg-[#2b2d31] ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
            <stat.icon className="w-4 h-4" />
          </div>
          <span className="text-lg" title={`Ranking #${stat.rank}`}>
            {rankEmojis[stat.rank - 1]}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] font-bold text-[#23a559] bg-[#23a559]/10 px-1.5 py-0.5 rounded-full">
          <TrendingUp className="w-2.5 h-2.5" />
          <span className="hidden sm:inline">{stat.trend}</span>
        </div>
      </div>

      {/* Value */}
      <div className="text-2xl sm:text-3xl font-black text-white mb-0.5 tracking-tight relative z-10 tabular-nums">
        {formatValue(count, stat.suffix)}
      </div>

      {/* Label */}
      <div className="text-[11px] font-bold text-[#b5bac1] uppercase tracking-wider relative z-10">{stat.label}</div>
      <div className="text-[10px] text-[#949ba4] mt-0.5 relative z-10">{stat.sublabel}</div>

      {/* Progress bar */}
      <div className="mt-3 relative z-10">
        <div className="h-1.5 bg-[#2b2d31] rounded-full overflow-hidden">
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
    <div className="widget widget-animate bg-[#2b2d31] border-none shadow-xl">
      {/* Header */}
      <div className="widget-header flex justify-between items-center mb-5">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-[#5865f2]" />
          <span className="text-xs font-bold text-[#b5bac1] uppercase tracking-[0.02em]">Leaderboard / Stats</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#1e1f22] text-[10px] font-bold text-accent-green">
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
      <div className="mt-5 p-3.5 rounded-xl bg-[#1e1f22] border border-white/5">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-[#f0b232]" />
            <span className="text-xs font-bold text-[#dbdee1] uppercase tracking-wider">Experiencia Total</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-[#f47b67] animate-pulse" />
            <span className="text-xs font-bold text-white tabular-nums">{xpCount.toLocaleString()} / {maxXP.toLocaleString()} XP</span>
          </div>
        </div>
        <div className="h-3 bg-[#2b2d31] rounded-full overflow-hidden relative">
          <div
            className="h-full rounded-full transition-all duration-[2s] ease-out relative"
            style={{
              width: `${xpProgress}%`,
              background: 'linear-gradient(90deg, #5865F2, #eb459e, #f0b232)',
              backgroundSize: '200% 100%',
              animation: 'shimmer 3s linear infinite',
            }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse opacity-30" />
          </div>
        </div>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-[10px] text-[#949ba4] flex items-center gap-1">
            <Award className="w-3 h-3" />
            Nivel 42
          </span>
          <span className="text-[10px] text-[#949ba4]">
            {maxXP - totalXP} XP para Nivel 43
          </span>
        </div>
      </div>
    </div>
  );
};
