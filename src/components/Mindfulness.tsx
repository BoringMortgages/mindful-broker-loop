import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Play, 
  Pause,
  Clock,
  Quote,
  Lightbulb,
  Smile,
  Sun,
  Moon,
  Leaf
} from "lucide-react";

const Mindfulness = () => {
  const [meditationTimer, setMeditationTimer] = useState(300); // 5 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  const dailyQuotes = [
    "Every client interaction is an opportunity to build trust and create value.",
    "Success in relationships comes from genuine care, not just closing deals.",
    "Take time to listen deeply - understanding creates connection.",
    "Gratitude transforms routine tasks into meaningful moments.",
    "Your authentic self is your greatest business asset."
  ];

  const mindfulPractices = [
    {
      title: "Client Connection Meditation",
      description: "5-minute practice to center yourself before important client calls",
      duration: "5 min",
      icon: Heart,
      color: "text-warm"
    },
    {
      title: "Gratitude for Relationships",
      description: "Reflect on the positive impact of your client relationships",
      duration: "3 min",
      icon: Smile,
      color: "text-success"
    },
    {
      title: "Stress Release Breathing",
      description: "Quick breathing exercise to reset during busy days",
      duration: "2 min",
      icon: Leaf,
      color: "text-primary"
    },
    {
      title: "Intention Setting",
      description: "Start your day with clear, positive intentions for client interactions",
      duration: "10 min",
      icon: Sun,
      color: "text-accent"
    }
  ];

  const wellnessInsights = [
    {
      metric: "Mindful Sessions This Week",
      value: "12",
      change: "+3 from last week",
      icon: Heart
    },
    {
      metric: "Average Session Length",
      value: "7 min",
      change: "Consistent practice",
      icon: Clock
    },
    {
      metric: "Stress Level",
      value: "Low",
      change: "Improved by 25%",
      icon: Leaf
    },
    {
      metric: "Focus Quality",
      value: "High",
      change: "Enhanced clarity",
      icon: Lightbulb
    }
  ];

  const tips = [
    "Start each client meeting with a moment of intention setting",
    "Practice active listening by focusing fully on the speaker",
    "Take three deep breaths before making important decisions",
    "Express genuine gratitude to at least one client daily",
    "End your workday with reflection on positive interactions"
  ];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuote = dailyQuotes[new Date().getDay() % dailyQuotes.length];

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground">Mindfulness & Wellness</h1>
        <p className="text-muted-foreground">Cultivate presence and authenticity in your professional relationships</p>
      </div>

      {/* Daily Quote */}
      <Card className="bg-gradient-to-r from-warm/10 to-accent/10 border-warm/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <Quote className="h-8 w-8 text-warm mt-1 animate-float" />
            <div>
              <h3 className="font-semibold text-warm-foreground mb-2">Today's Mindful Thought</h3>
              <p className="text-warm-foreground/80 italic text-lg leading-relaxed">
                "{currentQuote}"
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Wellness Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {wellnessInsights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <Icon className="h-5 w-5 text-primary" />
                  <Badge variant="outline" className="text-xs">
                    {insight.change}
                  </Badge>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{insight.value}</p>
                  <p className="text-sm text-muted-foreground">{insight.metric}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Meditation Timer */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Meditation Timer
          </CardTitle>
          <CardDescription>Take a moment to center yourself and set positive intentions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-6xl font-mono font-bold text-primary mb-4">
              {formatTime(meditationTimer)}
            </div>
            <div className="flex gap-2 justify-center mb-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMeditationTimer(120)}
              >
                2 min
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMeditationTimer(300)}
              >
                5 min
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMeditationTimer(600)}
              >
                10 min
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setMeditationTimer(900)}
              >
                15 min
              </Button>
            </div>
            <div className="flex gap-4 justify-center">
              <Button
                className="gap-2"
                onClick={() => setIsTimerRunning(!isTimerRunning)}
              >
                {isTimerRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {isTimerRunning ? "Pause" : "Start"}
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setIsTimerRunning(false);
                  setMeditationTimer(300);
                }}
              >
                Reset
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mindful Practices */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-foreground">Mindful Practices</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mindfulPractices.map((practice, index) => {
            const Icon = practice.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-all duration-200 group cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className={`h-5 w-5 ${practice.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{practice.title}</CardTitle>
                      <CardDescription>{practice.description}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {practice.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button className="w-full gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Play className="h-4 w-4" />
                    Start Practice
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Mindful Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent" />
            Mindful Business Tips
          </CardTitle>
          <CardDescription>Simple ways to bring mindfulness into your daily work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tips.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-0.5">
                  <span className="text-xs font-semibold text-accent">{index + 1}</span>
                </div>
                <p className="text-sm text-foreground flex-1">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Evening Reflection */}
      <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary-foreground">
            <Moon className="h-5 w-5 text-primary" />
            Evening Reflection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-primary-foreground/80">
              Take a moment to reflect on today's meaningful connections:
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-primary-foreground/70">• What client interaction brought you the most joy today?</p>
              <p className="text-primary-foreground/70">• How did you show genuine care in your conversations?</p>
              <p className="text-primary-foreground/70">• What are you grateful for in your professional relationships?</p>
            </div>
            <Button variant="outline" className="mt-4">
              Start Reflection
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Mindfulness;