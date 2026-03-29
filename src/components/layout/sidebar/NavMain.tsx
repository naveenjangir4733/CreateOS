'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { useActiveTab } from '@/context';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    items?: { title: string; url: string }[];
  }[];
}) {
  const { activeTab, setActiveTab, activeSubTab, setActiveSubTab } =
    useActiveTab();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={activeTab === item.title}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={item.title}
                  className={`py-5 my-0.5 border cursor-pointer flex items-center gap-2 
                    ${
                      activeTab === item.title
                        ? 'border-l-5 border-amber-300'
                        : 'hover:bg-amber-100 border-amber-300'
                    }`}
                  onClick={() => setActiveTab(item.title)}
                >
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items && (
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton
                          asChild
                          onClick={() => setActiveSubTab(subItem.title)}
                          className={`px-4 py-2 block cursor-pointer relative `}
                        >
                          <a
                            href={subItem.url}
                            className="flex items-center space-x-2"
                          >
                            {activeSubTab === subItem.title && (
                              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 border-2 border-amber-300 rounded-full" />
                            )}
                            <span>{subItem.title}</span>
                          </a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              )}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
