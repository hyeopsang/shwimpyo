import {Link} from 'react-router';
import type {ComponentType} from 'react';

interface MenuButtonsProps {
  path: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
}

export default function MenuButton({
  path,
  icon: Icon,
  label,
}: MenuButtonsProps) {
  return (
    <Link
      to={path}
      className="w-full py-2 px-4 flex items-center gap-5 rounded-[10px] bg-transparent  hover:bg-[#eaebea]"
    >
      <Icon height={18} />
      <span className="text-[18px] font-medium text-[#4C4B4A]">{label}</span>
    </Link>
  );
}
