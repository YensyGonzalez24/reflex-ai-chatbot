import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";
import { getMessagesByChatId } from "../../../../lib/models/message";

export const GET = async (request: NextRequest, { params }: Params) => {
  try {
    const chatId = params.id;

    const userId = await getMessagesByChatId({ chatId });

    const response = NextResponse.json({ userId }, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
