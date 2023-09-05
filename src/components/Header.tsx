import chatIcon from '../icons/chatiIcon/chatIcon.svg';
import { useAppSelector } from '../redux/hooks';
import { IChat } from '../interfaces/IChat';
export const Header = () => {
  const chatUsers = useAppSelector((state) => state.messenger.chatUsers);
  const activeChatId = useAppSelector((state) => state.messenger.activeChatID);

  return (
    <div className="header">
      <img src={chatIcon} alt="chatIcon" className="chatIcon" />
      <p>
        {chatUsers?.map((chat: IChat) => {
          return chat.id === activeChatId ? chat.title : null;
        })}
      </p>
    </div>
  );
};
