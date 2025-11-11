import Logout from '@/assets/logout.svg?react';

export default function SidebarFooter() {
  return (
    <footer className="w-full pt-4">
      <button className="w-full flex items-center px-4 py-2 rounded-md hover:bg-slate-100 active:bg-slate-100 text-slate-900 dark:text-white dark:hover:bg-slate-100/25 gap-4">
        <Logout width={20} height={20} />
        <span className="text-base font-normal">로그아웃</span>
      </button>
    </footer>
  );
}
