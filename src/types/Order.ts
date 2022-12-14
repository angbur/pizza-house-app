import type { Pizza } from 'types/Pizza';

export type OrderItem = {
  _id: string;
  item: Omit<Pizza, 'categories'>;
  quantity: number;
};
