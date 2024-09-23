import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";
import { getChatsByEmail } from "../../../../lib/models/chat";

export const GET = async (request: NextRequest, { params }: Params) => {
  try {
    const userEmail = params.email;

    const userId = await getChatsByEmail({ email: userEmail });

    const response = NextResponse.json({ userId }, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
