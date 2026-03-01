import { Github, Linkedin, Mail, ExternalLink, Twitter, Sparkles, Zap, Award, Coffee, Code, Rocket, Heart, Sword, Shield, Home, Pencil, Star, Download, Circle, Moon, MinusCircle } from 'lucide-react';
import patoGif from '@/assets/pato.gif';
import bannerImage from '@/assets/banner.gif';
import cityImage from '@/assets/city.gif';
import { AvatarSpeech } from './AvatarSpeech';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState, useEffect, useCallback } from 'react';

const statuses: Array<'online' | 'idle' | 'dnd' | 'invisible'> = ['online', 'idle', 'dnd', 'invisible'];

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
  { icon: Sparkles, label: 'admin', color: 'text-accent-blue' },
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
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  const [status, setStatus] = useState<'online' | 'idle' | 'dnd' | 'invisible'>('online');

  // Cambiar status aleatoriamente cada 4-8 segundos
  useEffect(() => {
    const scheduleNext = () => {
      const delay = Math.random() * 4000 + 4000; // 4-8 segundos
      return setTimeout(() => {
        setStatus(prev => {
          const others = statuses.filter(s => s !== prev);
          return others[Math.floor(Math.random() * others.length)];
        });
        timerId = scheduleNext();
      }, delay);
    };
    let timerId = scheduleNext();
    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="profile-card discord-card overflow-hidden relative group">
      {/* Cyber City Decoration Background - Mejorado con animación breathe */}
      <div
        className="absolute bottom-0 left-0 w-full opacity-60 pointer-events-none z-0 transition-all duration-700 group-hover:opacity-80 animate-breathe"
        style={{
          height: 'calc(100% - 140px)', /* Ajustado para nuevo banner más bajo */
          backgroundImage: `url(${cityImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'bottom center',
          backgroundRepeat: 'no-repeat',
          maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 80%, transparent 100%)'
        }}
      />

      {/* Banner 8-bit dinámico - Altura estilo Discord, sin filtros ensuciantes */}
      <div
        className="profile-banner relative overflow-hidden h-[120px]"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      >
        {/* Transparent bottom gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#2b2d31] to-transparent opacity-80" />
      </div>

      {/* Avatar Section - Ajustado al nuevo alto del banner */}
      <div className="avatar-wrapper relative z-10 -mt-[4rem] ml-4">
        <div
          className="relative inline-block overflow-visible"
          onMouseEnter={() => setIsAvatarHovered(true)}
          onMouseLeave={() => setIsAvatarHovered(false)}
        >
          {/* Ring rainbow animado externo (glow intenso) */}
          <div className="absolute inset-0 -m-2 rounded-full animate-rainbow-border border-4 border-transparent" />

          {/* Ring gradient animado externo (glow pulse) */}
          <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-r from-[#5865F2] via-[#eb459e] via-[#f0b232] to-[#5865F2] opacity-80 blur-md animate-pulse-glow" />

          {/* Ring gradient animado interno (definido) */}
          <div className="absolute inset-0 -m-0.5 rounded-full bg-gradient-to-r from-[#5865F2] via-[#eb459e] via-[#f0b232] to-[#5865F2]" style={{ animation: 'spin-slow 3s linear infinite' }} />

          {/* Avatar PATO con efecto de animación wobble */}
          <div className="relative z-10 p-1.5 bg-[#2b2d31] rounded-full">
            <img
              src={patoGif}
              alt="Pato Avatar"
              className={`avatar relative z-10 transition-all duration-300 w-24 h-24 object-cover rounded-full ${isAvatarHovered ? 'scale-105' : ''}`}
            />
          </div>

          {/* Status indicator (Interactive Dropdown) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className={`absolute bottom-2 right-2 ring-[5px] ring-[#2b2d31] w-6 h-6 rounded-full z-30 transition-transform hover:scale-110 flex items-center justify-center cursor-pointer outline-none focus:outline-none ${status === 'online' ? 'bg-[#23a559]' :
                  status === 'idle' ? 'bg-[#f0b232]' :
                    status === 'dnd' ? 'bg-[#f23f42]' :
                      'bg-[#80848e]'
                  }`}
                title="Cambiar estado"
              >
                {status === 'idle' && <Moon className="w-3.5 h-3.5 text-[#2b2d31] fill-[#2b2d31] -ml-1 -mb-1" />}
                {status === 'dnd' && <div className="w-3 h-1 bg-[#2b2d31] rounded-full" />}
                {status === 'invisible' && <div className="w-3 h-3 rounded-full bg-[#2b2d31]" />}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-44 bg-[#111214] border border-white/5 text-[#dbdee1] p-1.5 shadow-2xl rounded-xl z-50">
              <DropdownMenuItem onClick={() => setStatus('online')} className="hover:bg-[#5865F2] hover:text-white focus:bg-[#5865F2] focus:text-white cursor-pointer rounded-lg py-2 flex items-center gap-2.5 transition-colors">
                <div className="w-3 h-3 rounded-full bg-[#23a559]" />
                <span className="font-semibold text-sm">Online</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatus('idle')} className="hover:bg-[#5865F2] hover:text-white focus:bg-[#5865F2] focus:text-white cursor-pointer rounded-lg py-2 flex items-center gap-2.5 transition-colors">
                <Moon className="w-3.5 h-3.5 text-[#f0b232] fill-[#f0b232]" />
                <span className="font-semibold text-sm">Ausente</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatus('dnd')} className="hover:bg-[#5865F2] hover:text-white focus:bg-[#5865F2] focus:text-white cursor-pointer rounded-lg py-2 flex items-center gap-2.5 transition-colors">
                <MinusCircle className="w-3.5 h-3.5 text-[#f23f42] fill-[#f23f42]" />
                <span className="font-semibold text-sm">No molestar</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatus('invisible')} className="hover:bg-[#5865F2] hover:text-white focus:bg-[#5865F2] focus:text-white cursor-pointer rounded-lg py-2 flex items-center gap-2.5 transition-colors">
                <Circle className="w-3.5 h-3.5 text-[#80848e] fill-[#80848e]" />
                <span className="font-semibold text-sm">Invisible</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <AvatarSpeech />
        </div>
      </div>

      {/* Profile Info */}
      <div className="p-4 pt-2 pb-32 relative z-10">
        {/* Name and Username */}
        <div className="mb-2">
          <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
            Juan Diego
            <span className="text-xs bg-accent-blue/10 text-accent-blue px-1.5 py-0.5 rounded border border-accent-blue/20 font-mono">Admin :)</span>
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-muted-foreground text-sm mt-1 font-bold">
            <span>Nombre Completo:</span>
            <span>Juan Diego Sierra Moreno</span>
            <div className="flex items-center gap-1 group/badge cursor-help">
              <Sword className="w-3 h-3 transition-transform group-hover/badge:rotate-12" />
              <span className="font-mono group-hover/badge:text-foreground transition-colors">LVL 99</span>
              <Shield className="w-3 h-3 text-accent-blue" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4" />

        {/* Action Buttons */}
        <div className="flex gap-2 mb-4">
          <Button size="sm" className="bg-[#5865F2] hover:bg-[#4752C4] text-white flex gap-2 h-9 px-4 transform transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#5865F2]/30 ripple-effect relative overflow-hidden group">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Download className="w-4 h-4 relative z-10" />
            <span className="relative z-10">Descargar CV</span>
          </Button>
          <Button size="icon" variant="secondary" className="h-9 w-9 bg-secondary hover:bg-muted hover:text-accent-pink transition-colors">
            <Home className="w-4 h-4" />
          </Button>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm mb-4 border border-transparent hover:border-accent-green/30 transition-colors cursor-default">
          <span className="text-lg animate-pulse">💻</span>
          <span className="text-foreground">Construyendo el futuro, una línea a la vez</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4" />

        {/* Bio Section */}
        <div className="mb-4">
          <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-2">
            Sobre mí
          </h3>
          <p className="text-sm text-secondary-foreground leading-relaxed font-bold">
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
            <div className="flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Github className="w-4 h-4 text-muted-foreground" />
              <span>March 2019</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <div className="flex items-center gap-1.5 hover:text-accent-pink transition-colors">
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
              <Tooltip key={tag.label} delayDuration={200}>
                <TooltipTrigger asChild>
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-secondary/80 text-[11px] font-medium role-tag-animate hover:bg-secondary hover:text-foreground transition-colors cursor-pointer"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className={`w-2.5 h-2.5 rounded-full ${tag.color.replace('text-', 'bg-')}`} />
                    <span className="text-secondary-foreground">{tag.label}</span>
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-[#111214] text-white border-none shadow-xl text-xs font-bold leading-none py-2 px-3">
                  Discord Role: {tag.label}
                </TooltipContent>
              </Tooltip>
            ))}
            <button className="w-6 h-6 flex items-center justify-center rounded-full bg-secondary hover:bg-muted text-muted-foreground hover:text-foreground transition-colors">
              +
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border my-4" />

        {/* Tecnologías Section */}
        <div className="mb-4">
          <h3 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-2">
            Tecnologías
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <Tooltip key={skill.name} delayDuration={200}>
                <TooltipTrigger asChild>
                  <span
                    className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-secondary/40 text-[11px] font-medium role-tag-animate border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                    style={{ animationDelay: `${(index + decorativeTags.length) * 0.05}s` }}
                  >
                    <div className={`w-2 h-2 rounded-sm ${skill.color}`} />
                    <span className="text-secondary-foreground/90">{skill.name}</span>
                  </span>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-[#111214] text-white border-none shadow-xl text-xs font-bold leading-none py-2 px-3">
                  {skill.name} Developer
                </TooltipContent>
              </Tooltip>
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
                className="social-link social-animate group relative overflow-hidden !bg-secondary/40 backdrop-blur-sm border border-white/5 hover:!bg-secondary/60"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
                <div className="flex-1 relative z-10">
                  <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">{link.label}</span>
                  <p className="text-xs text-muted-foreground">{link.username}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors relative z-10" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
