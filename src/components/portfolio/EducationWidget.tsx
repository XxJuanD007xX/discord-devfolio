import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    title: 'Ingeniería en Sistemas Computacionales',
    institution: 'Universidad Tecnológica',
    year: '2015 - 2019',
    type: 'degree',
  },
  {
    title: 'AWS Solutions Architect',
    institution: 'Amazon Web Services',
    year: '2023',
    type: 'certification',
  },
  {
    title: 'Full Stack Web Development',
    institution: 'freeCodeCamp',
    year: '2019',
    type: 'certification',
  },
];

export const EducationWidget = () => {
  return (
    <div className="widget scroll-widget">
      <div className="widget-header">
        <GraduationCap className="w-4 h-4 text-primary" />
        <span>Educación & Certificaciones</span>
      </div>
      
      <div className="space-y-3">
        {education.map((item, index) => (
          <div 
            key={item.title}
            className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 transition-all hover:bg-secondary timeline-animate"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-2 rounded-lg bg-primary/20">
              {item.type === 'degree' ? (
                <GraduationCap className="w-4 h-4 text-primary" />
              ) : (
                <Award className="w-4 h-4 text-accent-yellow" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground text-sm">{item.title}</h4>
              <p className="text-xs text-muted-foreground">{item.institution}</p>
            </div>
            <span className="text-xs text-muted-foreground shrink-0">{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
