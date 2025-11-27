import { Heart, Sparkles } from 'lucide-react';
import SectionWrapper from '../components/common/SectionWrapper';

const Autora = () => (
  <SectionWrapper>
    <div className="bg-white rounded-3xl shadow-2xl border border-olibano-sage/10 overflow-hidden">
      <div className="bg-gradient-to-r from-olibano-forest via-olibano-forest/95 to-olibano-forest h-40 relative">
        <div className="absolute inset-0 opacity-20">
          {[10, 40, 70].map((left) => (
            <div
              key={left}
              className="absolute w-32 h-32 border border-olibano-gold/30 rounded-full"
              style={{ left: `${left}%`, top: '20%' }}
            ></div>
          ))}
        </div>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="w-36 h-36 rounded-full border-4 border-white bg-olibano-cream flex items-center justify-center overflow-hidden shadow-xl">
            <img
              src="/images/foto-betusa2.jpg"
              alt="Dra. Betusa"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="pt-24 pb-10 px-8 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-4 text-olibano-terracotta uppercase tracking-widest text-xs font-semibold">
          <Heart size={16} />
          Quem conduz
        </div>
        <h2 className="text-3xl font-serif text-olibano-forest font-bold">Dra. Betusa</h2>
        <p className="text-olibano-terracotta text-sm uppercase tracking-widest mt-2 font-medium">Médica & Cofundadora Olíbano</p>

        <div className="w-16 h-px bg-gradient-to-r from-transparent via-olibano-gold to-transparent mx-auto my-6"></div>

        <p className="text-olibano-forest/70 mt-6 leading-relaxed">
          Médica com 25 anos de atuação em emergência pediátrica e referência em gestão médica no RS. Integra saberes tradicionais e ciência contemporânea para criar experiências práticas, seguras e transformadoras.
        </p>

        <div className="mt-10 space-y-4">
          <div className="p-6 bg-gradient-to-br from-olibano-cream to-olibano-sage/20 rounded-2xl border border-olibano-sage/30">
            <div className="flex items-center justify-center gap-3 mb-3">
              <img
                src="/images/logo-simbolo.png"
                alt="Olíbano"
                className="w-8 h-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h3 className="font-serif font-bold text-olibano-forest text-xl">Olíbano - Práticas Integrativas</h3>
            </div>
            <p className="text-olibano-forest/60 text-sm mb-5">📍 Porto Alegre, RS</p>
            <a
              href="#"
              className="block w-full py-4 bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream rounded-xl font-bold hover:from-olibano-forest/90 hover:to-olibano-forest transition-all shadow-lg hover:shadow-xl"
            >
              Agendar Experiência
            </a>
          </div>
          <div className="text-sm text-olibano-forest/40 space-y-1">
            <p>www.olibanovip.com.br</p>
            <p>@olibanovip</p>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export default Autora;
