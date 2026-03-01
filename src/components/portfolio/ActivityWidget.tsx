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
    accentColor: '#5865F2',
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
    accentColor: '#eb459e',
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
    accentColor: '#3ba55d',
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
    accentColor: '#f0b232',
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
    accentColor: '#00c2a8',
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
      <div className="widget widget-animate bg-[#2b2d31] border-none shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-br from-[#5865F2] to-[#eb459e] shadow-lg shadow-[#5865F2]/20">
              <Workflow className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-white flex items-center gap-1.5">
                Mi Workflow
                <Sparkles className="w-4 h-4 text-[#f0b232] animate-float-gentle" />
              </h2>
              <p className="text-[11px] text-[#949ba4]">Herramientas y servicios que uso a diario</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1e1f22] text-[10px] font-bold text-[#23a559]">
            <div className="w-2 h-2 rounded-full bg-[#23a559] animate-pulse" />
            {workflow.reduce((a, s) => a + s.items.length, 0)} activas
          </div>
        </div>
      </div>

      {/* Category Sections */}
      {workflow.map((section, sIdx) => (
        <div key={sIdx} className="widget widget-animate bg-[#2b2d31] border-none shadow-xl">
          {/* Category Header */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-base">{section.emoji}</span>
            <h3 className="text-xs font-bold text-[#b5bac1] uppercase tracking-wider">{section.category}</h3>
            <div className="flex-1 h-px bg-[#3f4147]/50" />
            <span className="text-[10px] text-[#949ba4] font-medium">{section.items.length} herramientas</span>
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
                  className={`${colSpan} relative bg-[#1e1f22] p-4 rounded-xl border border-transparent hover:border-white/10 transition-all duration-300 group overflow-hidden flex flex-col`}
                >
                  {/* Background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"
                    style={{ background: `radial-gradient(circle at center, ${item.color}, transparent 70%)` }}
                  />

                  {/* Icon + Status */}
                  <div className="flex items-center justify-between mb-3 relative z-10">
                    <div
                      className="p-2.5 rounded-xl bg-[#2b2d31] transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                      style={{ color: item.color }}
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
                  <div className="text-sm font-bold text-white mb-0.5 relative z-10 group-hover:text-white transition-colors">
                    {item.name}
                  </div>

                  {/* Description */}
                  <div className="text-[11px] text-[#949ba4] relative z-10">{item.desc}</div>

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
      <div className="widget widget-animate bg-[#2b2d31] border-none shadow-xl">
        <div className="flex items-center justify-between text-[11px] text-[#949ba4]">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>Pipeline activa · Última actualización hoy</span>
          </div>
          <div className="flex items-center gap-1.5 text-[#23a559] font-bold">
            <div className="w-2 h-2 rounded-full bg-[#23a559] animate-pulse" />
            Todo operativo
          </div>
        </div>
      </div>
    </div>
  );
};
