import {useState} from 'react';
import {Outlet} from 'react-router';
import AppSidebar from '@/feature/sidebar/app-sidebar';
import Header from '@/components/header';

export default function MyAppLayout() {
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className="w-full flex min-h-screen bg-[#FAFAFA] dark:bg-slate-900">
      <div className="max-w-[1200px] w-full h-dvh flex mx-auto overflow-hidden">
        <AppSidebar toggleSidebar={toggleSidebar} sidebar={sidebar} />
        <main className="flex-1 w-full h-full mx-auto border-x border-slate-200 dark:border-0">
          <Header toggleSidebar={toggleSidebar} sidebar={sidebar} />
          <Outlet />
        </main>
      </div>
    </div>
  );
}
