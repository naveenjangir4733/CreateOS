import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { TooltipProvider } from '@/components/ui/tooltip';
import AppSidebar from './AppSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <AppSidebar />
        <main className="flex min-h-svh w-full flex-col">
          <SidebarTrigger />
          <div className="min-h-0 flex-1">{children}</div>
        </main>
      </SidebarProvider>
    </TooltipProvider>
  );
}
