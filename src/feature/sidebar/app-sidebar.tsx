import SidebarFooter from './sidebar-footer';
import SidebarHeader from './sidebar-header';
import SidebarMenuList from './sidebar-menu-list';
import {cn} from '@/utils/style';

interface AppSideBarProps {
  toggleSidebar: () => void;
  sidebar: boolean;
}

export default function AppSidebar({toggleSidebar, sidebar}: AppSideBarProps) {
  return (
    <aside
      id="sidebar"
      role="navigation"
      className={cn(
        'h-dvh pb-5 px-6 bg-white dark:bg-slate-800 absolute divide-y divide-slate-200 border-l border-slate-200 dark:border-0 dark:divide-white/25 transition-all duration-300 z-60 md:sticky top-0 left-0 overflow-hidden',
        sidebar
          ? 'translate-x-0 w-[270px]'
          : '-translate-x-full w-0 p-0 border-0'
      )}
    >
      <div
        className={cn(
          'w-full h-full flex flex-col',
          !sidebar && 'opacity-0 pointer-events-none'
        )}
      >
        <SidebarHeader toggleSidebar={toggleSidebar} sidebar={sidebar} />
        <SidebarMenuList />
        <SidebarFooter />
      </div>
    </aside>
  );
}
