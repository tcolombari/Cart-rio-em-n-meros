import React, { useState, useEffect } from 'react';
import { X, Sparkles, Loader2 } from 'lucide-react';
import { getGeminiInsight } from '../services/geminiService';

interface AIInsightModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextData: any;
}

export const AIInsightModal: React.FC<AIInsightModalProps> = ({ isOpen, onClose, contextData }) => {
  const [loading, setLoading] = useState(false);
  const [insight, setInsight] = useState<string | null>(null);
  const [topic, setTopic] = useState<string>('Tendências Gerais do Setor');

  // Topics for the user to choose from
  const topics = [
    "Tendências Gerais do Setor",
    "Impacto da Digitalização (e-Notariado)",
    "Comparativo Regional",
    "Sustentabilidade Econômica"
  ];

  const handleGenerate = async (selectedTopic: string) => {
    setTopic(selectedTopic);
    setLoading(true);
    setInsight(null);
    const result = await getGeminiInsight(selectedTopic, contextData);
    setInsight(result);
    setLoading(false);
  };

  useEffect(() => {
    if (isOpen && !insight) {
      handleGenerate(topics[0]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-6 flex justify-between items-center text-white">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-6 h-6 text-yellow-300" />
            <h2 className="text-xl font-bold">Insights Inteligentes</h2>
          </div>
          <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 overflow-y-auto">
          <p className="text-slate-600 mb-6 text-sm">
            Esta análise é gerada em tempo real pela IA (Gemini 2.5) com base nos dados exibidos no painel. Selecione um tópico para aprofundar.
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {topics.map((t) => (
              <button
                key={t}
                onClick={() => handleGenerate(t)}
                disabled={loading}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  topic === t
                    ? 'bg-indigo-100 text-indigo-700 ring-2 ring-indigo-500 ring-offset-2'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 rounded-xl p-6 min-h-[200px] border border-slate-100 relative">
            {loading ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <Loader2 className="w-8 h-8 text-indigo-500 animate-spin mb-2" />
                  <span className="text-sm text-slate-500">Analisando dados...</span>
                </div>
              </div>
            ) : (
              <div className="prose prose-sm max-w-none text-slate-700">
                {insight ? (
                  insight.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-3 leading-relaxed">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <p>Selecione um tópico para iniciar a análise.</p>
                )}
              </div>
            )}
          </div>
          
          <div className="mt-4 text-xs text-slate-400 text-center">
            A Inteligência Artificial pode cometer erros. Verifique as informações importantes.
          </div>
        </div>
      </div>
    </div>
  );
};