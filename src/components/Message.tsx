import { NewMessage } from './newMessage';
import { Time } from './Time';
import { secondsToDate, secondsToTime } from '../utils/dateUtils';
import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { IConversations } from '../interfaces/IConversations';
import { IMessage } from '../interfaces/IMessage';
import selector from '../redux/messenger/selector';

export const Message = (props: IMessage) => {
  const conversations = useAppSelector(selector.conversations);

  const lastNewMessage = conversations.find(
    (conv: IConversations) => conv.is_new
  );

  return (
    <div key={props.item.id}>
      {lastNewMessage?.id === props.item.id ? <NewMessage /> : null}
      {props.item.showDate ? (
        <Time className="date" time={secondsToDate(props.item.created_at)} />
      ) : null}
      <div
        className={props.item.user.you ? 'myMessage' : 'message'}
        key={props.item.id}
      >
        {props.main && !props.item.user.you ? (
          <div className="avatar">
            <img
              src={props.item.user.avatar}
              width="32px"
              height="32px"
              alt="userAvatar"
            />
          </div>
        ) : (
          <div className="notMainMessage"></div>
        )}

        <div>
          {props.main && !props.item.user.you ? (
            <div className="userName">
              {props.item.user.name} {props.item.user.surname}
            </div>
          ) : null}
          <div
            className={props.item.user.you ? 'myMessageText' : 'messageText'}
          >
            <div>{props.item.message}</div>
            {
              <Time
                className="time"
                time={secondsToTime(props.item.created_at)}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};
