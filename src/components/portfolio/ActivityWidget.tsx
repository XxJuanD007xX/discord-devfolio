import {
  Workflow,
  Sparkles,
  Clock,
  Star,
  TrendingUp,
  Download,
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { BrandIcons } from './BrandIcons';

const workflow = [
  {
    category: 'Fundamentos',
    emoji: '🧱',
    accentColor: '#a78bfa',
    description: 'Lenguajes, runtimes y herramientas base que uso en cada proyecto',
    items: [
      { name: 'TypeScript', icon: BrandIcons.TypeScript, desc: 'Tipado estático', color: '#3178C6', badge: '★ Principal', rating: 5 },
      { name: 'Node.js', icon: BrandIcons.NodeJS, desc: 'Runtime JS', color: '#5FA04E', badge: '⚡ Diario', rating: 5 },
      { name: 'Git', icon: BrandIcons.Git, desc: 'Control de versiones', color: '#F05032', badge: '⚡ Diario', rating: 5 },
      { name: 'GitHub', icon: BrandIcons.GitHub, desc: 'Hosting de código', color: '#ffffff', badge: '⚡ Diario', rating: 5 },
      { name: 'Vite', icon: BrandIcons.Vite, desc: 'Build Tool', color: '#646CFF', badge: '⚡ Build', rating: 4 },
      { name: 'pnpm', icon: BrandIcons.Pnpm, desc: 'Package Manager', color: '#F69220', badge: '📦 PM', rating: 4 },
      { name: 'Bun', icon: BrandIcons.Bun, desc: 'Runtime Alterno', color: '#F9F1E1', badge: '🥖 Runtime', rating: 3 },
    ]
  },
  {
    category: 'Entorno',
    emoji: '🛠️',
    accentColor: '#60a5fa',
    description: 'Mi setup de desarrollo: IDEs, terminales y sistemas operativos',
    items: [
      { name: 'Antigravity', icon: BrandIcons.Antigravity, desc: 'Editor IA de Google', color: '#3B82F6', badge: '★ Principal', rating: 5 },
      { name: 'VS Code', icon: BrandIcons.VSCode, desc: 'Editor Alternativo', color: '#007ACC', badge: '⚡ Diario', rating: 5 },
      { name: 'Warp', icon: BrandIcons.Warp, desc: 'Terminal IA', color: '#2DD4BF', badge: '⚡ Diario', rating: 4 },
      { name: 'Windows', icon: BrandIcons.Windows, desc: 'OS Principal', color: '#00A4EF', badge: '🖥️ OS', rating: 4 },
      { name: 'Linux', icon: BrandIcons.Linux, desc: 'OS Servidor', color: '#FCC624', badge: '🐧 OS', rating: 4 },
    ]
  },
  {
    category: 'IA',
    emoji: '🤖',
    accentColor: '#f472b6',
    description: 'Modelos, asistentes y herramientas de Inteligencia Artificial que potencian mi flujo',
    items: [
      { name: 'Claude', icon: BrandIcons.Claude, desc: 'Consultas Complejas', color: '#D97757', badge: '★ Principal', rating: 5 },
      { name: 'Gemini', icon: BrandIcons.Gemini, desc: 'Asistente Google', color: '#4E88D4', badge: '🧠 Avanzado', rating: 5 },
      { name: 'ChatGPT', icon: BrandIcons.ChatGPT, desc: 'Generación', color: '#10A37F', badge: '⚡ Diario', rating: 5 },
      { name: 'Jules', icon: BrandIcons.GoogleJules, desc: 'Agente IA de Google', color: '#715CD7', badge: '✨ Agente', rating: 4 },
      { name: 'GitHub Copilot', icon: BrandIcons.GitHubCopilot, desc: 'Autocompletado IA', color: '#ffffff', badge: '🤖 Copilot', rating: 4 },
      { name: 'Lovable', icon: BrandIcons.Lovable, desc: 'AI App Builder', color: '#E61363', badge: '🚀 Builder', rating: 4 },
    ]
  },
  {
    category: 'Frontend',
    emoji: '🎨',
    accentColor: '#4ade80',
    description: 'Frameworks, librerías de componentes y herramientas de UI',
    items: [
      { name: 'Next.js', icon: BrandIcons.NextJS, desc: 'React Framework SSR', color: '#ffffff', badge: '★ Principal', rating: 5 },
      { name: 'Shadcn/ui', icon: BrandIcons.Shadcn, desc: 'Component Library', color: '#a78bfa', badge: '📦 Componentes', rating: 5 },
      { name: 'Tailwind', icon: BrandIcons.Tailwind, desc: 'Utility-first CSS', color: '#06B6D4', badge: '⚡ Diario', rating: 5 },
      { name: 'Astro', icon: BrandIcons.Astro, desc: 'Content Framework', color: '#FF5D01', badge: '🚀 MPA', rating: 4 },
      { name: 'React Bits', icon: BrandIcons.React, desc: 'Animaciones React', color: '#61DAFB', badge: '✨ Animaciones', rating: 4 },
    ]
  },
  {
    category: 'Backend',
    emoji: '⚙️',
    accentColor: '#fbbf24',
    description: 'BaaS, bases de datos, autenticación, APIs y deployment',
    items: [
      { name: 'InsForge', icon: BrandIcons.InsForge, desc: 'Backend as a Service', color: '#F97316', badge: '★ Principal', rating: 5 },
      { name: 'Appwrite', icon: BrandIcons.Appwrite, desc: 'Backend as a Service', color: '#F02E65', badge: '🛠️ BaaS', rating: 4 },
      { name: 'Firebase', icon: BrandIcons.Firebase, desc: 'Google Backend', color: '#FFCA28', badge: '🔥 BaaS', rating: 4 },
      { name: 'Supabase', icon: BrandIcons.Supabase, desc: 'Postgres Backend', color: '#3ECF8E', badge: '⚡ BaaS', rating: 4 },
      { name: 'Clerk', icon: BrandIcons.Clerk, desc: 'Autenticación', color: '#6C47FF', badge: '🔒 Auth', rating: 4 },
      { name: 'Postman', icon: BrandIcons.Postman, desc: 'API Testing', color: '#FF6C37', badge: '🔧 API', rating: 4 },
      { name: 'PostgreSQL', icon: BrandIcons.PostgreSQL, desc: 'Base de Datos', color: '#4169E1', badge: '🗄️ DB', rating: 5 },
      { name: 'Vercel', icon: BrandIcons.Vercel, desc: 'Edge Deployment', color: '#ffffff', badge: '🚀 Deploy', rating: 5 },
      { name: 'Hostinger', icon: BrandIcons.Hostinger, desc: 'Web Hosting', color: '#673AB7', badge: '🌐 Host', rating: 3 },
    ]
  },
  {
    category: 'Diseño',
    emoji: '📐',
    accentColor: '#22d3ee',
    description: 'Diseño, prototipado, documentación y gestión del conocimiento',
    items: [
      { name: 'Figma', icon: BrandIcons.Figma, desc: 'Diseño UI/UX', color: '#F24E1E', badge: '★ Principal', rating: 5 },
      { name: 'Obsidian', icon: BrandIcons.Obsidian, desc: 'Knowledge Base', color: '#7C3AED', badge: '🧠 Notas', rating: 5 },
      { name: 'Notion', icon: BrandIcons.Notion, desc: 'Docs & Proyectos', color: '#ffffff', badge: '⚡ Diario', rating: 4 },
      { name: 'Excalidraw', icon: BrandIcons.Excalidraw, desc: 'Diagramas Rápidos', color: '#6965DB', badge: '✏️ Sketch', rating: 4 },
      { name: 'Miro', icon: BrandIcons.Miro, desc: 'Whiteboard Collab', color: '#FFD02F', badge: '🎯 Collab', rating: 3 },
    ]
  },
  {
    category: 'Testing',
    emoji: '🧪',
    accentColor: '#69D3A7',
    description: 'Frameworks y agentes de testing para calidad de código',
    items: [
      { name: 'Cypress', icon: BrandIcons.Cypress, desc: 'E2E Testing', color: '#69D3A7', badge: '★ Principal', rating: 5 },
      { name: 'TestSprite', icon: BrandIcons.TestSprite, desc: 'Testing IA Autónomo', color: '#22D3EE', badge: '🤖 IA QA', rating: 4 },
    ]
  },
];

// Mini star rating component
const MiniRating = ({ rating, color }: { rating: number; color: string }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star
        key={i}
        className="w-2.5 h-2.5"
        fill={i <= rating ? color : 'transparent'}
        stroke={i <= rating ? color : 'var(--fg-muted, #949ba4)'}
        strokeWidth={i <= rating ? 0 : 1.5}
      />
    ))}
  </div>
);

