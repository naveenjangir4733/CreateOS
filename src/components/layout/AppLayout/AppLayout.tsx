import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppSidebar from './AppSidebar';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex min-h-svh w-full flex-col">
          <SidebarTrigger />
          <div className="min-h-0 flex-1">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
}
