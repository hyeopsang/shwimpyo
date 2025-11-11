import SidebarMenuButton from './sidebar-menu-button';
import Dashboard from '@/assets/dashboard.svg?react';
import History from '@/assets/history.svg?react';
import Setting from '@/assets/setting.svg?react';

const menuItems = [
  {label: '대시보드', icon: Dashboard, path: '/my-app/dashboard'},
  {label: '히스토리', icon: History, path: '/my-app/history'},
  {label: '설정', icon: Setting, path: '/my-app/setting'},
];

export default function SidebarMenuList({
  toggleSidebar,
}: {
  toggleSidebar: () => void;
}) {
  return (
    <nav
      className="flex flex-col w-full flex-1 py-6 gap-2"
      aria-label="사이드바 메뉴"
    >
      {menuItems.map((item) => (
        <SidebarMenuButton
          onClick={toggleSidebar}
          key={item.path}
          label={item.label}
          icon={item.icon}
          path={item.path}
        />
      ))}
    </nav>
  );
}