export const ActivityWidget = () => {
  const totalTools = workflow.reduce((a, s) => a + s.items.length, 0);

  return (
    <div className="space-y-4">
      {/* ═══ Store Header ═══ */}
      <div
        className="widget widget-animate border-none shadow-xl"
        style={{ background: 'var(--bg-secondary, #2b2d31)' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="p-2 rounded-xl shadow-lg"
              style={{
                background: `linear-gradient(to bottom right, var(--gradient-start, #5865F2), var(--gradient-end, #eb459e))`,
                boxShadow: `0 4px 12px hsl(var(--primary) / 0.2)`,
              }}
            >
              <Workflow className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2
                className="font-bold text-lg flex items-center gap-1.5"
                style={{ color: 'var(--fg-main, #dbdee1)' }}
              >
                Mi Workflow
                <Sparkles
                  className="w-4 h-4 animate-float-gentle"
                  style={{ color: 'hsl(var(--accent-yellow))' }}
                />
              </h2>
              <p className="text-[11px]" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                Herramientas y servicios que uso a diario
              </p>
            </div>
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"
            style={{
              background: 'var(--bg-main, #1e1f22)',
              color: 'hsl(var(--accent-green))',
            }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: 'hsl(var(--accent-green))' }}
            />
            {totalTools} activas
          </div>
        </div>
      </div>

      {/* ═══ All Categories ═══ */}
      {workflow.map((section, sIdx) => (
        <div
          key={sIdx}
          className="widget widget-animate border-none shadow-xl"
          style={{ background: 'var(--bg-secondary, #2b2d31)' }}
        >
          {/* Category Header with accent bar */}
          <div className="relative mb-5">
            <div
              className="absolute top-0 left-0 w-10 h-0.5 rounded-full"
              style={{ background: section.accentColor }}
            />
            <div className="flex items-start justify-between pt-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg">{section.emoji}</span>
                  <h3
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: section.accentColor }}
                  >
                    {section.category}
                  </h3>
                  <span
                    className="text-[9px] font-bold px-1.5 py-0.5 rounded-full"
                    style={{
                      background: `${section.accentColor}1a`,
                      color: section.accentColor,
                    }}
                  >
                    {section.items.length}
                  </span>
                </div>
                <p
                  className="text-[11px] leading-relaxed"
                  style={{ color: 'var(--fg-muted, #949ba4)' }}
                >
                  {section.description}
                </p>
              </div>

              {/* Quick stats */}
              <div className="flex items-center gap-3 shrink-0 ml-4">
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center gap-1 text-[10px] font-bold"
                    style={{ color: section.accentColor }}
                  >
                    <Download className="w-3 h-3" />
                    {section.items.length}
                  </div>
                  <span className="text-[9px]" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                    tools
                  </span>
                </div>
                <div className="flex flex-col items-center">
                  <div
                    className="flex items-center gap-1 text-[10px] font-bold"
                    style={{ color: 'hsl(var(--accent-yellow))' }}
                  >
                    <TrendingUp className="w-3 h-3" />
                    {section.items.filter((i) => i.badge.includes('Principal')).length}
                  </div>
                  <span className="text-[9px]" style={{ color: 'var(--fg-muted, #949ba4)' }}>
                    core
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* App Grid — max 3 columns, generous spacing */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {section.items.map((item, iIdx) => {
              const isPrincipal = item.badge.includes('Principal');
              return (
                <Tooltip key={iIdx} delayDuration={150}>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="group relative flex items-start gap-3 p-3.5 rounded-2xl border border-transparent hover:border-white/8 transition-all duration-300 hover:-translate-y-0.5 outline-none focus-visible:ring-2 focus-visible:ring-white/20 cursor-default text-left overflow-hidden"
                      style={{ background: 'var(--bg-main, #1e1f22)' }}
                      aria-label={`${item.name} — ${item.desc}`}
                    >
                      {/* App icon — rounded square */}
                      <div
                        className="relative flex items-center justify-center w-11 h-11 rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg shrink-0"
                        style={{
                          background: `${item.color}1a`,
                          color: item.color,
                          boxShadow: `0 0 0 1px ${item.color}15 inset`,
                        }}
                      >
                        {/* Glow on hover */}
                        <div
                          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
                          style={{
                            background: `radial-gradient(circle at center, ${item.color}33, transparent 70%)`,
                          }}
                        />
                        <item.icon className="w-6 h-6 relative z-10" />

                        {/* Principal star */}
                        {isPrincipal && (
                          <span
                            className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center"
                            style={{
                              background: 'hsl(var(--accent-yellow))',
                              boxShadow:
                                '0 0 0 2px var(--bg-main, #1e1f22), 0 2px 4px rgba(0,0,0,0.3)',
                            }}
                          >
                            <Star className="w-2 h-2 text-[#1e1f22]" fill="currentColor" />
                          </span>
                        )}
                      </div>

                      {/* Text content */}
                      <div className="flex-1 min-w-0 space-y-1.5 overflow-hidden">
                        <div>
                          <span
                            className="text-[12px] font-semibold leading-tight block transition-colors group-hover:text-white truncate"
                            style={{ color: 'var(--fg-main, #dbdee1)' }}
                          >
                            {item.name}
                          </span>
                          <span
                            className="text-[11px] block mt-0.5 leading-snug truncate"
                            style={{ color: 'var(--fg-muted, #949ba4)' }}
                          >
                            {item.desc}
                          </span>
                        </div>

                        {/* Rating + badge row */}
                        <div className="flex items-center gap-2 flex-wrap">
                          <MiniRating rating={item.rating} color={item.color} />
                          <span
                            className="text-[9px] font-bold px-1.5 py-0.5 rounded-md tracking-wide leading-none"
                            style={{
                              background: `${section.accentColor}15`,
                              color: section.accentColor,
                            }}
                          >
                            {item.badge}
                          </span>
                        </div>
                      </div>

                      {/* Bottom glow line on hover */}
                      <div
                        className="absolute bottom-0 left-3 right-3 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${item.color}44, transparent)`,
                        }}
                      />
                    </button>
                  </TooltipTrigger>

                  <TooltipContent
                    side="top"
                    sideOffset={6}
                    className="bg-[#111214] text-white border-none shadow-2xl px-3 py-2 max-w-[240px]"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm leading-none">{item.name}</span>
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide leading-none"
                        style={{
                          background: `${section.accentColor}26`,
                          color: section.accentColor,
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-white/70 leading-snug">{item.desc}</p>
                    <div className="flex items-center gap-2 mt-1.5 pt-1.5 border-t border-white/10">
                      <MiniRating rating={item.rating} color={item.color} />
                      <span className="text-[9px] text-white/50">
                        {item.rating === 5
                          ? 'Uso intensivo'
                          : item.rating === 4
                            ? 'Uso frecuente'
                            : 'Uso ocasional'}
                      </span>
                    </div>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>
        </div>
      ))}

      {/* ═══ Footer ═══ */}
      <div
        className="widget widget-animate border-none shadow-xl"
        style={{ background: 'var(--bg-secondary, #2b2d31)' }}
      >
        <div
          className="flex flex-col sm:flex-row items-center justify-between text-[11px] gap-2 text-center sm:text-left"
          style={{ color: 'var(--fg-muted, #949ba4)' }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-1.5 leading-tight">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 shrink-0" />
              <span>Pipeline activa</span>
            </div>
            <span className="hidden sm:inline">·</span>
            <span>Última actualización hoy</span>
          </div>
          <div
            className="flex items-center gap-1.5 font-bold shrink-0 mt-1 sm:mt-0"
            style={{ color: 'hsl(var(--accent-green))' }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: 'hsl(var(--accent-green))' }}
            />
            Todo operativo
          </div>
        </div>
      </div>
    </div>
  );
};
