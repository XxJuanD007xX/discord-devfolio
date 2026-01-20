import { Folder, ExternalLink, Github, Star, Eye } from 'lucide-react';
import { useState } from 'react';
import { ProjectModal, Project } from './ProjectModal';

const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'Plataforma de comercio electrónico completa con carrito, pagos con Stripe y panel de administración.',
    longDescription: 'Una solución completa de e-commerce construida desde cero, diseñada para escalar y manejar miles de productos y transacciones simultáneas. Incluye un panel de administración intuitivo para gestionar inventario, pedidos y clientes.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    stars: 48,
    live: 'https://proyecto.com',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    features: [
      'Carrito de compras persistente',
      'Pagos seguros con Stripe',
      'Panel de administración completo',
      'Sistema de inventario en tiempo real',
      'Notificaciones por email',
      'Análisis de ventas y reportes',
    ],
    role: 'Full Stack Developer',
    duration: '4 meses',
    team: 'Equipo de 3',
  },
  {
    title: 'Task Management App',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.',
    longDescription: 'Aplicación tipo Trello/Notion para equipos que necesitan colaborar en proyectos. Implementa sincronización en tiempo real usando WebSockets para que todos los miembros del equipo vean los cambios instantáneamente.',
    tech: ['Next.js', 'TypeScript', 'MongoDB', 'Socket.io'],
    stars: 32,
    live: 'https://proyecto.com',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=200&fit=crop',
    features: [
      'Tableros Kanban arrastrables',
      'Colaboración en tiempo real',
      'Notificaciones push',
      'Asignación de tareas a miembros',
      'Fechas límite y recordatorios',
      'Integración con Slack',
    ],
    role: 'Lead Developer',
    duration: '3 meses',
    team: 'Equipo de 2',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Dashboard de análisis con visualizaciones interactivas y reportes automatizados.',
    longDescription: 'Panel de control para visualizar métricas de negocio en tiempo real. Utiliza D3.js para gráficos interactivos personalizados y Python para procesamiento de datos en el backend. Desplegado en AWS con arquitectura serverless.',
    tech: ['React', 'D3.js', 'Python', 'AWS'],
    stars: 25,
    live: 'https://proyecto.com',
    github: 'https://github.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop',
    features: [
      'Gráficos interactivos con D3.js',
      'Reportes PDF automatizados',
      'Filtros y rangos de fechas',
      'Exportación de datos CSV/Excel',
      'Alertas personalizables',
      'API REST documentada',
    ],
    role: 'Frontend Lead',
    duration: '5 meses',
    team: 'Equipo de 4',
  },
];

export const ProjectsWidget = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
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
                  {project.tech.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-xs rounded bg-secondary text-secondary-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex gap-2">
                  <button 
                    onClick={() => openProjectModal(project)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm font-medium transition-all hover:opacity-90"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Ver más
                  </button>
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

      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};
