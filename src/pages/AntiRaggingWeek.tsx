import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Palette, Video, ArrowLeft, Users, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Winner {
  name: string;
  branch: string;
  year: string;
  section: string;
  photo: string;
  workTitle: string; // Title of their poster/reel
  description: string; // Brief description of their work
}

interface CompetitionData {
  competitionName: string;
  icon: typeof Palette | typeof Video;
  description: string;
  winners: {
    first: Winner;
    second: Winner;
    third: Winner;
  };
}

const AntiRaggingWeek = () => {
  const navigate = useNavigate();

  // Sample data - replace with actual winner data
  const competitionsData: CompetitionData[] = [
    {
      competitionName: "Poster Making Competition",
      icon: Palette,
      description: "Creative posters spreading awareness about anti-ragging and promoting a safe campus environment",
      winners: {
        first: {
          name: "Anjali Sharma",
          branch: "AIML",
          year: "2024",
          section: "A",
          photo: "/placeholder.svg",
          workTitle: "Unity Against Ragging",
          description: "A powerful visual representation promoting campus harmony and student safety"
        },
        second: {
          name: "Rohit Patel",
          branch: "CSE",
          year: "2024",
          section: "B",
          photo: "/placeholder.svg",
          workTitle: "Safe Space for All",
          description: "Colorful design emphasizing inclusivity and respect among students"
        },
        third: {
          name: "Sneha Gupta",
          branch: "IT",
          year: "2023",
          section: "A",
          photo: "/placeholder.svg",
          workTitle: "Stand Together, Stand Strong",
          description: "Minimalist design with strong anti-ragging message and support systems"
        }
      }
    },
    {
      competitionName: "Reel Making Competition",
      icon: Video,
      description: "Creative short videos raising awareness about anti-ragging through engaging storytelling",
      winners: {
        first: {
          name: "Arjun Singh",
          branch: "AIML",
          year: "2024",
          section: "A", 
          photo: "/placeholder.svg",
          workTitle: "Voices of Change",
          description: "Impactful short film showcasing student testimonials and anti-ragging initiatives"
        },
        second: {
          name: "Priya Reddy",
          branch: "ECE",
          year: "2024",
          section: "B",
          photo: "/placeholder.svg",
          workTitle: "Breaking the Silence",
          description: "Animated reel with powerful message about speaking up against ragging"
        },
        third: {
          name: "Vikram Joshi",
          branch: "CSE",
          year: "2023",
          section: "A",
          photo: "/placeholder.svg",
          workTitle: "Campus Champions",
          description: "Documentary-style reel highlighting positive campus culture and student support"
        }
      }
    }
  ];

  const WinnerCard = ({ winner, position, positionColor }: { winner: Winner; position: string; positionColor: string }) => {
    const getPositionIcon = () => {
      switch (position) {
        case 'first': return <Star className="h-6 w-6 text-yellow-400 fill-current" />;
        case 'second': return <Star className="h-6 w-6 text-gray-400 fill-current" />;
        case 'third': return <Star className="h-6 w-6 text-amber-600 fill-current" />;
        default: return <Award className="h-6 w-6" />;
      }
    };

    const getPositionStyle = () => {
      switch (position) {
        case 'first': 
          return 'border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 to-yellow-600/5';
        case 'second': 
          return 'border-gray-400/30 bg-gradient-to-br from-gray-400/10 to-gray-600/5';
        case 'third': 
          return 'border-amber-600/30 bg-gradient-to-br from-amber-600/10 to-amber-800/5';
        default: 
          return 'border-white/10';
      }
    };

    const getPositionText = () => {
      switch (position) {
        case 'first': return '1st Place';
        case 'second': return '2nd Place';
        case 'third': return '3rd Place';
        default: return 'Winner';
      }
    };

    return (
      <Card className={`glass ${getPositionStyle()} hover-glow transition-all duration-300 h-full`}>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            {getPositionIcon()}
            <div className={`px-3 py-1 rounded-full text-xs font-semibold ${positionColor}`}>
              {getPositionText()}
            </div>
          </div>
          
          <div className="flex items-start space-x-4 mb-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
              <img 
                src={winner.photo} 
                alt={winner.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-lg mb-1 text-foreground">{winner.name}</h4>
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium">{winner.branch}</span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>{winner.year}</span>
                  <span className="w-1 h-1 bg-primary rounded-full"></span>
                  <span>Sec {winner.section}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <h5 className="font-semibold text-primary mb-2">"{winner.workTitle}"</h5>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {winner.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  const CompetitionSection = ({ competition }: { competition: CompetitionData }) => {
    const IconComponent = competition.icon;
    
    return (
      <div className="mb-16">
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-4">
            <IconComponent className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold text-gradient">{competition.competitionName}</h2>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {competition.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <WinnerCard 
            winner={competition.winners.first} 
            position="first" 
            positionColor="bg-yellow-400/20 text-yellow-400"
          />
          <WinnerCard 
            winner={competition.winners.second} 
            position="second" 
            positionColor="bg-gray-400/20 text-gray-300"
          />
          <WinnerCard 
            winner={competition.winners.third} 
            position="third" 
            positionColor="bg-amber-600/20 text-amber-400"
          />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-16"></div>
      </div>
    );
  };

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
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-10 right-1/4 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8">
                <Users className="h-5 w-5 text-secondary animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                  Creating Safe Spaces
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                Anti-Ragging Week Winners
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Celebrating creativity and awareness through impactful posters and reels that promote a safe and inclusive campus environment
              </p>
            </div>
          </div>

          {/* Competition Sections */}
          <div className="space-y-8">
            {competitionsData.map((competition, index) => (
              <CompetitionSection key={competition.competitionName} competition={competition} />
            ))}
          </div>

          {/* Event Information */}
          <div className="mt-16">
            <Card className="glass border-white/10 p-8 text-center">
              <h3 className="text-2xl font-bold text-gradient mb-4">About Anti-Ragging Week</h3>
              <p className="text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                Anti-Ragging Week is an annual initiative dedicated to creating awareness about the harmful effects of ragging 
                and promoting a culture of respect, inclusivity, and support among students. Through creative competitions like 
                poster making and reel creation, students express their commitment to maintaining a safe and welcoming campus environment 
                for everyone.
              </p>
            </Card>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">{competitionsData.length}</div>
              <div className="text-muted-foreground text-sm">Competition Categories</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">{competitionsData.length * 3}</div>
              <div className="text-muted-foreground text-sm">Total Winners</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Participants</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">2024</div>
              <div className="text-muted-foreground text-sm">Event Year</div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AntiRaggingWeek;