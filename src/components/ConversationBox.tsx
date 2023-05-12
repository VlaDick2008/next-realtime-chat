import React from 'react';
import useOtherUser from '@/hooks/useOtherUser';
import { FullConversationType } from '@/types';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { format } from 'date-fns';

import Avatar from './UI/Avatar';
import AvatarGroup from './UI/AvatarGroup';

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox: React.FC<ConversationBoxProps> = ({ data, selected }) => {
  const otherUser = useOtherUser(data);

  const session = useSession();
  const router = useRouter();

  const handleClick = React.useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  const lastMessage = React.useMemo(() => {
    const messages = data.messages || [];

    return messages[messages.length - 1];
  }, [data.messages]);

  const userEmail = React.useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  const hasSeen = React.useMemo(() => {
    if (!lastMessage) return false;

    const seenArray = lastMessage.seen || [];

    if (!userEmail) return false;

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [lastMessage, userEmail]);

  const lastMessageText = React.useMemo(() => {
    if (lastMessage?.image) return 'Sent an image';

    if (lastMessage?.body) return lastMessage.body;

    return 'Started a conversation';
  }, [lastMessage]);

  return (
    <div
      className={clsx(
        'w-full relative flex items-center space-x-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer p-3',
        selected ? 'bg-neutral-100' : 'bg-white',
      )}
      onClick={handleClick}
    >
      {data.isGroup ? <AvatarGroup users={data.users} /> : <Avatar user={otherUser} />}

      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center mb-1">
            <p className="text-md font-medium text-gray-900">{data.name || otherUser.name}</p>
            {lastMessage?.createdAt && (
              <p className="text-xs text-gray-400 font-light">
                {format(new Date(lastMessage.createdAt), 'H:m')}
              </p>
            )}
          </div>
          <p
            className={clsx('truncate text-sm', hasSeen ? 'text-gray-500' : 'text-black font-bold')}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
