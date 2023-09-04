import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from './store';
import store from './store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const { dispatch } = store;
