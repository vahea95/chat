import { combineReducers } from 'redux';
import { messengerSlice } from './messenger/slice';

const reducer: any = combineReducers({
  messenger: messengerSlice.reducer,
});

export default reducer;
