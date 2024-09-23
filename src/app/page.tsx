"use client";

import Chat from "~/components/Chat";
import UserAuth from "~/components/userAuth";
import useUser from "~/hooks/useUser";

export default function Home() {
  const { userId } = useUser();

  return (
    <div className="h-screen w-screen bg-white flex justify-center items-center">
      <>{userId ? <Chat /> : <UserAuth />}</>
    </div>
  );
}
