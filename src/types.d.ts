export type Tela = {
  telaId: string;
  title: string;
  sku: string;
  description?: string;
  price: number;
  minMeters?: number;
  images: {
    lisaUrl: string;
    estampadaUrl?: string;
    usosUrl?: string;
  };
  categories: telasCategory[];
};

export type Estampa = {
  id: string;
  title: string;
  sku: string;
  image: string;
  description?: string;
  category: string;
};

export type TelasCategory = {
  id: string;
  title: string;
  description?: string;
  image?: string;
};

export type CartItem = {
  tela: tela;
  price: number;
  mts: number;
  estampas: estampa[];
};

export type Cart = {
  items: cartItem[];
  total: number;
};
