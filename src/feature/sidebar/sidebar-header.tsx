import TriggerIcon from '@/assets/out.svg?react';
interface SidebarHeaderProps {
  onClose: () => void;
}
export default function SideBarHeader({onClose}: SidebarHeaderProps) {
  return (
    <section className="w-full flex items-center justify-between pb-10">
      <span className="text-2xl font-bold text-[#4C4B4A]">心쓴</span>
      <button onClick={onClose}>
        <TriggerIcon width={24} height={24} />
      </button>
    </section>
  );
}
