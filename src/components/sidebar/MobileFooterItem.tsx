'use client';

import React from 'react';
import { IconType } from 'react-icons/lib';
import clsx from 'clsx';
import Link from 'next/link';

interface MobileFooterItemProps {
  href: string;
  label: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

const MobileFooterItem: React.FC<MobileFooterItemProps> = ({
  href,
  label,
  icon: Icon,
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) return onClick();
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={clsx(
        'group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100 transition-colors',
        active && 'bg-gray-100 text-black',
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileFooterItem;
