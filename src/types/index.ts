import { Dispatch, SetStateAction } from "react";

interface Message {
  userId: string | null;
  content: string;
  time: string;
}

interface ChatContextProps {
  chatId: string;
  messages: Message[];
  isLoading: boolean;
  addMessage: ({ message }: { message: Message }) => void;
  clearChat: () => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  setChatId: Dispatch<SetStateAction<string>>;
}

interface UserContextProps {
  userId: string;
  setUserId: Dispatch<SetStateAction<string>>;
}

export type { Message, ChatContextProps, UserContextProps };
