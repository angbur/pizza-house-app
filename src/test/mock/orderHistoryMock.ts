import { OrderDetail } from 'services/order/order';

export const orderHistoryMocks: OrderDetail[] = [
  {
    deliveryAddress: {
      firstName: 'Agnieszka',
      lastName: 'Kowal',
      email: 'malina@gmail.com',
      city: 'Wrocław',
      postalCode: '55-003',
      street: 'Wiklinowa',
      houseNumber: '2a',
      phone: '745773883',
    },
    _id: '63c182e378c9bf3c8103e0ca',
    user: '63bbed0041a1e3441e77f16e',
    order: [
      {
        item: {
          _id: '63b2d3fd92b7f0f1c7c567c4',
          name: 'Lighthouse',
          price: 24,
          ingredients: ['tomato sauce', 'bacon', 'olives', 'cheese', 'parsley', 'basil'],
        },
        quantity: 2,
      },
    ],
    total: 342,
    date: '2023-01-13T16:12:19.833Z',
  },
  {
    deliveryAddress: {
      firstName: 'Agnieszka',
      lastName: 'Kowal',
      email: 'malina@gmail.com',
      city: 'Wrocław',
      postalCode: '55-003',
      street: 'Wiklinowa',
      houseNumber: '2a',
      phone: '745773883',
    },
    _id: '63c182e478c9bf3c8103e0cd',
    user: '63bbed0041a1e3441e77f16e',
    order: [
      {
        item: {
          _id: '63b2d3fd92b7f0f1c7c567c4',
          name: 'Lighthouse',
          price: 24,
          ingredients: ['tomato sauce', 'bacon', 'olives', 'cheese', 'parsley', 'basil'],
        },
        quantity: 2,
      },
    ],
    total: 342,
    date: '2023-01-13T16:12:20.670Z',
  },
];
