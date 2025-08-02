import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  CheckSquare, 
  Target, 
  Heart, 
  Home,
  Phone,
  Mail,
  Bell,
  Palette
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navigationItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "contacts", label: "Contacts", icon: Users },
    { id: "actions", label: "Actions", icon: CheckSquare },
    { id: "goals", label: "Goals", icon: Target },
    { id: "mindfulness", label: "Mindfulness", icon: Heart },
    { id: "ui-ideas", label: "UI Ideas", icon: Palette },
    { id: "calls", label: "Calls", icon: Phone },
    { id: "mail", label: "Mail", icon: Mail },
    { id: "reminders", label: "Reminders", icon: Bell },
  ];

  return (
    <nav className="bg-gradient-glass backdrop-blur-[24px] border-r border-border/20 p-8 w-80 h-screen flex flex-col shadow-glass-lg">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-extralight text-foreground mb-3 tracking-wide bg-gradient-to-r from-glass-primary to-glass-warm bg-clip-text text-transparent">
          Loop
        </h1>
        <p className="text-muted-foreground text-sm font-light tracking-wide">Mindful CRM</p>
      </div>
      
      <div className="flex-1 space-y-3">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-5 h-14 transition-all duration-700 font-light text-base rounded-2xl relative overflow-hidden group border",
                activeTab === item.id 
                  ? "bg-gradient-glass backdrop-blur-[20px] border-border/30 shadow-glass-lg text-foreground" 
                  : "hover:bg-gradient-glass hover:backdrop-blur-[16px] hover:border-border/20 hover:shadow-glass text-muted-foreground hover:text-foreground border-transparent"
              )}
              onClick={() => onTabChange(item.id)}
            >
              {activeTab === item.id && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-glass-primary/10 to-glass-warm/5"></div>
              )}
              {activeTab === item.id && (
                <div className="absolute inset-0 rounded-2xl shadow-inner"></div>
              )}
              <div className="relative z-10 flex items-center gap-5">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-700 border relative overflow-hidden",
                  activeTab === item.id 
                    ? "bg-gradient-glass backdrop-blur-sm border-border/20 shadow-glass" 
                    : "group-hover:bg-gradient-glass group-hover:backdrop-blur-sm group-hover:border-border/20 border-transparent"
                )}>
                  {activeTab === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-br from-glass-primary/15 to-glass-warm/8 rounded-xl"></div>
                  )}
                  <Icon className="h-5 w-5 relative z-10" />
                </div>
                <span className="font-light tracking-wide">{item.label}</span>
              </div>
            </Button>
          );
        })}
      </div>
      
      <div className="mt-auto pt-8 border-t border-border/20">
        <div className="text-sm text-muted-foreground text-center font-light tracking-wide">
          Building meaningful connections
        </div>
      </div>
    </nav>
  );
};

export default Navigation;