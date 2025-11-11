import {useEffect, useState} from 'react';
import {cn} from '@/utils/style';
import Add from '@/assets/add.svg?react';
import DarkModeToggle from './dark-mode-toggle';
import SidebarTrigger from '@/shared/sidebar-trigger';

interface HeaderProps {
  sidebar: boolean;
  toggleSidebar: () => void;
}

export default function Header({sidebar, toggleSidebar}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const y = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(y > 0);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={cn(
        'sticky top-0 w-full h-fit py-3.5 transition-all duration-100 z-50',
        scrolled && 'backdrop-blur-[25px]'
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
