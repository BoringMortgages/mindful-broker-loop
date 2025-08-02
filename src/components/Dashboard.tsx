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
        
        <Button size="lg" className="mt-12 px-12 py-4 text-lg bg-warm hover:bg-warm/90 text-white rounded-full font-medium">
          SIGN IN
        </Button>
      </div>

      {/* Mindful Moment */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-elegant max-w-3xl mx-auto">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-center gap-3">
            <Heart className="h-6 w-6 text-warm animate-float" />
            <CardTitle className="text-2xl font-light text-foreground">Mindful Moment</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-lg text-muted-foreground leading-relaxed italic">{mindfulMoment}</p>
        </CardContent>
      </Card>

    </div>;
};
export default Dashboard;