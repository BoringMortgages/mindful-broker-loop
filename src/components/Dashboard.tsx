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
      <div className="text-center max-w-4xl mx-auto py-16">
        <h1 className="text-6xl md:text-7xl font-light text-foreground mb-6 leading-tight">
          Everything comes full circle.
          <br />
          <span className="text-warm">get in the loop.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">This is your space to focus, find clarity in daily tasks, and develop achievable and measurable goals. Loop is your relationship building co-pilot.</p>
        
        <button className="mt-12 px-12 py-4 text-lg rounded-full font-medium transition-all duration-300 hover:scale-105 relative overflow-hidden group bg-gradient-to-br from-warm/20 to-warm/10 backdrop-blur-xl border border-white/20 shadow-2xl text-white hover:shadow-3xl">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
          <span className="relative z-10">SIGN IN</span>
        </button>
      </div>

      {/* Mindful Moment */}
      <div className="relative max-w-3xl mx-auto">
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="relative z-10 p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-warm/20 to-warm/10 backdrop-blur-xl border border-white/20 flex items-center justify-center">
                <Heart className="h-6 w-6 text-warm animate-float" />
              </div>
              <h2 className="text-2xl font-light text-foreground">Mindful Moment</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed italic text-center">{mindfulMoment}</p>
          </div>
        </div>
      </div>

    </div>;
};
export default Dashboard;