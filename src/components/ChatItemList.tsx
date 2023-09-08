import React, { useEffect } from 'react';
import { Loading } from './Loading';
import { IChat } from '../interfaces/IChat';
import { dispatch, useAppSelector } from '../redux/hooks';
import middleware from '../redux/messenger/middleware';
import { Time } from './Time';
import { secondsToTime } from '../utils/dateUtils';
import selector from '../redux/messenger/selector';

export const ChatItemList = () => {
  const chatUsers = useAppSelector(selector.chatUsers);
  const activeId = useAppSelector(selector.activeChatID);

  const handleChatItemClick = (id: string) => {
    dispatch(middleware.updateActiveChatID(id));
    dispatch(middleware.getConversations(id));
  };

  useEffect(() => {
    dispatch(middleware.getChatUsers());
  }, []);

  return (
    <div className="chatList">
      {chatUsers?.length ? (
        chatUsers.map((chat: IChat) => {
          return (
            <div
              className={activeId === chat.id ? 'chatItemSelected' : 'chatItem'}
              key={chat.id}
              onClick={() => {
                handleChatItemClick(chat.id);
              }}
            >
              <div className="avatar avatarBig">
                <img
                  src={chat.avatar}
                  width="48px"
                  height="48px"
                  alt="chatAvatar"
                />
              </div>
              <div className="chatMessage">
                <div className="chatTitle">
                  <span>{chat.title}</span>
                  <Time
                    className="time"
                    time={secondsToTime(chat.created_at)}
                  />
                </div>
                <div className="chatMessageText">
                  {chat.last_message.message}
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};
