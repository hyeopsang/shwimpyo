import TriggerIcon from '@/assets/out.svg?react';

export default function SidebarTrigger({onOpen}: {onOpen: () => void}) {
  return (
    <button
      onClick={onOpen}
      className="transition-colors duration-200 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/25"
    >
      <TriggerIcon
        width={24}
        height={24}
        className="rotate-180 text-slate-900 dark:text-white"
      />
    </button>
  );
}
