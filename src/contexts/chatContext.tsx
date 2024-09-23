"use client";

import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import { ChatContextProps, Message } from "~/types";

const ChatContext = createContext<ChatContextProps>({
  chatId: "",
  messages: [],
  isLoading: false,
  addMessage: () => {},
  clearChat: () => {},
  setIsLoading: () => {},
  setChatId: () => {},
});

const ChatProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [chatId, setChatId] = useState<string>("");

  const addMessage = ({ message }: { message: Message }) => {
    setMessages((prev) => [...prev, message]);
  };

  const clearChat = () => {
    setMessages([]);
    setChatId("");
  };

  const chatValue = useMemo(
    () => ({
      chatId,
      messages,
      isLoading,
      addMessage,
      clearChat,
      setIsLoading,
      setChatId,
    }),
    [messages, isLoading]
  );

  return (
    <ChatContext.Provider value={chatValue}>{children}</ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
