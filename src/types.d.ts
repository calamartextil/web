type tela = {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
};

type estampa = {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
};

type cartItem = { 
  id: string;
  nombre: string;
  precio: number;
  cantidad: number;
};

type cart = { 
  items: cartItem[];
  total: number;
};