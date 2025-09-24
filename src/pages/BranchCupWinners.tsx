import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Medal, Crown, ArrowLeft, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Medal position data structure
interface Winner {
  name: string;
  branch: string;
  year: string;
  section: string;
  photo: string; // placeholder images for now
}

interface SportData {
  sportName: string;
  icon: string; // emoji or icon identifier
  male: {
    gold: Winner;
    silver: Winner;
    bronze: Winner;
  };
  female: {
    gold: Winner;
    silver: Winner;
    bronze: Winner;
  };
}

const BranchCupWinners = () => {
  const navigate = useNavigate();

  // Sample data - replace with actual winner data
  const sportsData: SportData[] = [
    {
      sportName: "Chess",
      icon: "♟️",
      male: {
        gold: { name: "Arjun Sharma", branch: "AIML", year: "2024", section: "A", photo: "/placeholder.svg" },
        silver: { name: "Rahul Patel", branch: "CSE", year: "2024", section: "B", photo: "/placeholder.svg" },
        bronze: { name: "Vikram Singh", branch: "IT", year: "2023", section: "A", photo: "/placeholder.svg" }
      },
      female: {
        gold: { name: "Priya Gupta", branch: "AIML", year: "2024", section: "A", photo: "/placeholder.svg" },
        silver: { name: "Sneha Verma", branch: "CSE", year: "2024", section: "B", photo: "/placeholder.svg" },
        bronze: { name: "Ananya Joshi", branch: "ECE", year: "2023", section: "A", photo: "/placeholder.svg" }
      }
    },
    {
      sportName: "Table Tennis",
      icon: "🏓",
      male: {
        gold: { name: "Kunal Shah", branch: "CSE", year: "2024", section: "A", photo: "/placeholder.svg" },
        silver: { name: "Amit Kumar", branch: "AIML", year: "2024", section: "B", photo: "/placeholder.svg" },
        bronze: { name: "Rohit Mehta", branch: "IT", year: "2023", section: "A", photo: "/placeholder.svg" }
      },
      female: {
        gold: { name: "Kavya Reddy", branch: "AIML", year: "2024", section: "A", photo: "/placeholder.svg" },
        silver: { name: "Isha Agarwal", branch: "CSE", year: "2024", section: "B", photo: "/placeholder.svg" },
        bronze: { name: "Riya Sharma", branch: "ECE", year: "2023", section: "A", photo: "/placeholder.svg" }
      }
    },
    {
      sportName: "Badminton",
      icon: "🏸",
      male: {
        gold: { name: "Siddharth Jain", branch: "IT", year: "2024", section: "A", photo: "/placeholder.svg" },
        silver: { name: "Harsh Agrawal", branch: "AIML", year: "2024", section: "B", photo: "/placeholder.svg" },
        bronze: { name: "Nikhil Rao", branch: "CSE", year: "2023", section: "A", photo: "/placeholder.svg" }
      },
      female: {
        gold: { name: "Aditi Singh", branch: "AIML", year: "2024", section: "A", photo: "/placeholder.svg" },
        silver: { name: "Pooja Desai", branch: "IT", year: "2024", section: "B", photo: "/placeholder.svg" },
        bronze: { name: "Neha Tiwari", branch: "CSE", year: "2023", section: "A", photo: "/placeholder.svg" }
      }
    }
  ];

  const MedalCard = ({ winner, position, positionColor }: { winner: Winner; position: string; positionColor: string }) => {
    const getMedalIcon = () => {
      switch (position) {
        case 'gold': return <Crown className="h-6 w-6 text-yellow-400" />;
        case 'silver': return <Medal className="h-6 w-6 text-gray-400" />;
        case 'bronze': return <Medal className="h-6 w-6 text-amber-600" />;
        default: return <Trophy className="h-6 w-6" />;
      }
    };

    const getPositionStyle = () => {
      switch (position) {
        case 'gold': 
          return 'border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 to-yellow-600/5';
        case 'silver': 
          return 'border-gray-400/30 bg-gradient-to-br from-gray-400/10 to-gray-600/5';
        case 'bronze': 
          return 'border-amber-600/30 bg-gradient-to-br from-amber-600/10 to-amber-800/5';
        default: 
          return 'border-white/10';
      }
    };

    return (
      <Card className={`glass ${getPositionStyle()} hover-glow transition-all duration-300`}>
        <CardContent className="p-6 text-center">
          <div className="flex justify-center mb-4">
            {getMedalIcon()}
          </div>
          
          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20">
            <img 
              src={winner.photo} 
              alt={winner.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h4 className="font-bold text-lg mb-2 text-foreground">{winner.name}</h4>
          
          <div className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center justify-center space-x-2">
              <span className="font-medium">{winner.branch}</span>
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              <span>{winner.year}</span>
            </div>
            <div className="text-xs">Section {winner.section}</div>
          </div>
          
          <div className={`mt-3 px-3 py-1 rounded-full text-xs font-semibold ${positionColor}`}>
            {position.charAt(0).toUpperCase() + position.slice(1)} Medal
          </div>
        </CardContent>
      </Card>
    );
  };

  const SportSection = ({ sport }: { sport: SportData }) => (
    <div className="mb-16">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-4">
          <span className="text-2xl">{sport.icon}</span>
          <h2 className="text-3xl font-bold text-gradient">{sport.sportName}</h2>
        </div>
      </div>

      {/* Male Category */}
      <div className="mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
            <Users className="h-4 w-4 text-primary" />
            <span className="font-semibold text-primary">Male Category</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MedalCard 
            winner={sport.male.gold} 
            position="gold" 
            positionColor="bg-yellow-400/20 text-yellow-400"
          />
          <MedalCard 
            winner={sport.male.silver} 
            position="silver" 
            positionColor="bg-gray-400/20 text-gray-300"
          />
          <MedalCard 
            winner={sport.male.bronze} 
            position="bronze" 
            positionColor="bg-amber-600/20 text-amber-400"
          />
        </div>
      </div>

      {/* Female Category */}
      <div className="mb-8">
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2 glass rounded-full px-4 py-2">
            <Users className="h-4 w-4 text-secondary" />
            <span className="font-semibold text-secondary">Female Category</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <MedalCard 
            winner={sport.female.gold} 
            position="gold" 
            positionColor="bg-yellow-400/20 text-yellow-400"
          />
          <MedalCard 
            winner={sport.female.silver} 
            position="silver" 
            positionColor="bg-gray-400/20 text-gray-300"
          />
          <MedalCard 
            winner={sport.female.bronze} 
            position="bronze" 
            positionColor="bg-amber-600/20 text-amber-400"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              onClick={() => navigate('/achievements')}
              variant="ghost" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Achievements</span>
            </Button>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-10 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8">
                <Trophy className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Inter-Branch Sports Competition
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                Branch Cup Winners
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Celebrating the champions of our inter-branch sports competitions across various categories
              </p>
            </div>
          </div>

          {/* Sports Sections */}
          <div className="space-y-8">
            {sportsData.map((sport, index) => (
              <SportSection key={sport.sportName} sport={sport} />
            ))}
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">{sportsData.length}</div>
              <div className="text-muted-foreground text-sm">Sports Categories</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">{sportsData.length * 6}</div>
              <div className="text-muted-foreground text-sm">Total Winners</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">4</div>
              <div className="text-muted-foreground text-sm">Participating Branches</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">2024</div>
              <div className="text-muted-foreground text-sm">Competition Year</div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BranchCupWinners;