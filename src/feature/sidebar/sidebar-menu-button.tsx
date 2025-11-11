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
        'w-full px-3 py-2 flex items-center gap-5 rounded-md hover:bg-slate-100 active:scale-95 active:bg-slate-200 active:text-slate-500 text-slate-400 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-300 dark:active:bg-slate-400 dark:active:text-slate-200',
        {
          'bg-slate-100 dark:bg-slate-500 dark:text-slate-300 text-slate-500':
            isActive,
        }
      )}
      {...props}
    >
      <Icon width={20} />
      <span className="text-base font-medium">{label}</span>
    </Link>
  );
}
