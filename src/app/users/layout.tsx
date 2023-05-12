import React from 'react';
import getUsers from '@/actions/getUsers';

import Sidebar from '@/components/sidebar/Sidebar';
import UserList from '@/components/UserList';

const UsersLayout = async ({ children }: React.ReactNode) => {
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">
        <UserList users={users} />
        {children}
      </div>
    </Sidebar>
  );
};

export default UsersLayout;
