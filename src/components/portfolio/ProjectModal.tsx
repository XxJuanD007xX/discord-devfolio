import { Github, ExternalLink, Star, Code2, Zap, Info, CheckCircle2, Users, Calendar, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import type { Project } from './ProjectsWidget';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[520px] w-[95vw] p-0 gap-0 overflow-hidden shadow-2xl animate-slide-up-fade border-none rounded-xl mx-auto"
        style={{
          animationDuration: '0.25s',
          maxHeight: '90vh',
          background: 'var(--bg-main, #111214)',
        }}
      >
        <DialogTitle className="sr-only">Project Details: {project.title}</DialogTitle>
        <DialogDescription className="sr-only">Detailed view of the project {project.title}</DialogDescription>

        <div
          className="w-full relative rounded-xl overflow-hidden flex flex-col max-h-[90vh]"
          style={{ background: 'var(--bg-tertiary, #232428)' }}
        >

          {/* Banner con overlay gradient */}
          <div className="h-[140px] sm:h-[160px] w-full relative overflow-hidden group/banner shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-110"
            />
            <div
              className="absolute inset-0"
              style={{ background: `linear-gradient(to top, var(--bg-tertiary, #232428), var(--bg-tertiary, #232428)66, transparent)` }}
            />
            {/* Stars badge flotante */}
            <div
              className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-sm font-bold border border-white/10"
              style={{ color: 'hsl(var(--accent-yellow))' }}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{project.stars}</span>
            </div>
          </div>

          {/* Avatar + Badges */}
          <div className="px-4 sm:px-5 relative z-10 -mt-12 flex justify-between items-end shrink-0">
            <div className="relative">
              <div className="p-1 rounded-2xl inline-block" style={{ background: 'var(--bg-tertiary, #232428)' }}>
                <div
                  className="w-[80px] h-[80px] sm:w-[88px] sm:h-[88px] rounded-2xl overflow-hidden relative group shadow-xl"
                  style={{ background: 'var(--bg-main, #1e1f22)' }}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div
                className="absolute bottom-1 right-1 w-6 h-6 rounded-full z-10"
                style={{ background: 'hsl(var(--accent-green))', borderWidth: '4px', borderColor: 'var(--bg-tertiary, #232428)' }}
              />
            </div>

            <div className="flex gap-1.5 pb-2">
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg border border-white/5" style={{ background: 'var(--bg-main, #1e1f22)' }}>
                <Star className="w-3.5 h-3.5 fill-current" style={{ color: 'hsl(var(--accent-yellow))' }} />
                <Code2 className="w-3.5 h-3.5" style={{ color: 'hsl(var(--primary))' }} />
                <Zap className="w-3.5 h-3.5" style={{ color: 'hsl(var(--accent-pink))' }} />
              </div>
            </div>
          </div>

          {/* Contenido scrolleable */}
          <div className="px-4 sm:px-5 pb-5 mt-3 flex-1 overflow-y-auto custom-scrollbar">

            {/* Título y Rol */}
            <div className="mb-3">
              <h2 className="text-xl sm:text-2xl font-extrabold leading-tight tracking-tight" style={{ color: 'var(--fg-main, #dbdee1)' }}>{project.title}</h2>
              <p className="text-sm font-medium mt-0.5" style={{ color: 'var(--fg-muted, #b5bac1)' }}>{project.role}</p>
            </div>

            <div className="h-[1px] bg-white/10 my-3" />

            {/* Meta: Duración + Equipo */}
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 flex-1 min-w-[120px]" style={{ background: 'var(--bg-main, #1e1f22)' }}>
                <Calendar className="w-4 h-4" style={{ color: 'hsl(var(--primary))' }} />
                <div>
                  <div className="text-[10px] font-bold uppercase" style={{ color: 'var(--fg-muted, #949ba4)' }}>Duración</div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--fg-main, #dbdee1)' }}>{project.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/5 flex-1 min-w-[120px]" style={{ background: 'var(--bg-main, #1e1f22)' }}>
                <Users className="w-4 h-4" style={{ color: 'hsl(var(--accent-pink))' }} />
                <div>
                  <div className="text-[10px] font-bold uppercase" style={{ color: 'var(--fg-muted, #949ba4)' }}>Equipo</div>
                  <div className="text-sm font-semibold" style={{ color: 'var(--fg-main, #dbdee1)' }}>{project.team}</div>
                </div>
              </div>
            </div>

            {/* Acerca del Proyecto */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--fg-muted, #949ba4)' }}>Acerca de este proyecto</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--fg-main, #dbdee1)' }}>
                {project.longDescription}
              </p>
            </div>

            <div className="h-[1px] bg-white/10 my-3" />

            {/* Features como lista Discord */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                <Sparkles className="w-3 h-3" style={{ color: 'hsl(var(--accent-yellow))' }} />
                Características
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 px-2.5 py-2 rounded-lg transition-colors group/feat"
                    style={{ background: 'color-mix(in srgb, var(--bg-main, #1e1f22) 70%, transparent)' }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-main, #1e1f22)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'color-mix(in srgb, var(--bg-main, #1e1f22) 70%, transparent)'}
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 group-hover/feat:scale-110 transition-transform" style={{ color: 'hsl(var(--accent-green))' }} />
                    <span className="text-[13px] leading-snug" style={{ color: 'var(--fg-main, #dbdee1)' }}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-white/10 my-3" />

            {/* Tech Stack como Roles */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--fg-muted, #949ba4)' }}>Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, i) => {
                  const dotColors = [
                    'hsl(var(--primary))', 'hsl(var(--accent-green))', 'hsl(var(--accent-pink))',
                    'hsl(var(--accent-yellow))', 'hsl(var(--accent-cyan))', 'hsl(var(--accent-purple))'
                  ];
                  return (
                    <div
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[12px] font-semibold border border-white/5 hover:border-white/15 transition-colors cursor-default group/tech"
                      style={{ background: 'var(--bg-main, #1e1f22)' }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full group-hover/tech:scale-125 transition-transform"
                        style={{ background: dotColors[i % dotColors.length] }}
                      />
                      <span style={{ color: 'var(--fg-main, #dbdee1)' }}>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="h-[1px] bg-white/10 my-3" />

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 transition-all duration-200 py-2.5 rounded-lg text-white text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98]"
                style={{
                  background: 'hsl(var(--primary))',
                  boxShadow: `0 4px 12px hsl(var(--primary) / 0.3)`,
                }}
                onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(0.9)'}
                onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
              >
                <ExternalLink className="w-4 h-4" />
                Visitar Web
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 border border-white/10 hover:border-white/20 transition-all duration-200 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98]"
                style={{ background: 'var(--bg-main, #1e1f22)', color: 'var(--fg-main, #dbdee1)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-secondary, #2b2d31)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--bg-main, #1e1f22)'}
              >
                <Github className="w-4 h-4" />
                Ver Código
              </a>
            </div>

            {/* Nota final */}
            <div
              className="mt-4 p-3 rounded-lg text-xs flex items-center gap-2.5 border border-white/5 hover:border-white/10 transition-colors"
              style={{ background: 'var(--bg-main, #1e1f22)', color: 'var(--fg-muted, #949ba4)' }}
            >
              <Info className="w-4 h-4 shrink-0" />
              <span>Proyecto desarrollado como parte de mi portafolio profesional.</span>
            </div>

          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};
