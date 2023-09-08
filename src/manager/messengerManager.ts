import axios from 'axios';
import { getEnvironmentalVariables } from '../utils/getEnvironmentalVariables';

const baseUrl = getEnvironmentalVariables().REACT_APP_API_URL;

const messengerManager = {
  getAllChatUsers() {
    return axios.get(`${baseUrl}/chat.get?offset=0&limit=20`, {
      headers: {
        accept: 'application/json',
        version: '0.0',
      },
    });
  },

  getIndividualChatMessages(id: string) {
    return axios.get(`${baseUrl}/message.get?chat_id=${id}&offset=0&limit=20`, {
      headers: {
        accept: 'application/json',
        version: '0.0',
      },
    });
  },
};

export default messengerManager;
