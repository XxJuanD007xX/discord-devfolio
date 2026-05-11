import { Github, Linkedin, Mail, ExternalLink, Twitter, Sparkles, Sword, Shield, Home, Download, Circle, Moon, MinusCircle } from 'lucide-react';
import patoGif from '@/assets/pato.gif';
import bannerImage from '@/assets/banner.gif';
import cityImage from '@/assets/city.gif';
import { AvatarSpeech } from './AvatarSpeech';
import { SpotifyActivity } from './SpotifyActivity';
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
import { useState, useEffect } from 'react';

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

const socialLinks = [
  { icon: Github, label: 'GitHub', username: '@tuusuario', href: 'https://github.com' },
  { icon: Linkedin, label: 'LinkedIn', username: '/in/tuusuario', href: 'https://linkedin.com' },
  { icon: Twitter, label: 'Twitter', username: '@tuusuario', href: 'https://twitter.com' },
  { icon: Mail, label: 'Email', username: 'hola@tudominio.com', href: 'mailto:hola@tudominio.com' },
];

export const ProfileCard = () => {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  const [status, setStatus] = useState<'online' | 'idle' | 'dnd' | 'invisible'>('online');
  const [clickCount, setClickCount] = useState(0);
  const [particles, setParticles] = useState<{ id: number; x: number; y: number; emoji: string }[]>([]);

  const emojis = ['🦆', '✨', '💻', '🚀', '⭐', '❤️', '🔥', '🎉'];

  const handleAvatarClick = (e: React.MouseEvent) => {
    // Generate particle
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newParticle = {
      id: Date.now(),
      x,
      y,
      emoji: emojis[Math.floor(Math.random() * emojis.length)]
    };

    setParticles(prev => [...prev, newParticle]);
    setClickCount(prev => prev + 1);

    // Remove particle after animation
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1000);
  };

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
      {/* Cyber City Decoration Background - Solo en desktop */}
      <div
        className="absolute bottom-0 left-0 w-full opacity-60 pointer-events-none z-0 transition-all duration-700 group-hover:opacity-80 animate-breathe"
        style={{
          height: 'calc(100% - 140px)',
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
          {/* ====== PREMIUM HALO — 4 layered light effects ====== */}

          {/* Capa 1: Glow ambiental amplio difuminado (la "atmósfera") */}
          <div
            className="absolute inset-0 -m-5 rounded-full pointer-events-none animate-premium-glow"
            style={{
              background:
                'radial-gradient(circle at center, hsl(var(--primary-glow) / 0.55) 0%, hsl(330, 100%, 65%, 0.25) 35%, transparent 70%)',
              filter: 'blur(14px)',
            }}
          />

          {/* Capa 2: Conic gradient rotating (multicolor halo) */}
          <div
            className="absolute inset-0 -m-2 rounded-full pointer-events-none animate-halo-spin opacity-80"
            style={{
              background:
                'conic-gradient(from 0deg, #5865F2, #eb459e, #f0b232, #3ba55d, #00c2a8, #5865F2)',
              filter: 'blur(6px)',
            }}
          />

          {/* Capa 3: Conic gradient inverso rotando al revés (más vibrante, menos blur) */}
          <div
            className="absolute inset-0 -m-1 rounded-full pointer-events-none animate-halo-spin-reverse"
            style={{
              background:
                'conic-gradient(from 180deg, #eb459e, #5865F2, #00c2a8, #f0b232, #eb459e)',
              opacity: 0.7,
              filter: 'blur(2px)',
            }}
          />

          {/* Capa 4: Anillo definido más interno (el borde más nítido) */}
          <div
            className="absolute inset-0 -m-0.5 rounded-full pointer-events-none"
            style={{
              background:
                'conic-gradient(from 90deg, #5865F2, #eb459e, #f0b232, #3ba55d, #5865F2)',
              animation: 'halo-spin 4s linear infinite',
            }}
          />

          {/* Avatar PATO con efecto de animación wobble */}
          <div className="relative z-10">
            {/* Easter egg message (Outside rotating container) */}
            {clickCount >= 10 && (
              <div className="absolute -top-14 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-[12px] font-bold px-3 py-1.5 rounded-xl shadow-2xl whitespace-nowrap animate-bounce pointer-events-none z-[60] flex items-center gap-1.5 border border-white/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>¡Nivel Secreto Desbloqueado!</span>
                <span className="text-sm">🦆</span>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[var(--primary)] border-b border-r border-white/20 rotate-45 rounded-sm" />
              </div>
            )}

            <div
              className="p-1.5 bg-[var(--bg-secondary,#2b2d31)] rounded-full cursor-pointer relative"
              onClick={handleAvatarClick}
              style={{
                transform: clickCount > 10 ? `scale(${Math.min(1 + (clickCount - 10) * 0.02, 1.3)}) rotate(${clickCount * 5}deg)` : 'none',
                transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
              }}
            >
              <img
                src={patoGif}
                alt="Pato Avatar"
                className={`avatar relative z-10 transition-all duration-300 w-24 h-24 object-cover rounded-full ${isAvatarHovered ? 'scale-105' : ''} ${clickCount > 0 ? 'animate-pop-reaction' : ''}`}
                style={{ borderColor: 'var(--bg-secondary, #2b2d31)' }}
              />

              {/* Particles */}
              {particles.map(p => (
                <div
                  key={p.id}
                  className="absolute pointer-events-none text-xl z-50 animate-particle-float"
                  style={{
                    left: p.x,
                    top: p.y,
                    transform: `translate(-50%, -50%) rotate(${Math.random() * 60 - 30}deg)`,
                    textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                  }}
                >
                  {p.emoji}
                </div>
              ))}
            </div>
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
      <div className="p-4 pt-2 pb-4 relative z-10">
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

        {/* Spotify Activity (reemplaza Roles) */}
        <div className="mb-4">
          <SpotifyActivity />
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
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className={`w-2 h-2 rounded-sm ${skill.color}`} style={skill.color !== 'bg-foreground' ? { backgroundColor: `hsl(var(--accent-${skill.color.split('-').pop()}))` } : {}} />
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
