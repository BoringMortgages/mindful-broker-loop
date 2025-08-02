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
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-glass/20 backdrop-blur-[32px] border border-white/10 rounded-[28px] p-3 shadow-glass-xl">
        <div className="flex items-center gap-2">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={cn(
                  "relative w-14 h-14 rounded-[20px] flex items-center justify-center transition-all duration-500 ease-spring group overflow-hidden",
                  "hover:scale-125 hover:-translate-y-2 transform-gpu",
                  activeTab === item.id 
                    ? "bg-white/20 backdrop-blur-sm border border-white/20 shadow-glass" 
                    : "hover:bg-white/10 hover:backdrop-blur-sm hover:border-white/10"
                )}
                onClick={() => onTabChange(item.id)}
              >
                {activeTab === item.id && (
                  <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-glass-primary/20 to-glass-secondary/10"></div>
                )}
                <Icon className={cn(
                  "h-6 w-6 relative z-10 transition-all duration-300",
                  activeTab === item.id 
                    ? "text-white drop-shadow-glass" 
                    : "text-white/80 group-hover:text-white group-hover:drop-shadow-glass"
                )} />
                
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                  <div className="bg-glass/30 backdrop-blur-[20px] border border-white/20 rounded-xl px-3 py-1.5 shadow-glass">
                    <span className="text-xs text-white/90 font-medium whitespace-nowrap">{item.label}</span>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-glass/30 rotate-45 border-r border-b border-white/20"></div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;