
import { RegistryStats, TypeDistribution, StateRanking, RegistryType, NewsArticle } from './types';
import { Baby, Home, FileSignature, Coins, HeartHandshake, ScrollText } from 'lucide-react';

// Dados com projeção para 2025
export const ANNUAL_STATS: RegistryStats[] = [
  { year: 2020, totalActs: 76000000, digitalActs: 1200000, revenue: 16800000000 },
  { year: 2021, totalActs: 85000000, digitalActs: 2800000, revenue: 21500000000 },
  { year: 2022, totalActs: 89000000, digitalActs: 4100000, revenue: 23200000000 },
  { year: 2023, totalActs: 92000000, digitalActs: 5500000, revenue: 25100000000 },
  { year: 2024, totalActs: 94500000, digitalActs: 7200000, revenue: 26800000000 },
  { year: 2025, totalActs: 98200000, digitalActs: 9500000, revenue: 29100000000 },
];

export const DISTRIBUTION_BY_TYPE: TypeDistribution[] = [
  { name: RegistryType.CIVIL, value: 34, color: '#3b82f6' }, // Blue
  { name: RegistryType.NOTAS, value: 28, color: '#10b981' }, // Emerald
  { name: RegistryType.IMOVEIS, value: 24, color: '#f59e0b' }, // Amber
  { name: RegistryType.PROTESTO, value: 10, color: '#ef4444' }, // Red
  { name: RegistryType.TITULOS, value: 4, color: '#8b5cf6' }, // Violet
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 1,
    title: "SERP 100%: Integração Nacional de Cartórios é Concluída",
    summary: "O Sistema Eletrônico dos Registros Públicos atinge a marca histórica de interconexão total entre todas as serventias do país, permitindo certidões em tempo real.",
    content: `O Sistema Eletrônico dos Registros Públicos (SERP) alcançou nesta semana a marca histórica de 100% de integração das serventias extrajudiciais brasileiras. Previsto na Lei 14.382/2022, o sistema unificado permite que cidadãos e empresas localizem registros, solicitem certidões e realizem atos de forma totalmente digital, independentemente de onde o documento físico esteja localizado.
    
    A conclusão da integração representa um marco na desburocratização do setor. "O que antes levava dias e dependia de despachantes, agora é resolvido em segundos no portal único", afirma a diretora de tecnologia do CNJ. O sistema conecta bases de dados de Registro Civil, Imóveis e Títulos e Documentos.
    
    Entre as principais funcionalidades ativas, destacam-se a pesquisa nacional de bens, a certidão unificada de dívidas e o registro eletrônico de garantias móveis. A expectativa é que a economia gerada pela eficiência do sistema ultrapasse R$ 5 bilhões anuais para o mercado brasileiro.`,
    category: "Tecnologia",
    date: "12 Fev 2025",
    author: "Redação CNJ",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Inteligência Artificial acelera análise de contratos imobiliários",
    summary: "Novas ferramentas de IA homologadas permitem que registradores analisem escrituras complexas em minutos, reduzindo o tempo de registro de imóveis em 40%.",
    content: `Cartórios de Registro de Imóveis nas capitais de SP, RJ e MG começaram a operar em 2025 com assistentes de Inteligência Artificial homologados para a fase de qualificação registral. As ferramentas, desenvolvidas por lawtechs brasileiras, realizam a pré-análise de escrituras, contratos de financiamento e cédulas de crédito bancário.
    
    A IA é capaz de verificar a conformidade dos dados das partes, a descrição do imóvel e a cadeia dominial em segundos, apontando inconsistências para o oficial registrador. "Não substituímos o julgamento humano, mas eliminamos o trabalho braçal de conferência de dados repetitivos", explica Dr. Ivan Jacopetti, registrador em São Paulo.
    
    Os resultados preliminares indicam uma redução de 40% no tempo médio de registro, caindo de 15 dias para cerca de 9 dias úteis nas serventias que adotaram a tecnologia. A segurança jurídica é mantida, pois a decisão final e a assinatura eletrônica continuam sendo privativas do oficial.`,
    category: "Inovação",
    date: "10 Fev 2025",
    author: "TechJurídica",
    imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Crescimento de 15% nos Inventários Extrajudiciais em 2024",
    summary: "A desburocratização e a facilidade do e-Notariado impulsionaram a escolha pela via administrativa para inventários e partilhas em todo o Brasil.",
    content: `O Colégio Notarial do Brasil divulgou o balanço consolidado de 2024, apontando um crescimento expressivo de 15% na realização de inventários extrajudiciais em comparação ao ano anterior. O aumento é atribuído à consolidação da plataforma e-Notariado, que permite a realização de atos por videoconferência.
    
    Famílias que antes aguardavam anos no Judiciário agora resolvem a partilha de bens em poucas semanas, desde que haja consenso e não existam testamentos complexos ou menores de idade envolvidos (embora regras recentes já flexibilizem alguns destes pontos).
    
    A economia para os cofres públicos também é relevante, desafogando o Judiciário de processos que podem ser resolvidos na esfera administrativa. O estado de São Paulo liderou o ranking de atos, seguido por Minas Gerais e Paraná.`,
    category: "Estatística",
    date: "05 Fev 2025",
    author: "Colégio Notarial",
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Blockchain nos Cartórios: O novo padrão de segurança",
    summary: "Entenda como a tecnologia blockchain está sendo utilizada para garantir a imutabilidade dos atos notariais digitais sem depender de terceiros.",
    content: `A tecnologia Blockchain, famosa por sustentar as criptomoedas, tornou-se a espinha dorsal da segurança notarial no Brasil em 2025. A rede Notarchain, gerida exclusivamente pelos notários, garante a autenticidade e a imutabilidade de atos digitais como procurações, escrituras e atas notariais.
    
    Diferente de bancos de dados tradicionais, a estrutura descentralizada impede que um registro seja alterado ou apagado sem deixar rastros evidentes. Isso confere aos documentos digitais a mesma fé pública do papel, com camadas adicionais de segurança criptográfica.
    
    Além da segurança, o uso de Blockchain permitiu novas aplicações, como a autenticação de documentos digitais em tempo real e a criação de "gêmeos digitais" de propriedades físicas, facilitando transações complexas.`,
    category: "Segurança",
    date: "02 Fev 2025",
    author: "Observatório Digital",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Regularização Fundiária bate recorde na Região Norte",
    summary: "Programa 'Solo Seguro' entrega mais de 50 mil títulos de propriedade definitivos no Amazonas e Pará no primeiro mês do ano.",
    content: `O programa de Regularização Fundiária Urbana e Rural (REURB) alcançou números expressivos no início de 2025. Em uma força-tarefa conjunta entre cartórios de registro de imóveis, prefeituras e o Poder Judiciário, mais de 50 mil famílias receberam seus títulos de propriedade definitivos apenas em janeiro.
    
    A ação, concentrada nos estados do Amazonas e Pará, visa combater a grilagem e proporcionar segurança jurídica para populações vulneráveis. "Ter o papel da casa na mão muda a vida do cidadão. Ele passa a ter endereço oficial, pode pegar crédito no banco e investir no imóvel", destaca a Corregedora Nacional de Justiça.
    
    Os cartórios desempenharam papel fundamental ao simplificar procedimentos e reduzir custas para a regularização de interesse social, demonstrando o caráter de cidadania da atividade extrajudicial.`,
    category: "Social",
    date: "28 Jan 2025",
    author: "Agência Brasil",
    imageUrl: "https://images.unsplash.com/photo-1448375240586-dfd8d3f5d891?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Tokenização Imobiliária: Cartórios emitem primeiros registros em Token",
    summary: "Parceria entre CVM e ONR viabiliza projeto piloto onde a matrícula do imóvel é representada por um NFT, facilitando a negociação fracionada.",
    content: `O mercado imobiliário brasileiro deu um salto rumo ao futuro nesta semana com a emissão das primeiras matrículas imobiliárias tokenizadas. O projeto piloto, uma parceria entre o Operador Nacional do Registro (ONR) e a Comissão de Valores Mobiliários (CVM), permite que a propriedade seja representada digitalmente por um token (NFT) em uma rede blockchain permissionada.
    
    Na prática, isso facilita a venda fracionada de imóveis e agiliza o processo de transferência, que passa a ocorrer de forma quase instantânea após a verificação das condições contratuais (Smart Contracts). "O cartório continua sendo o garantidor da propriedade, mas o veículo de troca agora é um ativo digital programável", explica especialistas do setor.
    
    A novidade atrai investidores que desejam comprar "fatias" de imóveis de alto padrão com tickets menores, democratizando o investimento imobiliário com a segurança jurídica do registro público.`,
    category: "Mercado",
    date: "14 Fev 2025",
    author: "CryptoEstate News",
    imageUrl: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "LGPD nos Cartórios: Novas regras para publicidade de dados",
    summary: "Provimento 160/2025 define limites mais claros entre a publicidade registral e a privacidade dos dados pessoais dos usuários.",
    content: `Entrou em vigor o novo Provimento do CNJ que harmoniza definitivamente a Lei de Registros Públicos com a Lei Geral de Proteção de Dados (LGPD). As novas regras estabelecem critérios mais rigorosos para a emissão de certidões em bloco e para a pesquisa de bens por CPF por terceiros sem justificativa legal.
    
    A partir de agora, o acesso a dados sensíveis contidos em livros de registro civil e de imóveis exigirá identificação robusta do solicitante e, em alguns casos, demonstração de legítimo interesse. No entanto, a publicidade essencial para a segurança dos negócios imobiliários foi preservada.
    
    "O objetivo é proteger o cidadão de fraudes e uso indevido de dados para marketing, sem transformar o cartório em uma caixa preta que impeça a verificação de propriedade", esclarece a nota técnica da Associação dos Registradores.`,
    category: "Legislação",
    date: "13 Fev 2025",
    author: "Consultor Jurídico",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Biometria Facial obrigatória reduz fraudes em 90%",
    summary: "Sistema de identificação biométrica integrado ao banco de dados nacional do TSE torna impossível a falsificação ideológica em procurações.",
    content: `A obrigatoriedade da validação biométrica facial para a lavratura de escrituras e procurações públicas, implementada plenamente em janeiro de 2025, já mostra resultados contundentes. Dados preliminares apontam uma redução de 90% nas tentativas de fraude por falsidade ideológica (quando alguém se passa por outra pessoa).
    
    O sistema dos cartórios agora cruza a imagem capturada no balcão (ou na videoconferência) com a base de dados do Tribunal Superior Eleitoral (TSE) e do Documento Nacional de Identidade (DNI).
    
    "A tecnologia acabou com o golpe do 'duble', onde estelionatários usavam documentos falsos de alta qualidade. Se a face não bater com a base oficial, o ato é bloqueado imediatamente pelo sistema", comemora o presidente da seção de segurança notarial.`,
    category: "Segurança",
    date: "11 Fev 2025",
    author: "Segurança Pública Hoje",
    imageUrl: "https://images.unsplash.com/photo-1555447405-bd6145d279cf?q=80&w=1000&auto=format&fit=crop"
  }
];

