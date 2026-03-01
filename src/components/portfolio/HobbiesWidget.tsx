import { Gamepad2, Music, Camera, BookOpen, Plane, Coffee, Bot, Smile, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import patoGif from '@/assets/pato.gif';

const hobbies = [
  {
    icon: Gamepad2,
    user: 'Wumpus',
    message: 'Me encantan los videojuegos, especialmente los RPGs y juegos indie 🎮',
    time: 'Hoy a las 14:32',
    color: 'text-accent-purple',
    reactions: [
      { emoji: '🎮', count: 12 },
      { emoji: '🔥', count: 5 },
    ],
  },
  {
    icon: Music,
    user: 'Wumpus',
    message: 'La música es mi combustible para programar. Siempre con mis playlists de lo-fi o synthwave 🎧',
    time: 'Hoy a las 14:35',
    color: 'text-accent-green',
    reactions: [
      { emoji: '🎵', count: 8 },
      { emoji: '✨', count: 3 },
    ],
  },
  {
    icon: Camera,
    user: 'Wumpus',
    message: 'Fotografía urbana y de paisajes en mis tiempos libres 📸',
    time: 'Hoy a las 14:38',
    color: 'text-accent-cyan',
    reactions: [
      { emoji: '📸', count: 15 },
    ],
  },
  {
    icon: BookOpen,
    user: 'Wumpus',
    message: 'Lector ávido de ciencia ficción y libros de desarrollo personal 📚',
    time: 'Hoy a las 14:40',
    color: 'text-accent-yellow',
    reactions: [
      { emoji: '📖', count: 6 },
    ],
  },
  {
    icon: Plane,
    user: 'Wumpus',
    message: 'Viajar y conocer nuevas culturas. Ya he visitado +15 países ✈️',
    time: 'Hoy a las 14:42',
    color: 'text-accent-blue',
    reactions: [
      { emoji: '🌍', count: 20 },
      { emoji: '✈️', count: 11 },
    ],
  },
  {
    icon: Coffee,
    user: 'Wumpus',
    message: 'Café specialty lover. Siempre buscando el mejor espresso de la ciudad ☕',
    time: 'Hoy a las 14:45',
    color: 'text-accent-orange',
    reactions: [
      { emoji: '☕', count: 24 },
      { emoji: '❤️', count: 9 },
    ],
  },
  {
    icon: Bot,
    user: 'Wumpus',
    message: 'Experimentar con IA y crear proyectos personales con nuevas tecnologías 🤖',
    time: 'Hoy a las 14:48',
    color: 'text-accent-pink',
    reactions: [
      { emoji: '🤖', count: 7 },
      { emoji: '💻', count: 4 },
    ],
  },
];

export const HobbiesWidget = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    // Animate messages appearing one by one
    hobbies.forEach((_, index) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, index]);
      }, index * 400);
    });
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const messages = containerRef.current.querySelectorAll('.chat-message-animate');

      // Ensure initial state
      gsap.set(messages, { autoAlpha: 0, y: 20, scale: 0.95 });

      messages.forEach((msg, index) => {
        if (visibleMessages.includes(index)) {
          gsap.to(msg, {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.2)',
            overwrite: true
          });
        }
      });
    }
  }, [visibleMessages]);

  return (
    <div className="widget scroll-widget">
      {/* Channel Header */}
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-border">
        <span className="text-muted-foreground text-lg">#</span>
        <span className="font-semibold text-foreground">mis-hobbies</span>
        <div className="h-4 w-px bg-border mx-2" />
        <span className="text-sm text-muted-foreground">Lo que hago cuando no estoy programando</span>
      </div>

      {/* Chat Messages - Con animación mejorada */}
      <div ref={containerRef} className="space-y-1">
        {hobbies.map((hobby, index) => (
          <div
            key={index}
            className={`chat-message-animate group flex gap-4 px-4 py-2 hover:bg-[#2e3035] transition-all duration-200 relative opacity-0 rounded-md`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Avatar con pato.gif */}
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary relative group-hover:ring-2 group-hover:ring-[#5865F2]/50 transition-all">
                <img src={patoGif} alt={hobby.user} className="w-full h-full object-cover" />
                <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-background flex items-center justify-center ring-2 ring-background`}>
                  <hobby.icon className={`w-2.5 h-2.5 ${hobby.color}`} />
                </div>
              </div>
            </div>

            {/* Message Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-medium text-primary hover:underline cursor-pointer">{hobby.user}</span>
                <span className="text-[10px] text-muted-foreground font-medium">{hobby.time}</span>
              </div>
              <p className="text-[15px] text-[#dbdee1] leading-[1.375rem]">{hobby.message}</p>

              {/* Reactions - Con animación pop mejorada */}
              <div className="flex flex-wrap gap-1.5 mt-2">
                {hobby.reactions.map((reaction, rIndex) => (
                  <button
                    key={rIndex}
                    onClick={(e) => {
                      const el = e.currentTarget;
                      el.classList.add('animate-pop-reaction');
                      gsap.to(el, {
                        scale: 1.3,
                        duration: 0.15,
                        yoyo: true,
                        repeat: 1,
                        ease: 'back.out(2)'
                      });
                      setTimeout(() => el.classList.remove('animate-pop-reaction'), 400);
                    }}
                    className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#2b2d31] border border-transparent hover:border-[#5865f2] hover:bg-[#35373c] transition-all text-sm group/reaction"
                  >
                    <span className="group-hover/reaction:animate-bounce-subtle">{reaction.emoji}</span>
                    <span className="text-xs font-bold text-[#b5bac1] group-hover/reaction:text-white transition-colors">{reaction.count}</span>
                  </button>
                ))}
                <button className="opacity-0 group-hover:opacity-100 flex items-center px-2 py-1 rounded-md bg-[#2b2d31] hover:bg-[#5865F2] transition-all duration-200">
                  <Smile className="w-4 h-4 text-[#b5bac1] hover:text-white" />
                </button>
              </div>
            </div>

            {/* Message Actions (hover) */}
            <div className="absolute right-4 -top-4 hidden group-hover:flex items-center gap-0.5 bg-[#313338] border border-[#1e1f22] rounded-sm p-0.5 shadow-lg z-10">
              <button className="p-1.5 hover:bg-[#35373c] rounded text-[#b5bac1] hover:text-[#dbdee1]"><Smile className="w-4 h-4" /></button>
              <button className="p-1.5 hover:bg-[#35373c] rounded text-[#b5bac1] hover:text-[#dbdee1]"><Bot className="w-4 h-4" /></button>
            </div>
          </div>
        ))}
      </div>

      {/* Input de mensaje falso pero interactivo */}
      <div className="mt-4 px-4 py-3 bg-[#383a40] rounded-lg border border-[#1e1f22] group hover:border-[#5865F2]/30 transition-colors">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
            <img src={patoGif} alt="Tu avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 text-[15px] text-[#72767d]">
            Mensaje #mis-hobbies
            <span className="animate-typing-cursor">|</span>
          </div>
          <Send className="w-5 h-5 text-[#72767d] group-hover:text-[#5865F2] transition-colors" />
        </div>
      </div>

      {/* Typing Indicator */}
      <div className="flex items-center gap-2 mt-3 px-4 py-2">
        <div className="flex gap-1 items-center h-4">
          <span className="w-2 h-2 bg-[#5865F2] rounded-full animate-[bounce_1s_infinite_0ms]" />
          <span className="w-2 h-2 bg-[#eb459e] rounded-full animate-[bounce_1s_infinite_200ms]" />
          <span className="w-2 h-2 bg-[#f0b232] rounded-full animate-[bounce_1s_infinite_400ms]" />
        </div>
        <span className="text-[12px] font-bold text-[#b5bac1]">Wumpus está escribiendo<span className="animate-pulse">...</span></span>
      </div>
    </div>
  );
};
