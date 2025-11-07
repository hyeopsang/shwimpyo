import {useState, useEffect} from 'react';
import {Outlet} from 'react-router';
import AppSideBar from '@/feature/sidebar/app-sidebar';

import Header from '@/components/header';

export default function MyAppLayout() {
  const [sidebar, setSidebar] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const onClose = () => {
    setSidebar(false);
  };

  const onOpen = () => {
    setSidebar(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
