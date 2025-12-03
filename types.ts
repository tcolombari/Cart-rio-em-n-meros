
export interface RegistryStats {
  year: number;
  totalActs: number;
  digitalActs: number;
  revenue: number;
}

export interface TypeDistribution {
  name: string;
  value: number;
  color: string;
}

export interface RegistryEntity {
  name: string;
  city: string;
  specialty: string;
  titular: string;      // Nome do Tabelião/Registrador
  staff_count: number;  // Tamanho da equipe
  rating: number;       // Avaliação média (0-5)
}

export interface StateRanking {
  state: string;
  name: string;
  count: number;
  region: string;
  revenue2025: number; // Estimado em milhões
  digital_adoption: number; // %
  topRegistries: RegistryEntity[];
}

export interface NewsArticle {
  id: number;
  title: string;
  summary: string;
  content?: string; // Full article content
  category: string;
  date: string;
  author: string;
  imageUrl: string;
}

export enum RegistryType {
  NOTAS = 'Notas',
  CIVIL = 'Registro Civil',
  IMOVEIS = 'Registro de Imóveis',
  PROTESTO = 'Protesto',
  TITULOS = 'Títulos e Documentos'
}

export interface InsightRequest {
  topic: string;
  dataContext: any;
}

export type PageType = 'dashboard' | 'ranking' | 'transparency' | 'news';
