import { menuItems } from '../../data/menuItems';

const MobileMenuOverlay = ({ isOpen, activeSection, onNavigate }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-20 pt-24 px-6 overflow-y-auto md:hidden animate-fadeIn">
      <nav className="space-y-2">
        {menuItems.map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={`w-full flex items-center gap-4 px-5 py-5 rounded-2xl text-lg transition-all ${
              activeSection === id
                ? 'bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream'
                : 'text-olibano-forest/70 hover:bg-olibano-cream'
            }`}
          >
            <span className={activeSection === id ? 'text-olibano-gold' : 'text-olibano-sage'}>
              <Icon size={20} />
            </span>
            {label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenuOverlay;
