import { Gamepad2, Music, Camera, BookOpen, Plane, Coffee, Bot, Smile } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import avatarImage from '@/assets/avatar.png';

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
      const messages = containerRef.current.querySelectorAll('.chat-message');
      messages.forEach((msg, index) => {
        if (visibleMessages.includes(index)) {
          gsap.fromTo(
            msg,
            { opacity: 0, y: 20, scale: 0.95 },
            { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.7)' }
          );
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

      {/* Chat Messages */}
      <div ref={containerRef} className="space-y-1">
        {hobbies.map((hobby, index) => (
          <div 
            key={index}
            className={`chat-message group flex gap-4 px-4 py-1.5 hover:bg-[#2e3035] transition-colors relative ${
              visibleMessages.includes(index) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Avatar */}
            <div className="flex-shrink-0 mt-0.5">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary relative">
                <img src={avatarImage} alt={hobby.user} className="w-full h-full object-cover" />
                <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-background flex items-center justify-center`}>
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

              {/* Reactions */}
              <div className="flex flex-wrap gap-1 mt-1.5">
                {hobby.reactions.map((reaction, rIndex) => (
                  <button
                    key={rIndex}
                    onClick={(e) => {
                      const el = e.currentTarget;
                      gsap.to(el, { scale: 1.2, duration: 0.1, yoyo: true, repeat: 1 });
                    }}
                    className="flex items-center gap-1.5 px-1.5 py-0.5 rounded-md bg-[#2b2d31] border border-transparent hover:border-[#5865f2] transition-all text-sm"
                  >
                    <span>{reaction.emoji}</span>
                    <span className="text-xs font-semibold text-[#b5bac1]">{reaction.count}</span>
                  </button>
                ))}
                <button className="opacity-0 group-hover:opacity-100 flex items-center px-1.5 py-0.5 rounded-md bg-[#2b2d31] hover:bg-[#35373c] transition-opacity">
                  <Smile className="w-4 h-4 text-[#b5bac1]" />
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

      {/* Typing Indicator */}
      <div className="flex items-center gap-2 mt-4 px-4 py-2 bg-[#2b2d31]/50 rounded-b-lg border-t border-border/30">
        <div className="flex gap-1 items-center h-4">
          <span className="w-1.5 h-1.5 bg-[#b5bac1] rounded-full animate-[bounce_1s_infinite_0ms]" />
          <span className="w-1.5 h-1.5 bg-[#b5bac1] rounded-full animate-[bounce_1s_infinite_200ms]" />
          <span className="w-1.5 h-1.5 bg-[#b5bac1] rounded-full animate-[bounce_1s_infinite_400ms]" />
        </div>
        <span className="text-[12px] font-bold text-[#b5bac1]">Wumpus is typing...</span>
      </div>
    </div>
  );
};
