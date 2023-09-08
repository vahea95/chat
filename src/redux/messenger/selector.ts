import { RootState } from '../store';
import { createSelector } from '@reduxjs/toolkit';

const selector = (state: RootState) => state.messenger;

const chatUsers = createSelector([selector], (state) => state.chatUsers);

const conversations = createSelector(
  [selector],
  (state) => state.conversations
);

const activeChatID = createSelector([selector], (state) => state.activeChatID);

export default {
  chatUsers,
  conversations,
  activeChatID,
};
