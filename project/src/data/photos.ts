import { Photo } from '../types';

export const photos: Photo[] = [
  {
    id: '1',
    title: 'Autumn Forest Path',
    description: 'A serene path through a forest during autumn',
    imageUrl: 'https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'nature',
    featured: true,
  },
  {
    id: '2',
    title: 'City Lights',
    description: 'Urban landscape illuminated at night',
    imageUrl: 'https://images.pexels.com/photos/316902/pexels-photo-316902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'urban',
    featured: true,
  },
  {
    id: '3',
    title: 'Mountain Reflection',
    description: 'Mountains reflecting in a crystal clear lake',
    imageUrl: 'https://images.pexels.com/photos/147411/pexels-photo-147411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'nature',
    featured: true,
  },
  {
    id: '4',
    title: 'Architectural Detail',
    description: 'Close-up of modern architecture details',
    imageUrl: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'architecture',
    featured: false,
  },
  {
    id: '5',
    title: 'Sunset at the Beach',
    description: 'Golden sunset over the ocean horizon',
    imageUrl: 'https://images.pexels.com/photos/1139541/pexels-photo-1139541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'nature',
    featured: true,
  },
  {
    id: '6',
    title: 'Street Photography',
    description: 'Candid moment on a busy city street',
    imageUrl: 'https://images.pexels.com/photos/1209978/pexels-photo-1209978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'urban',
    featured: false,
  },
  {
    id: '7',
    title: 'Historic Building',
    description: 'Historical architecture with intricate details',
    imageUrl: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'architecture',
    featured: false,
  },
  {
    id: '8',
    title: 'Macro Photography',
    description: 'Close-up detail of a flower in bloom',
    imageUrl: 'https://images.pexels.com/photos/1028929/pexels-photo-1028929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'macro',
    featured: true,
  },
  {
    id: '9',
    title: 'Wildlife Portrait',
    description: 'A majestic bird in its natural habitat',
    imageUrl: 'https://images.pexels.com/photos/1298689/pexels-photo-1298689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'wildlife',
    featured: false,
  }
];

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'nature', name: 'Nature' },
  { id: 'urban', name: 'Urban' },
  { id: 'architecture', name: 'Architecture' },
  { id: 'macro', name: 'Macro' },
  { id: 'wildlife', name: 'Wildlife' },
];