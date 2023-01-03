import { OrderItem } from 'types/Order';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

type RequireOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>;

type DraftItem = RequireOnly<OrderItem, 'item' | 'quantity'>;

export const createItem = (draftItem: DraftItem): OrderItem => {
  return { _id: nanoid(), ...draftItem };
};

type OrderState = {
  entities: OrderItem[];
};

const initialState: OrderState = {
  entities: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<DraftItem>) => {
        const item = createItem(action.payload);
        state.entities.unshift(item);
    },
    removeFromOrder: (state, action: PayloadAction<OrderItem['_id']>) => {
        const index = state.entities.findIndex(
            (item) => item._id === action.payload,
          );
          state.entities.splice(index, 1);
    },
  },
});

export const { addToOrder, removeFromOrder } = orderSlice.actions;

export default orderSlice.reducer;

export const selectListOfOrderItems = (state: RootState) => state.order;
