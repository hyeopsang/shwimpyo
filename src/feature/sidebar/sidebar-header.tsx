import SidebarTrigger from '@/shared/sidebar-trigger';
import Logo from '@/assets/logo.svg?react';

type SidebarHeaderProps = {
  toggleSidebar: () => void;
  sidebar: boolean;
};
export default function SidebarHeader({
  toggleSidebar,
  sidebar,
}: SidebarHeaderProps) {
  return (
    <header className="w-full flex items-center justify-between py-6">
      <span className="text-base font-semibold text-[#FF8DCA] dark:text-white">
        <Logo width={120} height={40} />
      </span>
      <SidebarTrigger onToggle={toggleSidebar} isOpen={sidebar} />
    </header>
  );
}
