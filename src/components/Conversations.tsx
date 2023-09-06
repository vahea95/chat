import React from 'react';
import { Message } from './Message';
import { useAppSelector } from '../redux/hooks';
import { IConversations } from '../interfaces/IConversations';

export const Conversations = () => {
  const conversations = useAppSelector(
    (state) => state.messenger.conversations
  );

  return conversations.map((conversation: IConversations, index: number) => (
    <Message
      key={index}
      item={conversation}
      main={
        index === 0 ||
        conversations[index].user.id !== conversations[index - 1].user.id
      }
    />
  ));
};
