import type {ComponentType} from 'react';
import {Link, useLocation} from 'react-router';
import {cn} from '@/utils/style';
interface MenuButtonsProps {
  path: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

export default function SidebarMenuButton({
  path,
  icon: Icon,
  label,
}: MenuButtonsProps) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(path);
  return (
    <Link
      to={path}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'w-full px-2 py-1.5 flex items-center gap-5 rounded-md hover:bg-slate-100 active:bg-slate-100 text-slate-900 dark:text-white dark:hover:bg-slate-100/25',
        {'bg-slate-100 dark:bg-slate-100/25': isActive}
      )}
    >
      <Icon width={20} />
      <span className="text-[14px] font-medium">{label}</span>
    </Link>
  );
}
