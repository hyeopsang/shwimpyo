import SidebarTrigger from '@/shared/sidebar-trigger';
interface SidebarHeaderProps {
  toggleSidebar: () => void;
  sidebar: boolean;
}
export default function SidebarHeader({
  toggleSidebar,
  sidebar,
}: SidebarHeaderProps) {
  return (
    <header className="w-full flex items-center justify-between py-3.5">
      <span className="text-xl font-bold text-[#4C4B4A] dark:text-white">
        On:Mind
      </span>
      <SidebarTrigger onToggle={toggleSidebar} isOpen={sidebar} />
    </header>
  );
}
