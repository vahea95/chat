import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const selector = (state: RootState) => state.messenger;

export const chatUsers = createSelector(
  [selector],
  (state) => state.messenger.chatUsers
);

export const conversations = createSelector(
  [selector],
  (state) => state.messenger.conversations
);

export const activeChatID = createSelector(
  [selector],
  (state) => state.messenger.activeChatID
);

export default {
  chatUsers,
  conversations,
  activeChatID,
};
