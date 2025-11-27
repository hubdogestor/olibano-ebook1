import { useState } from 'react';
import { getNextSectionId } from '../data/menuItems';

const useSectionNavigation = (initialSection = 'capa') => {
  const [activeSection, setActiveSection] = useState(initialSection);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (sectionId, afterNavigate) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    if (typeof afterNavigate === 'function') {
      afterNavigate();
    }
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const goToNextSection = () => {
    const nextId = getNextSectionId(activeSection);
    if (nextId) {
      setActiveSection(nextId);
    }
    return nextId;
  };

  return {
    activeSection,
    isMenuOpen,
    handleNavClick,
    toggleMenu,
    closeMenu,
    goToNextSection,
  };
};

export default useSectionNavigation;
