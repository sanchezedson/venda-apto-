import { ApartmentUnit, Amenity, PointOfInterest, Testimonial } from '../types';
import heroApartmentFacade from '../assets/images/hero_apartment_facade_1790202044546.jpg';
import interiorLiving from '../assets/images/interior_luxury_living_1790202054705.jpg';
import rooftopPool from '../assets/images/rooftop_infinity_pool_1790202063641.jpg';
import masterBedroom from '../assets/images/master_suite_bedroom_1790202073038.jpg';

export const OFFICIAL_INTEREST_FORM_URL = 'https://forms.gle/k7LVju6p1hdPSbnx6';

export const IMAGES = {
  heroFacade: heroApartmentFacade,
  interiorLiving: interiorLiving,
  rooftopPool: rooftopPool,
  masterBedroom: masterBedroom,
};

export const APARTMENT_UNITS: ApartmentUnit[] = [
  {
    id: 'unit-2-suites',
    name: 'Garden Suítes',
    tagline: 'O privilégio de viver com quintal privativo e máxima conveniência',
    area: 84,
    privateGarden: 32,
    bedrooms: 2,
    suites: 2,
    bathrooms: 3,
    parkingSpaces: 2,
    priceFrom: 890000,
    floor: 'Térreo elevado com vista verde',
    sunOrientation: 'Sol da Manhã',
    image: interiorLiving,
    features: [
      'Jardim privativo de 32m² com spa deck opcional',
      'Living integrado à varanda gourmet',
      'Duas suítes com persianas blackout 100% integradas',
      'Cozinha com bancada em granito São Gabriel escovado',
      'Fechadura biométrica e automação de iluminação'
    ],
    description: 'Projetado para quem valoriza a sensação de casa com a segurança de um condomínio vertical de alto padrão. Ambientes arejados e integração perfeita entre sala e área verde privativa.'
  },
  {
    id: 'unit-3-suites',
    name: 'Residence Prime',
    tagline: 'Amplitude, elegância e vista definitiva para o pôr do sol',
    area: 122,
    bedrooms: 3,
    suites: 3,
    bathrooms: 4,
    parkingSpaces: 2,
    priceFrom: 1390000,
    floor: 'Do 3º ao 18º pavimento',
    sunOrientation: 'Norte / Poente suave',
    image: interiorLiving,
    features: [
      'Churrasqueira a carvão e duto individual na varanda gourmet',
      'Piso em porcelanato 120x120cm retificado nas áreas sociais',
      'Infraestrutura completa para ar-condicionado em todos os cômodos',
      'Suíte máster com espaço para closet generoso e cubas duplas',
      'Tomada individual para recarga de veículo elétrico'
    ],
    description: 'A configuração mais equilibrada para famílias contemporâneas. Planta inteligente sem corredores perdidos, com total privacidade íntima e ampla área social para receber amigos.'
  },
  {
    id: 'unit-4-suites',
    name: 'Excellence Grand',
    tagline: 'Dimensões generosas e exclusividade de hall social privativo',
    area: 178,
    bedrooms: 4,
    suites: 4,
    bathrooms: 5,
    parkingSpaces: 3,
    priceFrom: 2150000,
    floor: 'Do 19º ao 26º pavimento',
    sunOrientation: 'Frente voltada para o Parque',
    image: masterBedroom,
    features: [
      'Hall privativo com elevador codificado e biometria',
      'Living panorâmico com 8 metros de caixilho piso-teto',
      'Suíte master com banheira de imersão e vista livre',
      'Dependência completa de serviço e despensa funcional',
      'Isolamento acústico de piso e manta acústica em todas as tubulações'
    ],
    description: 'Um novo patamar de exclusividade. Ambientes nobres com iluminação natural em 360 graus, acabamentos assinados e 3 vagas de garagem determinadas em piso coberto.'
  },
  {
    id: 'unit-penthouse',
    name: 'Penthouse Duplex',
    tagline: 'O topo da arquitetura com piscina privativa suspensa',
    area: 258,
    bedrooms: 4,
    suites: 4,
    bathrooms: 6,
    parkingSpaces: 4,
    priceFrom: 3680000,
    floor: '27º e 28º pavimentos (Rooftop privativo)',
    sunOrientation: 'Vista 360° panorâmica da cidade',
    image: rooftopPool,
    features: [
      'Deck privativo com piscina aquecida de borda infinita',
      'Espaço gourmet superior com lareira ecológica ao ar livre',
      'Pé-direito duplo de 5,80m no living principal',
      '4 vagas de garagem + depósito privativo no subsolo de 8m²',
      'Elevador com acesso aos dois pavimentos privativos'
    ],
    description: 'A joia do Vitra Jardins. Uma verdadeira mansão nas alturas com horizonte desobstruído da cidade, terraço privativo aberto para o céu e conforto sem precedentes.'
  }
];

