"use client";

import { Message } from "~/types";
import ChatMessage from "./ChatMessage";
import { FC } from "react";
import useChat from "~/hooks/useChat";

const ChatWindow: FC<{ messages: Message[] }> = ({ messages }) => {
  const { isLoading } = useChat();

  const conversationIsEmpty = messages.length === 0;

  return (
    <div
      className={`border-2 border-black rounded-lg p-2 w-full max-w-80 flex flex-col items-center h-80 overflow-y-scroll ${
        conversationIsEmpty ? "justify-center" : ""
      }`}
    >
      {conversationIsEmpty ? (
        <p className="text-black text-center">No messages yet</p>
      ) : (
        messages.map((message, index: number) => (
          <ChatMessage
            key={index}
            message={message.content}
            time={message.time}
            isAnswer={message.userId === null}
          />
        ))
      )}

      {isLoading && (
        <p className="text-black text-center">Loading response...</p>
      )}
    </div>
  );
};

export default ChatWindow;
