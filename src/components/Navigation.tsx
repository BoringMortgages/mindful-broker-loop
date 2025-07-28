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
  Bell
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
    { id: "calls", label: "Calls", icon: Phone },
    { id: "mail", label: "Mail", icon: Mail },
    { id: "reminders", label: "Reminders", icon: Bell },
  ];

  return (
    <nav className="bg-card border-r border-border p-4 w-64 h-screen flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Loop
        </h1>
        <p className="text-muted-foreground text-sm mt-1">Mindful CRM</p>
      </div>
      
      <div className="flex-1 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeTab === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-11 transition-all duration-200",
                activeTab === item.id 
                  ? "bg-gradient-to-r from-primary to-primary-glow text-primary-foreground shadow-md" 
                  : "hover:bg-secondary text-muted-foreground hover:text-foreground"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </div>
      
      <div className="mt-auto pt-4 border-t border-border">
        <div className="text-xs text-muted-foreground text-center">
          Building meaningful connections
        </div>
      </div>
    </nav>
  );
};

export default Navigation;