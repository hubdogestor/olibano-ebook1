import { Menu, X } from 'lucide-react';

const MobileHeader = ({ isMenuOpen, onToggleMenu }) => (
  <div className="md:hidden fixed top-0 w-full bg-white/95 backdrop-blur-lg z-30 border-b border-olibano-sage/20 px-5 py-4 flex justify-between items-center shadow-lg">
    <div className="flex items-center gap-3">
      <img
        src="/images/logo-simbolo.png"
        alt="Olíbano"
        className="w-8 h-8 object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
        }}
      />
      <span className="text-olibano-forest font-serif font-bold tracking-[0.2em] text-sm">OLÍBANO</span>
    </div>
    <button
      onClick={onToggleMenu}
      className="p-2 text-olibano-forest hover:bg-olibano-cream rounded-xl transition-colors"
    >
      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  </div>
);

export default MobileHeader;
