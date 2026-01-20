import { useState, useEffect } from 'react';
import gsap from 'gsap';

const speeches = [
  "Today's agenda: Coding 💻",
  "Escuchando Lo-fi Beats 🎧",
  "Aprendiendo algo nuevo hoy 🚀",
  "React + TypeScript = ❤️",
  "Construyendo el futuro 🛠️",
  "El código limpio es clave ✨",
  "¡Scrollea para ver más! 👇",
  "¿Tienes un proyecto? 🤔",
  "Full Stack Developer 🎯",
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
    <div className="speech-bubble absolute top-4 left-[85%] z-20 pointer-events-none">
      <div className="relative bg-white text-black rounded-[18px] px-3 py-1.5 shadow-xl min-w-[120px] max-w-[220px]">
        {/* Speech bubble tail - Discord style */}
        <div className="absolute -left-1.5 top-1/2 -translate-y-1/2">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0C12 0 10 0 8 2C6 4 0 6 0 6C0 6 6 8 8 10C10 12 12 12 12 12V0Z" fill="white"/>
          </svg>
        </div>
        <p className="text-[13px] font-medium leading-tight">{currentSpeech}</p>
      </div>
    </div>
  );
};
