import { X, ExternalLink, Github, Star, Calendar, Users, Code2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  stars: number;
  live: string;
  github: string;
  image: string;
  features?: string[];
  role?: string;
  duration?: string;
  team?: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-card border-border p-0 overflow-hidden">
        {/* Project Image */}
        <div className="relative w-full h-48 overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2 text-accent-yellow">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">{project.stars} estrellas</span>
          </div>
        </div>

        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground mb-2">
              {project.title}
            </DialogTitle>
          </DialogHeader>

          {/* Project Meta */}
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
            {project.role && (
              <div className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4" />
                <span>{project.role}</span>
              </div>
            )}
            {project.duration && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span>{project.team}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-secondary-foreground mb-4">
            {project.longDescription || project.description}
          </p>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
                Características principales
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <span className="text-primary mt-0.5">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-2">
              Tecnologías utilizadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium transition-all hover:opacity-90"
            >
              <ExternalLink className="w-4 h-4" />
              Ver Demo
            </a>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium transition-all hover:bg-muted"
            >
              <Github className="w-4 h-4" />
              Ver Código
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
