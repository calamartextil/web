import { Estampa, Tela } from '@/types';

export const telasCategories = [
  { title: 'Algodón', href: '/telas/categoria/tela-de-algodon' },
  { title: 'Bolsos', href: '/telas/categoria/bolsos' },
  { title: 'Con elastano', href: '/telas/categoria/tela-con-elastano' },
  { title: 'Decoración', href: '/telas/categoria/tela-para-decoracion' },
  { title: 'Forrería', href: '/telas/categoria/forreria' },
  { title: 'Impermeable', href: '/telas/categoria/tela-impermeable' },  
  { title: 'Indumentaria', href: '/telas/categoria/tela-para-indumentaria' },
  { title: 'Plana', href: '/telas/categoria/tela-plana' },
  { title: 'Poliéster', href: '/telas/categoria/tela-de-poliester' },
  { title: 'Punto', href: '/telas/categoria/tela-de-punto' },
].sort((a, b) => a.title.localeCompare(b.title));

export const estampasCategories = [
  {
    title: 'Botanico',
    description: 'Flores y muchos colores',
    image: '/images/icons/Botanico.svg',
    href: '/estampas/catalogo/botanico',
  },
  {
    title: 'Animales',
    description: '¡Miauuuuuuu!',
    image: '/images/icons/Animales.svg',
    href: '/estampas/catalogo/animales',
  },
  {
    title: 'Kids',
    description: 'Para los más pequeños',
    image: '/images/icons/Kids.svg',
    href: '/estampas/catalogo/kids',
  },
  {
    title: 'Popurri',
    description: 'De todo un poco',
    image: '/images/icons/Popurri.svg',
    href: '/estampas/catalogo/popurri',
  },
  {
    title: 'Comida',
    description: 'Muchas cosas ricas',
    image: '/images/icons/Comida.svg',
    href: '/estampas/catalogo/comida',
  },
  {
    title: 'Abstracto',
    description: 'Un mundo de formas',
    image: '/images/icons/Abstracto.svg',
    href: '/estampas/catalogo/abstracto',
  },
  {
    title: 'Básicos',
    description: 'Para armar combinaciones',
    image: '/images/icons/Basicos.svg',
    href: '/estampas/catalogo/basicos',
  },
];

export const telas: Tela[] = [
  {
    telaId: '1',
    title: 'Batista',
    sku: 'sku1',
    prices: [500, 400, 300, 200, 100],
    images: {
      lisaUrl: '/images/dummy/telas/BATISTA-stampada.jpg',
      estampadaUrl: 'https://via.placeholder.com/150',
      usosUrl: 'https://via.placeholder.com/150',
    },
    description: 'Tela fina, liviana y delicada.',
    categories: [
      {
        slug: '1',
        name: 'Categoria 1',
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
];

export const getTelaBySku = (sku: string) =>
  telas.find((tela) => tela.sku === sku);

export const getEstampaBySku = (sku: string) =>
  estampas.find((estampa) => estampa.sku === sku);

export const getAllEstampas = () => estampas;
export const getAllTelas = () => telas as Tela[];
