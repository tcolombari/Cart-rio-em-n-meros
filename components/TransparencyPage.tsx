import React from 'react';
import { Table, Download, ShieldCheck } from 'lucide-react';

export const TransparencyPage: React.FC = () => {
  const dataSources = [
    { source: "Justiça em Números (CNJ)", updated: "Fev/2025", type: "Oficial" },
    { source: "CENSEC - Central Notarial", updated: "Jan/2025", type: "Oficial" },
    { source: "CRC - Registro Civil", updated: "Fev/2025", type: "Oficial" },
    { source: "Colégio Notarial do Brasil", updated: "Dez/2024", type: "Associativo" },
    { source: "Instituto de Registro Imobiliário", updated: "Jan/2025", type: "Associativo" }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div>
        <h2 className="text-3xl font-bold text-slate-900">Portal da Transparência</h2>
        <p className="text-slate-500 mt-1">
          Metodologia de coleta e fontes de dados utilizados neste painel.
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-200">
           <h3 className="font-bold text-lg flex items-center gap-2">
             <ShieldCheck className="text-indigo-600" />
             Fontes de Dados
           </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 uppercase text-xs font-semibold text-slate-500">
              <tr>
                <th className="px-6 py-4">Fonte da Informação</th>
                <th className="px-6 py-4">Última Atualização</th>
                <th className="px-6 py-4">Tipo</th>
                <th className="px-6 py-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dataSources.map((ds, idx) => (
                <tr key={idx} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-slate-800">{ds.source}</td>
                  <td className="px-6 py-4">{ds.updated}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
                      {ds.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center gap-1 text-xs">
                      <Download size={14} /> CSV
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-amber-800 text-sm">
        <strong>Nota de Isenção:</strong> Este painel é uma demonstração tecnológica. Os valores apresentados para 2025 são projeções estatísticas baseadas no histórico de crescimento (CAGR) dos últimos 5 anos e não representam dados oficiais auditados.
      </div>
    </div>
  );
};
