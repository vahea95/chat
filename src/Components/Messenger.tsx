import { ChatItemList } from './ChatItemList';
import { Message } from './Message';
import { Header } from './Header';
import React from 'react';
import { ChatItemListTitle } from './ChatItemListTitle';
import { Input } from './Input';
import { useAppSelector } from '../redux/hooks';

export const Messenger = () => {
  const conversations = useAppSelector(
    (state) => state.messenger.conversations
  );

  return (
    <>
      <div className="messenger">
        <div className="allChats">
          <ChatItemListTitle />
          <ChatItemList />
          <div className="empty"></div>
        </div>
        {conversations?.length ? (
          <div className="messageList">
            <Header />
            <div className="conversations">
              <Message />
            </div>
            <Input />
          </div>
        ) : (
          <div className="loadingConversations">
            Select a chat or start a new conversation!
          </div>
        )}
      </div>
      <div className="warning">
        SORRY! BUT FOR MOBILE PHONES WE HAVE A MOBILE APP
      </div>
    </>
  );
};
