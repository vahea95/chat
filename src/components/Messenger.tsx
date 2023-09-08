import React from 'react';
import { useAppSelector } from '../redux/hooks';
import { ChatItemList } from './ChatItemList';
import { ChatItemListTitle } from './ChatItemListTitle';
import { Header } from './Header';
import { Conversations } from './Conversations';
import { Input } from './Input';
import selector from '../redux/messenger/selector';

export const Messenger = () => {
  const conversations = useAppSelector(selector.conversations);

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
              <Conversations />
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
