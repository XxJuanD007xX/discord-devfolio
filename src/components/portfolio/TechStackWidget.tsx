import { Layers } from 'lucide-react';

const techCategories = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    technologies: [
      { name: 'Node.js', level: 90 },
      { name: 'Express', level: 88 },
      { name: 'Python', level: 75 },
      { name: 'GraphQL', level: 80 },
    ],
  },
  {
    category: 'Bases de Datos',
    technologies: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 82 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    category: 'DevOps & Cloud',
    technologies: [
      { name: 'AWS', level: 80 },
      { name: 'Docker', level: 85 },
      { name: 'Git', level: 95 },
    ],
  },
];

export const TechStackWidget = () => {
  return (
    <div className="widget scroll-widget">
      <div className="widget-header">
        <Layers className="w-4 h-4 text-primary" />
        <span>Stack Tecnológico</span>
      </div>
      
      <div className="grid gap-5">
        {techCategories.map((cat, catIndex) => (
          <div key={cat.category} className="timeline-animate" style={{ animationDelay: `${catIndex * 0.1}s` }}>
            <h4 className="text-sm font-medium text-accent-cyan mb-3">{cat.category}</h4>
            <div className="space-y-2.5">
              {cat.technologies.map((tech, techIndex) => (
                <div key={tech.name} className="group">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{tech.name}</span>
                    <span className="text-muted-foreground">{tech.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent-blue transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${tech.level}%`,
                        animationDelay: `${(catIndex * 0.1) + (techIndex * 0.05)}s`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
