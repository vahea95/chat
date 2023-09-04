import { IMessenger } from '../../Interfaces/IMessenger';

export const getInitialState = (): IMessenger => ({
  chatUsers: null,
  activeChatID: '',
  conversations: null,
});
