import { useState, useEffect } from 'react';
import gsap from 'gsap';

const speeches = [
  "¡Hola! Bienvenido a mi portafolio 👋",
  "¿Buscas un desarrollador? ¡Hablemos! 💬",
  "Me encanta crear experiencias web únicas ✨",
  "React + TypeScript = ❤️",
  "Siempre aprendiendo algo nuevo 🚀",
  "El código limpio es mi pasión 💻",
  "¡Scrollea para conocerme mejor! 👇",
  "¿Tienes un proyecto en mente? 🤔",
  "Full Stack Developer por vocación 🎯",
];

export const AvatarSpeech = () => {
  const [currentSpeech, setCurrentSpeech] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showSpeech = () => {
      const randomSpeech = speeches[Math.floor(Math.random() * speeches.length)];
      setCurrentSpeech(randomSpeech);
      setIsVisible(true);

      // Animate in
      gsap.fromTo(
        '.speech-bubble',
        { opacity: 0, scale: 0.8, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
      );

      // Hide after 4 seconds
      setTimeout(() => {
        gsap.to('.speech-bubble', {
          opacity: 0,
          scale: 0.8,
          y: -10,
          duration: 0.3,
          onComplete: () => setIsVisible(false),
        });
      }, 4000);
    };

    // Initial speech after 2 seconds
    const initialTimeout = setTimeout(showSpeech, 2000);

    // Show random speech every 8-15 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 7000 + 8000;
      setTimeout(showSpeech, 0);
    }, 12000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="speech-bubble absolute -top-2 left-full ml-3 z-20 pointer-events-none">
      <div className="relative bg-card border border-border rounded-xl px-3 py-2 shadow-lg max-w-[200px]">
        {/* Speech bubble tail */}
        <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2">
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-border border-b-[6px] border-b-transparent" />
          <div className="absolute top-1/2 left-[1px] -translate-y-1/2 w-0 h-0 border-t-[5px] border-t-transparent border-r-[7px] border-r-card border-b-[5px] border-b-transparent" />
        </div>
        <p className="text-xs text-foreground whitespace-nowrap">{currentSpeech}</p>
      </div>
    </div>
  );
};
