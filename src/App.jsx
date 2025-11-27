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
  Heart
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
      <div className="flex flex-col items-center justify-center p-8 bg-amber-50 rounded-2xl shadow-inner my-6">
        <h3 className="text-amber-800 font-serif mb-4">Prática Visual: Ritmo 4-6</h3>
        <div 
          className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 flex items-center justify-center text-white font-bold transition-all duration-[4000ms] ease-in-out shadow-lg"
          style={{ transform: `scale(${scale})` }}
        >
          <span className="text-center text-sm">{phase}</span>
        </div>
        <p className="mt-8 text-sm text-gray-600 text-center max-w-xs">
          Siga o círculo: inspire quando ele expandir, expire quando ele contrair.
        </p>
      </div>
    );
  };

  // Renderização de Conteúdo
  const renderContent = () => {
    switch (activeSection) {
      case 'capa':
        return (
          <div className="flex flex-col items-center justify-center min-h-full text-center px-6 py-12 animate-fadeIn">
            <div className="w-24 h-24 mb-8 rounded-full border-4 border-amber-700 flex items-center justify-center text-amber-700">
              {/* Logo Abstrato Simples */}
              <svg viewBox="0 0 100 100" className="w-16 h-16 fill-current">
                <path d="M50 10 C30 40, 10 50, 50 90 C90 50, 70 40, 50 10 Z M50 35 A5 5 0 1 1 50 45 A5 5 0 1 1 50 35" />
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif text-amber-900 mb-4 tracking-tight">
              ENERGIA,<br />FREQUÊNCIA<br />E VIBRAÇÃO
            </h1>
            <p className="text-lg text-amber-700/80 max-w-md mx-auto mb-12 font-light">
              Um guia prático para experimentar aromaterapia, breathwork, meditação, gemologia, cromoterapia e ondas binaurais.
            </p>
            <div className="p-6 bg-white/50 backdrop-blur-sm rounded-xl shadow-sm max-w-lg border border-amber-100">
              <p className="italic text-gray-600 font-serif">
                "Um convite para você sentir na prática como pequenas mudanças energéticas podem transformar bem-estar, foco e equilíbrio — em minutos por dia."
              </p>
            </div>
            <button 
              onClick={() => handleNavClick('intro')}
              className="mt-12 px-8 py-3 bg-amber-800 text-white rounded-full hover:bg-amber-900 transition-colors shadow-lg flex items-center gap-2"
            >
              Iniciar Leitura <ChevronRight size={20} />
            </button>
          </div>
        );

      case 'intro':
        return (
          <div className="px-6 py-10 max-w-3xl mx-auto animate-slideUp">
            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-10 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="text-orange-600 shrink-0 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-orange-800">Aviso de Segurança</h3>
                  <p className="text-sm text-orange-700 mt-1">
                    Este material é educativo. Em caso de condições de saúde específicas, procure orientação profissional. Use o princípio "Menos é Mais".
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-serif text-amber-900 mb-6">Boas-vindas</h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              Este e-book foi pensado para quem está começando — de forma leve, acolhedora e prática. Você vai conquistar o entendimento essencial sobre seis práticas holísticas e experimentar exercícios simples de 3 a 10 minutos.
            </p>

            <hr className="border-amber-200 my-10" />

            <h2 className="text-3xl font-serif text-amber-900 mb-6">A Linguagem Comum (EFV)</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                <div className="text-amber-600 mb-3 font-bold text-xl">Energia</div>
                <p className="text-gray-600 text-sm">Capacidade de produzir mudança — no corpo, mente e ambiente.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                <div className="text-amber-600 mb-3 font-bold text-xl">Frequência</div>
                <p className="text-gray-600 text-sm">Quão rápido algo vibra ou oscila. Ex: ritmos cardíacos.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-amber-100 hover:shadow-md transition-shadow">
                <div className="text-amber-600 mb-3 font-bold text-xl">Vibração</div>
                <p className="text-gray-600 text-sm">Movimento oscilatório em nós e ao nosso redor.</p>
              </div>
            </div>
            
            <div className="bg-amber-50 p-6 rounded-xl">
              <h4 className="font-bold text-amber-800 mb-2">Como tudo se conecta?</h4>
              <p className="text-gray-700 text-sm">
                Aromas alcançam o sistema límbico em segundos. O Breathwork ajusta ritmos internos. A Meditação modula ondas cerebrais. Tudo é uma orquestração de frequências para o seu bem-estar.
              </p>
            </div>
          </div>
        );

      case 'aroma':
        return (
          <div className="px-6 py-10 max-w-3xl mx-auto animate-slideUp">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 rounded-lg text-purple-700"><Droplets /></div>
              <h2 className="text-3xl font-serif text-gray-900">Aromaterapia</h2>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Uso de óleos essenciais 100% puros para promover bem-estar. Não são apenas "cheirinhos", são moléculas químicas complexas que interagem com nosso sistema límbico.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                { name: 'Lavanda', effect: 'Redução de estresse e ansiedade', color: 'bg-purple-50 border-purple-200' },
                { name: 'Laranja-doce', effect: 'Calma e bem-estar', color: 'bg-orange-50 border-orange-200' },
                { name: 'Hortelã-pimenta', effect: 'Clareza mental e foco', color: 'bg-green-50 border-green-200' },
                { name: 'Alecrim', effect: 'Concentração', color: 'bg-emerald-50 border-emerald-200' }
              ].map((oil) => (
                <div key={oil.name} className={`${oil.color} border p-4 rounded-xl flex flex-col`}>
                  <span className="font-bold text-gray-800 text-lg">{oil.name}</span>
                  <span className="text-gray-600 text-sm">{oil.effect}</span>
                </div>
              ))}
            </div>

            <div className="bg-white border-2 border-amber-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-xl text-amber-800">Exercício: Âncora Aromática</h3>
                <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full font-bold">3 min</span>
              </div>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>Escolha um óleo essencial (ex: Lavanda ou Hortelã).</li>
                <li>Pingue 1 gota em algodão.</li>
                <li>Inspire gentilmente a 20 cm do nariz por 3 ciclos (4s inspirar, 6s expirar).</li>
                <li>Nomeie em voz baixa o estado desejado (ex: "calma").</li>
              </ol>
            </div>
          </div>
        );

      case 'breath':
        return (
          <div className="px-6 py-10 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-700"><Wind /></div>
              <h2 className="text-3xl font-serif text-gray-900">Breathwork</h2>
            </div>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Técnicas intencionais de respiração para modular energia. É a ferramenta mais rápida para hackear seu sistema nervoso autônomo.
            </p>

            <BreathingExercise />

            <div className="grid gap-6 mt-8">
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-blue-400">
                <h4 className="font-bold text-lg mb-2">Respiração 4-6 (Relaxamento)</h4>
                <p className="text-sm text-gray-600">Inspire por 4 segundos, expire por 6 segundos. Induz o sistema parassimpático (descanso e digestão).</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-indigo-400">
                <h4 className="font-bold text-lg mb-2">Box Breathing (Foco)</h4>
                <p className="text-sm text-gray-600">Inspire 4s → Segure 4s → Expire 4s → Segure 4s. Usada por militares para manter a calma sob pressão.</p>
              </div>
              <div className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-red-400">
                <h4 className="font-bold text-lg mb-2">Suspiro Fisiológico (Reset)</h4>
                <p className="text-sm text-gray-600">2 inspirações rápidas pelo nariz + 1 expiração longa pela boca. O botão de "reset" da ansiedade.</p>
              </div>
            </div>
          </div>
        );
      
      case 'meditacao':
        return (
           <div className="px-6 py-10 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-teal-100 rounded-lg text-teal-700"><Brain /></div>
              <h2 className="text-3xl font-serif text-gray-900">Meditação</h2>
            </div>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Treino de atenção e consciência. Não é sobre "esvaziar a mente", mas observar os pensamentos sem embarcar neles.
            </p>

            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-3xl mb-8">
              <h3 className="font-serif text-2xl text-teal-900 mb-4 text-center">Exercício: Palavra-Guia</h3>
              <div className="space-y-4 max-w-md mx-auto text-center">
                <p className="text-gray-700">Sente-se confortavelmente.</p>
                <div className="flex justify-between items-center bg-white/60 p-4 rounded-xl">
                  <span className="text-sm font-bold text-gray-500 uppercase">Inspire</span>
                  <span className="text-xl font-serif text-teal-800">"Recebo"</span>
                </div>
                <div className="flex justify-between items-center bg-white/60 p-4 rounded-xl">
                  <span className="text-sm font-bold text-gray-500 uppercase">Expire</span>
                  <span className="text-xl font-serif text-teal-800">"Solto"</span>
                </div>
                <p className="text-sm text-gray-600 italic mt-4">
                  Quando a mente vagar, gentilmente reconheça e volte para as palavras.
                </p>
              </div>
            </div>
          </div>
        );

      case 'gemologia':
        return (
          <div className="px-6 py-10 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-pink-100 rounded-lg text-pink-700"><Gem /></div>
              <h2 className="text-3xl font-serif text-gray-900">Gemologia Contemplativa</h2>
            </div>
            <p className="text-gray-700 mb-8">
              Uso de cristais como âncoras sensoriais. Segurar uma pedra pode servir como um lembrete físico de uma intenção mental.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="aspect-square bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-4 text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gray-100 rounded-full mb-3 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-white opacity-80"></div>
                </div>
                <strong className="text-gray-800">Quartzo Transparente</strong>
                <span className="text-xs text-gray-500 mt-1">Clareza e Foco</span>
              </div>
              <div className="aspect-square bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-4 text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-purple-100 rounded-full mb-3 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 to-purple-200 opacity-80"></div>
                </div>
                <strong className="text-gray-800">Ametista</strong>
                <span className="text-xs text-gray-500 mt-1">Calma e Introspecção</span>
              </div>
              <div className="aspect-square bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-4 text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-pink-100 rounded-full mb-3 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-pink-400 to-pink-200 opacity-80"></div>
                </div>
                <strong className="text-gray-800">Quartzo Rosa</strong>
                <span className="text-xs text-gray-500 mt-1">Autocuidado</span>
              </div>
               <div className="aspect-square bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center p-4 text-center hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-yellow-100 rounded-full mb-3 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400 to-yellow-200 opacity-80"></div>
                </div>
                <strong className="text-gray-800">Citrino</strong>
                <span className="text-xs text-gray-500 mt-1">Vitalidade</span>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
              <strong>Dica:</strong> Mantenha a prática no campo simbólico. Segure o cristal, sinta a textura e nomeie sua intenção (ex: "Fé", "Foco").
            </div>
          </div>
        );

      case 'cromoterapia':
        return (
          <div className="px-6 py-10 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700"><Sun /></div>
              <h2 className="text-3xl font-serif text-gray-900">Cromoterapia</h2>
            </div>
            <p className="text-gray-700 mb-8">
              Cores têm poder. A luz fria desperta, a luz quente acolhe. Usamos cores para ajustar o estado de alerta.
            </p>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="w-12 h-12 rounded-full bg-blue-400 mr-4 shadow-md"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Azul & Verde</h4>
                  <p className="text-sm text-gray-600">Calma, equilíbrio. Use luzes suaves à noite.</p>
                </div>
              </div>
               <div className="flex items-center p-4 bg-yellow-50 rounded-xl border border-yellow-100">
                <div className="w-12 h-12 rounded-full bg-yellow-400 mr-4 shadow-md"></div>
                <div>
                  <h4 className="font-bold text-gray-800">Amarelo & Laranja</h4>
                  <p className="text-sm text-gray-600">Criatividade, vitalidade. Luz natural pela manhã.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-amber-50 p-6 rounded-2xl">
              <h3 className="font-serif text-amber-900 mb-2">Exercício: Banho de Cor</h3>
              <p className="text-gray-700 text-sm">
                Feche os olhos. Imagine uma cor que representa o que você precisa agora preenchendo seu peito ao inspirar, e relaxando seus ombros ao expirar.
              </p>
            </div>
          </div>
        );

      case 'binaural':
        return (
          <div className="px-6 py-10 max-w-3xl mx-auto animate-slideUp">
             <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-indigo-100 rounded-lg text-indigo-700"><Headphones /></div>
              <h2 className="text-3xl font-serif text-gray-900">Ondas Binaurais</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Quando cada ouvido recebe um tom ligeiramente diferente, o cérebro cria uma terceira frequência (o batimento). É como afinar o cérebro para uma estação de rádio específica.
            </p>
            
            <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-xl mb-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                 <div className="w-full h-10 bg-indigo-500 transform -rotate-12"></div>
                 <div className="w-full h-10 bg-purple-500 transform rotate-12 absolute"></div>
              </div>
              <h3 className="relative z-10 font-serif text-xl mb-4">O Menu de Frequências</h3>
              <ul className="relative z-10 space-y-3 text-sm">
                <li className="flex items-center"><span className="w-16 font-bold text-indigo-300">Alfa</span> Relaxamento calmo, foco leve (8-12 Hz)</li>
                <li className="flex items-center"><span className="w-16 font-bold text-indigo-300">Teta</span> Criatividade, introspecção (4-7 Hz)</li>
                <li className="flex items-center"><span className="w-16 font-bold text-indigo-300">Delta</span> Sono profundo (0.5-4 Hz)</li>
              </ul>
              <div className="mt-6 p-3 bg-white/10 rounded-lg text-xs text-center relative z-10">
                ⚠️ Obrigatório o uso de fones de ouvido estéreo.
              </div>
            </div>
          </div>
        );

      case 'roteiro':
        return (
          <div className="px-6 py-10 max-w-3xl mx-auto animate-slideUp">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-amber-100 rounded-lg text-amber-700"><Calendar /></div>
              <h2 className="text-3xl font-serif text-gray-900">Roteiro de 7 Dias</h2>
            </div>
            
            <div className="space-y-4">
              {[
                { day: 1, title: 'Acalmar', desc: 'Lavanda + Respiração 4-6 (5 min) + "Banho de Cor" Azul.' },
                { day: 2, title: 'Foco', desc: 'Hortelã-pimenta + Box Breathing + Binaural Alfa.' },
                { day: 3, title: 'Sono', desc: 'Luz âmbar à noite + Meditação de respiração + Camomila.' },
                { day: 4, title: 'Criatividade', desc: 'Cromoterapia Amarela + Teta + Intenção com Citrino.' },
                { day: 5, title: 'Presença', desc: 'Varredura corporal + Quartzo Rosa (Autocuidado).' },
                { day: 6, title: 'Reset Emocional', desc: 'Suspiro fisiológico 3x + Lavanda + Journaling (Gratidão).' },
                { day: 7, title: 'Flow', desc: 'Micro-ritual completo + 50 min na tarefa mais importante.' },
              ].map((item) => (
                <div key={item.day} className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="bg-amber-800 text-white w-14 flex items-center justify-center font-bold text-lg shrink-0">
                    {item.day}
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-amber-900 text-sm uppercase tracking-wide">{item.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-amber-50 rounded-2xl border border-amber-200">
               <h3 className="font-serif text-amber-900 mb-2">Checklist Diário</h3>
               <div className="space-y-2 text-gray-700">
                 <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500"/> Respirei intencionalmente</label>
                 <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500"/> Ajustei luz/cores</label>
                 <label className="flex items-center gap-2 cursor-pointer"><input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500"/> Usei aroma ou âncora</label>
               </div>
            </div>
          </div>
        );

      case 'autora':
        return (
          <div className="px-6 py-10 max-w-3xl mx-auto animate-slideUp">
            <div className="bg-white rounded-3xl shadow-lg border border-amber-100 overflow-hidden">
              <div className="bg-amber-800 h-32 relative">
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                   <div className="w-32 h-32 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-4xl overflow-hidden shadow-md">
                      <span role="img" aria-label="Avatar" className="text-6xl">👩‍⚕️</span>
                   </div>
                </div>
              </div>
              <div className="pt-20 pb-8 px-6 text-center">
                <h2 className="text-2xl font-serif text-gray-900 font-bold">Dra. Betusa</h2>
                <p className="text-amber-700 text-sm uppercase tracking-wide mt-1">Médica & Cofundadora Olíbano</p>
                
                <p className="text-gray-600 mt-6 leading-relaxed text-sm">
                  Médica com 25 anos de atuação em emergência pediátrica e referência em gestão médica no RS. Integra saberes tradicionais e ciência contemporânea para criar experiências práticas, seguras e transformadoras.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="p-4 bg-amber-50 rounded-xl">
                    <h3 className="font-bold text-amber-900 mb-1">Olíbano - Práticas Integrativas</h3>
                    <p className="text-xs text-gray-600 mb-3">📍 Porto Alegre, RS</p>
                    <a href="#" className="block w-full py-2 bg-amber-800 text-white rounded-lg text-sm font-bold hover:bg-amber-900 transition-colors">
                      Agendar Experiência
                    </a>
                  </div>
                  <div className="text-xs text-gray-400">
                    www.olibanovip.com.br | @olibanovip
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
    <div className="flex h-screen bg-[#FDFBF7] font-sans text-gray-800 overflow-hidden relative selection:bg-amber-200">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght @300;400;700&family=Playfair+Display:ital,wght @0,400;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Lato', sans-serif; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
        .animate-slideUp { animation: slideUp 0.6s ease-out; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 10px; }
        ::-webkit-scrollbar-thumb:hover { background: #9ca3af; }
      `}</style>

      {/* Sidebar Desktop */}
      <aside className="hidden md:flex flex-col w-72 bg-white border-r border-amber-100 h-full shadow-sm z-20">
        <div className="p-8 border-b border-amber-50 flex flex-col items-center">
          <div className="w-12 h-12 bg-amber-800 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl mb-3">O</div>
          <span className="text-amber-900 font-serif font-bold tracking-widest text-sm">OLÍBANO</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200 ${
                activeSection === item.id 
                  ? 'bg-amber-50 text-amber-800 font-bold shadow-sm' 
                  : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <span className={activeSection === item.id ? 'text-amber-600' : 'text-gray-400'}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full bg-white/90 backdrop-blur-md z-30 border-b border-amber-100 px-4 py-3 flex justify-between items-center shadow-sm">
        <span className="text-amber-900 font-serif font-bold tracking-widest">OLÍBANO</span>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-600">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-20 pt-20 px-6 overflow-y-auto md:hidden animate-fadeIn">
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-xl text-lg border-b border-gray-50 ${
                  activeSection === item.id ? 'text-amber-800 font-bold' : 'text-gray-600'
                }`}
              >
                {item.icon} {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Main Content Area */}
      <main 
        ref={scrollRef}
        className="flex-1 h-full overflow-y-auto pt-16 md:pt-0 bg-[#FDFBF7] scroll-smooth relative"
      >
        {/* Background Elements */}
        <div className="fixed top-0 right-0 w-96 h-96 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
        <div className="fixed bottom-0 left-0 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 pb-20">
          {renderContent()}
        </div>

        {/* Navigation Footer (Next Button) */}
        {activeSection !== 'autora' && !isMenuOpen && (
          <div className="fixed bottom-6 right-6 md:right-10 z-20">
             <button 
              onClick={() => {
                const currentIndex = menuItems.findIndex(i => i.id === activeSection);
                if (currentIndex < menuItems.length - 1) {
                  handleNavClick(menuItems[currentIndex + 1].id);
                }
              }}
              className="bg-amber-900 text-white p-4 rounded-full shadow-lg hover:bg-amber-800 transition-transform hover:scale-105"
             >
               <ChevronRight />
             </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
