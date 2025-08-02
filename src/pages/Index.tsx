import { useState } from "react";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import Contacts from "@/components/Contacts";
import Actions from "@/components/Actions";
import Goals from "@/components/Goals";
import Mindfulness from "@/components/Mindfulness";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "contacts":
        return <Contacts />;
      case "actions":
        return <Actions />;
      case "goals":
        return <Goals />;
      case "mindfulness":
        return <Mindfulness />;
      case "calls":
        return <div className="p-6"><h1 className="text-2xl font-bold">Calls (Coming Soon)</h1></div>;
      case "mail":
        return <div className="p-6"><h1 className="text-2xl font-bold">Mail (Coming Soon)</h1></div>;
      case "reminders":
        return <div className="p-6"><h1 className="text-2xl font-bold">Reminders (Coming Soon)</h1></div>;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex">
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
