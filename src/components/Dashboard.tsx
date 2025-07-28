import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  CheckSquare, 
  Target, 
  TrendingUp,
  Heart,
  Calendar,
  Plus,
  Star
} from "lucide-react";

const Dashboard = () => {
  const currentHour = new Date().getHours();
  const getGreeting = () => {
    if (currentHour < 12) return "Good morning";
    if (currentHour < 17) return "Good afternoon";
    return "Good evening";
  };

  const stats = [
    { label: "Active Contacts", value: "127", icon: Users, color: "text-primary" },
    { label: "Pending Actions", value: "8", icon: CheckSquare, color: "text-warm" },
    { label: "Monthly Goals", value: "3/5", icon: Target, color: "text-success" },
    { label: "Relationship Score", value: "85%", icon: Heart, color: "text-accent" },
  ];

  const recentActions = [
    { type: "Follow up", contact: "Sarah Johnson", time: "2 hours ago", priority: "high" },
    { type: "Send proposal", contact: "Mike Chen", time: "1 day ago", priority: "medium" },
    { type: "Schedule call", contact: "Emma Wilson", time: "2 days ago", priority: "low" },
  ];

  const mindfulMoment = "Take a moment to appreciate the relationships you're building today. Each connection is an opportunity to make a positive impact.";

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          {getGreeting()}, Alex 👋
        </h1>
        <p className="text-muted-foreground text-lg">
          Ready to nurture meaningful relationships today?
        </p>
      </div>

      {/* Mindful Moment */}
      <Card className="bg-gradient-to-r from-warm/10 to-accent/10 border-warm/20">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-warm animate-float" />
            <CardTitle className="text-lg text-warm-foreground">Mindful Moment</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-warm-foreground/80 italic">{mindfulMoment}</p>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="hover:shadow-lg transition-all duration-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Actions */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <CheckSquare className="h-5 w-5 text-primary" />
                  Recent Actions
                </CardTitle>
                <CardDescription>Stay on top of your relationship-building tasks</CardDescription>
              </div>
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Add Action
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentActions.map((action, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium text-foreground">{action.type}</span>
                    <Badge 
                      variant={action.priority === 'high' ? 'destructive' : action.priority === 'medium' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {action.priority}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{action.contact}</p>
                  <p className="text-xs text-muted-foreground">{action.time}</p>
                </div>
                <Button variant="ghost" size="sm">Complete</Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Goal Progress */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-success" />
              This Month's Goals
            </CardTitle>
            <CardDescription>Building stronger relationships, one step at a time</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Connect with 20 new prospects</span>
                <span className="text-sm text-muted-foreground">15/20</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-success to-primary h-2 rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Follow up with warm leads</span>
                <span className="text-sm text-muted-foreground">8/12</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-warm to-accent h-2 rounded-full" style={{ width: '66%' }}></div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Schedule client appreciation calls</span>
                <span className="text-sm text-muted-foreground">3/5</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Jump into your most important tasks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Add Contact</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Calendar className="h-6 w-6" />
              <span className="text-sm">Schedule Call</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <CheckSquare className="h-6 w-6" />
              <span className="text-sm">Add Action</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col gap-2">
              <Star className="h-6 w-6" />
              <span className="text-sm">Set Goal</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;