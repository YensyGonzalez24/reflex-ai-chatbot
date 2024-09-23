import { NextRequest, NextResponse } from "next/server";
import { createNewMessage } from "../../../lib/models/message";

export const POST = async (request: NextRequest) => {
  try {
    const { content, chatId, time } = await request.json();

    const botResponse = await createNewMessage({
      content: content,
      chatId: chatId,
      time: time,
    });

    const response = NextResponse.json(botResponse, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
