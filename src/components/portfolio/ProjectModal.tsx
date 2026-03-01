import { Github, ExternalLink, Star, Code2, Zap, Info, CheckCircle2, Users, Calendar, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import type { Project } from './ProjectsWidget';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const techColors = [
    'bg-[#5865F2]', 'bg-[#3ba55d]', 'bg-[#eb459e]',
    'bg-[#f0b232]', 'bg-[#00c2a8]', 'bg-[#9b59b6]'
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="max-w-[520px] w-[95vw] bg-[#111214] p-0 gap-0 overflow-hidden shadow-2xl animate-slide-up-fade border-none rounded-xl mx-auto"
        style={{ animationDuration: '0.25s', maxHeight: '90vh' }}
      >
        <DialogTitle className="sr-only">Project Details: {project.title}</DialogTitle>

        <div className="w-full relative bg-[#232428] rounded-xl overflow-hidden flex flex-col max-h-[90vh]">

          {/* Banner con overlay gradient */}
          <div className="h-[140px] sm:h-[160px] w-full relative overflow-hidden group/banner shrink-0">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/banner:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#232428] via-[#232428]/40 to-transparent" />
            {/* Stars badge flotante */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-sm font-bold text-[#f0b232] border border-white/10">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>{project.stars}</span>
            </div>
          </div>

          {/* Avatar + Badges */}
          <div className="px-4 sm:px-5 relative z-10 -mt-12 flex justify-between items-end shrink-0">
            <div className="relative">
              <div className="p-1 bg-[#232428] rounded-2xl inline-block">
                <div className="w-[80px] h-[80px] sm:w-[88px] sm:h-[88px] rounded-2xl overflow-hidden bg-[#1e1f22] relative group shadow-xl">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 bg-[#23a559] rounded-full border-[4px] border-[#232428] z-10" />
            </div>

            <div className="flex gap-1.5 pb-2">
              <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#1e1f22] border border-white/5">
                <Star className="w-3.5 h-3.5 text-[#f0b232] fill-[#f0b232]" />
                <Code2 className="w-3.5 h-3.5 text-[#5865F2]" />
                <Zap className="w-3.5 h-3.5 text-[#eb459e]" />
              </div>
            </div>
          </div>

          {/* Contenido scrolleable */}
          <div className="px-4 sm:px-5 pb-5 mt-3 flex-1 overflow-y-auto custom-scrollbar">

            {/* Título y Rol */}
            <div className="mb-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-white leading-tight tracking-tight">{project.title}</h2>
              <p className="text-sm text-[#b5bac1] font-medium mt-0.5">{project.role}</p>
            </div>

            <div className="h-[1px] bg-white/10 my-3" />

            {/* Meta: Duración + Equipo */}
            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1e1f22] border border-white/5 flex-1 min-w-[120px]">
                <Calendar className="w-4 h-4 text-[#5865F2]" />
                <div>
                  <div className="text-[10px] font-bold text-[#949ba4] uppercase">Duración</div>
                  <div className="text-sm font-semibold text-white">{project.duration}</div>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1e1f22] border border-white/5 flex-1 min-w-[120px]">
                <Users className="w-4 h-4 text-[#eb459e]" />
                <div>
                  <div className="text-[10px] font-bold text-[#949ba4] uppercase">Equipo</div>
                  <div className="text-sm font-semibold text-white">{project.team}</div>
                </div>
              </div>
            </div>

            {/* Acerca del Proyecto */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold uppercase text-[#949ba4] tracking-wider mb-2">Acerca de este proyecto</h3>
              <p className="text-sm text-[#dbdee1] leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            <div className="h-[1px] bg-white/10 my-3" />

            {/* Features como lista Discord */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold uppercase text-[#949ba4] tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#f0b232]" />
                Características
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2 px-2.5 py-2 rounded-lg bg-[#1e1f22]/70 hover:bg-[#1e1f22] transition-colors group/feat"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#23a559] shrink-0 mt-0.5 group-hover/feat:scale-110 transition-transform" />
                    <span className="text-[13px] text-[#dbdee1] leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-white/10 my-3" />

            {/* Tech Stack como Roles */}
            <div className="mb-4">
              <h3 className="text-[10px] font-bold uppercase text-[#949ba4] tracking-wider mb-2">Stack Tecnológico</h3>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((tech, i) => (
                  <div
                    key={tech}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[#1e1f22] text-[12px] font-semibold border border-white/5 hover:border-white/15 transition-colors cursor-default group/tech"
                  >
                    <div className={`w-2.5 h-2.5 rounded-full ${techColors[i % techColors.length]} group-hover/tech:scale-125 transition-transform`} />
                    <span className="text-[#dbdee1]">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[1px] bg-white/10 my-3" />

            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#5865F2] hover:bg-[#4752C4] transition-all duration-200 py-2.5 rounded-lg text-white text-sm font-bold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#5865F2]/30 active:scale-[0.98]"
              >
                <ExternalLink className="w-4 h-4" />
                Visitar Web
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex-1 bg-[#1e1f22] hover:bg-[#2b2d31] border border-white/10 hover:border-white/20 transition-all duration-200 py-2.5 rounded-lg text-white text-sm font-bold flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Github className="w-4 h-4" />
                Ver Código
              </a>
            </div>

            {/* Nota final */}
            <div className="mt-4 bg-[#1e1f22] p-3 rounded-lg text-xs text-[#949ba4] flex items-center gap-2.5 border border-white/5 hover:border-white/10 transition-colors">
              <Info className="w-4 h-4 shrink-0" />
              <span>Proyecto desarrollado como parte de mi portafolio profesional.</span>
            </div>

          </div>
        </div>

      </DialogContent>
    </Dialog>
  );
};
