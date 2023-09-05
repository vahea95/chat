import { SliceCaseReducers } from '@reduxjs/toolkit';
import { IAction } from '../store';
import { IMessenger } from '../../interfaces/IMessenger';
import { secondsToDate } from '../../utils/dateUtils';
import { IConversations } from '../../interfaces/IConversations';
import { IChat } from '../../interfaces/IChat';

const createReducer = <T extends SliceCaseReducers<IMessenger>>(
  reducer: T
) => ({ ...reducer });

const reducers = createReducer({
  setConversations(state, action: IAction<IConversations[]>) {
    let lastDate: string = '';

    state.conversations = action.payload.reverse().map((conv) => {
      conv.showDate = secondsToDate(conv.created_at) !== lastDate;
      lastDate = secondsToDate(conv.created_at);
      return conv;
    });
  },
  setActiveChatID(state, action: IAction<string>) {
    state.activeChatID = action.payload;
  },
  setChatUsers(state, action: IAction<IChat[]>) {
    state.chatUsers = action.payload;
  },
});

export default reducers;
