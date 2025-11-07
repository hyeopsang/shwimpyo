import {useState} from 'react';
import {Outlet} from 'react-router';
import AppSideBar from '@/feature/sidebar/app-sidebar';

export default function MyAppLayout() {
  const [sidebar, setSidebar] = useState(true);

  const onClose = () => {
    setSidebar(false);
  };

  return (
    <div className="w-full flex min-h-screen  bg-[#FAFAFA]">
      <div className="max-w-[1200px] w-full h-dvh flex mx-auto overflow-hidden">
        <AppSideBar onClose={onClose} sidebar={sidebar} />
        <main className="flex-1 w-full h-full mx-auto bg-amber-200 border-x border-slate-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
