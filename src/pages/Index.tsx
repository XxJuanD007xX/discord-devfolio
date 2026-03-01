import { useEffect, useRef, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import { ProfileCard } from '@/components/portfolio/ProfileCard';
import { StatsWidget } from '@/components/portfolio/StatsWidget';
import { ProjectsWidget } from '@/components/portfolio/ProjectsWidget';
import { ExperienceWidget } from '@/components/portfolio/ExperienceWidget';
import { EducationWidget } from '@/components/portfolio/EducationWidget';
import { ContactWidget } from '@/components/portfolio/ContactWidget';
import { ServerSidebar } from '@/components/portfolio/ServerSidebar';
import { ActivityWidget } from '@/components/portfolio/ActivityWidget';
import { HobbiesWidget } from '@/components/portfolio/HobbiesWidget';
import { ColorPalettePicker } from '@/components/portfolio/ColorPalettePicker';
import { UserArea } from '@/components/portfolio/UserArea';
import gsap from 'gsap';

const Index = () => {
  const [activeTab, setActiveTab] = useState('board');
  useLenis();
  useGSAPAnimations([activeTab]);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Synchronized scroll effect - left column follows right column
  useEffect(() => {
    const rightColumn = rightColumnRef.current;
    const leftColumn = leftColumnRef.current;
    const container = containerRef.current;

    if (!rightColumn || !leftColumn || !container) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const leftHeight = leftColumn.offsetHeight;
      const windowHeight = window.innerHeight;
      const maxSticky = leftHeight - windowHeight + 64; // 64px = padding

      if (scrollTop <= 0) {
        leftColumn.style.transform = 'translateY(0)';
      } else if (scrollTop < maxSticky) {
        leftColumn.style.transform = `translateY(-${scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate progress bars on load
  useEffect(() => {
    const progressBars = document.querySelectorAll('.h-2.bg-secondary .h-full');

    gsap.fromTo(
      progressBars,
      { width: '0%' },
      {
        width: (i, el) => el.style.width,
        duration: 1.5,
        ease: 'power3.out',
        stagger: 0.05,
        delay: 1.2,
      }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background"
    >
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-8 flex">
        {/* Desktop Server Sidebar */}
        <div className="hidden lg:block shrink-0 mr-4">
          <ServerSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-4 md:gap-8 w-full max-w-full">
          {/* Left Column - Profile Card */}
          <div
            ref={leftColumnRef}
            className="lg:w-[340px] shrink-0 lg:sticky lg:top-8 lg:self-start transition-transform duration-200 ease-out z-10"
          >
            <ProfileCard />
          </div>

          {/* Right Column - Widgets */}
          <div
            ref={rightColumnRef}
            className="flex-1 min-w-0"
          >
            {/* Mobile Tabs (Optional, or just hide on mobile too if not needed, but let's keep it simple for now and rely on sidebar logic, or we could conditionally render horizontal scroll tabs) */}
            <div className="lg:hidden flex gap-2 mb-4 overflow-x-auto pb-2 custom-scrollbar">
              {['board', 'activity', 'hobbies'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-bold whitespace-nowrap transition-colors ${activeTab === tab ? 'bg-[#5865F2] text-white' : 'bg-[#2b2d31] text-[#b5bac1]'}`}
                >
                  {tab === 'board' ? 'Proyectos' : tab === 'activity' ? 'Stack' : 'Hobbies'}
                </button>
              ))}
            </div>

            {/* Content based on active tab */}
            {activeTab === 'board' && (
              <div className="space-y-3 md:space-y-4">
                <StatsWidget />
                <div id="proyectos"><ProjectsWidget /></div>
                <div id="experiencia"><ExperienceWidget /></div>
                <div id="educacion"><EducationWidget /></div>
                <div id="contacto"><ContactWidget /></div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="space-y-3 md:space-y-4">
                <ActivityWidget />
              </div>
            )}

            {activeTab === 'hobbies' && (
              <div className="space-y-3 md:space-y-4">
                <HobbiesWidget />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Color Palette Picker */}
      <ColorPalettePicker />

      {/* Background glow effect */}
      <div
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, hsl(330, 85%, 50%, 0.15) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default Index;
