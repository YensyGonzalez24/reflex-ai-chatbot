"use client";

import { useContext } from "react";
import { ChatContext } from "~/contexts/chatContext";
import { Message } from "~/types";
import useUser from "./useUser";

const useChat = () => {
  const {
    chatId,
    messages,
    isLoading,
    addMessage,
    clearChat,
    setIsLoading,
    setChatId,
  } = useContext(ChatContext);

  const { userId } = useUser();

  const sendMessage = async (message: string) => {
    const newMessage: Message = {
      content: message,
      userId,
      time: new Date().toISOString(),
    };

    addMessage({ message: newMessage });

    setIsLoading(true);

    try {
      let chatIdValue = chatId;

      if (!chatIdValue) {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        });

        const newChatId = await response.json();

        chatIdValue = newChatId;
        setChatId(newChatId);
      }

      const botResponse = await fetch("/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: message,
          chatId: chatIdValue,
          time: newMessage.time,
        }),
      });

      const botMessage = await botResponse.json();

      const newBotMessage: Message = {
        userId: null,
        content: botMessage.content,
        time: botMessage.timestamp,
      };

      addMessage({ message: newBotMessage });
    } catch (error) {
      console.error("Error sending message:", error);
    }

    setIsLoading(false);
  };

  // TODO: Implement function to retrieve chats from server with or wihout a user email

  // TODO: Implement function to retrieve messages from server based on a chat ID

  return {
    messages,
    sendMessage,
    clearChat,
    isLoading,
  };
};

export default useChat;
