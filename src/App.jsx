import React, { useState, useEffect, useRef } from 'react';
import { 
  Wind, 
  Droplets, 
  Brain, 
  Gem, 
  Sun, 
  Headphones, 
  Menu, 
  X, 
  ChevronRight, 
  AlertTriangle,
  Calendar,
  Leaf,
  Info,
  Heart,
  Sparkles
} from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('capa');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollRef = useRef(null);

  const scrollToTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    scrollToTop();
  };

  const menuItems = [
    { id: 'capa', label: 'Capa', icon: <Leaf size={18} /> },
    { id: 'intro', label: 'Boas-vindas & EFV', icon: <Info size={18} /> },
    { id: 'aroma', label: 'Aromaterapia', icon: <Droplets size={18} /> },
    { id: 'breath', label: 'Breathwork', icon: <Wind size={18} /> },
    { id: 'meditacao', label: 'Meditação', icon: <Brain size={18} /> },
    { id: 'gemologia', label: 'Gemologia', icon: <Gem size={18} /> },
    { id: 'cromoterapia', label: 'Cromoterapia', icon: <Sun size={18} /> },
    { id: 'binaural', label: 'Ondas Binaurais', icon: <Headphones size={18} /> },
    { id: 'roteiro', label: 'Roteiro 7 Dias', icon: <Calendar size={18} /> },
    { id: 'autora', label: 'Sobre a Autora', icon: <Heart size={18} /> },
  ];

  // Componente de Respiração Animada
  const BreathingExercise = () => {
    const [phase, setPhase] = useState('Inspire (4s)');
    const [scale, setScale] = useState(1);
    
    useEffect(() => {
      const interval = setInterval(() => {
        // Ciclo simples para demonstração visual 4-6
        setPhase('Inspire (4s)');
        setScale(1.5);
        setTimeout(() => {
          setPhase('Expire (6s)');
          setScale(1);
        }, 4000);
      }, 10000);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex flex-col items-center justify-center p-10 bg-gradient-to-br from-olibano-cream to-olibano-sage/20 rounded-3xl shadow-inner my-8 border border-olibano-sage/30">
        <h3 className="text-olibano-forest font-serif text-xl mb-6">Prática Visual: Ritmo 4-6</h3>
        <div 
          className="w-36 h-36 rounded-full bg-gradient-to-br from-olibano-gold via-olibano-terracotta to-olibano-forest flex items-center justify-center text-white font-semibold transition-all duration-[4000ms] ease-in-out shadow-2xl"
          style={{ transform: `scale(${scale})` }}
        >
          <span className="text-center text-sm drop-shadow-lg">{phase}</span>
        </div>
        <p className="mt-10 text-sm text-olibano-forest/70 text-center max-w-sm font-light">
          Siga o círculo: inspire quando ele expandir, expire quando ele contrair.
        </p>
      </div>
    );
  };

  // Card decorativo com borda dourada
  const GoldenCard = ({ children, className = "" }) => (
    <div className={`relative bg-white rounded-2xl p-6 shadow-lg border border-olibano-gold/20 overflow-hidden ${className}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-olibano-gold via-olibano-terracotta to-olibano-gold"></div>
      {children}
    </div>
  );

  // Renderização de Conteúdo
  const renderContent = () => {
    switch (activeSection) {
      case 'capa':
        return (
          <div className="flex flex-col items-center justify-center min-h-full text-center px-6 py-16 animate-fadeIn relative">
            {/* Decorative elements */}
            <div className="absolute top-10 left-10 w-32 h-32 border border-olibano-gold/20 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 border border-olibano-sage/30 rounded-full"></div>
            
            {/* Logo */}
            <div className="mb-10">
              <img 
                src="/images/logo-simbolo.png" 
                alt="Olíbano" 
                className="w-28 h-28 object-contain drop-shadow-lg"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-28 h-28 hidden rounded-full border-2 border-olibano-gold bg-gradient-to-br from-olibano-cream to-olibano-sage/30 items-center justify-center">
                <Sparkles className="w-12 h-12 text-olibano-gold" />
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-olibano-gold"></div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-olibano-gold"></div>
              <h1 className="text-5xl md:text-6xl font-serif text-olibano-forest mb-2 tracking-wide leading-tight">
                ENERGIA,
              </h1>
              <h1 className="text-5xl md:text-6xl font-serif text-olibano-forest mb-2 tracking-wide leading-tight">
                FREQUÊNCIA
              </h1>
              <h1 className="text-5xl md:text-6xl font-serif text-olibano-terracotta tracking-wide leading-tight">
                & VIBRAÇÃO
              </h1>
            </div>

            <div className="w-24 h-px bg-gradient-to-r from-transparent via-olibano-gold to-transparent my-8"></div>

            <p className="text-lg text-olibano-forest/70 max-w-lg mx-auto mb-12 font-light leading-relaxed">
              Um guia prático para experimentar <span className="text-olibano-terracotta font-medium">aromaterapia</span>, <span className="text-olibano-terracotta font-medium">breathwork</span>, <span className="text-olibano-terracotta font-medium">meditação</span>, <span className="text-olibano-terracotta font-medium">gemologia</span>, <span className="text-olibano-terracotta font-medium">cromoterapia</span> e <span className="text-olibano-terracotta font-medium">ondas binaurais</span>.
            </p>

            <GoldenCard className="max-w-xl">
              <p className="italic text-olibano-forest/80 font-serif text-lg leading-relaxed">
                "Um convite para você sentir na prática como pequenas mudanças energéticas podem transformar bem-estar, foco e equilíbrio — em minutos por dia."
              </p>
            </GoldenCard>

            <button 
              onClick={() => handleNavClick('intro')}
              className="mt-14 px-10 py-4 bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream rounded-full hover:from-olibano-forest/90 hover:to-olibano-forest transition-all shadow-xl flex items-center gap-3 text-lg font-medium hover:scale-105 transform duration-300"
            >
              Iniciar Leitura <ChevronRight size={22} />
            </button>
          </div>
        );

      case 'intro':
        return (
          <div className="px-6 py-12 max-w-3xl mx-auto animate-slideUp">
            <div className="bg-gradient-to-r from-olibano-terracotta/10 to-olibano-gold/10 border-l-4 border-olibano-terracotta p-6 mb-12 rounded-r-2xl">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-olibano-terracotta/20 rounded-full">
                  <AlertTriangle className="text-olibano-terracotta shrink-0" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-olibano-forest text-lg">Aviso de Segurança</h3>
                  <p className="text-olibano-forest/70 mt-2 leading-relaxed">
                    Este material é educativo. Em caso de condições de saúde específicas, procure orientação profissional. Use o princípio "Menos é Mais".
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-olibano-gold"></div>
              <h2 className="text-4xl font-serif text-olibano-forest">Boas-vindas</h2>
            </div>
            
            <p className="text-olibano-forest/80 leading-relaxed mb-10 text-lg font-light">
              Este e-book foi pensado para quem está começando — de forma leve, acolhedora e prática. Você vai conquistar o entendimento essencial sobre seis práticas holísticas e experimentar exercícios simples de <span className="text-olibano-terracotta font-semibold">3 a 10 minutos</span>.
            </p>

            <div className="w-full h-px bg-gradient-to-r from-transparent via-olibano-sage/50 to-transparent my-12"></div>

            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-olibano-gold"></div>
              <h2 className="text-4xl font-serif text-olibano-forest">A Linguagem Comum (EFV)</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="group bg-white p-8 rounded-3xl shadow-md border border-olibano-sage/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-olibano-gold to-olibano-terracotta rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">E</span>
                </div>
                <div className="text-olibano-forest mb-3 font-serif font-bold text-2xl">Energia</div>
                <p className="text-olibano-forest/60 leading-relaxed">Capacidade de produzir mudança — no corpo, mente e ambiente.</p>
              </div>
              <div className="group bg-white p-8 rounded-3xl shadow-md border border-olibano-sage/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-olibano-sage to-olibano-forest rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">F</span>
                </div>
                <div className="text-olibano-forest mb-3 font-serif font-bold text-2xl">Frequência</div>
                <p className="text-olibano-forest/60 leading-relaxed">Quão rápido algo vibra ou oscila. Ex: ritmos cardíacos.</p>
              </div>
              <div className="group bg-white p-8 rounded-3xl shadow-md border border-olibano-sage/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 bg-gradient-to-br from-olibano-terracotta to-olibano-gold rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-2xl">V</span>
                </div>
                <div className="text-olibano-forest mb-3 font-serif font-bold text-2xl">Vibração</div>
                <p className="text-olibano-forest/60 leading-relaxed">Movimento oscilatório em nós e ao nosso redor.</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-olibano-sage/20 to-olibano-cream p-8 rounded-3xl border border-olibano-sage/30">
              <h4 className="font-serif font-bold text-olibano-forest mb-4 text-xl flex items-center gap-3">
                <Sparkles className="text-olibano-gold" size={24} />
                Como tudo se conecta?
              </h4>
              <p className="text-olibano-forest/70 leading-relaxed">
                Aromas alcançam o sistema límbico em segundos. O Breathwork ajusta ritmos internos. A Meditação modula ondas cerebrais. Tudo é uma orquestração de frequências para o seu bem-estar.
              </p>
            </div>
          </div>
        );

      case 'aroma':
        return (
          <div className="px-6 py-12 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl text-purple-700 shadow-md">
                <Droplets size={28} />
              </div>
              <h2 className="text-4xl font-serif text-olibano-forest">Aromaterapia</h2>
            </div>
            
            <p className="text-olibano-forest/80 mb-10 leading-relaxed text-lg font-light">
              Uso de óleos essenciais 100% puros para promover bem-estar. Não são apenas "cheirinhos", são <span className="text-olibano-terracotta font-medium">moléculas químicas complexas</span> que interagem com nosso sistema límbico.
            </p>

            <div className="grid md:grid-cols-2 gap-5 mb-12">
              {[
                { name: 'Lavanda', effect: 'Redução de estresse e ansiedade', gradient: 'from-purple-400 to-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' },
                { name: 'Laranja-doce', effect: 'Calma e bem-estar', gradient: 'from-orange-400 to-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
                { name: 'Hortelã-pimenta', effect: 'Clareza mental e foco', gradient: 'from-emerald-400 to-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
                { name: 'Alecrim', effect: 'Concentração', gradient: 'from-green-400 to-green-600', bg: 'bg-green-50', border: 'border-green-200' }
              ].map((oil) => (
                <div key={oil.name} className={`${oil.bg} ${oil.border} border p-6 rounded-2xl flex items-start gap-4 hover:shadow-lg transition-all duration-300 group`}>
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${oil.gradient} shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}></div>
                  <div>
                    <span className="font-serif font-bold text-olibano-forest text-xl block mb-1">{oil.name}</span>
                    <span className="text-olibano-forest/60">{oil.effect}</span>
                  </div>
                </div>
              ))}
            </div>

            <GoldenCard>
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl text-olibano-forest flex items-center gap-3">
                  <Sparkles className="text-olibano-gold" size={24} />
                  Exercício: Âncora Aromática
                </h3>
                <span className="bg-olibano-gold/20 text-olibano-forest text-sm px-4 py-2 rounded-full font-bold">3 min</span>
              </div>
              <ol className="list-none space-y-4 text-olibano-forest/80">
                {[
                  'Escolha um óleo essencial (ex: Lavanda ou Hortelã).',
                  'Pingue 1 gota em algodão.',
                  'Inspire gentilmente a 20 cm do nariz por 3 ciclos (4s inspirar, 6s expirar).',
                  'Nomeie em voz baixa o estado desejado (ex: "calma").'
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-8 h-8 bg-gradient-to-br from-olibano-gold to-olibano-terracotta rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="pt-1">{step}</span>
                  </li>
                ))}
              </ol>
            </GoldenCard>
          </div>
        );

      case 'breath':
        return (
          <div className="px-6 py-12 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-sky-100 to-sky-200 rounded-2xl text-sky-700 shadow-md">
                <Wind size={28} />
              </div>
              <h2 className="text-4xl font-serif text-olibano-forest">Breathwork</h2>
            </div>
            
            <p className="text-olibano-forest/80 mb-8 leading-relaxed text-lg font-light">
              Técnicas intencionais de respiração para modular energia. É a ferramenta mais rápida para <span className="text-olibano-terracotta font-medium">hackear seu sistema nervoso autônomo</span>.
            </p>

            <BreathingExercise />

            <div className="grid gap-5 mt-10">
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-sky-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-xl flex items-center justify-center">
                    <span className="text-sky-600 font-bold">4-6</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-olibano-forest">Respiração 4-6 (Relaxamento)</h4>
                </div>
                <p className="text-olibano-forest/60 leading-relaxed">Inspire por 4 segundos, expire por 6 segundos. Induz o sistema parassimpático (descanso e digestão).</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-indigo-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <span className="text-indigo-600 font-bold text-xs">BOX</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-olibano-forest">Box Breathing (Foco)</h4>
                </div>
                <p className="text-olibano-forest/60 leading-relaxed">Inspire 4s → Segure 4s → Expire 4s → Segure 4s. Usada por militares para manter a calma sob pressão.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-rose-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                    <span className="text-rose-600 font-bold text-xs">2+1</span>
                  </div>
                  <h4 className="font-serif font-bold text-xl text-olibano-forest">Suspiro Fisiológico (Reset)</h4>
                </div>
                <p className="text-olibano-forest/60 leading-relaxed">2 inspirações rápidas pelo nariz + 1 expiração longa pela boca. O botão de "reset" da ansiedade.</p>
              </div>
            </div>
          </div>
        );
      
      case 'meditacao':
        return (
          <div className="px-6 py-12 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl text-teal-700 shadow-md">
                <Brain size={28} />
              </div>
              <h2 className="text-4xl font-serif text-olibano-forest">Meditação</h2>
            </div>
            
            <p className="text-olibano-forest/80 mb-10 leading-relaxed text-lg font-light">
              Treino de atenção e consciência. Não é sobre "esvaziar a mente", mas <span className="text-olibano-terracotta font-medium">observar os pensamentos sem embarcar neles</span>.
            </p>

            <div className="bg-gradient-to-br from-teal-50 via-emerald-50 to-olibano-cream p-10 rounded-3xl mb-10 border border-teal-100 shadow-lg">
              <h3 className="font-serif text-3xl text-olibano-forest mb-8 text-center flex items-center justify-center gap-3">
                <Sparkles className="text-olibano-gold" size={28} />
                Exercício: Palavra-Guia
              </h3>
              <div className="space-y-5 max-w-md mx-auto">
                <p className="text-olibano-forest/70 text-center mb-6">Sente-se confortavelmente.</p>
                <div className="flex justify-between items-center bg-white/80 p-5 rounded-2xl shadow-sm border border-teal-100">
                  <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Inspire</span>
                  <span className="text-2xl font-serif text-olibano-forest">"Recebo"</span>
                </div>
                <div className="flex justify-between items-center bg-white/80 p-5 rounded-2xl shadow-sm border border-teal-100">
                  <span className="text-sm font-bold text-teal-600 uppercase tracking-wider">Expire</span>
                  <span className="text-2xl font-serif text-olibano-forest">"Solto"</span>
                </div>
                <p className="text-sm text-olibano-forest/60 italic mt-6 text-center">
                  Quando a mente vagar, gentilmente reconheça e volte para as palavras.
                </p>
              </div>
            </div>
          </div>
        );

      case 'gemologia':
        return (
          <div className="px-6 py-12 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-pink-100 to-pink-200 rounded-2xl text-pink-700 shadow-md">
                <Gem size={28} />
              </div>
              <h2 className="text-4xl font-serif text-olibano-forest">Gemologia Contemplativa</h2>
            </div>
            
            <p className="text-olibano-forest/80 mb-10 leading-relaxed text-lg font-light">
              Uso de cristais como <span className="text-olibano-terracotta font-medium">âncoras sensoriais</span>. Segurar uma pedra pode servir como um lembrete físico de uma intenção mental.
            </p>

            <div className="grid grid-cols-2 gap-5 mb-10">
              {[
                { name: 'Quartzo Transparente', effect: 'Clareza e Foco', gradient: 'from-gray-200 via-white to-gray-100', iconBg: 'bg-gray-100' },
                { name: 'Ametista', effect: 'Calma e Introspecção', gradient: 'from-purple-300 via-purple-200 to-purple-400', iconBg: 'bg-purple-100' },
                { name: 'Quartzo Rosa', effect: 'Autocuidado', gradient: 'from-pink-300 via-pink-200 to-pink-400', iconBg: 'bg-pink-100' },
                { name: 'Citrino', effect: 'Vitalidade', gradient: 'from-yellow-300 via-yellow-200 to-amber-400', iconBg: 'bg-yellow-100' }
              ].map((crystal) => (
                <div key={crystal.name} className="bg-white rounded-3xl shadow-md flex flex-col items-center justify-center p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-olibano-sage/10 group">
                  <div className={`w-16 h-16 ${crystal.iconBg} rounded-full mb-4 overflow-hidden relative shadow-inner group-hover:scale-110 transition-transform`}>
                    <div className={`absolute inset-0 bg-gradient-to-tr ${crystal.gradient} opacity-90`}></div>
                    <div className="absolute inset-0 bg-white/20 rounded-full scale-50"></div>
                  </div>
                  <strong className="text-olibano-forest font-serif text-lg">{crystal.name}</strong>
                  <span className="text-olibano-forest/50 text-sm mt-2">{crystal.effect}</span>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-olibano-cream to-olibano-sage/20 p-6 rounded-2xl border border-olibano-sage/30">
              <strong className="text-olibano-forest flex items-center gap-2 mb-2">
                <Sparkles className="text-olibano-gold" size={18} />
                Dica:
              </strong>
              <p className="text-olibano-forest/70 leading-relaxed">
                Mantenha a prática no campo simbólico. Segure o cristal, sinta a textura e nomeie sua intenção (ex: "Fé", "Foco").
              </p>
            </div>
          </div>
        );

      case 'cromoterapia':
        return (
          <div className="px-6 py-12 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-2xl text-yellow-700 shadow-md">
                <Sun size={28} />
              </div>
              <h2 className="text-4xl font-serif text-olibano-forest">Cromoterapia</h2>
            </div>
            
            <p className="text-olibano-forest/80 mb-10 leading-relaxed text-lg font-light">
              Cores têm poder. A luz fria desperta, a luz quente acolhe. Usamos cores para <span className="text-olibano-terracotta font-medium">ajustar o estado de alerta</span>.
            </p>

            <div className="space-y-5 mb-10">
              <div className="flex items-center p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-green-400 mr-5 shadow-lg flex-shrink-0"></div>
                <div>
                  <h4 className="font-serif font-bold text-olibano-forest text-xl mb-1">Azul & Verde</h4>
                  <p className="text-olibano-forest/60">Calma, equilíbrio. Use luzes suaves à noite.</p>
                </div>
              </div>
              <div className="flex items-center p-6 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-100 shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-400 mr-5 shadow-lg flex-shrink-0"></div>
                <div>
                  <h4 className="font-serif font-bold text-olibano-forest text-xl mb-1">Amarelo & Laranja</h4>
                  <p className="text-olibano-forest/60">Criatividade, vitalidade. Luz natural pela manhã.</p>
                </div>
              </div>
            </div>

            <GoldenCard>
              <h3 className="font-serif text-2xl text-olibano-forest mb-4 flex items-center gap-3">
                <Sparkles className="text-olibano-gold" size={24} />
                Exercício: Banho de Cor
              </h3>
              <p className="text-olibano-forest/70 leading-relaxed">
                Feche os olhos. Imagine uma cor que representa o que você precisa agora preenchendo seu peito ao inspirar, e relaxando seus ombros ao expirar.
              </p>
            </GoldenCard>
          </div>
        );

      case 'binaural':
        return (
          <div className="px-6 py-12 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl text-indigo-700 shadow-md">
                <Headphones size={28} />
              </div>
              <h2 className="text-4xl font-serif text-olibano-forest">Ondas Binaurais</h2>
            </div>
            
            <p className="text-olibano-forest/80 mb-8 leading-relaxed text-lg font-light">
              Quando cada ouvido recebe um tom ligeiramente diferente, o cérebro cria uma terceira frequência (o batimento). É como <span className="text-olibano-terracotta font-medium">afinar o cérebro para uma estação de rádio específica</span>.
            </p>
            
            <div className="bg-gradient-to-br from-olibano-forest via-olibano-forest/95 to-olibano-forest text-white p-8 rounded-3xl shadow-2xl mb-10 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="absolute w-full h-px bg-olibano-gold" style={{ top: '20%', transform: 'rotate(-3deg)' }}></div>
                  <div className="absolute w-full h-px bg-olibano-gold" style={{ top: '35%', transform: 'rotate(-1deg)' }}></div>
                  <div className="absolute w-full h-px bg-olibano-gold" style={{ top: '50%', transform: 'rotate(1deg)' }}></div>
                  <div className="absolute w-full h-px bg-olibano-gold" style={{ top: '65%', transform: 'rotate(3deg)' }}></div>
                  <div className="absolute w-full h-px bg-olibano-gold" style={{ top: '80%', transform: 'rotate(5deg)' }}></div>
                </div>
              </div>
              <h3 className="relative z-10 font-serif text-2xl mb-6 flex items-center gap-3">
                <Sparkles className="text-olibano-gold" size={24} />
                O Menu de Frequências
              </h3>
              <ul className="relative z-10 space-y-4">
                <li className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <span className="w-20 font-bold text-olibano-gold text-lg">Alfa</span>
                  <span className="text-white/80">Relaxamento calmo, foco leve (8-12 Hz)</span>
                </li>
                <li className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <span className="w-20 font-bold text-olibano-gold text-lg">Teta</span>
                  <span className="text-white/80">Criatividade, introspecção (4-7 Hz)</span>
                </li>
                <li className="flex items-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <span className="w-20 font-bold text-olibano-gold text-lg">Delta</span>
                  <span className="text-white/80">Sono profundo (0.5-4 Hz)</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-olibano-terracotta/30 rounded-xl text-center relative z-10 border border-olibano-terracotta/50">
                <span className="flex items-center justify-center gap-2">
                  <AlertTriangle size={18} />
                  Obrigatório o uso de fones de ouvido estéreo.
                </span>
              </div>
            </div>
          </div>
        );

      case 'roteiro':
        return (
          <div className="px-6 py-12 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-4 mb-10">
              <div className="p-3 bg-gradient-to-br from-olibano-gold/30 to-olibano-terracotta/30 rounded-2xl text-olibano-terracotta shadow-md">
                <Calendar size={28} />
              </div>
              <h2 className="text-4xl font-serif text-olibano-forest">Roteiro de 7 Dias</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { day: 1, title: 'Acalmar', desc: 'Lavanda + Respiração 4-6 (5 min) + "Banho de Cor" Azul.', color: 'from-blue-400 to-blue-600' },
                { day: 2, title: 'Foco', desc: 'Hortelã-pimenta + Box Breathing + Binaural Alfa.', color: 'from-emerald-400 to-emerald-600' },
                { day: 3, title: 'Sono', desc: 'Luz âmbar à noite + Meditação de respiração + Camomila.', color: 'from-indigo-400 to-indigo-600' },
                { day: 4, title: 'Criatividade', desc: 'Cromoterapia Amarela + Teta + Intenção com Citrino.', color: 'from-yellow-400 to-amber-500' },
                { day: 5, title: 'Presença', desc: 'Varredura corporal + Quartzo Rosa (Autocuidado).', color: 'from-pink-400 to-pink-600' },
                { day: 6, title: 'Reset Emocional', desc: 'Suspiro fisiológico 3x + Lavanda + Journaling (Gratidão).', color: 'from-purple-400 to-purple-600' },
                { day: 7, title: 'Flow', desc: 'Micro-ritual completo + 50 min na tarefa mais importante.', color: 'from-olibano-gold to-olibano-terracotta' },
              ].map((item) => (
                <div key={item.day} className="flex bg-white rounded-2xl shadow-md border border-olibano-sage/10 overflow-hidden hover:shadow-lg transition-all group">
                  <div className={`bg-gradient-to-br ${item.color} text-white w-20 flex flex-col items-center justify-center py-4 shrink-0`}>
                    <span className="text-sm opacity-80">DIA</span>
                    <span className="font-bold text-3xl font-serif">{item.day}</span>
                  </div>
                  <div className="p-5 flex-1">
                    <h4 className="font-serif font-bold text-olibano-forest text-lg uppercase tracking-wide group-hover:text-olibano-terracotta transition-colors">{item.title}</h4>
                    <p className="text-olibano-forest/60 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <GoldenCard className="mt-12">
              <h3 className="font-serif text-olibano-forest mb-5 text-xl flex items-center gap-3">
                <Sparkles className="text-olibano-gold" size={22} />
                Checklist Diário
              </h3>
              <div className="space-y-4 text-olibano-forest/80">
                {['Respirei intencionalmente', 'Ajustei luz/cores', 'Usei aroma ou âncora'].map((item, index) => (
                  <label key={index} className="flex items-center gap-4 cursor-pointer p-3 rounded-xl hover:bg-olibano-cream/50 transition-colors">
                    <input type="checkbox" className="w-5 h-5 rounded-md border-2 border-olibano-sage text-olibano-forest focus:ring-olibano-gold focus:ring-offset-0"/>
                    <span className="text-lg">{item}</span>
                  </label>
                ))}
              </div>
            </GoldenCard>
          </div>
        );

      case 'autora':
        return (
          <div className="px-6 py-12 max-w-3xl mx-auto animate-slideUp">
            <div className="bg-white rounded-3xl shadow-2xl border border-olibano-sage/10 overflow-hidden">
              <div className="bg-gradient-to-r from-olibano-forest via-olibano-forest/95 to-olibano-forest h-40 relative">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute w-32 h-32 border border-olibano-gold/30 rounded-full" style={{ left: '10%', top: '20%' }}></div>
                  <div className="absolute w-32 h-32 border border-olibano-gold/30 rounded-full" style={{ left: '40%', top: '20%' }}></div>
                  <div className="absolute w-32 h-32 border border-olibano-gold/30 rounded-full" style={{ left: '70%', top: '20%' }}></div>
                </div>
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                  <div className="w-36 h-36 rounded-full border-4 border-white bg-gradient-to-br from-olibano-cream to-olibano-sage/30 flex items-center justify-center overflow-hidden shadow-xl">
                    <span role="img" aria-label="Avatar" className="text-7xl">👩‍⚕️</span>
                  </div>
                </div>
              </div>
              <div className="pt-24 pb-10 px-8 text-center">
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
                        onError={(e) => e.target.style.display = 'none'}
                      />
                      <h3 className="font-serif font-bold text-olibano-forest text-xl">Olíbano - Práticas Integrativas</h3>
                    </div>
                    <p className="text-olibano-forest/60 text-sm mb-5">📍 Porto Alegre, RS</p>
                    <a href="#" className="block w-full py-4 bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream rounded-xl font-bold hover:from-olibano-forest/90 hover:to-olibano-forest transition-all shadow-lg hover:shadow-xl">
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
          </div>
        );

      default:
        return null;
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

      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-80 bg-white border-r border-olibano-sage/20 h-full shadow-xl z-20">
        <div className="p-8 border-b border-olibano-sage/10 flex flex-col items-center bg-gradient-to-b from-olibano-cream to-white">
          <img 
            src="/images/logo-simbolo.png" 
            alt="Olíbano" 
            className="w-16 h-16 object-contain mb-4"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="w-16 h-16 hidden bg-gradient-to-br from-olibano-forest to-olibano-forest/80 rounded-full items-center justify-center text-olibano-cream font-serif font-bold text-2xl mb-4 shadow-lg">O</div>
          <span className="text-olibano-forest font-serif font-bold tracking-[0.3em] text-sm">OLÍBANO</span>
          <span className="text-olibano-forest/50 text-xs mt-1 tracking-wider">PRÁTICAS INTEGRATIVAS</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-5 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-sm transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream shadow-lg' 
                  : 'text-olibano-forest/60 hover:bg-olibano-cream hover:text-olibano-forest'
              }`}
            >
              <span className={activeSection === item.id ? 'text-olibano-gold' : 'text-olibano-sage'}>{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-olibano-sage/10 bg-olibano-cream/50">
          <p className="text-xs text-olibano-forest/40 text-center">© 2025 Olíbano VIP</p>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-white/95 backdrop-blur-lg z-30 border-b border-olibano-sage/20 px-5 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <img 
            src="/images/logo-simbolo.png" 
            alt="Olíbano" 
            className="w-8 h-8 object-contain"
            onError={(e) => e.target.style.display = 'none'}
          />
          <span className="text-olibano-forest font-serif font-bold tracking-[0.2em] text-sm">OLÍBANO</span>
        </div>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-olibano-forest hover:bg-olibano-cream rounded-xl transition-colors">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-20 pt-24 px-6 overflow-y-auto md:hidden animate-fadeIn">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-4 px-5 py-5 rounded-2xl text-lg transition-all ${
                  activeSection === item.id 
                    ? 'bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream' 
                    : 'text-olibano-forest/70 hover:bg-olibano-cream'
                }`}
              >
                <span className={activeSection === item.id ? 'text-olibano-gold' : 'text-olibano-sage'}>{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main 
        ref={scrollRef}
        className="flex-1 h-full overflow-y-auto pt-20 md:pt-0 bg-olibano-cream scroll-smooth relative"
      >
        {/* Background Pattern */}
        <div className="fixed inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'url(/images/pattern.png)', backgroundSize: '400px' }}></div>
        
        {/* Background Decorative Elements */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-olibano-sage rounded-full mix-blend-multiply filter blur-[100px] opacity-20 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="fixed bottom-0 left-0 w-96 h-96 bg-olibano-gold rounded-full mix-blend-multiply filter blur-[80px] opacity-15 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        <div className="fixed top-1/2 right-0 w-64 h-64 bg-olibano-terracotta rounded-full mix-blend-multiply filter blur-[60px] opacity-10 pointer-events-none translate-x-1/2"></div>
        
        <div className="relative z-10 pb-24">
          {renderContent()}
        </div>

        {/* Navigation Footer (Next Button) */}
        {activeSection !== 'autora' && !isMenuOpen && (
          <div className="fixed bottom-8 right-8 md:right-12 z-20">
            <button 
              onClick={() => {
                const currentIndex = menuItems.findIndex(i => i.id === activeSection);
                if (currentIndex < menuItems.length - 1) {
                  handleNavClick(menuItems[currentIndex + 1].id);
                }
              }}
              className="bg-gradient-to-r from-olibano-forest to-olibano-forest/90 text-olibano-cream p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all hover:scale-110 transform duration-300 group"
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
