import {
  Workflow,
  Sparkles,
  Clock,
} from 'lucide-react';
import { BrandIcons } from './BrandIcons';

const workflow = [
  {
    category: 'Entorno de Desarrollo',
    emoji: '🛠️',
    accentColor: 'hsl(var(--accent-blue))',
    items: [
      { name: 'Antigravity', icon: BrandIcons.Antigravity, desc: 'Editor de Código', color: '#3B82F6', badge: '★ Principal' },
      { name: 'VS Code', icon: BrandIcons.VSCode, desc: 'Editor Alternativo', color: '#007ACC', badge: '⚡ Diario' },
      { name: 'Warp', icon: BrandIcons.Warp, desc: 'Terminal', color: '#2DD4BF', badge: '⚡ Diario' },
      { name: 'Windows', icon: BrandIcons.Windows, desc: 'OS Principal', color: '#00A4EF', badge: '🖥️ OS' },
      { name: 'Linux', icon: BrandIcons.Linux, desc: 'OS Servidor', color: '#FCC624', badge: '🐧 OS' },
    ]
  },
  {
    category: 'Inteligencia Artificial',
    emoji: '🤖',
    accentColor: 'hsl(var(--accent-pink))',
    items: [
      { name: 'Gemini', icon: BrandIcons.Gemini, desc: 'Asistente Principal', color: '#4E88D4', badge: '★ Principal' },
      { name: 'Claude', icon: BrandIcons.Claude, desc: 'Consultas Complejas', color: '#D97757', badge: '🧠 Avanzado' },
      { name: 'ChatGPT', icon: BrandIcons.ChatGPT, desc: 'Generación', color: '#10A37F', badge: '⚡ Diario' },
      { name: 'Jules (Google)', icon: BrandIcons.GoogleJules, desc: 'Asistente IA', color: '#715CD7', badge: '✨ IA' },
      { name: 'GitHub Copilot', icon: BrandIcons.GitHubCopilot, desc: 'Asistente de Código', color: '#ffffff', badge: '🤖 IA' },
    ]
  },
  {
    category: 'Frontend Stack',
    emoji: '🎨',
    accentColor: 'hsl(var(--accent-green))',
    items: [
      { name: 'Next.js', icon: BrandIcons.NextJS, desc: 'Framework', color: '#ffffff', badge: '★ Principal' },
      { name: 'Shadcn/ui', icon: BrandIcons.Shadcn, desc: 'Componentes', color: '#a78bfa', badge: '📦 Librería' },
      { name: 'Tailwind', icon: BrandIcons.Tailwind, desc: 'Styling', color: '#06B6D4', badge: '⚡ Diario' },
      { name: 'Astro', icon: BrandIcons.Astro, desc: 'Framework', color: '#FF5D01', badge: '🚀 Web' },
      { name: 'React Bits', icon: BrandIcons.React, desc: 'Animaciones', color: '#61DAFB', badge: '✨ UI' },
      { name: 'Lovable', icon: BrandIcons.Lovable, desc: 'AI App Builder', color: '#E61363', badge: '🚀 Builder' },
    ]
  },
  {
    category: 'Backend & Servicios',
    emoji: '⚙️',
    accentColor: 'hsl(var(--accent-yellow))',
    items: [
      { name: 'Appwrite', icon: BrandIcons.Appwrite, desc: 'Backend as a Service', color: '#F02E65', badge: '★ Principal' },
      { name: 'Firebase', icon: BrandIcons.Firebase, desc: 'Backend as a Service', color: '#FFCA28', badge: '🔥 BaaS' },
      { name: 'Supabase', icon: BrandIcons.Supabase, desc: 'Backend as a Service', color: '#3ECF8E', badge: '⚡ BaaS' },
      { name: 'Clerk', icon: BrandIcons.Clerk, desc: 'Autenticación', color: '#6C47FF', badge: '🔒 Auth' },
      { name: 'Postman', icon: BrandIcons.Postman, desc: 'API Testing', color: '#FF6C37', badge: '🔧 API' },
      { name: 'PostgreSQL', icon: BrandIcons.PostgreSQL, desc: 'Base de Datos', color: '#4169E1', badge: '🗄️ DB' },
      { name: 'Vercel', icon: BrandIcons.Vercel, desc: 'Deployment', color: '#ffffff', badge: '🚀 Deploy' },
      { name: 'Hostinger', icon: BrandIcons.Hostinger, desc: 'Hosting', color: '#673AB7', badge: '🌐 Host' },
    ]
  },
  {
    category: 'Planificación & Diseño',
    emoji: '📐',
    accentColor: 'hsl(var(--accent-cyan))',
    items: [
      { name: 'Figma', icon: BrandIcons.Figma, desc: 'Diseño UI/UX', color: '#F24E1E', badge: '★ Principal' },
      { name: 'Excalidraw', icon: BrandIcons.Excalidraw, desc: 'Diagramas Rápidos', color: '#6965DB', badge: '✏️ Sketch' },
      { name: 'Notion', icon: BrandIcons.Notion, desc: 'Notas & Docs', color: '#ffffff', badge: '⚡ Diario' },
      { name: 'Miro', icon: BrandIcons.Miro, desc: 'Diagramas', color: '#FFD02F', badge: '🎯 Collab' },
    ]
  },
  {
    category: 'Testing & QA',
    emoji: '🧪',
    accentColor: '#69D3A7',
    items: [
      { name: 'Cypress', icon: BrandIcons.Cypress, desc: 'E2E Testing', color: '#69D3A7', badge: '✅ Tests' },
    ]
  },
];

