export type Tela = {
  telaId: string;
  title: string;
  sku: string;
  description?: string;
  baseColor?: string;
  composition?: string;
  width?: number;
  usos?: string;
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