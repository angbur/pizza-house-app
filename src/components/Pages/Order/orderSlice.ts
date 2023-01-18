import { OrderItem } from 'types/Order';
import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store/store';
import { toast } from 'react-toastify';
import { logout } from 'store/user/userSlice';

type RequireOnly<T, P extends keyof T> = Pick<T, P> & Partial<Omit<T, P>>;

export type DraftItem = RequireOnly<OrderItem, 'item' | 'quantity'>;

export const createItem = (draftItem: DraftItem): OrderItem => {
  return { _id: nanoid(), ...draftItem };
};

type OrderState = {
  entities: OrderItem[];
};

const getInitialState = () => {
  let result;
  result = localStorage.getItem('order');
  if (typeof result === 'string') {
    result = JSON.parse(result);
  }
  return result;
};

const initialState: OrderState = {
  entities: getInitialState()?.entities || [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addToOrder: (state, action: PayloadAction<DraftItem>) => {
      const existingIndex = state.entities.findIndex(
        (el) => el.item.name === action.payload.item.name,
      );
      if (existingIndex === -1) {
        const item = createItem(action.payload);
        state.entities.unshift(item);
        toast.success('Added to order!');
      } else {
        state.entities[existingIndex].quantity += action.payload.quantity;
        toast.success('Order updated');
      }
    },
    removeFromOrder: (state, action: PayloadAction<OrderItem['_id']>) => {
      const index = state.entities.findIndex((item) => item._id === action.payload);
      state.entities.splice(index, 1);
    },
    updateOrderItem: (state, action: PayloadAction<OrderItem>) => {
      const index = state.entities.findIndex((item) => item._id === action.payload._id);
      state.entities[index] = action.payload;
    },
    removeAllOrder: (state) => {
      state.entities = [];
      toast.success('The order has been deleted!');
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.entities = [];
    });
  },
});

export const { addToOrder, removeFromOrder, updateOrderItem, removeAllOrder } = orderSlice.actions;

export default orderSlice.reducer;

export const selectListOfOrderItems = (state: RootState) => state.order.entities;
export const selectSumOfOrder = (state: RootState) =>
  state.order.entities.reduce(
    (prev: number, curr: OrderItem) => prev + curr.item.price * curr.quantity,
    0,
  );
