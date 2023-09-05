import { Time } from './Time';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { IConversations } from '../interfaces/IConversations';
import { secondsToDate, secondsToTime } from '../utils/dateUtils';
import { NewMessage } from './newMessage';

export const Message = () => {
  const conversations = useAppSelector(
    (state) => state.messenger.conversations
  );

  const lastNewMessage = conversations.find((conv: IConversations) => {
    return conv.is_new;
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
