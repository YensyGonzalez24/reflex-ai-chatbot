"use client";

import { Button } from "../UI";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import useChat from "~/hooks/useChat";

const Chat = () => {
  const { messages, clearChat } = useChat();

  return (
    <div className="border-2 border-black rounded-lg p-4 w-full max-w-80 flex flex-col items-center">
      <h1 className="text-black">Chat Window</h1>
      <ChatWindow messages={messages} />
      <ChatInput />
      {messages.length > 0 && (
        <Button handleOnClick={clearChat} variant="secondary">
          Start New Conversation
        </Button>
      )}
    </div>
  );
};

export default Chat;
