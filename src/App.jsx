import { useRef } from 'react';
import useSectionNavigation from './hooks/useSectionNavigation';
import { menuItems, getNextSectionId, getSectionIndex } from './data/menuItems';

import Sidebar from './components/layout/Sidebar';
import MobileHeader from './components/layout/MobileHeader';
import MobileMenuOverlay from './components/layout/MobileMenuOverlay';
import NextSectionButton from './components/layout/NextSectionButton';
import ActiveSectionBadge from './components/common/ActiveSectionBadge';

import Capa from './sections/Capa';
import Intro from './sections/Intro';
import Aromaterapia from './sections/Aromaterapia';
import Breathwork from './sections/Breathwork';
import Meditacao from './sections/Meditacao';
import Gemologia from './sections/Gemologia';
import Cromoterapia from './sections/Cromoterapia';
import Binaural from './sections/Binaural';
import Roteiro from './sections/Roteiro';
import Autora from './sections/Autora';

const sectionComponents = {
  capa: Capa,
  intro: Intro,
  aroma: Aromaterapia,
  breath: Breathwork,
  meditacao: Meditacao,
  gemologia: Gemologia,
  cromoterapia: Cromoterapia,
  binaural: Binaural,
  roteiro: Roteiro,
  autora: Autora,
};

const App = () => {
  const scrollRef = useRef(null);
  const { activeSection, isMenuOpen, handleNavClick, toggleMenu, goToNextSection } = useSectionNavigation('capa');

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const navigateTo = (sectionId) => handleNavClick(sectionId, scrollToTop);

  const renderActiveSection = () => {
    const Component = sectionComponents[activeSection];
    if (!Component) return null;

    const sectionProps = {};
    if (activeSection === 'capa') {
      sectionProps.onStartReading = () => navigateTo('intro');
    }

    return <Component {...sectionProps} />;
  };

  const currentIndex = getSectionIndex(activeSection);
  const nextSectionId = getNextSectionId(activeSection);

  const handleNextSection = () => {
    const movedTo = goToNextSection();
    if (movedTo) {
      scrollToTop();
    }
  };

  return (
    <div className="flex h-screen bg-olibano-cream font-sans text-olibano-forest overflow-hidden relative selection:bg-olibano-gold/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Lato:wght@300;400;700&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .font-sans { font-family: 'Lato', -apple-system, BlinkMacSystemFont, sans-serif; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 1s ease-out; }
        .animate-slideUp { animation: slideUp 0.7s ease-out; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #8B9A7D; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #2D4A3E; }
      `}</style>

      <Sidebar activeSection={activeSection} onNavigate={navigateTo} />
      <MobileHeader isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <MobileMenuOverlay isOpen={isMenuOpen} activeSection={activeSection} onNavigate={navigateTo} />

      <main
        ref={scrollRef}
        className="flex-1 h-full overflow-y-auto pt-20 md:pt-0 bg-olibano-cream scroll-smooth relative"
      >
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url(/images/pattern.png)', backgroundSize: '400px' }}></div>
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-olibano-sage rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="fixed bottom-0 left-0 w-96 h-96 bg-olibano-gold rounded-full mix-blend-multiply filter blur-[80px] opacity-15 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        <div className="fixed top-1/2 right-0 w-64 h-64 bg-olibano-terracotta rounded-full mix-blend-multiply filter blur-[60px] opacity-10 pointer-events-none translate-x-1/2"></div>

        {typeof currentIndex === 'number' && currentIndex >= 0 && (
          <div className="hidden lg:flex fixed top-10 right-10 z-20">
            <ActiveSectionBadge
              currentIndex={currentIndex}
              total={menuItems.length}
              label={menuItems[currentIndex]?.label}
            />
          </div>
        )}

        <div className="relative z-10 pb-24">
          {renderActiveSection()}
        </div>

        <NextSectionButton
          isVisible={Boolean(nextSectionId) && !isMenuOpen && activeSection !== 'autora'}
          onNext={handleNextSection}
        />
      </main>
    </div>
  );
};

export default App;
            <div className="absolute bottom-20 right-10 w-24 h-24 border border-olibano-sage/30 rounded-full"></div>
