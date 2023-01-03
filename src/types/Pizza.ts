export const ingredients = [
  'tomato sauce',
  'pineapple',
  'white sauce',
  'cheese',
  'mozzarella',
  'tomatoes',
  'mushrooms',
  'chili',
  'olives',
  'pepper',
  'corn',
  'onion',
  'salami',
  'bacon',
  'shrimps',
  'red fish',
  'basil',
  'arugula',
  'oregano',
  'parsley',
] as const;
export const categories = ['spicy', 'vegetarian', 'meaty', 'seafood'] as const;

export type Ingredients = typeof ingredients[number];
export type Categories = typeof categories[number];

export type Pizza = {
  _id: string;
  name: string;
  ingredients: Ingredients[];
  categories: Categories[];
  price: number;
};
