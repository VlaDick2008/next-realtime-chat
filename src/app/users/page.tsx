import React from 'react';
import { signOut } from 'next-auth/react';

import EmptyState from '@/components/EmptyState';

interface UsersPageProps {}

const UsersPage: React.FC<UsersPageProps> = ({}) => {
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default UsersPage;
