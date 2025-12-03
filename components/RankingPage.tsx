
import React, { useState } from 'react';
import { 
  Search, MapPin, ArrowUpDown, Smartphone, X, Trophy, 
  Building, TrendingUp, User, Users, Star,
  Building2, Trees, Sun, Landmark, Mountain, Sprout, 
  Anchor, ThermometerSnowflake, Palmtree, Coffee, Gem,
  Factory, Music, Wind, Ship, Wheat, Tractor, Bird,
  TreeDeciduous, Castle, Sunrise, Zap, Umbrella, Bone,
  Rocket, TrainFront, Map as MapIcon, Cpu, Droplet, SunDim,
  Waves
} from 'lucide-react';
import { ALL_STATES_DATA } from '../constants';
import { StateRanking } from '../types';

export const RankingPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<'count' | 'revenue2025' | 'digital_adoption'>('revenue2025');
  const [selectedState, setSelectedState] = useState<StateRanking | null>(null);

  const filteredStates = ALL_STATES_DATA
    .filter(state => 
      state.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      state.state.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => b[sortField] - a[sortField]);

  // Função para retornar o ícone, cor e label representativa de CADA estado
  const getStateIdentity = (uf: string) => {
    switch (uf) {
      // Norte
      case 'AC': return { icon: TreeDeciduous, color: 'text-emerald-700', bg: 'bg-emerald-50', label: 'Natureza Extrema' };
      case 'AM': return { icon: Trees, color: 'text-emerald-600', bg: 'bg-emerald-50', label: 'Pulmão do Mundo' };
      case 'AP': return { icon: Castle, color: 'text-slate-600', bg: 'bg-slate-100', label: 'Fortaleza S. José' };
      case 'PA': return { icon: Gem, color: 'text-purple-600', bg: 'bg-purple-50', label: 'Mineração & Açaí' };
      case 'RO': return { icon: TrainFront, color: 'text-amber-700', bg: 'bg-amber-50', label: 'Histórico Ferroviário' };
      case 'RR': return { icon: MapIcon, color: 'text-teal-600', bg: 'bg-teal-50', label: 'Fronteira Norte' };
      case 'TO': return { icon: SunDim, color: 'text-orange-500', bg: 'bg-orange-50', label: 'Jalapão & Agro' };

      // Nordeste
      case 'AL': return { icon: Waves, color: 'text-cyan-500', bg: 'bg-cyan-50', label: 'Caribe Brasileiro' };
      case 'BA': return { icon: Music, color: 'text-rose-600', bg: 'bg-rose-50', label: 'Berço Cultural' };
      case 'CE': return { icon: Wind, color: 'text-sky-500', bg: 'bg-sky-50', label: 'Energia Eólica' };
      case 'MA': return { icon: Palmtree, color: 'text-lime-600', bg: 'bg-lime-50', label: 'Lençóis & Palmeiras' };
      case 'PB': return { icon: Sunrise, color: 'text-yellow-500', bg: 'bg-yellow-50', label: 'Ponta do Seixas' };
      case 'PE': return { icon: Umbrella, color: 'text-indigo-500', bg: 'bg-indigo-50', label: 'Frevo & Tech' };
      case 'PI': return { icon: Bone, color: 'text-stone-500', bg: 'bg-stone-100', label: 'Arqueologia' };
      case 'RN': return { icon: Rocket, color: 'text-blue-600', bg: 'bg-blue-50', label: 'Centro Espacial' };
      case 'SE': return { icon: Droplet, color: 'text-slate-700', bg: 'bg-slate-200', label: 'Petróleo & Gás' };

      // Centro-Oeste
      case 'DF': return { icon: Landmark, color: 'text-emerald-700', bg: 'bg-emerald-50', label: 'Poder Central' };
      case 'GO': return { icon: Wheat, color: 'text-yellow-600', bg: 'bg-yellow-50', label: 'Coração do Agro' };
      case 'MT': return { icon: Tractor, color: 'text-green-600', bg: 'bg-green-50', label: 'Potência Agrícola' };
      case 'MS': return { icon: Bird, color: 'text-orange-600', bg: 'bg-orange-50', label: 'Pantanal' };

      // Sudeste
      case 'ES': return { icon: Ship, color: 'text-blue-700', bg: 'bg-blue-50', label: 'Complexo Portuário' };
      case 'MG': return { icon: Coffee, color: 'text-amber-800', bg: 'bg-amber-50', label: 'Café & Montanhas' };
      case 'RJ': return { icon: Mountain, color: 'text-blue-500', bg: 'bg-blue-50', label: 'Turismo & Petróleo' };
      case 'SP': return { icon: Building2, color: 'text-indigo-600', bg: 'bg-indigo-50', label: 'Centro Financeiro' };

      // Sul
      case 'PR': return { icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-50', label: 'Energia & Indústria' };
      case 'RS': return { icon: ThermometerSnowflake, color: 'text-sky-600', bg: 'bg-sky-50', label: 'Serras & Pampas' };
      case 'SC': return { icon: Cpu, color: 'text-cyan-600', bg: 'bg-cyan-50', label: 'Polo Tecnológico' };
      
      default: return { icon: MapPin, color: 'text-slate-600', bg: 'bg-slate-50', label: 'Brasil' };
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Ranking Estadual Detalhado</h2>
          <p className="text-slate-500 mt-1">
            Compare o desempenho e a capilaridade dos cartórios em todos os 27 estados.
          </p>
        </div>
        
        <div className="relative w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Buscar estado..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none w-full md:w-64"
          />
          <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
        </div>
      </div>

      {/* Sort Controls */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {[
          { key: 'revenue2025', label: 'Maior Receita' },
          { key: 'count', label: 'Mais Cartórios' },
          { key: 'digital_adoption', label: 'Mais Digitalizados' }
        ].map((btn) => (
          <button
            key={btn.key}
            onClick={() => setSortField(btn.key as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-2 ${
              sortField === btn.key 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {btn.label}
            {sortField === btn.key && <ArrowUpDown size={14} />}
          </button>
        ))}
      </div>

      {/* Grid of States */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredStates.map((uf) => {
          const identity = getStateIdentity(uf.state);
          const Icon = identity.icon;
          
          return (
            <div 
              key={uf.state} 
              onClick={() => setSelectedState(uf)}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all cursor-pointer group"
            >
              <div className="flex items-start gap-4">
                {/* State Unique Icon */}
                <div className={`w-14 h-14 rounded-xl ${identity.bg} flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300`}>
                   <Icon size={28} className={identity.color} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">{uf.name}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">{identity.label}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm mt-3">
                    <div>
                      <p className="text-xs text-slate-400">Cartórios</p>
                      <p className="font-semibold text-slate-700">{uf.count}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Receita '25</p>
                      <p className="font-semibold text-emerald-600">R$ {uf.revenue2025}M</p>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-slate-50">
                       <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-slate-500 flex items-center gap-1">
                            <Smartphone size={12} /> Digitalização
                          </span>
                          <span className="text-xs font-bold text-indigo-600">{uf.digital_adoption}%</span>
                       </div>
                       <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className="bg-indigo-500 h-1.5 rounded-full transition-all duration-1000" 
                            style={{ width: `${uf.digital_adoption}%` }}
                          ></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* State Detail Modal */}
      {selectedState && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div 
            className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Clean Header */}
            <div className="p-8 pb-0 flex justify-between items-start">
               <div className="flex items-center gap-4">
                  {(() => {
                    const identity = getStateIdentity(selectedState.state);
                    const Icon = identity.icon;
                    return (
                      <div className={`w-16 h-16 rounded-2xl ${identity.bg} flex items-center justify-center shrink-0`}>
                        <Icon size={32} className={identity.color} />
                      </div>
                    );
                  })()}
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900">{selectedState.name}</h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-slate-500 font-medium text-sm bg-slate-100 px-3 py-1 rounded-full">
                        {selectedState.state} • {selectedState.region}
                      </span>
                      <span className="text-indigo-600 font-medium text-xs bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100">
                        {getStateIdentity(selectedState.state).label}
                      </span>
                    </div>
                  </div>
               </div>
               <button 
                onClick={() => setSelectedState(null)}
                className="text-slate-400 hover:text-slate-800 hover:bg-slate-100 p-2 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-8 overflow-y-auto">
              {/* Main Stats Grid */}
              <div className="grid grid-cols-3 gap-6 mb-10">
                <div className="flex flex-col">
                   <span className="text-sm text-slate-400 font-medium mb-1">Total de Unidades</span>
                   <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-slate-800">{selectedState.count}</span>
                      <span className="text-xs text-slate-400">ativos</span>
                   </div>
                </div>
                <div className="flex flex-col border-l border-slate-100 pl-6">
                   <span className="text-sm text-slate-400 font-medium mb-1">Receita Estimada</span>
                   <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-emerald-600">R$ {selectedState.revenue2025}M</span>
                      <TrendingUp size={14} className="text-emerald-500" />
                   </div>
                </div>
                <div className="flex flex-col border-l border-slate-100 pl-6">
                   <span className="text-sm text-slate-400 font-medium mb-1">Taxa de Digitalização</span>
                   <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-indigo-600">{selectedState.digital_adoption}%</span>
                      <span className="text-xs text-slate-400">dos atos</span>
                   </div>
                </div>
              </div>

              {/* Ranking List */}
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Trophy className="text-yellow-500" size={20} />
                  <h3 className="text-lg font-bold text-slate-800">Maiores Serventias em Destaque</h3>
                </div>
                
                <div className="flex flex-col gap-4">
                  {selectedState.topRegistries.map((registry, index) => (
                    <div key={index} className="group relative flex items-start gap-4 p-4 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-md hover:border-indigo-100 transition-all duration-300">
                      
                      {/* Position Indicator */}
                      <div className={`
                          w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 mt-1
                          ${index === 0 ? 'bg-yellow-100 text-yellow-700' : 
                            index === 1 ? 'bg-slate-200 text-slate-600' : 
                            'bg-orange-100 text-orange-700'}
                        `}>
                          {index + 1}
                      </div>

                      <div className="flex-1 min-w-0">
                         <div className="flex justify-between items-start mb-1">
                            <h4 className="font-bold text-slate-800 truncate pr-2 group-hover:text-indigo-700 transition-colors">
                              {registry.name}
                            </h4>
                            <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white border border-slate-200 px-2 py-0.5 rounded-full">
                              {registry.specialty}
                            </span>
                         </div>
                         <p className="text-sm text-slate-500 mb-3">{registry.city} • {selectedState.state}</p>
                         
                         <div className="flex flex-wrap items-center gap-4 text-xs">
                            <div className="flex items-center gap-1.5 text-slate-600 bg-white px-2 py-1 rounded-md border border-slate-100 shadow-sm">
                                <User size={12} className="text-indigo-500" />
                                <span className="font-medium">{registry.titular}</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-500">
                                <span className="flex items-center gap-1">
                                  <Users size={12} /> {registry.staff_count} colab.
                                </span>
                                <span className="flex items-center gap-1 text-slate-700 font-medium">
                                  <Star size={12} className="text-yellow-400 fill-yellow-400" /> {registry.rating}
                                </span>
                            </div>
                         </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
