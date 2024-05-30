import { Estampa, Tela } from '@/types';

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
    title: 'Batista',
    sku: 'sku1',
    price: 10,
    images: {
      lisaUrl: '/images/dummy/telas/BATISTA-stampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    description: 'Tela fina, liviana y delicada.',
    categories: [
      {
        id: '1',
        title: 'Categoria 1',
      },
    ],
  },
  {
    telaId: '2',
    title: 'Cordura',
    sku: 'sku2',
    price: 20,
    images: {
      lisaUrl: '/images/dummy/telas/CEY-estampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    description: 'Tela muy resistente con una lámina de pvc en el reverso que la hace repelente al agua. ',
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
    sku: 'sku3',
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
    sku: 'sku4',
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
    telaId: '5',
    title: 'Tela 5',
    sku: 'sku5',
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
    telaId: '6',
    title: 'Tela 6',
    sku: 'sku6',
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
    telaId: '7',
    title: 'Tela 7',
    sku: 'sku7',
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
    telaId: '8',
    title: 'Tela 8',
    sku: 'sku8',
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

export const estampas: Estampa[] = [
  {
    id: '1',
    title: 'Estampa 1',
    sku: 'AB-001',
    image: '/images/dummy/estampas/AB-001.jpg',
    category: 'Categoria 1',
  },
  {
    id: '2',
    title: 'Estampa 2',
    sku: 'AN-001',
    image: '/images/dummy/estampas/AN-001.jpg',
    category: 'Categoria 1',
  },
  {
    id: '3',
    title: 'Estampa 3',
    sku: 'AN-002',
    image: '/images/dummy/estampas/AN-002.jpg',
    category: 'Categoria 1',
  },
  {
    id: '4',
    title: 'Estampa 4',
    sku: 'BO-001',
    image: '/images/dummy/estampas/BO-001..jpg',
    category: 'Categoria 1',
  },
  {
    id: '5',
    title: 'Estampa 5',
    sku: 'BO-002',
    image: '/images/dummy/estampas/BO-002.jpg',
    category: 'Categoria 1',
  },
  {
    id: '6',
    title: 'Estampa 6',
    sku: 'BO-003',
    image: '/images/dummy/estampas/BO-003.jpg',
    category: 'Categoria 1',
  },
  {
    id: '7',
    title: 'Estampa 7',
    sku: 'BS-001',
    image: '/images/dummy/estampas/BS-001.jpg',
    category: 'Categoria 1',
  },
  {
    id: '8',
    title: 'Estampa 8',
    sku: 'CM-001',
    image: '/images/dummy/estampas/CM-001.jpg',
    category: 'Categoria 1',
  },
];

export const getTelaBySku = (sku: string) =>
  telas.find((tela) => tela.sku === sku);

export const getEstampaBySku = (sku: string) =>
  estampas.find((estampa) => estampa.sku === sku);

export const getAllEstampas = () => estampas;
export const getAllTelas = () => telas as Tela[];
