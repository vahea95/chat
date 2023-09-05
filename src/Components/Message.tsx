import { Time } from './Time';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { IConversations } from '../Interfaces/IConversations';
import { NewMessage } from './newMessage';
import { secondsToDate, secondsToTime } from '../utils/dateUtils';

export const Message = () => {
  const conversations = useAppSelector(
    (state) => state.messenger.conversations
  );

  const lastNewMessage = conversations.find((conv: IConversations) => {
    return conv.is_new ? conv.id : null;
  });

  const messageDate = conversations.find((conv: IConversations) => {
    return conv.created_at ? conv.id : null;
  });

  return (
    <>
      {conversations?.map((conversation: IConversations) => {
        return (
          <div key={conversation.id}>
            {lastNewMessage?.id === conversation.id ? <NewMessage /> : null}
            {conversation.showDate ? (
              <Time
                className="date"
                time={secondsToDate(conversation.created_at)}
              />
            ) : null}
            {!conversation.user.you ? (
              <div className="message" key={conversation.id}>
                <div className="avatar">
                  <img
                    src={conversation.user.avatar}
                    width="32px"
                    height="32px"
                    alt="userAvatar"
                  />
                </div>
                <div>
                  <div className="userName">
                    {conversation.user.name} {conversation.user.surname}
                  </div>
                  <div className="messageText">
                    <div>{conversation.message}</div>
                    {
                      <Time
                        className="time"
                        time={secondsToTime(conversation.created_at)}
                      />
                    }
                  </div>
                </div>
              </div>
            ) : (
              <div className="myMessage" key={conversation.id}>
                <div className="myMessageText">
                  <div>{conversation.message}</div>
                  <Time
                    className="time"
                    time={secondsToTime(conversation.created_at)}
                  />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};
