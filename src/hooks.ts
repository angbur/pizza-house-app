import { useDispatch, useSelector } from 'react-redux';
// eslint-disable-next-line no-duplicate-imports
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
