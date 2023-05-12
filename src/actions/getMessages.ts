import prismaClient from '@/libs/prismadb';

const getMessages = async (conversationId: string) => {
  try {
    const messages = await prismaClient.message.findMany({
      where: {
        conversationId: conversationId,
      },
      include: {
        seen: true,
        sender: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return messages;
  } catch (err) {
    return [];
  }
};

export default getMessages;
