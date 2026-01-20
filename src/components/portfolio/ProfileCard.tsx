import { Github, Linkedin, Mail, ExternalLink, MapPin, Calendar, Twitter, Sparkles, Zap, Award, Coffee, Code, Rocket, Heart } from 'lucide-react';
import avatarImage from '@/assets/avatar.png';
import bannerImage from '@/assets/banner.jpg';
import { AvatarSpeech } from './AvatarSpeech';

const skills = [
  { name: 'React', color: 'bg-accent-cyan' },
  { name: 'TypeScript', color: 'bg-accent-blue' },
  { name: 'Node.js', color: 'bg-accent-green' },
  { name: 'Next.js', color: 'bg-foreground' },
  { name: 'PostgreSQL', color: 'bg-accent-blue' },
  { name: 'MongoDB', color: 'bg-accent-green' },
  { name: 'AWS', color: 'bg-accent-orange' },
  { name: 'Docker', color: 'bg-accent-cyan' },
  { name: 'GraphQL', color: 'bg-accent-pink' },
  { name: 'Tailwind', color: 'bg-accent-cyan' },
];

const decorativeTags = [
  { icon: Sparkles, label: 'Creativo', color: 'text-accent-yellow' },
  { icon: Zap, label: 'Rápido', color: 'text-accent-orange' },
  { icon: Award, label: 'Certificado', color: 'text-accent-purple' },
  { icon: Coffee, label: 'Café lover', color: 'text-accent-orange' },
  { icon: Code, label: 'Clean Code', color: 'text-accent-cyan' },
  { icon: Rocket, label: 'Innovador', color: 'text-accent-pink' },
  { icon: Heart, label: 'Apasionado', color: 'text-accent-red' },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', username: '@tuusuario', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', username: '/in/tuusuario', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', username: '@tuusuario', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', username: 'hola@tudominio.com', href: 'mailto:hola@tudominio.com' },
];

export const ProfileCard = () => {
  return (
    <div className="profile-card discord-card overflow-hidden">
      {/* Banner */}
      <div 
        className="profile-banner"
        style={{ backgroundImage: `url(${bannerImage})` }}
      />

      {/* Avatar Section */}
      <div className="avatar-wrapper">
        <div className="relative inline-block">
          <img 
            src={avatarImage} 
            alt="Avatar" 
            className="avatar"
          />
          <div className="status-indicator status-online" title="Disponible" />
          <AvatarSpeech />
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-4 pt-2">
        {/* Name and Username */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-foreground">
            Tu Nombre
          </h1>
          <p className="text-muted-foreground text-sm">
            @desarrollador_fullstack
          </p>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm mb-4">
          <span className="text-lg">💻</span>
          <span className="text-foreground">Construyendo el futuro, una línea a la vez</span>
        </div>

        {/* Decorative Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {decorativeTags.map((tag, index) => (
            <span 
              key={tag.label}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-secondary/60 text-xs role-tag-animate"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <tag.icon className={`w-3 h-3 ${tag.color}`} />
              <span className="text-secondary-foreground">{tag.label}</span>
            </span>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4" />

        {/* Bio Section */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            Sobre mí
          </h3>
          <p className="text-sm text-secondary-foreground leading-relaxed">
            Desarrollador Full Stack apasionado con +5 años de experiencia creando aplicaciones web 
            escalables y experiencias de usuario excepcionales. Especializado en React, Node.js y 
            arquitecturas cloud.
          </p>
        </div>

        {/* Location & Member Since */}
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>Ciudad, País</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>Desarrollando desde 2019</span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4" />

        {/* Skills/Roles Section */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Tecnologías
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span 
                key={skill.name}
                className="role-tag role-tag-animate"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className={`role-tag-dot ${skill.color}`} />
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4" />

        {/* Social Links */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Encuéntrame en
          </h3>
          <div className="space-y-2">
            {socialLinks.map((link, index) => (
              <a 
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link social-animate group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <div className="flex-1">
                  <span className="text-sm text-foreground font-medium">{link.label}</span>
                  <p className="text-xs text-muted-foreground">{link.username}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
