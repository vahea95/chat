import { useAppSelector } from '../redux/hooks';
import { IChat } from '../interfaces/IChat';
import { ReactComponent as ChatIcon } from '../icons/Chat.svg';
import selector from '../redux/messenger/selector';

export const Header = () => {
  const chatUsers = useAppSelector(selector.chatUsers);
  const activeChatId = useAppSelector(selector.activeChatID);

  return (
    <div className="header">
      <ChatIcon />
      <p>
        {chatUsers?.map((chat: IChat) => {
          return chat.id === activeChatId ? chat.title : null;
        })}
      </p>
    </div>
  );
};
