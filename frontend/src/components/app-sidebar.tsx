import { SquareTerminal } from "lucide-react";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";

const labWorks = [...Array(10)].map((_, i) => ({
  title: `Лабораторна робота №${i + 1}`,
  url: `/condition/${i + 1}`,
  icon: SquareTerminal,
  items: [
    { title: "Умова", url: `/condition/${i + 1}` },
    { title: "Результат", url: `/result/lab${i + 1}` },
    { title: "Код", url: `/code/${i + 1}` },
  ],
}));

const AppSidebar = () => {
  return (
    <Sidebar className="border-r-0" collapsible="icon">
      <SidebarContent>
        <NavMain items={labWorks} />
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;
