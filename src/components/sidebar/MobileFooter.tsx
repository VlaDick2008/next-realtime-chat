'use client';

import React from 'react';
import useRoutes from '@/hooks/useRoutes';
import useConversation from '@/hooks/useConversation';

import MobileFooterItem from './MobileFooterItem';

interface MobileFooterProps {}

const MobileFooter: React.FC<MobileFooterProps> = ({}) => {
  const routes = useRoutes();
  const { isOpen } = useConversation();

  if (isOpen) return null;

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {routes.map((item) => (
        <MobileFooterItem
          key={item.label}
          href={item.href}
          active={item.active}
          icon={item.icon}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default MobileFooter;