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
    <nav className="bg-white/20 backdrop-blur-md border-r border-white/10 p-6 w-72 h-screen flex flex-col">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-light text-foreground mb-2">
          Loop
        </h1>
        <p className="text-muted-foreground text-sm">Mindful CRM</p>
      </div>
      
      <div className="flex-1 space-y-3">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-4 h-12 transition-all duration-300 font-light text-base rounded-xl",
                activeTab === item.id 
                  ? "bg-warm text-white shadow-soft" 
                  : "hover:bg-white/30 text-muted-foreground hover:text-foreground"
              )}
              onClick={() => onTabChange(item.id)}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Button>
          );
        })}
      </div>
      
      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="text-sm text-muted-foreground text-center font-light">
          Building meaningful connections
        </div>
      </div>
    </nav>
  );
};

export default Navigation;