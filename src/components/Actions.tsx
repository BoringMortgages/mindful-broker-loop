import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Plus, 
  Calendar, 
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  FileText,
  CheckSquare,
  Star
} from "lucide-react";

const Actions = () => {
  const [filter, setFilter] = useState("all");

  const actions = [
    {
      id: 1,
      type: "Follow-up Call",
      contact: "Sarah Johnson",
      description: "Discuss loan options and answer questions about documentation",
      priority: "high",
      dueDate: "Today",
      completed: false,
      icon: Phone,
      estimatedTime: "30 min"
    },
    {
      id: 2,
      type: "Send Proposal",
      contact: "Mike Chen",
      description: "Investment property loan proposal with competitive rates",
      priority: "medium",
      dueDate: "Tomorrow",
      completed: false,
      icon: FileText,
      estimatedTime: "45 min"
    },
    {
      id: 3,
      type: "Schedule Consultation",
      contact: "Emma Wilson",
      description: "Initial consultation for refinancing current mortgage",
      priority: "medium",
      dueDate: "Dec 30",
      completed: false,
      icon: Calendar,
      estimatedTime: "15 min"
    },
    {
      id: 4,
      type: "Thank You Note",
      contact: "David Rodriguez",
      description: "Send personalized thank you for referral and update on process",
      priority: "low",
      dueDate: "Dec 28",
      completed: true,
      icon: MessageSquare,
      estimatedTime: "10 min"
    },
    {
      id: 5,
      type: "Rate Update Email",
      contact: "Lisa Park",
      description: "Send current rate sheet and market update newsletter",
      priority: "low",
      dueDate: "Jan 2",
      completed: false,
      icon: Mail,
      estimatedTime: "20 min"
    },
    {
      id: 6,
      type: "Document Review",
      contact: "James Wilson",
      description: "Review submitted financial documents and provide feedback",
      priority: "high",
      dueDate: "Today",
      completed: false,
      icon: FileText,
      estimatedTime: "60 min"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "destructive";
      case "medium": return "default";
      case "low": return "secondary";
      default: return "outline";
    }
  };

  const getDueDateColor = (dueDate: string) => {
    if (dueDate === "Today") return "text-destructive";
    if (dueDate === "Tomorrow") return "text-warm";
    return "text-muted-foreground";
  };

  const filteredActions = actions.filter(action => {
    if (filter === "completed") return action.completed;
    if (filter === "pending") return !action.completed;
    if (filter === "today") return action.dueDate === "Today";
    if (filter === "high") return action.priority === "high";
    return true;
  });

  const completedCount = actions.filter(a => a.completed).length;
  const pendingCount = actions.filter(a => !a.completed).length;
  const todayCount = actions.filter(a => a.dueDate === "Today" && !a.completed).length;

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Action Items</h1>
          <p className="text-muted-foreground">Stay on top of relationship-building tasks</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Action
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Due Today</p>
                <p className="text-2xl font-bold text-destructive">{todayCount}</p>
              </div>
              <Clock className="h-8 w-8 text-destructive" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending</p>
                <p className="text-2xl font-bold text-primary">{pendingCount}</p>
              </div>
              <CheckSquare className="h-8 w-8 text-primary" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-success">{completedCount}</p>
              </div>
              <Star className="h-8 w-8 text-success" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="hover:shadow-md transition-shadow">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total</p>
                <p className="text-2xl font-bold text-foreground">{actions.length}</p>
              </div>
              <CheckSquare className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-2 flex-wrap">
            <Badge 
              variant={filter === "all" ? "default" : "outline"} 
              className="cursor-pointer hover:bg-secondary"
              onClick={() => setFilter("all")}
            >
              All Actions
            </Badge>
            <Badge 
              variant={filter === "today" ? "default" : "outline"} 
              className="cursor-pointer hover:bg-secondary"
              onClick={() => setFilter("today")}
            >
              Due Today
            </Badge>
            <Badge 
              variant={filter === "high" ? "default" : "outline"} 
              className="cursor-pointer hover:bg-secondary"
              onClick={() => setFilter("high")}
            >
              High Priority
            </Badge>
            <Badge 
              variant={filter === "pending" ? "default" : "outline"} 
              className="cursor-pointer hover:bg-secondary"
              onClick={() => setFilter("pending")}
            >
              Pending
            </Badge>
            <Badge 
              variant={filter === "completed" ? "default" : "outline"} 
              className="cursor-pointer hover:bg-secondary"
              onClick={() => setFilter("completed")}
            >
              Completed
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Actions List */}
      <div className="space-y-4">
        {filteredActions.map((action) => {
          const Icon = action.icon;
          return (
            <Card key={action.id} className={`hover:shadow-md transition-all duration-200 ${action.completed ? 'opacity-60' : ''}`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <Checkbox 
                    checked={action.completed}
                    className="mt-1"
                  />
                  
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <div>
                          <h3 className={`font-semibold ${action.completed ? 'line-through' : ''}`}>
                            {action.type}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <User className="h-3 w-3" />
                            <span>{action.contact}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Badge variant={getPriorityColor(action.priority)} className="text-xs">
                          {action.priority}
                        </Badge>
                        <span className={`text-sm font-medium ${getDueDateColor(action.dueDate)}`}>
                          {action.dueDate}
                        </span>
                      </div>
                    </div>
                    
                    <p className={`text-sm text-muted-foreground ${action.completed ? 'line-through' : ''}`}>
                      {action.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Est. {action.estimatedTime}</span>
                      </div>
                      
                      {!action.completed && (
                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            Edit
                          </Button>
                          <Button size="sm">
                            Complete
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Productivity Insight */}
      <Card className="bg-gradient-to-r from-success/10 to-primary/10 border-success/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-success-foreground">
            <Star className="h-5 w-5 text-success" />
            Productivity Insight
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-success-foreground/80">
            You've completed {completedCount} actions this week! Each completed task strengthens your relationships and moves you closer to your goals. Keep up the mindful, consistent effort.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Actions;