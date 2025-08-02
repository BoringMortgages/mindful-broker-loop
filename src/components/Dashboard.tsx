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
          Take back your time.
          <br />
          <span className="text-warm">It's yours.</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Everything comes full circle, so get in the Loop now.
This is your space to focus, gain clarity, and set your goals to be achievable and measurable. Loop is your relationship building co-pilot.</p>
        
        <div className="mt-12 space-y-3 text-lg text-muted-foreground">
          <div>NO vanity metrics</div>
          <div>NO social pressure</div>
          <div>NO tracking</div>
          <div>NO distractions</div>
          <div>NO fake connections</div>
          <div>NO ads</div>
        </div>
        
        <Button size="lg" className="mt-12 px-12 py-4 text-lg bg-warm hover:bg-warm/90 text-white rounded-full font-medium">
          I UNDERSTAND
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

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
          const Icon = stat.icon;
          return <Card key={stat.label} className="bg-white/40 backdrop-blur-sm border-0 shadow-soft hover:shadow-elegant transition-all duration-500 text-center">
                <CardHeader className="space-y-4 pb-4">
                  <Icon className={`h-8 w-8 mx-auto ${stat.color}`} />
                  <CardTitle className="text-lg font-light text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-light text-foreground">{stat.value}</div>
                </CardContent>
              </Card>;
        })}
        </div>
      </div>

      {/* Main Content - Simplified */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Recent Actions */}
        <Card className="bg-white/40 backdrop-blur-sm border-0 shadow-soft">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-light text-foreground flex items-center justify-center gap-3">
              <CheckSquare className="h-6 w-6 text-warm" />
              Recent Actions
            </CardTitle>
            <CardDescription className="text-lg">Stay mindful of your relationship tasks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {recentActions.map((action, index) => <div key={index} className="p-6 bg-white/60 rounded-2xl border-0">
                <div className="text-center space-y-2">
                  <div className="text-lg font-light text-foreground">{action.type}</div>
                  <div className="text-muted-foreground">{action.contact}</div>
                  <div className="text-sm text-muted-foreground">{action.time}</div>
                  <Badge variant={action.priority === 'high' ? 'destructive' : 'secondary'} className="mt-2">
                    {action.priority}
                  </Badge>
                </div>
              </div>)}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="bg-white/40 backdrop-blur-sm border-0 shadow-soft">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-light text-foreground">Mindful Actions</CardTitle>
            <CardDescription className="text-lg">Take intentional steps today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <Button variant="ghost" className="h-24 flex flex-col gap-3 bg-white/60 hover:bg-white/80 border-0 rounded-2xl">
                <Users className="h-8 w-8 text-warm" />
                <span className="font-light">Add Contact</span>
              </Button>
              <Button variant="ghost" className="h-24 flex flex-col gap-3 bg-white/60 hover:bg-white/80 border-0 rounded-2xl">
                <Calendar className="h-8 w-8 text-warm" />
                <span className="font-light">Schedule Call</span>
              </Button>
              <Button variant="ghost" className="h-24 flex flex-col gap-3 bg-white/60 hover:bg-white/80 border-0 rounded-2xl">
                <Target className="h-8 w-8 text-warm" />
                <span className="font-light">Set Goal</span>
              </Button>
              <Button variant="ghost" className="h-24 flex flex-col gap-3 bg-white/60 hover:bg-white/80 border-0 rounded-2xl">
                <Heart className="h-8 w-8 text-warm" />
                <span className="font-light">Mindfulness</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>;
};
export default Dashboard;