import SideBarFooter from "@/feature/side-bar/side-bar-footer";
import SideBarHeader from "@/feature/side-bar/side-bar-header";
import { Sidebar, SidebarContent } from "@/shared/ui/sidebar";

export default function BottomNavigation() {
  return (
    <Sidebar>
      <SideBarHeader />
      <SidebarContent></SidebarContent>
      <SideBarFooter />
    </Sidebar>
  );
}
