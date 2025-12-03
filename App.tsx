import React, { useState } from 'react';
import { 
  Building2, 
  Menu,
  Sparkles,
  X,
  LayoutDashboard,
  Map,
  TableProperties,
  Newspaper
} from 'lucide-react';
import { AIInsightModal } from './components/AIInsightModal';
import { ANNUAL_STATS, DISTRIBUTION_BY_TYPE, KPI_DATA, ALL_STATES_DATA } from './constants';
import { PageType, NewsArticle } from './types';
import { DashboardPage } from './components/DashboardPage';
import { RankingPage } from './components/RankingPage';
import { TransparencyPage } from './components/TransparencyPage';
import { NewsPage } from './components/NewsPage';
import { NewsDetailPage } from './components/NewsDetailPage';

const App: React.FC = () => {
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activePage, setActivePage] = useState<PageType>('dashboard');
  const [selectedNews, setSelectedNews] = useState<NewsArticle | null>(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleNavClick = (page: PageType) => {
    setActivePage(page);
    setSelectedNews(null); // Reset news selection when changing tabs
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (activePage) {
      case 'dashboard':
        return <DashboardPage onOpenAI={() => setIsAIModalOpen(true)} />;
      case 'ranking':
        return <RankingPage />;
      case 'transparency':
        return <TransparencyPage />;
      case 'news':
        if (selectedNews) {
          return <NewsDetailPage article={selectedNews} onBack={() => setSelectedNews(null)} />;
        }
        return <NewsPage onNewsClick={(article) => {
          setSelectedNews(article);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} />;
      default:
        return <DashboardPage onOpenAI={() => setIsAIModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div 
              className="flex items-center gap-3 cursor-pointer group" 
              onClick={() => handleNavClick('dashboard')}
            >
              <div className="bg-indigo-600 p-2 rounded-lg group-hover:bg-indigo-700 transition-colors">
                <Building2 className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900 leading-none">
                  Cartório<span className="text-indigo-600">EmNúmeros</span>
                </h1>
                <p className="text-xs text-slate-500 font-medium">Observatório Nacional</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <button 
                onClick={() => handleNavClick('dashboard')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activePage === 'dashboard' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                <LayoutDashboard size={18} />
                Painel Geral
              </button>
              <button 
                onClick={() => handleNavClick('ranking')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activePage === 'ranking' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                <Map size={18} />
                Estados & Ranking
              </button>
              <button 
                onClick={() => handleNavClick('news')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activePage === 'news' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                <Newspaper size={18} />
                Notícias
              </button>
              <button 
                onClick={() => handleNavClick('transparency')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                  activePage === 'transparency' ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600 hover:text-indigo-600 hover:bg-slate-50'
                }`}
              >
                <TableProperties size={18} />
                Transparência
              </button>
            </div>

            <div className="hidden md:block">
              <button 
                onClick={() => setIsAIModalOpen(true)}
                className="flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-indigo-500/20 active:scale-95"
              >
                <Sparkles size={14} className="text-yellow-400" />
                <span>IA Insights</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-slate-600 hover:text-slate-900 p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-xl">
            <div className="px-4 py-3 space-y-2">
              <button 
                onClick={() => handleNavClick('dashboard')} 
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                  activePage === 'dashboard' ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <LayoutDashboard size={20} /> Painel Geral
              </button>
              <button 
                onClick={() => handleNavClick('ranking')} 
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                  activePage === 'ranking' ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Map size={20} /> Ranking Estadual
              </button>
              <button 
                onClick={() => handleNavClick('news')} 
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                  activePage === 'news' ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Newspaper size={20} /> Notícias
              </button>
              <button 
                onClick={() => handleNavClick('transparency')} 
                className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 ${
                  activePage === 'transparency' ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <TableProperties size={20} /> Transparência
              </button>
              
              <div className="pt-2 border-t border-slate-100 mt-2">
                <button 
                  onClick={() => { setIsAIModalOpen(true); setMobileMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-lg text-sm font-semibold mt-2 active:scale-95 transition-transform"
                >
                  <Sparkles size={16} className="text-yellow-300" />
                  <span>Gerar Análise com IA</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="text-indigo-600 w-5 h-5" />
                <span className="font-bold text-slate-800">CartórioEmNúmeros</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Plataforma independente de visualização de dados do setor notarial e registral brasileiro.
                Dados simulados e projetados para fins de demonstração (2025).
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Fontes de Dados</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>Justiça em Números (CNJ)</li>
                <li>Portal da Transparência do Registro Civil</li>
                <li>CENSEC - Central Notarial</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-4">Tecnologia</h4>
              <ul className="space-y-2 text-sm text-slate-500">
                <li>React + TypeScript</li>
                <li>Tailwind CSS</li>
                <li>Google Gemini API (Insights)</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-100 mt-12 pt-8 text-center text-sm text-slate-400">
            &copy; 2025 Cartório em Números. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* AI Modal (Global) */}
      <AIInsightModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
        contextData={{ annualStats: ANNUAL_STATS, distribution: DISTRIBUTION_BY_TYPE, allStates: ALL_STATES_DATA, kpi: KPI_DATA }}
      />
    </div>
  );
}

export default App;