import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const useUser = () => {
  const { userId, setUserId } = useContext(UserContext);

  const authUserByEmail = async ({ email }: { email: string }) => {
    try {
      const response = await fetch(`/api/user/${email}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.userId) {
        setUserId(data.userId);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    userId,
    authUserByEmail,
  };
};

export default useUser;
