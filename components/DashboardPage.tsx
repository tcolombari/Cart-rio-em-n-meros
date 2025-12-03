
import React from 'react';
import { Building2, FileText, Globe, TrendingUp, Info, Sparkles, Baby, Lightbulb, CalendarClock, Rocket, Wallet } from 'lucide-react';
import { StatCard } from './StatCard';
import { VolumeChart, DistributionChart, RankingChart } from './Charts';
import { ANNUAL_STATS, DISTRIBUTION_BY_TYPE, KPI_DATA, ALL_STATES_DATA, TOP_NAMES_2025, CURIOSITIES_DATA, PROJECTIONS_2026 } from '../constants';

interface DashboardPageProps {
  onOpenAI: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onOpenAI }) => {
  // Pegar top 5 estados
  const top5States = [...ALL_STATES_DATA].sort((a, b) => b.count - a.count).slice(0, 5);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Visão Geral do Setor</h2>
          <p className="text-slate-500 mt-1">
            Dados atualizados e projeções para o sistema notarial e registral (2025).
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
          <Info size={16} />
          <span>Dados atualizados: Fev/2025</span>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total de Cartórios"
          value={KPI_DATA.totalCartorios.toLocaleString('pt-BR')}
          trend="+0.6%"
          trendUp={true}
          icon={Building2}
          description="Unidades ativas no país"
        />
        <StatCard 
          title="Cresc. Digital (2025)"
          value={`${KPI_DATA.digitalGrowth}%`}
          trend="+2.8%"
          trendUp={true}
          icon={Globe}
          description="Adoção e-Notariado/SERP"
        />
        <StatCard 
          title="Atos Projetados"
          value="98.2M"
          trend="+3.9%"
          trendUp={true}
          icon={FileText}
          description="Volume anual 2025"
        />
        <StatCard 
          title="Receita Global"
          value="R$ 29.1B"
          trend="+8.5%"
          trendUp={true}
          icon={TrendingUp}
          description="Arrecadação bruta anual"
        />
      </div>

      {/* Charts Section 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Chart - 2 cols */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-800">Evolução de Atos e Digitalização</h3>
            <div className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-full">
              Inclui Projeção 2025
            </div>
          </div>
          <VolumeChart data={ANNUAL_STATS} />
          <div className="mt-4 flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-slate-600">Total de Atos Físicos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
              <span className="text-slate-600">Atos Nativos Digitais</span>
            </div>
          </div>
        </div>

        {/* Secondary Chart - 1 col */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-6">Distribuição por Especialidade</h3>
          <div className="flex-1 flex items-center justify-center">
            <DistributionChart data={DISTRIBUTION_BY_TYPE} />
          </div>
          <p className="text-center text-xs text-slate-400 mt-4">
            Baseado na quantidade de serventias por atribuição principal.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-lg font-bold text-slate-800">Top 5 Estados em Volume</h3>
             <span className="text-xs text-slate-400">Total de Serventias</span>
          </div>
          <RankingChart data={top5States} />
        </div>

        <div className="bg-indigo-900 rounded-2xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-indigo-700/50 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Descubra os insights por trás dos números</h3>
            <p className="text-indigo-200 mb-6 leading-relaxed">
              Utilize nossa inteligência artificial baseada no Gemini para analisar tendências de mercado, explicar variações e entender o impacto da legislação nos dados de 2025.
            </p>
            <button 
              onClick={onOpenAI}
              className="bg-white text-indigo-900 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-all shadow-lg active:scale-95 flex items-center gap-2"
            >
              <span>Iniciar Análise Inteligente</span>
              <TrendingUp size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Curiosities & Trends Section */}
      <div className="pt-4">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
           <Lightbulb className="text-indigo-500" size={24} /> Curiosidades e Tendências 2025
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Baby Names Card */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 md:col-span-1 flex flex-col">
             <div className="flex items-center gap-3 mb-6">
                <div className="bg-pink-100 p-2 rounded-lg">
                   <Baby className="text-pink-600" size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-800">Nomes + Registrados</h4>
                   <p className="text-xs text-slate-500">Registro Civil • Brasil 2025</p>
                </div>
             </div>
             <div className="space-y-3 flex-1">
                {TOP_NAMES_2025.map((item) => (
                  <div key={item.rank} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-white hover:shadow-sm border border-transparent hover:border-slate-100 transition-all">
                     <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                           item.rank === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-200 text-slate-600'
                        }`}>
                           {item.rank}
                        </span>
                        <span className="font-semibold text-slate-700">{item.name}</span>
                     </div>
                     <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                        item.gender === 'm' ? 'bg-blue-50 text-blue-600' : 'bg-pink-50 text-pink-600'
                     }`}>
                        {item.count.toLocaleString()}
                     </span>
                  </div>
                ))}
             </div>
          </div>

          {/* Curiosities Grid */}
          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
             {CURIOSITIES_DATA.map((item, idx) => {
                const Icon = item.icon;
                const isImoveis = item.type === 'Imóveis';
                
                return (
                   <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:border-indigo-200 transition-colors flex flex-col gap-3">
                      <div className="flex justify-between items-start">
                         <div className={`p-2 rounded-lg ${isImoveis ? 'bg-orange-50' : 'bg-emerald-50'}`}>
                            <Icon size={24} className={isImoveis ? 'text-orange-600' : 'text-emerald-600'} />
                         </div>
                         <span className={`text-[10px] font-bold uppercase px-2 py-1 rounded-full ${
                            isImoveis ? 'bg-orange-100 text-orange-700' : 'bg-emerald-100 text-emerald-700'
                         }`}>
                            {item.type}
                         </span>
                      </div>
                      <div>
                         <h5 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h5>
                         <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                      </div>
                   </div>
                );
             })}
          </div>
        </div>
      </div>

      {/* 2026 Projections Section */}
      <div className="mt-8 pt-8 border-t border-slate-200">
        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
           <CalendarClock className="text-violet-600" size={24} /> Projeções Estratégicas: Cenário 2026
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           
           {/* Revenue Card */}
           <div className="bg-gradient-to-br from-violet-50 to-white p-6 rounded-2xl border border-violet-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-violet-50">
                   <Wallet className="text-violet-600" size={20} />
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+{PROJECTIONS_2026.revenue.growth}%</span>
              </div>
              <p className="text-sm text-slate-500 mb-1">{PROJECTIONS_2026.revenue.label}</p>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">R$ {PROJECTIONS_2026.revenue.projected} B</h4>
              
              <div className="space-y-3">
                 <div>
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                       <span>2025</span>
                       <span>29.1 B</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                       <div className="h-full bg-slate-400 w-[91%] rounded-full"></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-xs text-violet-700 font-medium mb-1">
                       <span>2026 (Est.)</span>
                       <span>31.8 B</span>
                    </div>
                    <div className="h-2 w-full bg-violet-100 rounded-full overflow-hidden">
                       <div className="h-full bg-violet-600 w-full rounded-full animate-pulse"></div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Digital Acts Card */}
           <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-indigo-50">
                   <Rocket className="text-indigo-600" size={20} />
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+{PROJECTIONS_2026.digitalActs.growth}%</span>
              </div>
              <p className="text-sm text-slate-500 mb-1">{PROJECTIONS_2026.digitalActs.label}</p>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{PROJECTIONS_2026.digitalActs.projected} Mi</h4>
              
              <div className="space-y-3">
                 <div>
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                       <span>2025</span>
                       <span>9.5 Mi</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                       <div className="h-full bg-slate-400 w-[74%] rounded-full"></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-xs text-indigo-700 font-medium mb-1">
                       <span>2026 (Est.)</span>
                       <span>12.8 Mi</span>
                    </div>
                    <div className="h-2 w-full bg-indigo-100 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-600 w-full rounded-full animate-pulse"></div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Volume Card */}
           <div className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100">
                   <FileText className="text-slate-600" size={20} />
                </div>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+{PROJECTIONS_2026.totalActs.growth}%</span>
              </div>
              <p className="text-sm text-slate-500 mb-1">{PROJECTIONS_2026.totalActs.label}</p>
              <h4 className="text-2xl font-bold text-slate-900 mb-4">{PROJECTIONS_2026.totalActs.projected} Mi</h4>
              
              <div className="space-y-3">
                 <div>
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                       <span>2025</span>
                       <span>98.2 Mi</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                       <div className="h-full bg-slate-400 w-[94%] rounded-full"></div>
                    </div>
                 </div>
                 <div>
                    <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
                       <span>2026 (Est.)</span>
                       <span>104.5 Mi</span>
                    </div>
                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                       <div className="h-full bg-slate-800 w-full rounded-full"></div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
        <div className="text-center mt-6">
           <p className="text-xs text-slate-400 bg-slate-50 inline-block px-4 py-2 rounded-full border border-slate-100">
             * Projeções calculadas com base no CAGR (Taxa de Crescimento Anual Composta) dos últimos 5 anos (2020-2025).
           </p>
        </div>
      </div>
    </div>
  );
};
