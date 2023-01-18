import { OrderItem } from 'types/Order';

export const orderMocks: OrderItem[] = [
  {
    _id: 'awesome_id',
    item: {
      _id: '63b2d3b592b7f0f1c7c567b8',
      name: 'Pinza Mare',
      ingredients: ['shrimps', 'red fish', 'olives', 'white sauce', 'oregano', 'basil'],
      price: 26,
    },
    quantity: 1,
  },
];
