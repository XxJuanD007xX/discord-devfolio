import { GitCommit, Star, GitPullRequest, GitMerge } from 'lucide-react';

const activities = [
  {
    icon: GitCommit,
    action: 'Hizo commit en',
    target: 'ecommerce-app',
    time: 'Hace 2 horas',
    color: 'text-accent-green',
  },
  {
    icon: Star,
    action: 'Recibió una estrella en',
    target: 'react-components',
    time: 'Hace 5 horas',
    color: 'text-accent-yellow',
  },
  {
    icon: GitPullRequest,
    action: 'Abrió PR en',
    target: 'open-source-project',
    time: 'Ayer',
    color: 'text-accent-blue',
  },
  {
    icon: GitMerge,
    action: 'Merge completado en',
    target: 'api-gateway',
    time: 'Hace 2 días',
    color: 'text-accent-purple',
  },
  {
    icon: GitCommit,
    action: 'Hizo commit en',
    target: 'portfolio-discord',
    time: 'Hace 3 días',
    color: 'text-accent-green',
  },
];

export const ActivityWidget = () => {
  return (
    <div className="widget scroll-widget">
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 transition-all hover:bg-secondary timeline-animate"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className={`p-2 rounded-lg bg-secondary ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-foreground">
                {activity.action}{' '}
                <span className="text-primary font-medium">{activity.target}</span>
              </p>
              <p className="text-xs text-muted-foreground">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
