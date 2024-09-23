import prisma from "../prisma";

const getUserId = async ({ userEmail }: { userEmail: string }) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (user) {
      return user.id;
    }

    const newUser = await prisma.user.create({
      data: {
        email: userEmail,
      },
    });

    return newUser.id;
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

export { getUserId };
