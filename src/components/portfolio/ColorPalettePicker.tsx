import { Palette, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

const palettes = [
  {
    id: 'magenta',
    name: 'Magenta',
    primary: '330 85% 60%',
    accent: '270 80% 50%',
    glow: '330 85% 60%',
  },
  {
    id: 'blurple',
    name: 'Blurple',
    primary: '235 86% 65%',
    accent: '235 86% 65%',
    glow: '235 86% 65%',
  },
  {
    id: 'emerald',
    name: 'Esmeralda',
    primary: '140 70% 45%',
    accent: '160 80% 45%',
    glow: '140 70% 45%',
  },
  {
    id: 'sunset',
    name: 'Atardecer',
    primary: '25 95% 55%',
    accent: '350 80% 55%',
    glow: '25 95% 55%',
  },
  {
    id: 'ocean',
    name: 'Océano',
    primary: '195 90% 50%',
    accent: '210 100% 60%',
    glow: '195 90% 50%',
  },
  {
    id: 'gold',
    name: 'Dorado',
    primary: '45 95% 55%',
    accent: '35 90% 50%',
    glow: '45 95% 55%',
  },
];

export const ColorPalettePicker = () => {
  const [activePalette, setActivePalette] = useState('magenta');
  const [isOpen, setIsOpen] = useState(false);

  const applyPalette = (palette: typeof palettes[0]) => {
    const root = document.documentElement;
    root.style.setProperty('--primary', palette.primary);
    root.style.setProperty('--primary-glow', palette.glow);
    root.style.setProperty('--ring', palette.primary);
    root.style.setProperty('--sidebar-primary', palette.primary);
    root.style.setProperty('--sidebar-ring', palette.primary);
    setActivePalette(palette.id);
    localStorage.setItem('portfolio-palette', palette.id);
  };

  useEffect(() => {
    const savedPalette = localStorage.getItem('portfolio-palette');
    if (savedPalette) {
      const palette = palettes.find(p => p.id === savedPalette);
      if (palette) {
        applyPalette(palette);
      }
    }
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 rounded-full bg-card border border-border shadow-lg hover:bg-secondary transition-all duration-200 group"
        title="Cambiar paleta de colores"
      >
        <Palette className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
      </button>

      {isOpen && (
        <div className="absolute bottom-14 right-0 p-3 rounded-xl bg-card border border-border shadow-xl min-w-[200px] animate-scale-in">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
            Paleta de colores
          </p>
          <div className="grid grid-cols-3 gap-2">
            {palettes.map((palette) => (
              <button
                key={palette.id}
                onClick={() => applyPalette(palette)}
                className={`relative flex flex-col items-center gap-1.5 p-2 rounded-lg transition-all duration-200 ${
                  activePalette === palette.id 
                    ? 'bg-secondary ring-2 ring-primary' 
                    : 'hover:bg-secondary/50'
                }`}
                title={palette.name}
              >
                <div 
                  className="w-8 h-8 rounded-full shadow-md"
                  style={{ background: `hsl(${palette.primary})` }}
                />
                <span className="text-[10px] text-muted-foreground">{palette.name}</span>
                {activePalette === palette.id && (
                  <Check className="absolute top-1 right-1 w-3 h-3 text-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
