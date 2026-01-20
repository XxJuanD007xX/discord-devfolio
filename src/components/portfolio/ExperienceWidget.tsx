import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Startup',
    period: '2022 - Presente',
    description: 'Liderando el desarrollo de aplicaciones web escalables con React y Node.js. Implementación de arquitecturas serverless en AWS.',
  },
  {
    title: 'Full Stack Developer',
    company: 'Agencia Digital',
    period: '2020 - 2022',
    description: 'Desarrollo de aplicaciones web para clientes internacionales. Trabajo con metodologías ágiles y equipos multidisciplinarios.',
  },
  {
    title: 'Frontend Developer',
    company: 'Software Company',
    period: '2019 - 2020',
    description: 'Creación de interfaces de usuario modernas y responsivas. Implementación de sistemas de diseño y mejora de rendimiento.',
  },
];

export const ExperienceWidget = () => {
  return (
    <div className="widget scroll-widget">
      <div className="widget-header">
        <Briefcase className="w-4 h-4 text-primary" />
        <span>Experiencia</span>
      </div>
      
      <div className="space-y-1">
        {experiences.map((exp, index) => (
          <div 
            key={exp.title + exp.company} 
            className="timeline-item timeline-animate"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <div className="timeline-dot" />
            <div className="pb-2">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className="font-semibold text-foreground">{exp.title}</h4>
                <span className="text-xs px-2 py-0.5 rounded bg-primary/20 text-primary">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-accent-cyan mb-2">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
