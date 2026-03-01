import { Palette, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

interface PaletteConfig {
  id: string;
  name: string;
  primary: string;
  gradientStart: string;
  gradientEnd: string;
  glow: string;
  // Extended tokens
  accentCyan: string;
  accentGreen: string;
  accentPink: string;
  accentBlue: string;
  accentYellow: string;
  accentOrange: string;
  accentPurple: string;
  accentRed: string;
  backgroundMain: string;
  backgroundSecondary: string;
  backgroundTertiary: string;
  backgroundCard: string;
  foreground: string;
  foregroundMuted: string;
  borderColor: string;
}

const palettes: PaletteConfig[] = [
  {
    id: 'magenta',
    name: 'Magenta',
    primary: '330 85% 60%',
    gradientStart: '#ff0080',
    gradientEnd: '#7928ca',
    glow: '330 85% 60%',
    accentCyan: '180 70% 50%',
    accentGreen: '140 70% 45%',
    accentPink: '330 85% 60%',
    accentBlue: '210 100% 60%',
    accentYellow: '45 95% 55%',
    accentOrange: '30 90% 55%',
    accentPurple: '270 70% 60%',
    accentRed: '0 70% 55%',
    backgroundMain: '#1e1f22',
    backgroundSecondary: '#2b2d31',
    backgroundTertiary: '#232428',
    backgroundCard: '#2b2d31',
    foreground: '#dbdee1',
    foregroundMuted: '#949ba4',
    borderColor: '#3f4147',
  },
  {
    id: 'blurple',
    name: 'Blurple',
    primary: '235 86% 65%',
    gradientStart: '#5865F2',
    gradientEnd: '#3b43a4',
    glow: '235 86% 65%',
    accentCyan: '200 80% 55%',
    accentGreen: '160 60% 45%',
    accentPink: '280 70% 65%',
    accentBlue: '235 86% 65%',
    accentYellow: '50 90% 55%',
    accentOrange: '25 80% 55%',
    accentPurple: '260 75% 60%',
    accentRed: '355 70% 55%',
    backgroundMain: '#1a1b2e',
    backgroundSecondary: '#252740',
    backgroundTertiary: '#1e2035',
    backgroundCard: '#252740',
    foreground: '#dcdff5',
    foregroundMuted: '#8b8fc7',
    borderColor: '#3a3d5c',
  },
  {
    id: 'emerald',
    name: 'Esmeralda',
    primary: '160 70% 45%',
    gradientStart: '#00c2a8',
    gradientEnd: '#005c4f',
    glow: '160 70% 45%',
    accentCyan: '175 80% 45%',
    accentGreen: '160 70% 45%',
    accentPink: '340 60% 60%',
    accentBlue: '200 70% 55%',
    accentYellow: '55 85% 50%',
    accentOrange: '35 75% 50%',
    accentPurple: '280 50% 55%',
    accentRed: '5 60% 50%',
    backgroundMain: '#1a2420',
    backgroundSecondary: '#243530',
    backgroundTertiary: '#1e2d27',
    backgroundCard: '#243530',
    foreground: '#d1e8df',
    foregroundMuted: '#7faa98',
    borderColor: '#375549',
  },
  {
    id: 'sunset',
    name: 'Atardecer',
    primary: '25 95% 55%',
    gradientStart: '#ff4d4d',
    gradientEnd: '#f9cb28',
    glow: '25 95% 55%',
    accentCyan: '185 65% 50%',
    accentGreen: '145 55% 45%',
    accentPink: '350 80% 60%',
    accentBlue: '215 70% 55%',
    accentYellow: '40 100% 55%',
    accentOrange: '25 95% 55%',
    accentPurple: '275 55% 55%',
    accentRed: '0 80% 55%',
    backgroundMain: '#241b18',
    backgroundSecondary: '#35271f',
    backgroundTertiary: '#2c201a',
    backgroundCard: '#35271f',
    foreground: '#f0dcd0',
    foregroundMuted: '#b08a72',
    borderColor: '#5a3f30',
  },
  {
    id: 'ocean',
    name: 'Océano',
    primary: '195 90% 50%',
    gradientStart: '#00dfd8',
    gradientEnd: '#007cf0',
    glow: '195 90% 50%',
    accentCyan: '195 90% 50%',
    accentGreen: '170 70% 45%',
    accentPink: '320 60% 60%',
    accentBlue: '210 90% 60%',
    accentYellow: '50 80% 55%',
    accentOrange: '30 70% 55%',
    accentPurple: '260 60% 55%',
    accentRed: '355 65% 55%',
    backgroundMain: '#141e24',
    backgroundSecondary: '#1c2f3a',
    backgroundTertiary: '#18262e',
    backgroundCard: '#1c2f3a',
    foreground: '#c8e6f0',
    foregroundMuted: '#6da4b8',
    borderColor: '#2e4f5e',
  },
  {
    id: 'gold',
    name: 'Dorado',
    primary: '45 100% 50%',
    gradientStart: '#ffc520',
    gradientEnd: '#ff7700',
    glow: '45 100% 50%',
    accentCyan: '190 60% 50%',
    accentGreen: '150 55% 45%',
    accentPink: '340 55% 55%',
    accentBlue: '220 65% 55%',
    accentYellow: '45 100% 50%',
    accentOrange: '30 90% 55%',
    accentPurple: '270 50% 55%',
    accentRed: '5 65% 50%',
    backgroundMain: '#221e14',
    backgroundSecondary: '#342d1c',
    backgroundTertiary: '#2a2418',
    backgroundCard: '#342d1c',
    foreground: '#f0e4c8',
    foregroundMuted: '#b09a6d',
    borderColor: '#544828',
  },
];

export const ColorPalettePicker = () => {
  const [activePalette, setActivePalette] = useState('magenta');
  const [isOpen, setIsOpen] = useState(false);

  const applyPalette = (palette: PaletteConfig) => {
    const root = document.documentElement;

    // Primary & glow
    root.style.setProperty('--primary', palette.primary);
    root.style.setProperty('--primary-glow', palette.glow);
    root.style.setProperty('--ring', palette.primary);
    root.style.setProperty('--sidebar-primary', palette.primary);
    root.style.setProperty('--sidebar-ring', palette.primary);

    // Gradients
    root.style.setProperty('--gradient-start', palette.gradientStart);
    root.style.setProperty('--gradient-end', palette.gradientEnd);

    // Accent colors
    root.style.setProperty('--accent-cyan', palette.accentCyan);
    root.style.setProperty('--accent-green', palette.accentGreen);
    root.style.setProperty('--accent-pink', palette.accentPink);
    root.style.setProperty('--accent-blue', palette.accentBlue);
    root.style.setProperty('--accent-yellow', palette.accentYellow);
    root.style.setProperty('--accent-orange', palette.accentOrange);
    root.style.setProperty('--accent-purple', palette.accentPurple);
    root.style.setProperty('--accent-red', palette.accentRed);

    // Backgrounds — using raw hex into CSS property for body & inline usages
    root.style.setProperty('--bg-main', palette.backgroundMain);
    root.style.setProperty('--bg-secondary', palette.backgroundSecondary);
    root.style.setProperty('--bg-tertiary', palette.backgroundTertiary);
    root.style.setProperty('--bg-card', palette.backgroundCard);

    // Apply background to body directly
    document.body.style.backgroundColor = palette.backgroundMain;

    // Foreground colors
    root.style.setProperty('--fg-main', palette.foreground);
    root.style.setProperty('--fg-muted', palette.foregroundMuted);

    // Apply text color to body
    document.body.style.color = palette.foreground;

    // Border
    root.style.setProperty('--border-palette', palette.borderColor);

    // Apply to all discord-card, widget, bg-[#2b2d31], bg-[#1e1f22], bg-[#1e1f22] etc.
    // We override the most used hardcoded colors via CSS custom properties
    root.style.setProperty('--discord-bg-primary', palette.backgroundMain);
    root.style.setProperty('--discord-bg-secondary', palette.backgroundSecondary);
    root.style.setProperty('--discord-bg-tertiary', palette.backgroundTertiary);
    root.style.setProperty('--discord-text-normal', palette.foreground);
    root.style.setProperty('--discord-text-muted', palette.foregroundMuted);
    root.style.setProperty('--discord-border', palette.borderColor);

    // Dynamic bg gradient for page
    root.style.setProperty('--app-bg-gradient', `radial-gradient(ellipse at top, ${palette.gradientStart}1A, transparent 50%), radial-gradient(ellipse at bottom right, ${palette.gradientEnd}1A, transparent 50%)`);

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
        className="p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-200 group border border-white/10"
        style={{ background: 'var(--bg-secondary, #2b2d31)' }}
        title="Cambiar paleta de colores"
      >
        <Palette className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div
            className="absolute bottom-14 right-0 p-3 rounded-xl border border-white/10 shadow-xl min-w-[220px] animate-slide-up-fade z-50"
            style={{ background: 'var(--bg-secondary, #2b2d31)' }}
          >
            <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--fg-muted, #949ba4)' }}>
              🎨 Paleta de colores
            </p>
            <div className="grid grid-cols-3 gap-2">
              {palettes.map((palette) => (
                <button
                  key={palette.id}
                  onClick={() => applyPalette(palette)}
                  className={`relative flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-all duration-200 ${activePalette === palette.id
                    ? 'ring-2 ring-primary scale-105'
                    : 'hover:scale-105'
                    }`}
                  style={{
                    background: activePalette === palette.id
                      ? 'var(--bg-tertiary, #232428)'
                      : 'transparent',
                  }}
                  title={palette.name}
                >
                  <div
                    className="w-9 h-9 rounded-full shadow-lg ring-2 ring-white/10"
                    style={{
                      background: `linear-gradient(135deg, ${palette.gradientStart}, ${palette.gradientEnd})`,
                    }}
                  />
                  <span className="text-[10px] font-medium" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                    {palette.name}
                  </span>
                  {activePalette === palette.id && (
                    <Check className="absolute top-1 right-1 w-3.5 h-3.5 text-primary drop-shadow-lg" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
