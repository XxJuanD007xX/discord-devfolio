import { Gamepad2, Music, Camera, BookOpen, Plane, Coffee, Bot } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const hobbies = [
  {
    icon: Gamepad2,
    user: 'TuNombre',
    message: 'Me encantan los videojuegos, especialmente los RPGs y juegos indie 🎮',
    time: 'Hoy a las 14:32',
    color: 'text-accent-purple',
  },
  {
    icon: Music,
    user: 'TuNombre',
    message: 'La música es mi combustible para programar. Siempre con mis playlists de lo-fi o synthwave 🎧',
    time: 'Hoy a las 14:35',
    color: 'text-accent-green',
  },
  {
    icon: Camera,
    user: 'TuNombre',
    message: 'Fotografía urbana y de paisajes en mis tiempos libres 📸',
    time: 'Hoy a las 14:38',
    color: 'text-accent-cyan',
  },
  {
    icon: BookOpen,
    user: 'TuNombre',
    message: 'Lector ávido de ciencia ficción y libros de desarrollo personal 📚',
    time: 'Hoy a las 14:40',
    color: 'text-accent-yellow',
  },
  {
    icon: Plane,
    user: 'TuNombre',
    message: 'Viajar y conocer nuevas culturas. Ya he visitado +15 países ✈️',
    time: 'Hoy a las 14:42',
    color: 'text-accent-blue',
  },
  {
    icon: Coffee,
    user: 'TuNombre',
    message: 'Café specialty lover. Siempre buscando el mejor espresso de la ciudad ☕',
    time: 'Hoy a las 14:45',
    color: 'text-accent-orange',
  },
  {
    icon: Bot,
    user: 'TuNombre',
    message: 'Experimentar con IA y crear proyectos personales con nuevas tecnologías 🤖',
    time: 'Hoy a las 14:48',
    color: 'text-accent-pink',
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
      <div ref={containerRef} className="space-y-4">
        {hobbies.map((hobby, index) => (
          <div 
            key={index}
            className={`chat-message flex gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors ${
              visibleMessages.includes(index) ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`flex-shrink-0 p-2 rounded-full bg-secondary ${hobby.color}`}>
              <hobby.icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="font-semibold text-foreground">{hobby.user}</span>
                <span className="text-xs text-muted-foreground">{hobby.time}</span>
              </div>
              <p className="text-sm text-secondary-foreground mt-0.5">{hobby.message}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Typing Indicator */}
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-border">
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <span className="text-xs text-muted-foreground">TuNombre está escribiendo...</span>
      </div>
    </div>
  );
};
