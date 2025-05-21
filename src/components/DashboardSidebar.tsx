
import { useNavigate, NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { LayoutDashboard, BookOpen, User, LogOut, ArrowLeft } from "lucide-react";

export function DashboardSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const navigate = useNavigate();

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "flex items-center p-2 rounded-md w-full transition-colors duration-200",
      isActive
        ? "bg-university-primary text-white font-medium"
        : "hover:bg-university-primary/10"
    );

  return (
    <Sidebar className={cn("border-r transition-all duration-300 ease-in-out", collapsed ? "w-16" : "w-64")} collapsible="icon">
      <SidebarTrigger className="m-2 self-end hover:rotate-180 transition-transform duration-300" />
      
      <SidebarContent>
        {/* Dashboard Link */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Dashboard">
                <NavLink to="/dashboard" className={getNavLinkClass}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  {!collapsed && <span className="transition-opacity duration-200">Dashboard</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
            
            <SidebarMenuItem>
              <SidebarMenuButton asChild tooltip="Back to Home">
                <NavLink to="/" className={getNavLinkClass}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  {!collapsed && <span className="transition-opacity duration-200">Back to Home</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        
        {/* Courses Section */}
        <SidebarGroup>
          <SidebarGroupLabel>{!collapsed && "Academics"}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Courses">
                  <NavLink to="/courses" className={getNavLinkClass}>
                    <BookOpen className="mr-2 h-4 w-4" />
                    {!collapsed && <span className="transition-opacity duration-200">Courses</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* User Section */}
        <SidebarGroup>
          <SidebarGroupLabel>{!collapsed && "Account"}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Profile">
                  <NavLink to="/profile" className={getNavLinkClass}>
                    <User className="mr-2 h-4 w-4" />
                    {!collapsed && <span className="transition-opacity duration-200">Profile</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Logout">
                  <button 
                    className="flex items-center p-2 rounded-md w-full text-left transition-colors duration-200 hover:bg-university-primary/10" 
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    {!collapsed && <span className="transition-opacity duration-200">Logout</span>}
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default DashboardSidebar;
