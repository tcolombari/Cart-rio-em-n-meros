import { GoogleGenAI, Type } from "@google/genai";
import { NewsArticle } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize only if key is present to avoid immediate crash, though strict mode usually requires it.
// We will handle the missing key gracefully in the UI.
const ai = new GoogleGenAI({ apiKey });

export const getGeminiInsight = async (topic: string, dataContext: any): Promise<string> => {
  if (!apiKey) {
    return "API Key não configurada. Por favor, configure a variável de ambiente API_KEY.";
  }

  try {
    const prompt = `
      Você é um especialista em Direito Notarial e Registral e Análise de Dados.
      Analise os seguintes dados do cenário brasileiro de cartórios:
      ${JSON.stringify(dataContext)}

      Tópico solicitado: "${topic}"

      Forneça uma análise concisa (máximo 3 parágrafos) focada em tendências de mercado, impacto econômico e digitalização.
      Use uma linguagem profissional, direta e em português do Brasil. Evite jargões excessivamente técnicos sem explicação.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 0 } // Speed over deep reasoning for this UI interaction
      }
    });

    return response.text || "Não foi possível gerar uma análise no momento.";
  } catch (error) {
    console.error("Erro ao consultar Gemini:", error);
    return "Ocorreu um erro ao gerar insights. Tente novamente mais tarde.";
  }
};

export const generateDailyNews = async (): Promise<NewsArticle | null> => {
  if (!apiKey) return null;

  try {
    const today = new Date().toLocaleDateString('pt-BR');
    
    // Schema for structured JSON response
    const schema = {
      type: Type.OBJECT,
      properties: {
        title: { type: Type.STRING },
        summary: { type: Type.STRING },
        content: { type: Type.STRING },
        category: { type: Type.STRING },
        author: { type: Type.STRING },
      },
      required: ["title", "summary", "content", "category", "author"]
    };

    const prompt = `
      Crie uma notícia fictícia, porém realista e técnica, sobre o setor notarial e registral brasileiro para o dia de hoje (${today}).
      
      Escolha UM destes temas aleatoriamente:
      1. Nova tecnologia implementada pelo CNJ.
      2. Recorde de atos em um estado específico.
      3. Mudança legislativa impactando registro de imóveis.
      4. Integração de sistemas cartoriais.
      
      A notícia deve parecer um "Breaking News" das 8h da manhã.
      O campo 'content' deve ter pelo menos 3 parágrafos bem elaborados.
      O estilo deve ser jornalístico e formal.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: schema
      }
    });

    const text = response.text;
    if (!text) return null;

    const data = JSON.parse(text);
    
    // Images related to office/tech/law
    const images = [
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1000",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1000",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1000",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000"
    ];

    return {
      id: Date.now(), // Unique ID based on timestamp
      title: data.title,
      summary: data.summary,
      content: data.content,
      category: data.category || "Destaque do Dia",
      author: data.author || "Redação CartórioEmNúmeros",
      date: today,
      imageUrl: images[Math.floor(Math.random() * images.length)]
    };

  } catch (error) {
    console.error("Erro ao gerar notícia diária:", error);
    return null;
  }
};