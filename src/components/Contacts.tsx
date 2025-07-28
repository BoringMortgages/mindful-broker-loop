import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Plus, 
  Phone, 
  Mail, 
  MessageSquare,
  Calendar,
  Star,
  Heart,
  TrendingUp
} from "lucide-react";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const contacts = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.j@email.com",
      phone: "(555) 123-4567",
      role: "First-time Buyer",
      relationshipScore: 95,
      lastContact: "2 days ago",
      leadSource: "Referral",
      stage: "Warm Lead",
      notes: "Looking for starter home in suburbs",
      avatar: null
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "m.chen@techcorp.com",
      phone: "(555) 987-6543",
      role: "Investment Property",
      relationshipScore: 78,
      lastContact: "1 week ago",
      leadSource: "Website",
      stage: "Active Client",
      notes: "Interested in rental properties",
      avatar: null
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma.wilson@startup.io",
      phone: "(555) 456-7890",
      role: "Refinancing",
      relationshipScore: 89,
      lastContact: "3 days ago",
      leadSource: "Social Media",
      stage: "Nurturing",
      notes: "Current rate expires next month",
      avatar: null
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "d.rodriguez@email.com",
      phone: "(555) 654-3210",
      role: "Home Upgrade",
      relationshipScore: 92,
      lastContact: "1 day ago",
      leadSource: "Past Client",
      stage: "Hot Lead",
      notes: "Growing family, needs larger home",
      avatar: null
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-success";
    if (score >= 75) return "text-primary";
    if (score >= 60) return "text-warm";
    return "text-muted-foreground";
  };

  const getStageColor = (stage: string) => {
    switch (stage) {
      case "Hot Lead": return "destructive";
      case "Active Client": return "default";
      case "Warm Lead": return "secondary";
      case "Nurturing": return "outline";
      default: return "secondary";
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Contacts</h1>
          <p className="text-muted-foreground">Build and nurture meaningful relationships</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add Contact
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search contacts by name, email, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary">All</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Hot Leads</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Active</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-secondary">Nurturing</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredContacts.map((contact) => (
          <Card key={contact.id} className="hover:shadow-lg transition-all duration-200 group">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={contact.avatar || ""} />
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                      {contact.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{contact.name}</CardTitle>
                    <CardDescription>{contact.role}</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className={`h-4 w-4 ${getScoreColor(contact.relationshipScore)}`} />
                  <span className={`text-sm font-medium ${getScoreColor(contact.relationshipScore)}`}>
                    {contact.relationshipScore}%
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>{contact.phone}</span>
                </div>
              </div>

              {/* Status and Source */}
              <div className="flex items-center gap-2">
                <Badge variant={getStageColor(contact.stage)}>{contact.stage}</Badge>
                <Badge variant="outline" className="text-xs">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {contact.leadSource}
                </Badge>
              </div>

              {/* Notes */}
              <div className="bg-muted/50 p-3 rounded-lg">
                <p className="text-sm text-muted-foreground italic">"{contact.notes}"</p>
              </div>

              {/* Last Contact */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Last contact: {contact.lastContact}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>Follow up</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <Button size="sm" variant="outline" className="flex-1 gap-2">
                  <Phone className="h-3 w-3" />
                  Call
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2">
                  <Mail className="h-3 w-3" />
                  Email
                </Button>
                <Button size="sm" variant="outline" className="flex-1 gap-2">
                  <MessageSquare className="h-3 w-3" />
                  Note
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Relationship Insights */}
      <Card className="bg-gradient-to-r from-warm/10 to-accent/10 border-warm/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-warm-foreground">
            <Heart className="h-5 w-5 text-warm" />
            Relationship Insights
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-warm-foreground">87%</div>
              <div className="text-sm text-warm-foreground/70">Average Relationship Score</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warm-foreground">12</div>
              <div className="text-sm text-warm-foreground/70">Contacts need follow-up</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warm-foreground">3</div>
              <div className="text-sm text-warm-foreground/70">Ready to close</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contacts;