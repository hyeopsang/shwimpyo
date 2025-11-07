import Logout from '@/assets/logout.svg?react';

export default function SideBarFooter() {
  return (
    <section className="w-full pt-4">
      <button className="w-full flex items-center px-2 py-1.5 rounded-md hover:bg-slate-200 active:bg-slate-200 gap-4 text-slate-900 dark:text-white">
        <Logout width={20} />
        <span className="text-[14px] font-normal">로그아웃</span>
      </button>
    </section>
  );
}
