import { IMessenger } from '../../interfaces/IMessenger';

export const getInitialState = (): IMessenger => ({
  chatUsers: null,
  activeChatID: '',
  conversations: null,
});
