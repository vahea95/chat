import { IChat } from './IChat';
import { IConversations } from './IConversations';

export interface IMessenger {
  chatUsers: IChat[] | null;
  conversations: IConversations[] | null;
  activeChatID: string | null;
}
