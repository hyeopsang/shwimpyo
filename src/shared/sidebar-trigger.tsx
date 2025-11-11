import TriggerIcon from '@/assets/trigger.svg?react';
import {cn} from '@/utils/style';

interface SidebarTriggerProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function SidebarTrigger({
  isOpen,
  onToggle,
}: SidebarTriggerProps) {
  return (
    <button
      aria-controls="sidebar"
      aria-expanded={isOpen}
      onClick={onToggle}
      className="transition-colors duration-200 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/25"
    >
      <TriggerIcon
        width={20}
        height={20}
        className={cn('text-slate-900 dark:text-white')}
      />
    </button>
  );
}
