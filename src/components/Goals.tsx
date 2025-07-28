import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Target, 
  Plus, 
  TrendingUp, 
  Calendar,
  Star,
  Users,
  Phone,
  HandHeart,
  Award
} from "lucide-react";

const Goals = () => {
  const goals = [
    {
      id: 1,
      title: "Connect with 20 new prospects",
      description: "Build relationships with potential clients through meaningful conversations",
      category: "Relationships",
      progress: 75,
      current: 15,
      target: 20,
      deadline: "End of Month",
      icon: Users,
      color: "text-primary"
    },
    {
      id: 2,
      title: "Follow up with warm leads",
      description: "Nurture existing relationships with consistent, valuable touchpoints",
      category: "Nurturing",
      progress: 66,
      current: 8,
      target: 12,
      deadline: "This Week",
      icon: Phone,
      color: "text-warm"
    },
    {
      id: 3,
      title: "Schedule client appreciation calls",
      description: "Show gratitude and maintain strong relationships with past clients",
      category: "Appreciation",
      progress: 60,
      current: 3,
      target: 5,
      deadline: "Next Week",
      icon: HandHeart,
      color: "text-success"
    },
    {
      id: 4,
      title: "Improve relationship scores",
      description: "Enhance connection quality through more meaningful interactions",
      category: "Quality",
      progress: 85,
      current: 85,
      target: 90,
      deadline: "Next Month",
      icon: Star,
      color: "text-accent"
    }
  ];

  const achievements = [
    {
      title: "Relationship Builder",
      description: "Connected with 50+ new contacts",
      icon: Users,
      earned: true
    },
    {
      title: "Consistent Communicator",
      description: "30 days of consistent follow-ups",
      icon: Phone,
      earned: true
    },
    {
      title: "Goal Crusher",
      description: "Completed 5 monthly goals",
      icon: Target,
      earned: false
    },
    {
      title: "Mindful Professional",
      description: "Practiced mindfulness for 7 days",
      icon: HandHeart,
      earned: true
    }
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-gradient-to-r from-success to-primary";
    if (progress >= 60) return "bg-gradient-to-r from-primary to-primary-glow";
    if (progress >= 40) return "bg-gradient-to-r from-warm to-accent";
    return "bg-gradient-to-r from-muted to-muted-foreground";
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Relationships": return "bg-primary/10 text-primary";
      case "Nurturing": return "bg-warm/10 text-warm";
      case "Appreciation": return "bg-success/10 text-success";
      case "Quality": return "bg-accent/10 text-accent";
      default: return "bg-muted/10 text-muted-foreground";
    }
  };

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Goals & Growth</h1>
          <p className="text-muted-foreground">Track your journey of meaningful relationship building</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Goal
        </Button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Goals</p>
                <p className="text-2xl font-bold text-primary">{goals.length}</p>
              </div>
              <Target className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg Progress</p>
                <p className="text-2xl font-bold text-success">
                  {Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / goals.length)}%
                </p>
              </div>
              <TrendingUp className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Achievements</p>
                <p className="text-2xl font-bold text-warm">
                  {achievements.filter(a => a.earned).length}
                </p>
              </div>
              <Award className="h-8 w-8 text-warm" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month</p>
                <p className="text-2xl font-bold text-accent">71%</p>
              </div>
              <Calendar className="h-8 w-8 text-accent" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Goals */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">Active Goals</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {goals.map((goal) => {
            const Icon = goal.icon;
            return (
              <Card key={goal.id} className="hover:shadow-lg transition-all duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className={`h-5 w-5 ${goal.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                        <CardDescription>{goal.description}</CardDescription>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(goal.category)}>
                      {goal.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{goal.current} / {goal.target}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(goal.progress)}`}
                        style={{ width: `${goal.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-foreground">{goal.progress}% Complete</span>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{goal.deadline}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Edit Goal
                    </Button>
                    <Button size="sm" className="flex-1">
                      Update Progress
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Achievements */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index} 
                className={`hover:shadow-md transition-all duration-200 ${
                  achievement.earned ? 'bg-gradient-to-br from-success/5 to-primary/5 border-success/20' : 'opacity-60'
                }`}
              >
                <CardContent className="pt-6 text-center">
                  <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-3 ${
                    achievement.earned ? 'bg-gradient-to-br from-success to-primary' : 'bg-muted'
                  }`}>
                    <Icon className={`h-6 w-6 ${achievement.earned ? 'text-white' : 'text-muted-foreground'}`} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{achievement.title}</h3>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  {achievement.earned && (
                    <Badge className="mt-2 bg-success/10 text-success border-success/20">
                      Earned
                    </Badge>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Motivational Insight */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary-foreground">
            <Target className="h-5 w-5 text-primary" />
            Growth Insight
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-primary-foreground/80">
            You're making excellent progress on your relationship-building journey! Remember, each meaningful connection you make contributes to a thriving, sustainable business built on trust and genuine care.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Goals;