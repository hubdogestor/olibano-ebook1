import { Headphones, Sparkles, AlertTriangle } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';
import SectionHeading from '../components/common/SectionHeading';

const frequencyMenu = [
  { label: 'Alfa', description: 'Relaxamento calmo, foco leve (8-12 Hz)' },
  { label: 'Teta', description: 'Criatividade, introspecção (4-7 Hz)' },
  { label: 'Delta', description: 'Sono profundo (0.5-4 Hz)' },
];

const Binaural = () => (
  <SectionWrapper>
    <SectionHeading Icon={Headphones} title="Ondas Binaurais" eyebrow="Prática 06" accentClasses="bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-700" />

    <p className="text-olibano-forest/80 mb-8 leading-relaxed text-lg font-light">
      Quando cada ouvido recebe um tom ligeiramente diferente, o cérebro cria uma terceira frequência (o batimento). É como <span className="text-olibano-terracotta font-medium">afinar o cérebro para uma estação de rádio específica</span>.
    </p>

    <div className="bg-gradient-to-br from-olibano-forest via-olibano-forest/95 to-olibano-forest text-white p-8 rounded-3xl shadow-2xl mb-10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[20, 35, 50, 65, 80].map((top, index) => (
            <div
              key={top}
              className="absolute w-full h-px bg-olibano-gold"
              style={{ top: `${top}%`, transform: `rotate(${index * 2 - 3}deg)` }}
            ></div>
          ))}
        </div>
      </div>
      <h3 className="relative z-10 font-serif text-2xl mb-6 flex items-center gap-3">
        <Sparkles className="text-olibano-gold" size={24} />
        O Menu de Frequências
      </h3>
      <ul className="relative z-10 space-y-4">
        {frequencyMenu.map(({ label, description }) => (
          <li key={label} className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
            <span className="w-20 font-bold text-olibano-gold text-lg">{label}</span>
            <span className="text-white/80">{description}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8 p-4 bg-olibano-terracotta/30 rounded-xl text-center relative z-10 border border-olibano-terracotta/50">
        <span className="flex items-center justify-center gap-2">
          <AlertTriangle size={18} />
          Obrigatório o uso de fones de ouvido estéreo.
        </span>
      </div>
    </div>
  </SectionWrapper>
);

export default Binaural;
