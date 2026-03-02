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
      // Solo aplicar parallax en desktop (lg: 1024px+)
      if (window.innerWidth < 1024) {
        leftColumn.style.transform = 'translateY(0)';
        return;
      }

      const scrollTop = window.scrollY;
      const leftHeight = leftColumn.offsetHeight;
      const windowHeight = window.innerHeight;
      const maxSticky = leftHeight - windowHeight + 64;

      if (scrollTop <= 0) {
        leftColumn.style.transform = 'translateY(0)';
      } else if (scrollTop < maxSticky) {
        leftColumn.style.transform = `translateY(-${scrollTop * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
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
        {/* Server Sidebar - Shows as hamburger on mobile, sticky on desktop */}
        <div className="shrink-0 lg:mr-4 z-50">
          <ServerSidebar activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="flex-1 flex flex-col lg:flex-row gap-2 lg:gap-8 w-full max-w-full">
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
