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
    <div className="w-full flex min-h-screen bg-[#FAFAFA]">
      <AppSideBar onClose={onClose} sidebar={sidebar} />
      <div
        className={`flex-1 relative transition-all duration-300 ${
          sidebar ? 'pl-[300px]' : 'pl-0'
        }`}
      >
        {/* ✅ Header에 props 전달 */}
        <Header sidebar={sidebar} onOpen={onOpen} scrolled={scrolled} />
        <main className="max-w-[1200px] w-full h-dvh mx-auto bg-amber-200">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
