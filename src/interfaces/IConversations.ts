import { IUser } from './IUser';

export interface IConversations {
  id: string;
  created_at: number;
  showDate: boolean;
  user: IUser;
  message: string;
  is_new: boolean;
  index: number;
}
