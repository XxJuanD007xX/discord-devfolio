import { Folder, Github, Star, Eye } from 'lucide-react';
import { useState } from 'react';
import { ProjectModal } from './ProjectModal';
import { useSound } from '@/hooks/useSound';

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  stars: number;
  live: string;
  github: string;
  image: string;
  features: string[];
  role: string;
  duration: string;
  team: string;
}

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

const ProjectReactions = ({ projectId }: { projectId: string }) => {
  const { playClick, playHover } = useSound();

  // Usamos useState inicializado perezosamente para que no cambie en cada render
  const [reactions, setReactions] = useState(() => {
    const baseReactions = [
      { emoji: '🚀', count: Math.floor(Math.random() * 50) + 12, reacted: false },
      { emoji: '🔥', count: Math.floor(Math.random() * 30) + 5, reacted: false },
      { emoji: '👀', count: Math.floor(Math.random() * 20) + 2, reacted: false },
      { emoji: '💯', count: Math.floor(Math.random() * 10) + 1, reacted: false },
      { emoji: '🤯', count: Math.floor(Math.random() * 15) + 3, reacted: false },
      { emoji: '🧪', count: Math.floor(Math.random() * 10) + 1, reacted: false },
    ];
    // Seleccionar 2-3 reacciones aleatorias como "ya reaccionadas"
    const numDefault = Math.floor(Math.random() * 2) + 2; // 2 o 3
    const indices = [...Array(baseReactions.length).keys()];
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    indices.slice(0, numDefault).forEach(i => {
      baseReactions[i].reacted = true;
      baseReactions[i].count += 1;
    });
    return baseReactions;
  });

  const toggleReaction = (index: number) => {
    playClick();
    const newReactions = [...reactions];
    if (newReactions[index].reacted) {
      newReactions[index].count--;
      newReactions[index].reacted = false;
    } else {
      newReactions[index].count++;
      newReactions[index].reacted = true;
    }
    setReactions(newReactions);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-3 mb-2">
      {reactions.map((react, index) => (
        <button
          key={index}
          onClick={() => toggleReaction(index)}
          onMouseEnter={playHover}
          className={`relative flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs font-semibold transition-all duration-200 border cursor-pointer outline-none hover:scale-105 active:scale-95 overflow-hidden ${react.reacted
            ? 'bg-[#5865F2]/20 border-[#5865F2] text-[#5865F2]'
            : 'bg-[#2b2d31] border-transparent text-[#b5bac1] hover:bg-[#313338] hover:text-[#dbdee1]'
            }`}
        >
          {react.reacted && (
            <div className="absolute inset-0 bg-[#5865F2]/20 animate-pulse-glow opacity-50 pointer-events-none" />
          )}
          <span className={`text-[13px] relative z-10 transition-transform ${react.reacted ? 'scale-125 drop-shadow-lg' : 'hover:-translate-y-0.5'}`}>
            {react.emoji}
          </span>
          <span className="relative z-10">{react.count}</span>
        </button>
      ))}
      <button
        className="flex items-center justify-center w-7 h-7 rounded-lg bg-[#2b2d31] text-[#b5bac1] hover:bg-[#313338] hover:text-[#dbdee1] transition-colors focus:ring-2 ring-[#5865F2] outline-none hover:rotate-12 active:scale-90"
        onMouseEnter={playHover}
        onClick={playClick}
        title="Show all reactions"
      >
        <svg aria-hidden="true" role="img" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12C2 17.522 6.477 22 12 22C17.523 22 22 17.522 22 12C22 6.477 17.523 2 12 2ZM8.5 9.5C9.328 9.5 10 8.828 10 8C10 7.172 9.328 6.5 8.5 6.5C7.672 6.5 7 7.172 7 8C7 8.828 7.672 9.5 8.5 9.5ZM17 8C17 8.828 16.328 9.5 15.5 9.5C14.672 9.5 14 8.828 14 8C14 7.172 14.672 6.5 15.5 6.5C16.328 6.5 17 7.172 17 8ZM15.827 16.29C14.735 17.382 13.435 18 12 18C10.565 18 9.265 17.382 8.173 16.29C7.781 15.9 7.78 15.267 8.172 14.874C8.563 14.482 9.196 14.481 9.588 14.873C10.22 15.506 11.059 16 12 16C12.941 16 13.78 15.506 14.412 14.873C14.804 14.481 15.437 14.482 15.828 14.874C16.22 15.267 16.219 15.9 15.827 16.29Z"></path>
          <rect x="17.5" y="1.5" width="2" height="6" rx="1"></rect>
          <rect x="15.5" y="3.5" width="6" height="2" rx="1"></rect>
        </svg>
      </button>
    </div>
  );
};

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

                <div className="flex flex-wrap gap-1.5 mb-2">
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

                <ProjectReactions projectId={project.title} />

                <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
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
