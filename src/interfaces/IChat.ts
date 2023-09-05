import { IUser } from './IUser';
import { ILastMessage } from './ILastMessage';

export interface IChat {
  id: string;
  avatar: string;
  created_at: number;
  user: IUser[];
  title: string;
  count_unread: number;
  last_message: ILastMessage;
}
