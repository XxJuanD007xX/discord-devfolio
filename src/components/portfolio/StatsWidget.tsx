import { Code, GitBranch, Star, BarChart3, TrendingUp, Zap } from 'lucide-react';

const stats = [
  { icon: Code, value: '50+', label: 'Proyectos', sublabel: 'Desarrollados', color: 'text-accent-cyan' },
  { icon: GitBranch, value: '1.2K+', label: 'Commits', sublabel: 'GitHub Total', color: 'text-accent-green' },
  { icon: Star, value: '15+', label: 'Clientes', sublabel: 'Satisfechos', color: 'text-accent-yellow' },
  { icon: Zap, value: '99%', label: 'Uptime', sublabel: 'Proyectos Live', color: 'text-accent-orange' },
];

export const StatsWidget = () => {
  return (
    <div className="widget widget-animate bg-[#2b2d31] border-none shadow-xl">
      <div className="widget-header flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-[#5865f2]" />
          <span className="text-xs font-bold text-[#b5bac1] uppercase tracking-[0.02em]">Leaderboard / Stats</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#1e1f22] text-[10px] font-bold text-accent-green">
          <TrendingUp className="w-3 h-3" />
          ACTIVE
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-[#1e1f22] p-4 rounded-lg border border-transparent hover:border-[#5865f2]/30 transition-all group">
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={`w-5 h-5 ${stat.color} group-hover:scale-110 transition-transform`} />
              <div className="w-6 h-6 rounded-full bg-[#2b2d31] flex items-center justify-center">
                <div className={`w-2 h-2 rounded-full ${stat.color.replace('text-', 'bg-')} animate-pulse`} />
              </div>
            </div>
            <div className="text-2xl font-black text-white mb-0.5 tracking-tight">{stat.value}</div>
            <div className="text-[11px] font-bold text-[#b5bac1] uppercase">{stat.label}</div>
            <div className="text-[10px] text-[#949ba4] mt-1">{stat.sublabel}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
