import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";
import { getChatsByUserId } from "../../../../lib/models/chat";
import { getUserId } from "../../../../lib/models/user";

export const GET = async (request: NextRequest, { params }: Params) => {
  try {
    const userEmail = params.email;

    const userId = await getUserId({ userEmail });

    const chats = await getChatsByUserId({ userId: userId });

    const response = NextResponse.json({ chats }, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
