import { useEffect, useRef, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';
import { useGSAPAnimations } from '@/hooks/useGSAPAnimations';
import { ProfileCard } from '@/components/portfolio/ProfileCard';
import { StatsWidget } from '@/components/portfolio/StatsWidget';
import { ProjectsWidget } from '@/components/portfolio/ProjectsWidget';
import { ExperienceWidget } from '@/components/portfolio/ExperienceWidget';
import { EducationWidget } from '@/components/portfolio/EducationWidget';
import { ContactWidget } from '@/components/portfolio/ContactWidget';
import { ActivityTabs } from '@/components/portfolio/ActivityTabs';
import { ActivityWidget } from '@/components/portfolio/ActivityWidget';
import { HobbiesWidget } from '@/components/portfolio/HobbiesWidget';
import { ColorPalettePicker } from '@/components/portfolio/ColorPalettePicker';
import gsap from 'gsap';

const Index = () => {
  useLenis();
  useGSAPAnimations();
  
  const [activeTab, setActiveTab] = useState('board');
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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column - Profile Card */}
          <div 
            ref={leftColumnRef}
            className="lg:w-[340px] lg:sticky lg:top-8 lg:self-start transition-transform duration-200 ease-out"
          >
            <ProfileCard />
          </div>

          {/* Right Column - Widgets */}
          <div 
            ref={rightColumnRef}
            className="flex-1 min-w-0"
          >
            {/* Tabs */}
            <div className="widget-animate">
              <ActivityTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>

            {/* Content based on active tab */}
            {activeTab === 'board' && (
              <div className="space-y-4">
                <StatsWidget />
                <ProjectsWidget />
                <ExperienceWidget />
                <EducationWidget />
                <ContactWidget />
              </div>
            )}
            
            {activeTab === 'activity' && (
              <div className="space-y-4">
                <ActivityWidget />
              </div>
            )}

            {activeTab === 'hobbies' && (
              <div className="space-y-4">
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
