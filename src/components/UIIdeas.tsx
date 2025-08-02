import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MessageCircle, Heart, Lock, Folder, Cloud, FileText, Image } from "lucide-react";

const UIIdeas = () => {
  const glassIcons = [
    { icon: FileText, gradient: "from-blue-400/80 to-blue-600/80", shadow: "shadow-blue-500/20" },
    { icon: Calendar, gradient: "from-red-400/80 to-orange-600/80", shadow: "shadow-red-500/20" },
    { icon: Image, gradient: "from-green-400/80 to-teal-600/80", shadow: "shadow-green-500/20" },
    { icon: Lock, gradient: "from-amber-400/80 to-orange-600/80", shadow: "shadow-amber-500/20" },
    { icon: Heart, gradient: "from-pink-400/80 to-rose-600/80", shadow: "shadow-pink-500/20" },
    { icon: MessageCircle, gradient: "from-purple-400/80 to-indigo-600/80", shadow: "shadow-purple-500/20" },
    { icon: Cloud, gradient: "from-yellow-400/80 to-amber-600/80", shadow: "shadow-yellow-500/20" },
    { icon: Folder, gradient: "from-blue-400/80 to-indigo-600/80", shadow: "shadow-blue-500/20" },
  ];

  return (
    <div className="min-h-screen p-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto py-16">
        <h1 className="text-6xl md:text-7xl font-light text-foreground mb-6 leading-tight">
          毛玻璃质感
          <br />
          <span className="text-warm">GROUND GLASS</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Frosted glass icons with glassmorphism effects for modern UI design
        </p>
      </div>

      {/* Frosted Glass Icons Grid */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-elegant max-w-5xl mx-auto">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl font-light text-center text-foreground">
            Glassmorphism Icons
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
            {glassIcons.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <div className={`
                    relative w-20 h-20 rounded-2xl
                    bg-gradient-to-br ${item.gradient}
                    backdrop-blur-xl border border-white/20
                    ${item.shadow} shadow-2xl
                    flex items-center justify-center
                    transition-all duration-300 hover:scale-110 hover:shadow-3xl
                    before:absolute before:inset-0 before:rounded-2xl 
                    before:bg-gradient-to-br before:from-white/20 before:to-transparent
                    before:backdrop-blur-sm
                  `}>
                    <Icon className="w-8 h-8 text-white/90 relative z-10" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Demo Section */}
          <div className="mt-16 space-y-8">
            <h3 className="text-2xl font-light text-center text-foreground mb-8">
              Interactive Glassmorphism Elements
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Glass Card */}
              <div className="
                relative p-8 rounded-3xl
                bg-gradient-to-br from-white/10 to-white/5
                backdrop-blur-xl border border-white/20
                shadow-2xl hover:shadow-3xl transition-all duration-300
                hover:scale-105
              ">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-medium text-foreground mb-4">Glass Card</h4>
                  <p className="text-muted-foreground">Beautiful frosted glass effect with subtle gradients and blur.</p>
                </div>
              </div>

              {/* Glass Button */}
              <div className="flex items-center justify-center">
                <button className="
                  relative px-8 py-4 rounded-2xl
                  bg-gradient-to-br from-primary/20 to-primary/10
                  backdrop-blur-xl border border-white/20
                  shadow-2xl hover:shadow-3xl transition-all duration-300
                  hover:scale-105 hover:from-primary/30 hover:to-primary/20
                  text-foreground font-medium
                ">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="relative z-10">Glass Button</span>
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* CSS Code Examples */}
      <Card className="bg-white/60 backdrop-blur-sm border-0 shadow-elegant max-w-5xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-light text-center text-foreground">
            CSS Implementation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-black/80 rounded-xl p-6 font-mono text-sm text-green-400 overflow-x-auto">
            <pre>{`/* Glassmorphism Base Effect */
.glass-icon {
  background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 16px;
}

/* Hover Effects */
.glass-icon:hover {
  transform: scale(1.1);
  box-shadow: 0 16px 48px 0 rgba(31, 38, 135, 0.5);
  background: linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1));
}`}</pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UIIdeas;