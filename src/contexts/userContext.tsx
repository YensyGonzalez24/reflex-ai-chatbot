"use client";

import React, {
  createContext,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";
import { UserContextProps } from "~/types";

const UserContext = createContext<UserContextProps>({
  userId: "",
  setUserId: () => {},
});

const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [userId, setUserId] = useState<string>("");

  const userValue = useMemo(
    () => ({
      userId,
      setUserId,
    }),
    [userId]
  );

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
};

export { UserContext, UserProvider };
