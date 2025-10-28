import MenuAccordion from "@/components/side-bar/menu-accordion";
import MenuButton from "@/components/side-bar/menu-button";
import { SidebarContent } from "@/shared/ui/sidebar";

const archiveMenu = [
  {
    title: "나의 회고록",
    items: [
      { title: "일간 회고 모음", href: "/archive/daily" },
      { title: "주간 회고 모음", href: "/archive/weekly" },
      { title: "월간 회고 모음", href: "/archive/monthly" },
      { title: "연간 회고 모음", href: "/archive/yearly" },
    ],
  },
];

export default function SideBarMenuList() {
  return (
    <SidebarContent>
      <MenuButton label="대시보드" path="/dashboard" />
      <MenuButton label="캘린더" path="/calendar" />
      <MenuAccordion menuGroup={archiveMenu} />
    </SidebarContent>
  );
}
