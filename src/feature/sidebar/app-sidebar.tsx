import SideBarFooter from '@/feature/sidebar/sidebar-footer';
import SideBarHeader from '@/feature/sidebar/sidebar-header';
import SideBarMenuList from '@/feature/sidebar/sidebar-menu-list';
import {cn} from '@/utils/style';

interface AppSideBarProps {
  onClose: () => void;
  sidebar: boolean;
}

export default function AppSideBar({onClose, sidebar}: AppSideBarProps) {
  return (
    <aside
      className={cn(
        'w-[270px] h-dvh py-5 px-6 flex flex-col bg-white dark:bg-slate-800 divide-y divide-slate-200 border-l border-slate-200 dark:border-white/25 dark:divide-white/25 transition-all duration-200 z-50 sticky top-0 left-0',
        {'translate-x-0': sidebar},
        {'-translate-x-full w-0 p-0 overflow-hidden *:opacity-0': !sidebar}
      )}
    >
      <SideBarHeader onClose={onClose} />
      <SideBarMenuList />
      <SideBarFooter />
    </aside>
  );
}
