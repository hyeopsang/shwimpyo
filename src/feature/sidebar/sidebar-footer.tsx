import Logout from '@/assets/logout.svg?react';

export default function SideBarFooter() {
  return (
    <section className="w-full flex items-center h-fit px-5 py-5 gap-4">
      <Logout height={18} />
      <span className="text-[18px] font-medium text-[#4C4B4A]">로그아웃</span>
    </section>
  );
}
