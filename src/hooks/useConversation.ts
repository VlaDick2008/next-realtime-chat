import React from 'react';
import { useParams } from 'next/navigation';

const useConversation = () => {
  const params = useParams();

  const conversationId = React.useMemo(() => {
    if (!params?.conversationId) return '';

    return params.conversationId as string;
  }, [params?.conversationId]);

  const isOpen = React.useMemo(() => !!conversationId, [conversationId]);

  return React.useMemo(() => ({ isOpen, conversationId }), [conversationId, isOpen]);
};

export default useConversation;
