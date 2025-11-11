import Logout from '@/assets/logout.svg?react';

export default function SidebarFooter() {
  return (
    <footer className="w-full pt-4">
      <button className="w-full px-3 py-2 flex items-center gap-5 rounded-md hover:bg-slate-100 active:scale-95 active:bg-slate-200 active:text-slate-500 text-slate-400 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-slate-300 dark:active:bg-slate-400 dark:active:text-slate-200">
        <Logout width={20} height={20} />
        <span className="text-base font-semibold">로그아웃</span>
      </button>
    </footer>
  );
}