// Lista completa dos 27 estados (UFs) com Top 3 Cartórios Detalhados
export const ALL_STATES_DATA: StateRanking[] = [
  { 
    state: 'AC', name: 'Acre', count: 48, region: 'Norte', revenue2025: 120, digital_adoption: 45,
    topRegistries: [
      { name: '1º Ofício de Registro de Imóveis', city: 'Rio Branco', specialty: 'Imóveis', titular: 'Dr. Fabrício Mendes', staff_count: 42, rating: 4.7 },
      { name: '1º Tabelionato de Notas', city: 'Rio Branco', specialty: 'Notas', titular: 'Dra. Ana Paula Souza', staff_count: 35, rating: 4.5 },
      { name: '2º Ofício de Registro Civil', city: 'Rio Branco', specialty: 'Civil', titular: 'Dr. Carlos Alberto', staff_count: 28, rating: 4.3 }
    ]
  },
  { 
    state: 'AL', name: 'Alagoas', count: 224, region: 'Nordeste', revenue2025: 350, digital_adoption: 52,
    topRegistries: [
      { name: '1º Cartório de Notas e Registro', city: 'Maceió', specialty: 'Misto', titular: 'Dr. Rainey Marinho', staff_count: 65, rating: 4.8 },
      { name: '2º Registro de Imóveis', city: 'Maceió', specialty: 'Imóveis', titular: 'Dra. Maria das Graças', staff_count: 58, rating: 4.6 },
      { name: '1º Ofício de Arapiraca', city: 'Arapiraca', specialty: 'Notas', titular: 'Dr. João Batista', staff_count: 40, rating: 4.4 }
    ]
  },
  { 
    state: 'AP', name: 'Amapá', count: 35, region: 'Norte', revenue2025: 90, digital_adoption: 48,
    topRegistries: [
      { name: 'Cartório Eloy Nunes', city: 'Macapá', specialty: 'Imóveis', titular: 'Dr. Eloy Nunes', staff_count: 38, rating: 4.9 },
      { name: 'Cartório Vales', city: 'Macapá', specialty: 'Notas', titular: 'Dra. Cristiane Vales', staff_count: 32, rating: 4.7 },
      { name: 'Ofício Único de Santana', city: 'Santana', specialty: 'Misto', titular: 'Dr. Pedro Paulo', staff_count: 25, rating: 4.2 }
    ]
  },
  { 
    state: 'AM', name: 'Amazonas', count: 180, region: 'Norte', revenue2025: 420, digital_adoption: 60,
    topRegistries: [
      { name: '1º Ofício de Registro de Imóveis', city: 'Manaus', specialty: 'Imóveis', titular: 'Dra. Anny Ribeiro', staff_count: 75, rating: 4.6 },
      { name: 'Cartório 4º Ofício de Notas', city: 'Manaus', specialty: 'Notas', titular: 'Dr. José Maria', staff_count: 60, rating: 4.5 },
      { name: 'Cartório Fioretti', city: 'Manaus', specialty: 'Protesto', titular: 'Dra. Luciana Fioretti', staff_count: 45, rating: 4.8 }
    ]
  },
  { 
    state: 'BA', name: 'Bahia', count: 1203, region: 'Nordeste', revenue2025: 1850, digital_adoption: 55,
    topRegistries: [
      { name: '1º Ofício de Registro de Imóveis', city: 'Salvador', specialty: 'Imóveis', titular: 'Dr. João Pedro Lamana', staff_count: 120, rating: 4.7 },
      { name: '2º Tabelionato de Notas', city: 'Salvador', specialty: 'Notas', titular: 'Dra. Marli Trindade', staff_count: 95, rating: 4.6 },
      { name: '1º Ofício de Feira de Santana', city: 'Feira de Santana', specialty: 'Misto', titular: 'Dr. Otávio Guimarães', staff_count: 80, rating: 4.5 }
    ]
  },
  { 
    state: 'CE', name: 'Ceará', count: 580, region: 'Nordeste', revenue2025: 980, digital_adoption: 62,
    topRegistries: [
      { name: 'Cartório Pergentino Maia', city: 'Fortaleza', specialty: 'Notas', titular: 'Dr. Pergentino Maia Filho', staff_count: 110, rating: 4.9 },
      { name: '1º Ofício de Registro de Imóveis', city: 'Fortaleza', specialty: 'Imóveis', titular: 'Dra. Helena Borges', staff_count: 105, rating: 4.7 },
      { name: 'Cartório Norões Milfont', city: 'Fortaleza', specialty: 'Civil', titular: 'Dr. Jaime Araripe', staff_count: 90, rating: 4.6 }
    ]
  },
  { 
    state: 'DF', name: 'Distrito Federal', count: 145, region: 'Centro-Oeste', revenue2025: 1100, digital_adoption: 88,
    topRegistries: [
      { name: '1º Ofício de Registro de Imóveis', city: 'Brasília', specialty: 'Imóveis', titular: 'Dr. Luiz Gustavo Leão', staff_count: 150, rating: 4.8 },
      { name: 'Cartório do 1º Ofício de Notas', city: 'Brasília', specialty: 'Notas', titular: 'Dr. Hércules Benício', staff_count: 130, rating: 4.9 },
      { name: '2º Ofício de Registro de Pessoas Jurídicas', city: 'Brasília', specialty: 'Títulos', titular: 'Dra. Julia Rêgo', staff_count: 85, rating: 4.7 }
    ]
  },
  { 
    state: 'ES', name: 'Espírito Santo', count: 310, region: 'Sudeste', revenue2025: 750, digital_adoption: 70,
    topRegistries: [
      { name: 'Cartório do 1º Ofício', city: 'Vitória', specialty: 'Imóveis', titular: 'Dra. Maria Alice', staff_count: 88, rating: 4.6 },
      { name: 'Cartório Sarlo', city: 'Vitória', specialty: 'Notas', titular: 'Dr. Rodrigo Sarlo', staff_count: 92, rating: 4.8 },
      { name: '1º Ofício de Vila Velha', city: 'Vila Velha', specialty: 'Imóveis', titular: 'Dr. Fernando Sampaio', staff_count: 70, rating: 4.5 }
    ]
  },
  { 
    state: 'GO', name: 'Goiás', count: 560, region: 'Centro-Oeste', revenue2025: 1300, digital_adoption: 65,
    topRegistries: [
      { name: '1º Registro de Imóveis', city: 'Goiânia', specialty: 'Imóveis', titular: 'Dr. Igor França', staff_count: 140, rating: 4.7 },
      { name: 'Cartório Silva', city: 'Goiânia', specialty: 'Notas', titular: 'Dr. Mateus Silva', staff_count: 115, rating: 4.8 },
      { name: '2º Tabelionato de Notas', city: 'Aparecida de Goiânia', specialty: 'Notas', titular: 'Dra. Fernanda Lousa', staff_count: 90, rating: 4.6 }
    ]
  },
  { 
    state: 'MA', name: 'Maranhão', count: 420, region: 'Nordeste', revenue2025: 580, digital_adoption: 42,
    topRegistries: [
      { name: '1º Cartório de Imóveis', city: 'São Luís', specialty: 'Imóveis', titular: 'Dr. Ricardo Ferreira', staff_count: 85, rating: 4.5 },
      { name: '2º Tabelionato de Notas', city: 'São Luís', specialty: 'Notas', titular: 'Dra. Juliana Farias', staff_count: 70, rating: 4.6 },
      { name: 'Cartório do 1º Ofício', city: 'Imperatriz', specialty: 'Misto', titular: 'Dr. Marcos Santos', staff_count: 55, rating: 4.3 }
    ]
  },
  { 
    state: 'MT', name: 'Mato Grosso', count: 380, region: 'Centro-Oeste', revenue2025: 1100, digital_adoption: 68,
    topRegistries: [
      { name: '1º Serviço Notarial e Registral', city: 'Cuiabá', specialty: 'Misto', titular: 'Dra. Glória Alice', staff_count: 110, rating: 4.7 },
      { name: '2º Ofício de Rondonópolis', city: 'Rondonópolis', specialty: 'Imóveis', titular: 'Dr. Aureo Candido', staff_count: 95, rating: 4.6 },
      { name: 'Cartório do 6º Ofício', city: 'Cuiabá', specialty: 'Notas', titular: 'Dr. Feliphe Mendonça', staff_count: 88, rating: 4.8 }
    ]
  },
  { 
    state: 'MS', name: 'Mato Grosso do Sul', count: 260, region: 'Centro-Oeste', revenue2025: 720, digital_adoption: 66,
    topRegistries: [
      { name: 'Cartório do 1º Ofício', city: 'Campo Grande', specialty: 'Imóveis', titular: 'Dr. Juan Pablo', staff_count: 90, rating: 4.6 },
      { name: '2º Tabelionato de Notas', city: 'Campo Grande', specialty: 'Notas', titular: 'Dra. Debora Catizane', staff_count: 85, rating: 4.7 },
      { name: 'Cartório de Dourados', city: 'Dourados', specialty: 'Misto', titular: 'Dr. Valdir Neves', staff_count: 70, rating: 4.5 }
    ]
  },
  { 
    state: 'MG', name: 'Minas Gerais', count: 1489, region: 'Sudeste', revenue2025: 3200, digital_adoption: 72,
    topRegistries: [
      { name: '1º Ofício de Registro de Imóveis', city: 'Belo Horizonte', specialty: 'Imóveis', titular: 'Dr. Fernando Pereira', staff_count: 180, rating: 4.8 },
      { name: 'Cartório do 9º Ofício de Notas', city: 'Belo Horizonte', specialty: 'Notas', titular: 'Dra. Walquiria Rabelo', staff_count: 160, rating: 4.9 },
      { name: 'Cartório de Registro de Imóveis', city: 'Uberlândia', specialty: 'Imóveis', titular: 'Dr. Paulo Roberto', staff_count: 130, rating: 4.7 }
    ]
  },
  { 
    state: 'PA', name: 'Pará', count: 450, region: 'Norte', revenue2025: 890, digital_adoption: 50,
    topRegistries: [
      { name: '1º Ofício de Registro de Imóveis', city: 'Belém', specialty: 'Imóveis', titular: 'Dr. Cleomar Moura', staff_count: 100, rating: 4.5 },
      { name: 'Cartório Chermont', city: 'Belém', specialty: 'Notas', titular: 'Dr. Luiziel Guedes', staff_count: 90, rating: 4.8 },
      { name: 'Cartório de Santarém', city: 'Santarém', specialty: 'Misto', titular: 'Dra. Ana Maria', staff_count: 65, rating: 4.4 }
    ]
  },
  { 
    state: 'PB', name: 'Paraíba', count: 320, region: 'Nordeste', revenue2025: 410, digital_adoption: 58,
    topRegistries: [
      { name: 'Cartório Carlos Ulysses', city: 'João Pessoa', specialty: 'Imóveis', titular: 'Dr. Walter Ulysses', staff_count: 85, rating: 4.7 },
      { name: 'Tabelionato Toscano de Brito', city: 'João Pessoa', specialty: 'Notas', titular: 'Dr. Germano Toscano', staff_count: 80, rating: 4.8 },
      { name: 'Cartório de Campina Grande', city: 'Campina Grande', specialty: 'Misto', titular: 'Dr. Ivana Ludmilla', staff_count: 75, rating: 4.6 }
    ]
  },
  { 
    state: 'PR', name: 'Paraná', count: 980, region: 'Sul', revenue2025: 2100, digital_adoption: 78,
    topRegistries: [
      { name: '1º Registro de Imóveis', city: 'Curitiba', specialty: 'Imóveis', titular: 'Dr. Luiz Guilherme', staff_count: 140, rating: 4.8 },
      { name: 'Tabelionato de Notas do Bacacheri', city: 'Curitiba', specialty: 'Notas', titular: 'Dra. Mônica Macedo', staff_count: 120, rating: 4.9 },
      { name: '2º Registro de Imóveis', city: 'Londrina', specialty: 'Imóveis', titular: 'Dr. José Carlos', staff_count: 110, rating: 4.7 }
    ]
  },
  { 
    state: 'PE', name: 'Pernambuco', count: 490, region: 'Nordeste', revenue2025: 950, digital_adoption: 64,
    topRegistries: [
      { name: '1º Registro de Imóveis', city: 'Recife', specialty: 'Imóveis', titular: 'Dr. Roberto Gusmão', staff_count: 115, rating: 4.6 },
      { name: 'Cartório Andrade Lima', city: 'Recife', specialty: 'Notas', titular: 'Dr. Filipe Andrade', staff_count: 100, rating: 4.8 },
      { name: '1º Ofício de Jaboatão', city: 'Jaboatão', specialty: 'Misto', titular: 'Dra. Valéria Rangel', staff_count: 85, rating: 4.5 }
    ]
  },
  { 
    state: 'PI', name: 'Piauí', count: 280, region: 'Nordeste', revenue2025: 290, digital_adoption: 48,
    topRegistries: [
      { name: '2º Cartório de Registro de Imóveis', city: 'Teresina', specialty: 'Imóveis', titular: 'Dra. Lysia Brandão', staff_count: 70, rating: 4.6 },
      { name: 'Cartório Naila Bucar', city: 'Teresina', specialty: 'Notas', titular: 'Dra. Naila Bucar', staff_count: 65, rating: 4.8 },
      { name: '1º Ofício de Parnaíba', city: 'Parnaíba', specialty: 'Misto', titular: 'Dr. José Maria', staff_count: 50, rating: 4.4 }
    ]
  },
  { 
    state: 'RJ', name: 'Rio de Janeiro', count: 850, region: 'Sudeste', revenue2025: 2800, digital_adoption: 82,
    topRegistries: [
      { name: '15º Ofício de Notas', city: 'Rio de Janeiro', specialty: 'Notas', titular: 'Dra. Fernanda Leitão', staff_count: 210, rating: 4.9 },
      { name: '9º Registro de Imóveis', city: 'Rio de Janeiro', specialty: 'Imóveis', titular: 'Dr. Adiulas Costa', staff_count: 180, rating: 4.8 },
      { name: '1º Ofício de Niterói', city: 'Niterói', specialty: 'Misto', titular: 'Dr. Alex Paiva', staff_count: 150, rating: 4.7 }
    ]
  },
  { 
    state: 'RN', name: 'Rio Grande do Norte', count: 240, region: 'Nordeste', revenue2025: 380, digital_adoption: 60,
    topRegistries: [
      { name: '1º Ofício de Notas', city: 'Natal', specialty: 'Notas', titular: 'Dr. Jairo Procópio', staff_count: 80, rating: 4.7 },
      { name: '3º Ofício de Registro de Imóveis', city: 'Natal', specialty: 'Imóveis', titular: 'Dra. Patrícia Monte', staff_count: 75, rating: 4.6 },
      { name: 'Cartório Único de Mossoró', city: 'Mossoró', specialty: 'Misto', titular: 'Dr. Francisco Nóbrega', staff_count: 65, rating: 4.5 }
    ]
  },
  { 
    state: 'RS', name: 'Rio Grande do Sul', count: 765, region: 'Sul', revenue2025: 1950, digital_adoption: 75,
    topRegistries: [
      { name: 'Registro de Imóveis da 1ª Zona', city: 'Porto Alegre', specialty: 'Imóveis', titular: 'Dr. João Pedro', staff_count: 130, rating: 4.7 },
      { name: 'Tabelionato de Notas', city: 'Caxias do Sul', specialty: 'Notas', titular: 'Dr. Marcelo Marques', staff_count: 110, rating: 4.8 },
      { name: '1º Tabelionato de Porto Alegre', city: 'Porto Alegre', specialty: 'Notas', titular: 'Dra. Jenifer Castilhos', staff_count: 100, rating: 4.6 }
    ]
  },
  { 
    state: 'RO', name: 'Rondônia', count: 150, region: 'Norte', revenue2025: 310, digital_adoption: 58,
    topRegistries: [
      { name: '1º Ofício de Registro de Imóveis', city: 'Porto Velho', specialty: 'Imóveis', titular: 'Dr. Francisco Jacinto', staff_count: 65, rating: 4.6 },
      { name: '2º Tabelionato de Notas', city: 'Porto Velho', specialty: 'Notas', titular: 'Dra. Helena Carvajal', staff_count: 55, rating: 4.7 },
      { name: 'Cartório de Ji-Paraná', city: 'Ji-Paraná', specialty: 'Misto', titular: 'Dr. Carlos Alberto', staff_count: 45, rating: 4.4 }
    ]
  },
  { 
    state: 'RR', name: 'Roraima', count: 42, region: 'Norte', revenue2025: 110, digital_adoption: 50,
    topRegistries: [
      { name: 'Cartório Loureiro', city: 'Boa Vista', specialty: 'Misto', titular: 'Dr. Joziel Loureiro', staff_count: 45, rating: 4.8 },
      { name: '1º Ofício de Registro de Imóveis', city: 'Boa Vista', specialty: 'Imóveis', titular: 'Dra. Mirly Rodrigues', staff_count: 40, rating: 4.6 },
      { name: 'Cartório do 2º Ofício', city: 'Boa Vista', specialty: 'Notas', titular: 'Dr. Daniel Aquino', staff_count: 35, rating: 4.5 }
    ]
  },
  { 
    state: 'SC', name: 'Santa Catarina', count: 680, region: 'Sul', revenue2025: 1750, digital_adoption: 85,
    topRegistries: [
      { name: '1º Ofício de Registro de Imóveis', city: 'Florianópolis', specialty: 'Imóveis', titular: 'Dra. Bianca Castellar', staff_count: 125, rating: 4.9 },
      { name: '1º Tabelionato de Notas e Protesto', city: 'Joinville', specialty: 'Misto', titular: 'Dr. Guilherme Gaya', staff_count: 110, rating: 4.8 },
      { name: 'Cartório de Registro de Imóveis', city: 'Balneário Camboriú', specialty: 'Imóveis', titular: 'Dr. Luiz Eduardo', staff_count: 95, rating: 4.7 }
    ]
  },
  { 
    state: 'SP', name: 'São Paulo', count: 1542, region: 'Sudeste', revenue2025: 8500, digital_adoption: 90,
    topRegistries: [
      { name: '1º Tabelião de Notas', city: 'São Paulo', specialty: 'Notas', titular: 'Dr. Andrey Guimarães', staff_count: 350, rating: 4.9 },
      { name: '4º Registro de Imóveis', city: 'São Paulo', specialty: 'Imóveis', titular: 'Dr. Ivan Jacopetti', staff_count: 300, rating: 4.8 },
      { name: '1º Registro de Imóveis', city: 'Campinas', specialty: 'Imóveis', titular: 'Dr. Sérgio Busso', staff_count: 180, rating: 4.7 }
    ]
  },
  { 
    state: 'SE', name: 'Sergipe', count: 180, region: 'Nordeste', revenue2025: 250, digital_adoption: 55,
    topRegistries: [
      { name: 'Cartório do 1º Ofício', city: 'Aracaju', specialty: 'Imóveis', titular: 'Dr. Antônio Henrique', staff_count: 70, rating: 4.7 },
      { name: '2º Ofício de Notas', city: 'Aracaju', specialty: 'Notas', titular: 'Dra. Fernanda Maia', staff_count: 65, rating: 4.6 },
      { name: 'Cartório de Lagarto', city: 'Lagarto', specialty: 'Misto', titular: 'Dr. Luiz Carlos', staff_count: 50, rating: 4.5 }
    ]
  },
  { 
    state: 'TO', name: 'Tocantins', count: 190, region: 'Norte', revenue2025: 280, digital_adoption: 52,
    topRegistries: [
      { name: 'Cartório de Registro de Imóveis', city: 'Palmas', specialty: 'Imóveis', titular: 'Dra. Valéria Holanda', staff_count: 60, rating: 4.6 },
      { name: 'Tabelionato de Notas e Protesto', city: 'Palmas', specialty: 'Notas', titular: 'Dr. Herculano Neto', staff_count: 55, rating: 4.5 },
      { name: 'Cartório de Araguaína', city: 'Araguaína', specialty: 'Misto', titular: 'Dr. Pedro dos Santos', staff_count: 45, rating: 4.4 }
    ]
  },
];

