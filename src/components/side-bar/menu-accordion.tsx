import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/shared/ui/sidebar";
import MenuButton from "./menu-button";

type MenuGroup = {
  title: string;
  items: { title: string; href: string }[];
};

interface MenuAccordionProps {
  menuGroup: MenuGroup[];
}

export default function MenuAccordion({ menuGroup }: MenuAccordionProps) {
  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <Accordion type="single" collapsible>
          {menuGroup.map((menu) => (
            <AccordionItem value={menu.title} key={menu.title}>
              <AccordionTrigger>{menu.title}</AccordionTrigger>
              <AccordionContent>
                <SidebarMenu>
                  {menu.items.map((item) => (
                    <MenuButton
                      key={item.href}
                      path={item.href}
                      label={item.title}
                    />
                  ))}
                </SidebarMenu>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
