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
        'w-[300px] h-dvh py-5 px-6 flex flex-col bg-white shadow-[0_4px_20px_rgba(0,0,0,0.15)] transition-all duration-200 z-50 translate-x-0 fixed top-0 left-0',
        !sidebar && '-translate-x-full'
      )}
    >
      <SideBarHeader onClose={onClose} />
      <SideBarMenuList />
      <SideBarFooter />
    </aside>
  );
}
