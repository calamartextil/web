export type Tela = {
  telaId?: string;
  title: string;
  sku: string;
  description?: string;
  baseColor?: string;
  composition?: string;
  width?: number;
  usos?: string[];
  prices: number[];
  images: {
    lisaUrl: string;
    estampadaUrl?: string;
    usosUrl?: string;
  };
  categories: TelasCategory[];
};

export type Estampa = {
  id?: string;
  title: string;
  sku: string;
  image: string;
  description?: string;
  category: string;
};

export type TelasCategory = {
  slug: string;
  name: string;
};
export type EstampasCategory = {
  slug: string;
  name: string;
};

export type CartItem = {
  tela: Tela;
  price: number;
  mts: number;
  estampas?:
    | [
        {
          estampa: Estampa;
          mts: number;
          scale: string;
        }
      ]
    | [];
};

export type Cart = {
  //Posible deprecated
  items: cartItem[];
  total: number;
};

export type EstampaCart = {
  estampa: Estampa;
  mts: number;
  scale: string;
};