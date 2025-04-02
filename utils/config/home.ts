import { Beer } from '@/utils/types';

export const FEATURED_IMAGE =
  'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&q=80';

export const BEERS: Beer[] = [
  {
    id: 1,
    name: 'Heineken Original',
    brand: 'Heineken',
    image:
      'https://images.unsplash.com/photo-1618885472179-5e474019f2a9?auto=format&fit=crop&q=80',
    price: '$4.99',
    stock: 124,
  },
  {
    id: 2,
    name: 'Corona Extra',
    brand: 'Grupo Modelo',
    image:
      'https://drinkcentral.co/wp-content/uploads/2023/03/CERVEZA-CORONITA-BOTELLA-210ml.webp',
    price: '$4.49',
    stock: 86,
  },
  {
    id: 3,
    name: 'Stella Artois',
    brand: 'AB InBev',
    image:
      'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&q=80',
    price: '$5.49',
    stock: 92,
  },
  {
    id: 4,
    name: 'Blue Moon Belgian White',
    brand: 'Blue Moon Brewing Co.',
    image:
      'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?auto=format&fit=crop&q=80',
    price: '$5.99',
    stock: 45,
  },
  {
    id: 5,
    name: 'Guinness Draught',
    brand: 'Guinness',
    image:
      'https://images.unsplash.com/photo-1571767454098-246b94fbcf70?auto=format&fit=crop&q=80',
    price: '$6.49',
    stock: 67,
  },
];
