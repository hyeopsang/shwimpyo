import {cn} from '@/utils/style';
import Add from '@/assets/add.svg?react';
import DarkModeToggle from './dark-mode-toggle';
import SidebarTrigger from '@/shared/sidebar-trigger';

interface HeaderProps {
  sidebar: boolean;
  toggleSidebar: () => void;
  scrolled: boolean;
}

export default function Header({
  sidebar,
  toggleSidebar,
  scrolled,
}: HeaderProps) {
  return (
    <header
      className={cn(
        'sticky top-0 w-full h-fit py-3.5 transition-all duration-100 z-50',
        scrolled
          ? 'bg-[#FAFAFA]/75 backdrop-blur-[25px] dark:bg-slate-900/75'
          : 'bg-[#FAFAFA] dark:bg-slate-900'
      )}
    >
      <div
        className={cn(
          'w-full max-w-[1200px] mx-auto flex items-center px-5',
          sidebar ? 'justify-end' : 'justify-between'
        )}
      >
        {!sidebar && (
          <SidebarTrigger isOpen={sidebar} onToggle={toggleSidebar} />
        )}
        <div className="flex items-center gap-2">
          <DarkModeToggle />
          <button
            className={cn(
              'px-4 py-2 flex gap-2 items-center rounded-full transition-colors duration-200',
              'bg-[#FFD9ED] text-[#FF0088] dark:bg-[#FF0088] dark:text-white',
              'hover:bg-[#FFB3D9] hover:text-[#E60073] dark:hover:bg-[#ff47a3]'
            )}
          >
            <Add width={24} height={24} />
            <span className="text-[14px] font-medium">마음 기록하기</span>
          </button>
        </div>
      </div>
    </header>
  );
}
