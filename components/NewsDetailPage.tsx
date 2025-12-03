
import React from 'react';
import { ArrowLeft, Clock, User, Share2, Tag } from 'lucide-react';
import { NewsArticle } from '../types';

interface NewsDetailPageProps {
  article: NewsArticle;
  onBack: () => void;
}

export const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ article, onBack }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Hero Image */}
      <div className="relative h-[300px] md:h-[400px] w-full">
        <img 
          src={article.imageUrl} 
          alt={article.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white p-3 rounded-full transition-all group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Content Container */}
      <div className="max-w-4xl mx-auto px-6 py-10 -mt-20 relative z-10">
        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
          
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-indigo-50 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide border border-indigo-100">
              {article.category}
            </span>
            <span className="text-slate-400 text-xs flex items-center gap-1">
              <Clock size={12} /> {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center justify-between border-b border-slate-100 pb-8 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                <User size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">{article.author}</p>
                <p className="text-xs text-slate-500">Editoria Especializada</p>
              </div>
            </div>
            <button className="text-slate-400 hover:text-indigo-600 transition-colors flex items-center gap-2 text-sm font-medium">
              <Share2 size={16} /> <span className="hidden sm:inline">Compartilhar</span>
            </button>
          </div>

          <div className="prose prose-lg prose-slate max-w-none">
            {article.content ? (
              article.content.split('\n').map((paragraph, index) => (
                <p key={index} className="text-slate-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-slate-600 leading-relaxed">
                {article.summary}
              </p>
            )}
          </div>
          
          <div className="mt-12 pt-8 border-t border-slate-100 flex items-center justify-between">
            <button 
              onClick={onBack}
              className="text-slate-500 font-semibold hover:text-indigo-600 transition-colors flex items-center gap-2"
            >
              <ArrowLeft size={16} /> Voltar para notícias
            </button>
            <div className="flex gap-2">
               <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">#{article.category.toLowerCase()}</span>
               <span className="text-xs bg-slate-100 text-slate-500 px-2 py-1 rounded">#cartorios2025</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
