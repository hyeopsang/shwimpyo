import TriggerIcon from '@/assets/out.svg?react';
interface SidebarHeaderProps {
  onClose: () => void;
}
export default function SideBarHeader({onClose}: SidebarHeaderProps) {
  return (
    <section className="w-full flex items-center justify-between pb-5">
      <span className="text-xl font-bold text-[#4C4B4A] dark:text-white">
        心쓴
      </span>
      <button
        onClick={onClose}
        className="transition-colors duration-200 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/25"
      >
        <TriggerIcon
          width={24}
          height={24}
          className="text-slate-900 dark:text-white"
        />
      </button>
    </section>
  );
}
