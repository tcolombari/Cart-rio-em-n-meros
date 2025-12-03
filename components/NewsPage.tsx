import React, { useEffect, useState } from 'react';
import { Clock, Tag, ArrowRight, User, RefreshCw, Zap } from 'lucide-react';
import { NEWS_DATA } from '../constants';
import { NewsArticle } from '../types';
import { generateDailyNews } from '../services/geminiService';

interface NewsPageProps {
  onNewsClick?: (article: NewsArticle) => void;
}

export const NewsPage: React.FC<NewsPageProps> = ({ onNewsClick }) => {
  const [newsList, setNewsList] = useState<NewsArticle[]>([]);
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    initializeNews();
  }, []);

  const initializeNews = async () => {
    // 1. Load from local storage
    const storedNews = localStorage.getItem('cartorio_news_v1');
    const lastUpdateStr = localStorage.getItem('cartorio_news_last_update');
    
    let currentNews: NewsArticle[] = storedNews ? JSON.parse(storedNews) : NEWS_DATA;

    // 2. Check time conditions for update (8:00 AM)
    const now = new Date();
    const today8am = new Date();
    today8am.setHours(8, 0, 0, 0);

    const lastUpdateDate = lastUpdateStr ? new Date(lastUpdateStr) : new Date(0);
    
    // Check if it's past 8 AM today AND we haven't updated since before 8 AM today
    // Or if we never updated (using static data)
    const needsUpdate = (now >= today8am && lastUpdateDate < today8am);

    if (needsUpdate) {
      await updateDailyNews(currentNews);
    } else {
      setNewsList(currentNews);
    }
  };

  const updateDailyNews = async (currentList: NewsArticle[]) => {
    setIsUpdating(true);
    // Keep showing old news while loading
    setNewsList(currentList);

    // Call AI to generate fresh news
    const newArticle = await generateDailyNews();

    if (newArticle) {
      const updatedList = [newArticle, ...currentList];
      setNewsList(updatedList);
      localStorage.setItem('cartorio_news_v1', JSON.stringify(updatedList));
      localStorage.setItem('cartorio_news_last_update', new Date().toISOString());
    } else {
      // Fallback if API fails: just update timestamp to try again tomorrow
      // We don't want to spam the API on every refresh if it's failing
      console.log("Falha na geração ou API Key ausente. Mantendo notícias atuais.");
      setNewsList(currentList);
    }

    setIsUpdating(false);
  };

  const featured = newsList[0];
  const others = newsList.slice(1);

  if (newsList.length === 0) return null;

  return (
    <div className="space-y-10 animate-in fade-in duration-500 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Notícias do Setor</h2>
          <p className="text-slate-500 mt-1 flex items-center gap-2">
            Atualizações diárias automáticas às 08:00.
            {isUpdating && (
              <span className="flex items-center gap-1 text-indigo-600 text-xs font-bold animate-pulse bg-indigo-50 px-2 py-0.5 rounded-full">
                <RefreshCw size={10} className="animate-spin" /> Atualizando feed...
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Featured News */}
      {featured && (
        <div 
          onClick={() => onNewsClick && onNewsClick(featured)}
          className="relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent z-10"></div>
          <img 
            src={featured.imageUrl} 
            alt={featured.title} 
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {/* Badge for AI Generated Content */}
          {featured.id > 1000 && ( // Simple check if it's dynamic (timestamp id) vs static (small id)
            <div className="absolute top-4 right-4 z-20">
               <span className="bg-indigo-600/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1 shadow-lg">
                 <Zap size={10} className="text-yellow-300" /> EXCLUSIVO HOJE
               </span>
            </div>
          )}
          <div className="absolute bottom-0 left-0 p-8 z-20 max-w-3xl">
            <div className="flex items-center gap-2 mb-3">
               <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                 {featured.category}
               </span>
               <span className="text-slate-300 text-xs flex items-center gap-1">
                 <Clock size={12} /> {featured.date}
               </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              {featured.title}
            </h3>
            <p className="text-slate-200 text-lg line-clamp-2 mb-4">
              {featured.summary}
            </p>
            <button className="text-white font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              Ler matéria completa <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((news) => (
          <div 
            key={news.id} 
            onClick={() => onNewsClick && onNewsClick(news)}
            className="bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-lg hover:border-indigo-100 transition-all group flex flex-col h-full cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
               <img 
                 src={news.imageUrl} 
                 alt={news.title}
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
               />
               <div className="absolute top-4 left-4">
                 <span className="bg-white/90 backdrop-blur-sm text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                   {news.category}
                 </span>
               </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
               <div className="flex items-center gap-2 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1"><Clock size={12} /> {news.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><User size={12} /> {news.author}</span>
               </div>
               <h4 className="text-xl font-bold text-slate-800 mb-3 leading-snug group-hover:text-indigo-700 transition-colors">
                 {news.title}
               </h4>
               <p className="text-slate-500 text-sm line-clamp-3 mb-4 flex-1">
                 {news.summary}
               </p>
               <button className="text-indigo-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                 Ler mais <ArrowRight size={14} />
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};