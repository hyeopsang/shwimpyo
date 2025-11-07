import MenuButton from './menu-button';
import Dashboard from '@/assets/dashboard.svg?react';
import History from '@/assets/history.svg?react';
import Setting from '@/assets/setting.svg?react';

const menuItems = [
  {label: '대시보드', icon: Dashboard, path: '/my-app/dashboard'},
  {label: '히스토리', icon: History, path: '/my-app/history'},
  {label: '설정', icon: Setting, path: '/my-app/setting'},
];

export default function SideBarMenuList() {
  return (
    <nav
      className="flex flex-col w-full flex-1 py-5 gap-2"
      aria-label="사이드바 메뉴"
    >
      {menuItems.map((item) => (
        <MenuButton
          key={item.path}
          label={item.label}
          icon={item.icon}
          path={item.path}
        />
      ))}
    </nav>
  );
}
