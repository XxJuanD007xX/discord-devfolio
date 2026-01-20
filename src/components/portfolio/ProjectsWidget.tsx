import { Folder, ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito, pagos con Stripe y panel de administración.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    stars: 48,
    live: 'https://proyecto.com',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
  },
  {
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    stars: 32,
    live: 'https://proyecto.com',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Dashboard de análisis con visualizaciones interactivas y reportes automatizados.',
    tech: ['React', 'D3.js', 'Python', 'AWS'],
    stars: 25,
    live: 'https://proyecto.com',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
  },
];

export const ProjectsWidget = () => {
  return (
    <div className="widget scroll-widget">
      <div className="widget-header">
        <Folder className="w-4 h-4 text-primary" />
        <span>Proyectos Destacados</span>
      </div>
      
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className="project-card project-animate group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="project-image transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              <div className="absolute bottom-3 left-3 flex items-center gap-1 text-accent-yellow text-sm">
                <Star className="w-4 h-4 fill-current" />
                <span>{project.stars}</span>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <a 
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-all hover:opacity-90"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Demo
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium transition-all hover:bg-muted"
                >
                  <Github className="w-3.5 h-3.5" />
                  Código
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
