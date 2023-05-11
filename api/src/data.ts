import bcrypt from 'bcryptjs';

import { Product } from './models/productModel';
import { User } from './models/userModel';

export const sampleProducts: Product[] = [
  {
    name: 'Golden Retriever',
    slug: 'golden-retreiver',
    category: 'Dogs',
    image: '../images/gr.jpeg',
    price: 2000,
    countInStock: 3,
    bread: 'GoldenRetriever',
    rating: 4.5,
    numReviews: 10,
    description: 'Gentle and lovely',
  },
  {
    name: 'German Shepherd',
    slug: 'german-shepherd',
    category: 'Dogs',
    image: '../images/gs.jpeg',
    price: 3000,
    countInStock: 0,
    bread: 'GermanShepherd',
    rating: 4.0,
    numReviews: 10,
    description: 'fun and outgoing',
  },
  {
    name: 'Siamese Cat',
    slug: 'siamese-cat',
    category: 'Cats',
    image: '../images/sc.jpeg',
    price: 2700,
    countInStock: 2,
    bread: 'Siamese',
    rating: 4.8,
    numReviews: 17,
    description: 'elegant and proud',
  },
  {
    name: 'Bristish Shorthair',
    slug: 'british-shorthair',
    category: 'Cats',
    image: '../images/bs.jpeg',
    price: 2200,
    countInStock: 3,
    bread: 'BritishShorthair',
    rating: 4.5,
    numReviews: 14,
    description: 'Cute and Lazy',
  },
];

export const sampleUsers: User[] = [
  {
    name: 'Admin',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@email.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
];
