import { Tela } from '@/types';

export const categories = [
  {
    id: '1',
    title: 'Categoria 1',
  },
  {
    id: '2',
    title: 'Categoria 2',
  },
  {
    id: '3',
    title: 'Categoria 3',
  },
];

export const telas: Tela[] = [
  {
    telaId: '1',
    title: 'Tela 1',
    sku: 'sku1',
    price: 10,
    images: {
      lisaUrl: '/images/dummy/telas/BATISTA-stampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    categories: [
      {
        id: '1',
        title: 'Categoria 1',
      },
    ],
  },
  {
    telaId: '2',
    title: 'Tela 2',
    sku: 'sku2',
    price: 20,
    images: {
      lisaUrl: '/images/dummy/telas/CEY-estampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    categories: [
      {
        id: '1',
        title: 'Categoria 1',
      },
    ],
  },
  {
    telaId: '3',
    title: 'Tela 3',
    sku: 'sku1',
    price: 10,
    images: {
      lisaUrl: '/images/dummy/telas/CIRE-OPACO-estampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    categories: [
      {
        id: '1',
        title: 'Categoria 1',
      },
    ],
  },
  {
    telaId: '4',
    title: 'Tela 4',
    sku: 'sku2',
    price: 20,
    images: {
      lisaUrl: '/images/dummy/telas/CORDURA..jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    categories: [
      {
        id: '1',
        title: 'Categoria 1',
      },
    ],
  },
  {
    telaId: '1',
    title: 'Tela 1',
    sku: 'sku1',
    price: 10,
    images: {
      lisaUrl: '/images/dummy/telas/BATISTA-stampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    categories: [
      {
        id: '1',
        title: 'Categoria 1',
      },
    ],
  },
  {
    telaId: '2',
    title: 'Tela 2',
    sku: 'sku2',
    price: 20,
    images: {
      lisaUrl: '/images/dummy/telas/BATISTA-stampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    categories: [
      {
        id: '1',
        title: 'Categoria 1',
      },
    ],
  },
  {
    telaId: '3',
    title: 'Tela 3',
    sku: 'sku1',
    price: 10,
    images: {
      lisaUrl: '/images/dummy/telas/BATISTA-stampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    categories: [
      {
        id: '1',
        title: 'Categoria 1',
      },
    ],
  },
  {
    telaId: '4',
    title: 'Tela 4',
    sku: 'sku2',
    price: 20,
    images: {
      lisaUrl: '/images/dummy/telas/BATISTA-stampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    categories: [
      {
        id: '1',
        title: 'Categoria 1',
      },
    ],
  },
];

export const getTelaBySku = (sku: string) => telas.find((tela) => tela.sku === sku);