import DarkModeToggle from '@/components/header/dark-mode-toggle';
import {Outlet} from 'react-router';

export default function AuthLayout() {
  return (
    <div className="w-full flex flex-col min-h-screen relative bg-[#FAFAFA] dark:bg-slate-900 bg-[url('/background.svg')] bg-cover">
      <header className="w-full py-3.5 absolute top-0 left-0 px-5 md:px-0 bg-white dark:bg-slate-800 shadow">
        <div className="max-w-[1200px]  mx-auto flex justify-between items-center">
          <span className="text-xl font-bold text-[#4C4B4A] dark:text-white">
            On:Mind
          </span>
          <DarkModeToggle />
        </div>
      </header>
      <main className="max-w-[1200px] w-full h-dvh mx-auto flex justify-center items-center px-8 md:px-0 ">
        <Outlet />
      </main>
    </div>
  );
}
