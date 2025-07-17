import { Category, IconItem } from '../types/types';

// Helper function to create icon URLs with more modern and aesthetic icons
const iconUrl = (name: string) => `https://api.iconify.design/lucide/${name}.svg?color=%23333`;
const fillIconUrl = (name: string) => `https://api.iconify.design/solar/${name}-bold.svg?color=%23333`;
const colorIconUrl = (name: string, color: string = '333') => `https://api.iconify.design/twemoji/${name}.svg`;

export const categories: Category[] = [
  {
    id: 'favorites',
    name: 'Favorites',
  },
  {
    id: 'common',
    name: 'Common Words',
  },
  {
    id: 'actions',
    name: 'Actions',
  },
  {
    id: 'feelings',
    name: 'Feelings',
  },
  {
    id: 'food',
    name: 'Food & Drink',
  },
  {
    id: 'places',
    name: 'Places',
  },
  {
    id: 'people',
    name: 'People',
  }
];

export const icons: IconItem[] = [
  // Common Words
  { id: 'i', text: 'I', image: fillIconUrl('user'), category: 'common' },
  { id: 'want', text: 'want', image: fillIconUrl('hand'), category: 'common' },
  { id: 'need', text: 'need', image: fillIconUrl('first-aid-kit'), category: 'common' },
  { id: 'more', text: 'more', image: iconUrl('plus'), category: 'common' },
  { id: 'please', text: 'please', image: iconUrl('heart-handshake'), category: 'common' },
  { id: 'thank-you', text: 'thank you', image: fillIconUrl('hands'), category: 'common' },
  { id: 'yes', text: 'yes', image: iconUrl('check'), category: 'common' },
  { id: 'no', text: 'no', image: iconUrl('x'), category: 'common' },
  { id: 'help', text: 'help', image: iconUrl('help-circle'), category: 'common' },
  { id: 'stop', text: 'stop', image: iconUrl('octagon'), category: 'common' },
  { id: 'go', text: 'go', image: iconUrl('play'), category: 'common' },
  { id: 'my', text: 'my', image: fillIconUrl('hand-stars'), category: 'common' },
  { id: 'to', text: 'to', image: iconUrl('arrow-right'), category: 'common' },
  { id: 'where', text: 'where', image: iconUrl('map-pin'), category: 'common' },
  
  // Actions
  { id: 'eat', text: 'eat', image: fillIconUrl('bowl-spoon'), category: 'actions' },
  { id: 'drink', text: 'drink', image: iconUrl('glass-water'), category: 'actions' },
  { id: 'play', text: 'play', image: colorIconUrl('soccer-ball'), category: 'actions' },
  { id: 'sleep', text: 'sleep', image: iconUrl('moon'), category: 'actions' },
  { id: 'sit', text: 'sit', image: fillIconUrl('armchair'), category: 'actions' },
  { id: 'stand', text: 'stand', image: fillIconUrl('standing-man'), category: 'actions' },
  { id: 'walk', text: 'walk', image: iconUrl('footprints'), category: 'actions' },
  { id: 'run', text: 'run', image: fillIconUrl('running'), category: 'actions' },
  { id: 'look', text: 'look', image: iconUrl('eye'), category: 'actions' },
  { id: 'listen', text: 'listen', image: iconUrl('ear'), category: 'actions' },
  { id: 'talk', text: 'talk', image: iconUrl('message-circle'), category: 'actions' },
  { id: 'give', text: 'give', image: fillIconUrl('gift'), category: 'actions' },
  { id: 'take', text: 'take', image: fillIconUrl('hand-money'), category: 'actions' },
  { id: 'wait', text: 'wait', image: iconUrl('clock'), category: 'actions' },
  
  // Feelings
  { id: 'happy', text: 'happy', image: colorIconUrl('grinning-face-with-big-eyes'), category: 'feelings' },
  { id: 'sad', text: 'sad', image: colorIconUrl('crying-face'), category: 'feelings' },
  { id: 'angry', text: 'angry', image: colorIconUrl('pouting-face'), category: 'feelings' },
  { id: 'scared', text: 'scared', image: colorIconUrl('face-screaming-in-fear'), category: 'feelings' },
  { id: 'tired', text: 'tired', image: colorIconUrl('sleeping-face'), category: 'feelings' },
  { id: 'sick', text: 'sick', image: colorIconUrl('face-with-thermometer'), category: 'feelings' },
  { id: 'hurt', text: 'hurt', image: colorIconUrl('face-with-head-bandage'), category: 'feelings' },
  { id: 'bored', text: 'bored', image: colorIconUrl('expressionless-face'), category: 'feelings' },
  { id: 'excited', text: 'excited', image: colorIconUrl('star-struck'), category: 'feelings' },
  { id: 'hot', text: 'hot', image: colorIconUrl('hot-face'), category: 'feelings' },
  { id: 'cold', text: 'cold', image: colorIconUrl('cold-face'), category: 'feelings' },
  
  // Food & Drink
  { id: 'water', text: 'water', image: colorIconUrl('water-wave'), category: 'food' },
  { id: 'milk', text: 'milk', image: colorIconUrl('glass-of-milk'), category: 'food' },
  { id: 'juice', text: 'juice', image: colorIconUrl('tropical-drink'), category: 'food' },
  { id: 'apple', text: 'apple', image: colorIconUrl('red-apple'), category: 'food' },
  { id: 'banana', text: 'banana', image: colorIconUrl('banana'), category: 'food' },
  { id: 'bread', text: 'bread', image: colorIconUrl('bread'), category: 'food' },
  { id: 'pizza', text: 'pizza', image: colorIconUrl('pizza'), category: 'food' },
  { id: 'cookie', text: 'cookie', image: colorIconUrl('cookie'), category: 'food' },
  { id: 'chicken', text: 'chicken', image: colorIconUrl('poultry-leg'), category: 'food' },
  { id: 'ice-cream', text: 'ice cream', image: colorIconUrl('ice-cream'), category: 'food' },
  
  // Places
  { id: 'home', text: 'home', image: fillIconUrl('home'), category: 'places' },
  { id: 'school', text: 'school', image: fillIconUrl('school'), category: 'places' },
  { id: 'park', text: 'park', image: colorIconUrl('deciduous-tree'), category: 'places' },
  { id: 'store', text: 'store', image: fillIconUrl('shop'), category: 'places' },
  { id: 'bathroom', text: 'bathroom', image: iconUrl('bath'), category: 'places' },
  { id: 'bedroom', text: 'bedroom', image: fillIconUrl('bed'), category: 'places' },
  { id: 'kitchen', text: 'kitchen', image: colorIconUrl('cooking'), category: 'places' },
  
  // People
  { id: 'mom', text: 'mom', image: colorIconUrl('woman'), category: 'people' },
  { id: 'dad', text: 'dad', image: colorIconUrl('man'), category: 'people' },
  { id: 'sister', text: 'sister', image: colorIconUrl('girl'), category: 'people' },
  { id: 'brother', text: 'brother', image: colorIconUrl('boy'), category: 'people' },
  { id: 'teacher', text: 'teacher', image: colorIconUrl('woman-teacher'), category: 'people' },
  { id: 'friend', text: 'friend', image: colorIconUrl('people-hugging'), category: 'people' },
  { id: 'doctor', text: 'doctor', image: colorIconUrl('health-worker'), category: 'people' },
];
