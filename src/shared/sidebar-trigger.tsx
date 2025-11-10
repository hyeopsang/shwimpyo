import TriggerIcon from '@/assets/out.svg?react';

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
        width={24}
        height={24}
        className={`transition-transform duration-300 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        } text-slate-900 dark:text-white`}
      />
    </button>
  );
}
