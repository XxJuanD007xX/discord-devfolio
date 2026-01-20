import { Github, Linkedin, Mail, ExternalLink, Twitter, Sparkles, Zap, Award, Coffee, Code, Rocket, Heart, Sword, Shield, Home, Pencil } from 'lucide-react';
import avatarImage from '@/assets/avatar.png';
import bannerImage from '@/assets/banner.jpg';
import { AvatarSpeech } from './AvatarSpeech';
import { Button } from '@/components/ui/button';

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
  { icon: Sparkles, label: 'admin', color: 'text-accent-red' },
  { icon: Zap, label: 'moderators', color: 'text-accent-green' },
  { icon: Award, label: 'tea time', color: 'text-accent-purple' },
  { icon: Coffee, label: 'party planners', color: 'text-accent-orange' },
  { icon: Code, label: 'movie night', color: 'text-accent-yellow' },
  { icon: Rocket, label: 'book club', color: 'text-accent-red' },
  { icon: Heart, label: 'tabletop gamers', color: 'text-accent-blue' },
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
        <div className="mb-2">
          <h1 className="text-2xl font-bold text-foreground">
            Wumpus
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm mt-1">
            <span>itsmewumpus</span>
            <span>•</span>
            <span>they/them</span>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Sword className="w-3 h-3" />
              <span className="font-mono">XXXX</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-accent-blue" />
              <div className="flex -space-x-1">
                <div className="w-3 h-3 rounded-full bg-accent-purple border border-background" />
                <div className="w-3 h-3 rounded-full bg-accent-orange border border-background" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 mb-4">
          <Button size="sm" className="bg-[#5865F2] hover:bg-[#4752C4] text-white flex gap-2 h-9 px-4">
            <Pencil className="w-4 h-4" />
            Edit Profile
          </Button>
          <Button size="icon" variant="secondary" className="h-9 w-9 bg-secondary hover:bg-muted">
            <Home className="w-4 h-4" />
          </Button>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm mb-4">
          <span className="text-lg">💻</span>
          <span className="text-foreground">Construyendo el futuro, una línea a la vez</span>
        </div>

        {/* Decorative Tags - Bio phrases in the image */}
        <div className="space-y-0.5 mb-4">
          <p className="text-sm text-secondary-foreground">who am i</p>
          <p className="text-sm text-secondary-foreground">what am i</p>
          <p className="text-sm text-secondary-foreground">why am i</p>
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

        {/* Member Since Section */}
        <div className="mb-4">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
            Member since
          </h3>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-secondary-foreground">
            <div className="flex items-center gap-1.5">
              <Github className="w-4 h-4 text-muted-foreground" />
              <span>March 2019</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-1.5">
              <div className="w-4 h-4 rounded bg-accent-pink flex items-center justify-center">
                <Sparkles className="w-2.5 h-2.5 text-white" />
              </div>
              <span>November 2022</span>
            </div>
          </div>
        </div>

        {/* Roles Section - Matching the image more closely */}
        <div className="mb-4">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Roles
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {decorativeTags.map((tag, index) => (
              <span
                key={tag.label}
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-secondary/80 text-[11px] font-medium role-tag-animate"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className={`w-2.5 h-2.5 rounded-full ${tag.color.replace('text-', 'bg-')}`} />
                <span className="text-secondary-foreground">{tag.label}</span>
              </span>
            ))}
            <button className="w-6 h-6 flex items-center justify-center rounded-full bg-secondary hover:bg-muted text-muted-foreground">
              +
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4" />

        {/* Technologies Section */}
        <div className="mb-4">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Tecnologías
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <span 
                key={skill.name}
                className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-secondary/40 text-[11px] font-medium role-tag-animate border border-border/50"
                style={{ animationDelay: `${(index + decorativeTags.length) * 0.05}s` }}
              >
                <div className={`w-2 h-2 rounded-sm ${skill.color}`} />
                <span className="text-secondary-foreground/90">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4" />

        {/* Social Links */}
        <div>
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Find me on
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
