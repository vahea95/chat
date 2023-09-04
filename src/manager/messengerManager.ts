import axios from 'axios';

const messengerManager = {
  getAllChatUsers() {
    return axios.get('https://api.lenzaos.com/chat.get?offset=0&limit=20', {
      headers: {
        accept: 'application/json',
        version: '0.0',
      },
    });
  },

  getIndividualChatMessages(id: string) {
    return axios.get(
      `https://api.lenzaos.com/message.get?chat_id=${id}&offset=0&limit=20`,
      {
        headers: {
          accept: 'application/json',
          version: '0.0',
        },
      }
    );
  },
};

export default messengerManager;
