import React from 'react';
import {Link, useLocation} from 'react-router';
import {cn} from '@/utils/style';

interface NavigationButtonsProps {
  path: string;
  children: React.ReactNode;
  label: string;
}

export default function NavigationButtons({
  path,
  children,
  label,
}: NavigationButtonsProps) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Link
      to={path}
      className={cn(
        'relative w-full h-full flex flex-col justify-center items-center gap-1',
        'transition-colors duration-200',
        'hover:text-emerald',
        isActive ? 'text-emerald' : 'text-black'
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      <span>{children}</span>
      <span className="text-xs sm:text-sm font-medium">{label}</span>
      {isActive && (
        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#79A2A4] rounded-t-full" />
      )}
    </Link>
  );
}
