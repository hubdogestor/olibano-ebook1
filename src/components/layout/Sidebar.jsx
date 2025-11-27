import { menuItems } from '../../data/menuItems';

const Sidebar = ({ activeSection, onNavigate }) => (
  <aside className="hidden md:flex flex-col w-80 bg-white border-r border-olibano-sage/20 h-full shadow-xl z-20">
    <div className="p-8 border-b border-olibano-sage/10 flex flex-col items-center bg-gradient-to-b from-olibano-cream to-white">
      <img
        src="/images/logo-simbolo.png"
        alt="Olíbano"
        className="w-16 h-16 object-contain mb-4"
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          const fallback = e.currentTarget.nextSibling;
          if (fallback) fallback.style.display = 'flex';
        }}
      />
      <div className="w-16 h-16 hidden bg-gradient-to-br from-olibano-forest to-olibano-forest/80 rounded-full items-center justify-center text-olibano-cream font-serif font-bold text-2xl mb-4 shadow-lg">
        O
      </div>
      <span className="text-olibano-forest font-serif font-bold tracking-[0.3em] text-sm">OLÍBANO</span>
      <span className="text-olibano-forest/50 text-xs mt-1 tracking-wider">PRÁTICAS INTEGRATIVAS</span>
    </div>
    <nav className="flex-1 overflow-y-auto py-6 px-5 space-y-1">
      {menuItems.map(({ id, label, Icon }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-sm transition-all duration-300 ${
            activeSection === id
              ? 'bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream shadow-lg'
              : 'text-olibano-forest/60 hover:bg-olibano-cream hover:text-olibano-forest'
          }`}
        >
          <span className={activeSection === id ? 'text-olibano-gold' : 'text-olibano-sage'}>
            <Icon size={18} />
          </span>
          <span className="font-medium">{label}</span>
        </button>
      ))}
    </nav>
    <div className="p-6 border-t border-olibano-sage/10 bg-olibano-cream/50">
      <p className="text-xs text-olibano-forest/40 text-center">© 2025 Olíbano VIP</p>
    </div>
  </aside>
);

export default Sidebar;
