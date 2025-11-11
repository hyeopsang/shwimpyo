import TriggerIcon from '@/assets/trigger.svg?react';
import XIcon from '@/assets/x.svg?react';
import {cn} from '@/utils/style';

interface SidebarTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SidebarTrigger({
  isOpen,
  onToggle,
}: SidebarTriggerProps) {
  const Icon = isOpen ? XIcon : TriggerIcon;
  return (
    <button
      aria-controls="sidebar"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="transition-colors duration-200 p-2 rounded-full group hover:bg-slate-100 dark:hover:bg-white/25"
    >
      <Icon
        width={20}
        height={20}
        className={cn(
          'text-slate-400 group-hover:text-slate-500 dark:text-slate-300 group-hover:dark:text-slate-100'
        )}
      />
    </button>
  );
}
