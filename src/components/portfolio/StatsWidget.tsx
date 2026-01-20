import { Code, GitBranch, Star, Coffee } from 'lucide-react';

const stats = [
  { icon: Code, value: '50+', label: 'Proyectos', color: 'text-accent-cyan' },
  { icon: GitBranch, value: '1.2K+', label: 'Commits', color: 'text-accent-green' },
  { icon: Star, value: '15+', label: 'Clientes', color: 'text-accent-yellow' },
  { icon: Coffee, value: '∞', label: 'Cafés', color: 'text-accent-orange' },
];

export const StatsWidget = () => {
  return (
    <div className="widget widget-animate">
      <div className="widget-header">
        <Code className="w-4 h-4 text-primary" />
        <span>Estadísticas</span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="stat-box group cursor-default">
            <stat.icon className={`w-5 h-5 mx-auto mb-2 ${stat.color} transition-transform group-hover:scale-110`} />
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