export const KPI_DATA = {
  totalCartorios: 13620,
  digitalGrowth: 18.2, // % (2025 projection)
  actsPerMinute: 188,
  avgSatisfaction: 9.1
};

export const TOP_NAMES_2025 = [
  { rank: 1, name: "Miguel", count: 28400, gender: 'm' },
  { rank: 2, name: "Helena", count: 24100, gender: 'f' },
  { rank: 3, name: "Gael", count: 22800, gender: 'm' },
  { rank: 4, name: "Alice", count: 19500, gender: 'f' },
  { rank: 5, name: "Mavie", count: 16200, gender: 'f' }
];

export const CURIOSITIES_DATA = [
  {
    type: "Imóveis",
    icon: Home,
    title: "O m² mais caro do país",
    description: "Em 2025, Balneário Camboriú (SC) ultrapassou R$ 130 mil o m², exigindo registros imobiliários com engenharia financeira complexa."
  },
  {
    type: "Imóveis",
    icon: Coins,
    title: "Multipropriedade em alta",
    description: "Registros de imóveis fracionados (timeshare) cresceram 22%, impulsionados por resorts em Gramado e Caldas Novas."
  },
  {
    type: "Notas",
    icon: FileSignature,
    title: "Apostilamento Digital",
    description: "Mais de 2 milhões de documentos foram validados para uso internacional sem sair de casa, via plataforma e-Apostil."
  },
  {
    type: "Notas",
    icon: HeartHandshake,
    title: "Casamentos Virtuais",
    description: "1 em cada 5 casamentos no Brasil em 2025 foi realizado por videoconferência, com noivos em locais diferentes."
  }
];

export const PROJECTIONS_2026 = {
  revenue: { current: 29.1, projected: 31.8, growth: 9.3, label: "Receita Global (Bi)" },
  digitalActs: { current: 9.5, projected: 12.8, growth: 34.7, label: "Atos Digitais (Mi)" },
  totalActs: { current: 98.2, projected: 104.5, growth: 6.4, label: "Volume Total (Mi)" },
  efficiency: { current: 92, projected: 96, growth: 4.3, label: "Eficiência <24h (%)" }
};
