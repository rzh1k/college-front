
import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/DashboardSidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex">
        <DashboardSidebar />
        <div className="flex-1 p-6 animate-fade-in overflow-x-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
