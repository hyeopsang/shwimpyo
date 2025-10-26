import NavigationButtons from '@/feature/bottom-navigation/navigation-buttons';
import {
  LayoutDashboard,
  BookText,
  Activity,
  CircleUserRound,
} from 'lucide-react';

export default function BottomNavigation() {
  return (
    <nav
      className="w-full max-w-[800px] h-[79px] sm:h-[99px] px-3 grid grid-cols-4 grid-rows-1 bg-white rounded-t-3xl shadow-[0_-1px_0_0_#F1EEEC] fixed bottom-0 left-[50%] -translate-x-1/2 z-50"
      aria-label="Main navigation"
    >
      <NavigationButtons path="/dashboard" label="Dashboard">
        <LayoutDashboard className="w-5 h-5 sm:w-6 sm:h-6" />
      </NavigationButtons>
      <NavigationButtons path="/journal" label="Journal">
        <BookText className="w-5 h-5 sm:w-6 sm:h-6" />
      </NavigationButtons>
      <NavigationButtons path="/insight" label="Insights">
        <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
      </NavigationButtons>
      <NavigationButtons path="/profile" label="Profile">
        <CircleUserRound className="w-5 h-5 sm:w-6 sm:h-6" />
      </NavigationButtons>
    </nav>
  );
}
