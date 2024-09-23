import { createChat, getAllChats } from "../../../lib/models/chat";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { userId } = await request.json();

    const newChatId = await createChat({ userId });

    const response = NextResponse.json(newChatId, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    const chats = await getAllChats();

    const response = NextResponse.json({ chats }, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
