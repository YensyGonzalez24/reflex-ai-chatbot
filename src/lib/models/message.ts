import prisma from "../prisma";
import { getRandomBotResponse } from "./response";

const createNewMessage = async ({
  content,
  chatId,
  time,
}: {
  content: string;
  chatId: string;
  time: string;
}) => {
  try {
    const botResponse = getRandomBotResponse();

    const messageTime = new Date(time);

    await prisma.message.create({
      data: {
        content,
        chatId,
        timestamp: messageTime,
        author: "USER",
      },
    });

    const botMessage = await prisma.message.create({
      data: {
        content: botResponse,
        chatId,
        author: "BOT",
      },
    });

    return botMessage;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

const getMessagesByChatId = async ({ chatId }: { chatId: string }) => {
  try {
    const messages = await prisma.message.findMany({
      where: {
        chatId,
      },
    });

    return messages;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export { createNewMessage, getMessagesByChatId };