export const ActivityWidget = () => {
  return (
    <div className="space-y-4">
      {/* Header Widget */}
      <div className="widget widget-animate border-none shadow-xl" style={{ background: 'var(--bg-secondary, #2b2d31)' }}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div
              className="p-2 rounded-xl shadow-lg"
              style={{ background: `linear-gradient(to bottom right, var(--gradient-start, #5865F2), var(--gradient-end, #eb459e))`, boxShadow: `0 4px 12px hsl(var(--primary) / 0.2)` }}
            >
              <Workflow className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg flex items-center gap-1.5" style={{ color: 'var(--fg-main, #dbdee1)' }}>
                Mi Workflow
                <Sparkles className="w-4 h-4 animate-float-gentle" style={{ color: 'hsl(var(--accent-yellow))' }} />
              </h2>
              <p className="text-[11px]" style={{ color: 'var(--fg-muted, #949ba4)' }}>Herramientas y servicios que uso a diario</p>
            </div>
          </div>
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold"
            style={{ background: 'var(--bg-main, #1e1f22)', color: 'hsl(var(--accent-green))' }}
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'hsl(var(--accent-green))' }} />
            {workflow.reduce((a, s) => a + s.items.length, 0)} activas
          </div>
        </div>
      </div>

      {/* Category Sections */}
      {workflow.map((section, sIdx) => (
        <div key={sIdx} className="widget widget-animate border-none shadow-xl" style={{ background: 'var(--bg-secondary, #2b2d31)' }}>
          {/* Category Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-base">{section.emoji}</span>
            <h3 className="text-xs font-bold uppercase tracking-wider" style={{ color: 'var(--fg-muted, #b5bac1)' }}>{section.category}</h3>
            <div className="flex-1 h-px" style={{ background: 'var(--border-palette, #3f4147)', opacity: 0.5 }} />
            <span className="text-[10px] font-medium" style={{ color: 'var(--fg-muted, #949ba4)' }}>{section.items.length} herramientas</span>
          </div>

          {/* Items Grid */}
          <div className="grid grid-cols-6 gap-3">
            {section.items.map((item, iIdx) => {
              const total = section.items.length;
              const remainder = total % 3;
              const isLastRow = remainder !== 0 && iIdx >= total - remainder;
              const colSpan = isLastRow
                ? remainder === 1 ? 'col-span-6' : 'col-span-3'
                : 'col-span-2';
              return (
                <div
                  key={iIdx}
                  className={`${colSpan} relative p-4 rounded-xl border border-transparent hover:border-white/10 transition-all duration-300 group overflow-hidden flex flex-col`}
                  style={{ background: 'var(--bg-main, #1e1f22)' }}
                >
                  {/* Background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                    style={{ background: `radial-gradient(circle at center, ${item.color}, transparent 70%)` }}
                  />

                  {/* Icon + Status */}
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div
                      className="p-2.5 rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ background: 'var(--bg-secondary, #2b2d31)', color: item.color }}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-1">
                      <div
                        className="w-2 h-2 rounded-full opacity-40 group-hover:opacity-100 transition-opacity animate-pulse"
                        style={{ background: section.accentColor }}
                      />
                    </div>
                  </div>

                  {/* Name */}
                  <div className="text-sm font-bold mb-0.5 relative z-10 transition-colors" style={{ color: 'var(--fg-main, #dbdee1)' }}>
                    {item.name}
                  </div>

                  {/* Description */}
                  <div className="text-[11px] relative z-10" style={{ color: 'var(--fg-muted, #949ba4)' }}>{item.desc}</div>

                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-0.5 px-2 py-1 rounded-full font-bold leading-none relative z-10 mt-auto w-fit"
                    style={{
                      fontSize: '8px',
                      backgroundColor: `${section.accentColor}20`,
                      color: section.accentColor,
                    }}
                  >
                    {(() => {
                      const spaceIdx = item.badge.search(' ');
                      if (spaceIdx === -1) return <span style={{ lineHeight: 1 }}>{item.badge}</span>;
                      return (
                        <>
                          <span style={{ lineHeight: 1, fontSize: '9px' }}>{item.badge.slice(0, spaceIdx)}</span>
                          <span style={{ lineHeight: 1, fontSize: '8px' }}>{item.badge.slice(spaceIdx + 1)}</span>
                        </>
                      );
                    })()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Footer */}
      <div className="widget widget-animate border-none shadow-xl" style={{ background: 'var(--bg-secondary, #2b2d31)' }}>
        <div className="flex items-center justify-between text-[11px]" style={{ color: 'var(--fg-muted, #949ba4)' }}>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Pipeline activa · Última actualización hoy</span>
          </div>
          <div className="flex items-center gap-1.5 font-bold" style={{ color: 'hsl(var(--accent-green))' }}>
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: 'hsl(var(--accent-green))' }} />
            Todo operativo
          </div>
        </div>
      </div>
    </div>
  );
};