export const GALLERY_ITEMS = [
  {
    id: 'facade',
    title: 'Fachada Arquitetônica',
    category: 'Exterior',
    image: heroApartmentFacade,
    description: 'Projeto biofílico assinado por estúdio de arquitetura premiado, com brises térmicos e vegetação nativa integrada.'
  },
  {
    id: 'living',
    title: 'Living & Varanda Integrada',
    category: 'Interiores',
    image: interiorLiving,
    description: 'Esquadrias piso-teto com atenuação acústica e integração fluida entre living, jantar e espaço gourmet.'
  },
  {
    id: 'pool',
    title: 'Rooftop & Piscina Infinita',
    category: 'Lazer',
    image: rooftopPool,
    description: 'Piscina aquecida a 90 metros de altura com borda infinita debruçada sobre o skyline da cidade.'
  },
  {
    id: 'suite',
    title: 'Suíte Master',
    category: 'Área Íntima',
    image: masterBedroom,
    description: 'Conforto e serenidade com painéis de madeira nobre, janela panorâmica e espaço para closet walk-in.'
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'rooftop-pool',
    title: 'Piscina de Borda Infinita no Rooftop',
    subtitle: 'Com deck molhado, espreguiçadeiras e vista aberta panorâmica',
    iconName: 'Waves',
    span: 'col-span-1 md:col-span-2'
  },
  {
    id: 'fitness-center',
    title: 'Espaço Fitness Profissional',
    subtitle: 'Aparelhos ergonômicos de alta performance para treinos diários',
    iconName: 'Dumbbell',
    span: 'col-span-1'
  },
  {
    id: 'coworking',
    title: 'Coworking Privativo & Reuniões',
    subtitle: 'Ambiente acústico preparado com internet ultra-rápida e cabines reservadas',
    iconName: 'Coffee',
    span: 'col-span-1'
  },
  {
    id: 'gourmet-lounge',
    title: 'Lounge Gourmet para Convidados',
    subtitle: 'Cozinha de chef climatizada com churrasqueira e adega climatizada',
    iconName: 'Sparkles',
    span: 'col-span-1 md:col-span-2'
  },
  {
    id: 'kids-area',
    title: 'Brinquedoteca & Playground',
    subtitle: 'Espaço lúdico monitorado e seguro para as crianças brincarem',
    iconName: 'TreePine',
    span: 'col-span-1'
  },
  {
    id: 'security-24h',
    title: 'Segurança & Reconhecimento Facial',
    subtitle: 'Portaria blindada 24 horas, controle de acesso e clausura para pedestres e veículos',
    iconName: 'ShieldCheck',
    span: 'col-span-1 md:col-span-2'
  }
];

export const POINTS_OF_INTEREST: PointOfInterest[] = [
  {
    id: 'poi-1',
    name: 'Parque Burle Marx & Jardins',
    category: 'nature',
    categoryLabel: 'Lazer & Natureza',
    timeMinutes: 3,
    distanceKm: '650 m',
    description: 'Pistas de caminhada, lago e extensa área verde para atividades ao ar livre.'
  },
  {
    id: 'poi-2',
    name: 'Colégio Internacional & Bilíngue',
    category: 'education',
    categoryLabel: 'Educação',
    timeMinutes: 4,
    distanceKm: '1.2 km',
    description: 'Uma das instituições de ensino mais conceituadas da região a poucos minutos.'
  },
  {
    id: 'poi-3',
    name: 'Polo Gastronômico Jardins',
    category: 'dining',
    categoryLabel: 'Gastronomia',
    timeMinutes: 5,
    distanceKm: '1.5 km',
    description: 'Mais de 30 restaurantes estrelados, bistrôs franceses e empórios gourmet.'
  },
  {
    id: 'poi-4',
    name: 'Shopping Cidade & Boutiques',
    category: 'shopping',
    categoryLabel: 'Compras & Serviços',
    timeMinutes: 7,
    distanceKm: '2.4 km',
    description: 'Cinema VIP, lojas exclusivas de moda e serviços premium integrados.'
  },
  {
    id: 'poi-5',
    name: 'Hospital Nove de Julho / Albert Einstein',
    category: 'health',
    categoryLabel: 'Saúde & Bem-Estar',
    timeMinutes: 8,
    distanceKm: '2.8 km',
    description: 'Centro de excelência médica e atendimento especializado 24 horas.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Compramos na planta e a entrega ocorreu 2 meses antes do prazo com o padrão construtivo impecável. Nosso apartamento valorizou mais de 38% desde o lançamento.',
    author: 'Dra. Helena Martins e Dr. Roberto',
    role: 'Médicos e Investidores Imobiliários',
    unitPurchased: 'Unidade 142 · Edifício Lumina (Empreendimento anterior)',
    deliveredYear: 'Entregue em 2024'
  },
  {
    id: 'test-2',
    quote: 'A varanda integrada com churrasqueira a carvão e a segurança do prédio transformaram nossa rotina com os filhos. O atendimento da construtora é transparente do início ao fim.',
    author: 'Carlos Eduardo Alencar',
    role: 'Diretor de Tecnologia',
    unitPurchased: 'Residence 3 Suítes · Vitra Jardins',
    deliveredYear: 'Comprador confirmado'
  }
];
