import prisma from "../prisma";

const createChat = async ({ userId }: { userId: string }) => {
  try {
    const newChat = await prisma.chat.create({
      data: {
        userId,
      },
    });

    return newChat.id;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

const getAllChats = async () => {
  try {
    const chats = await prisma.chat.findMany();

    return chats;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

const getChatsByEmail = async ({ email }: { email: string }) => {
  try {
    const chat = await prisma.chat.findMany({
      where: {
        user: {
          email,
        },
      },
    });

    return chat;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export { createChat, getAllChats, getChatsByEmail };
