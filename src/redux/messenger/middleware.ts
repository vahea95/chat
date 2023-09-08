import { AppDispatch } from '../store';

import API from '../../manager/API';

import { messengerSlice } from './slice';

const { setChatUsers, setConversations, setActiveChatID } =
  messengerSlice.actions;

const getChatUsers = () => async (dispatch: AppDispatch) => {
  try {
    const response = await API.messenger.getAllChatUsers();
    dispatch(setChatUsers(response.data.response));
  } catch (error) {
    throw error;
  }
};

const getConversations = (id: string) => async (dispatch: AppDispatch) => {
  try {
    const response = await API.messenger.getIndividualChatMessages(id);
    dispatch(setConversations(response.data.response));
  } catch (error) {
    throw error;
  }
};

const updateActiveChatID = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setActiveChatID(id));
};

export default {
  getConversations,
  getChatUsers,
  updateActiveChatID,
};
