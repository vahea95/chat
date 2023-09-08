import { createSlice, Slice } from '@reduxjs/toolkit';
import { getInitialState } from './initialState';
import reducers from './reducers';

export const messengerSlice = createSlice({
  name: 'messenger',
  initialState: getInitialState(),
  reducers,
});
