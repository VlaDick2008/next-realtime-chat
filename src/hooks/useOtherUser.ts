import React from 'react';
import { useSession } from 'next-auth/react';
import { FullConversationType } from '@/types';
import { User } from '@prisma/client';

const useOtherUser = (conversation: FullConversationType | { users: User[] }) => {
  const session = useSession();

  const otherUser = React.useMemo(() => {
    const currentUserEmail = session?.data?.user?.email;

    const otherUserEmail = conversation.users.filter((user) => user.email !== currentUserEmail);

    return otherUserEmail[0];
  }, [conversation.users, session?.data?.user?.email]);

  return otherUser;
};

export default useOtherUser;
