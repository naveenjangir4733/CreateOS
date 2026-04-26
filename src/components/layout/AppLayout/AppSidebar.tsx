'use client';

import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import {
  createOSData,
  TeamSwitcher,
  NavMain,
  NavProjects,
  NavUser,
} from './sidebar';

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={createOSData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={createOSData.navMain} />
        <NavProjects projects={createOSData.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={createOSData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
