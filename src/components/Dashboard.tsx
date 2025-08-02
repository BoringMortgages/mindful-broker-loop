import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, CheckSquare, Target, TrendingUp, Heart, Calendar, Plus, Star } from "lucide-react";
const Dashboard = () => {
  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return "Good morning";
    if (currentHour < 17) return "Good afternoon";
    return "Good evening";
  };
  const stats = [{
    label: "Active Contacts",
    value: "127",
    icon: Users,
    color: "text-primary"
  }, {
    label: "Pending Actions",
    value: "8",
    icon: CheckSquare,
    color: "text-warm"
  }, {
    label: "Monthly Goals",
    value: "3/5",
    icon: Target,
    color: "text-success"
  }, {
    label: "Relationship Score",
    value: "85%",
    icon: Heart,
    color: "text-accent"
  }];
  const recentActions = [{
    type: "Follow up",
    contact: "Sarah Johnson",
    time: "2 hours ago",
    priority: "high"
  }, {
    type: "Send proposal",
    contact: "Mike Chen",
    time: "1 day ago",
    priority: "medium"
  }, {
    type: "Schedule call",
    contact: "Emma Wilson",
    time: "2 days ago",
    priority: "low"
  }];
  const mindfulMoment = "Take a moment to appreciate the relationships you're building today. Each connection is an opportunity to make a positive impact.";
  return <div className="min-h-screen p-8 space-y-12">
      {/* Hero Welcome Section */}
      <div className="text-center max-w-5xl mx-auto py-20">
        <h1 className="text-6xl md:text-8xl font-extralight text-foreground mb-8 leading-tight tracking-tight">
          Everything comes full circle.
          <br />
          <span className="bg-gradient-to-r from-glass-warm to-glass-primary bg-clip-text text-transparent">get in the loop.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">This is your space to focus, find clarity in daily tasks, and develop achievable and measurable goals. Loop is your relationship building co-pilot.</p>
        
        <button className="mt-16 px-16 py-5 text-lg font-light transition-[transform,box-shadow] duration-[700ms] hover:scale-105 relative overflow-hidden group rounded-full border border-border/30 shadow-glass-lg hover:shadow-glass-xl bg-gradient-glass backdrop-blur-[20px] text-foreground">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-glass-primary/10 to-glass-warm/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <div className="absolute inset-0 rounded-full shadow-inner"></div>
          <span className="relative z-10">SIGN IN</span>
        </button>
      </div>

      {/* Mindful Moment */}
      <div className="relative max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-border/20 shadow-glass-xl bg-gradient-glass backdrop-blur-[24px]">
          <div className="absolute inset-0 bg-gradient-to-br from-glass-cool/10 to-glass-warm/5"></div>
          <div className="absolute inset-0 shadow-inner rounded-3xl"></div>
          <div className="relative z-10 p-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-glass backdrop-blur-sm border border-border/20 flex items-center justify-center shadow-glass relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-glass-warm/20 to-glass-cool/10"></div>
                <Heart className="h-7 w-7 text-glass-warm animate-float relative z-10" />
              </div>
              <h2 className="text-3xl font-extralight text-foreground">Mindful Moment</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed font-light italic text-center max-w-2xl mx-auto">{mindfulMoment}</p>
          </div>
        </div>
      </div>

    </div>;
};
export default Dashboard;