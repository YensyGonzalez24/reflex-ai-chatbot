import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { NextRequest, NextResponse } from "next/server";
import { getUserId } from "../../../../lib/models/user";

export const GET = async (request: NextRequest, { params }: Params) => {
  try {
    const userEmail = params.email;

    const userId = await getUserId({ userEmail });

    const response = NextResponse.json({ userId }, { status: 200 });

    return response;
  } catch (error) {
    return NextResponse.json({ message: `${error}` }, { status: 500 });
  }
};
