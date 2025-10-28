import { SidebarHeader } from "@/shared/ui/sidebar";
import { CircleUserRound } from "lucide-react";

export default function SideBarHeader() {
  return (
    <SidebarHeader className="w-full flex items-center">
      <span>
        <CircleUserRound size={22} />
      </span>
      <span className="text-xl flex flex-col justify-start items-center">
        <span className="font-semibold text-[#121212]">유상협</span>
        <span className="font-medium text-[#E0CBBB]/75">
          dbtkdguq3@gmail.com
        </span>
      </span>
    </SidebarHeader>
  );
}
