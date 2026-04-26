'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';
import { NavLink, useLocation } from 'react-router';
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
  const { pathname } = useLocation();

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={
              activeTab === item.title || pathname.startsWith(item.url)
            }
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
                          className="relative block cursor-pointer px-4 py-2"
                        >
                          <NavLink
                            to={subItem.url}
                            className={({ isActive }) =>
                              `flex items-center space-x-2 rounded-md px-2 py-1 transition-colors ${
                                isActive
                                  ? 'bg-amber-100 text-amber-950'
                                  : 'hover:bg-amber-50'
                              }`
                            }
                          >
                            {(activeSubTab === subItem.title ||
                              pathname === subItem.url) && (
                              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 border-2 border-amber-300 rounded-full" />
                            )}
                            <span>{subItem.title}</span>
                          </NavLink>
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
