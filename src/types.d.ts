type tela = {
  id: string;
  name: string;
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

type estampa = {
  id: string;
  name: string;
  sku: string;
  image: string;
  description?: string;
  category: string;
};

type telasCategory = {
  id: string;
  name: string;
  description?: string;
  image?: string;
};

type cartItem = {
  tela: tela;
  price: number;
  mts: number;
  estampas: estampa[];
};

type cart = {
  items: cartItem[];
  total: number;
};
