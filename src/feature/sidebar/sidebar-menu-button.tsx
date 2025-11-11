import type {ComponentType} from 'react';
import {Link, useLocation} from 'react-router';
import {cn} from '@/utils/style';
interface MenuButtonsProps {
  path: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick?: () => void;
}

export default function SidebarMenuButton({
  path,
  icon: Icon,
  label,
  onClick,
  ...props
}: MenuButtonsProps) {
  const location = useLocation();
  const isActive = location.pathname.startsWith(path);
  return (
    <Link
      to={path}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
      className={cn(
        'w-full px-3 py-2 flex items-center gap-5 rounded-md hover:bg-slate-100 active:bg-slate-300 text-slate-900 dark:text-white dark:hover:bg-slate-100/25 dark:active:bg-slate-100/75',
        {'bg-slate-100 dark:bg-slate-100/25': isActive}
      )}
      {...props}
    >
      <Icon width={20} />
      <span className="text-base font-medium">{label}</span>
    </Link>
  );
}
