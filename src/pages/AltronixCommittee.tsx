import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Award, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface CommitteeMember {
  name: string;
  post: string;
  photo: string;
  year: string;
}

const AltronixCommittee = () => {
  const navigate = useNavigate();

  // Actual committee members data from JSON
  const committeeMembers: CommitteeMember[] = [
    // 4th Year Members
    { name: "Akshay Chandak", post: "President", photo: "/commiteeimages/AkshayC.jpg", year: "4th Year" },
    { name: "Divya Ruthiya", post: "Vice President", photo: "/commiteeimages/DivyaR.jpg", year: "3rd Year" },
    { name: "Arya Asutkar", post: "Secretary", photo: "/commiteeimages/AryaA.jpg", year: "4th Year" },
    { name: "Shanmukh Pardhi", post: "Treasurer", photo: "/commiteeimages/ShanmukhP.jpg", year: "4th Year" },
    { name: "Meharsh Chandure", post: "Technical Secretary", photo: "/meharsh.jpg", year: "4th Year" },
    { name: "Radhika Shukla", post: "Technical Secretary", photo: "/radhika.png", year: "4th Year" },
    { name: "Mitanshu Hedau", post: "Technical Secretary", photo: "/mithanshu.jpg", year: "4th Year" },
    { name: "Mrunal Parashar", post: "Cultural Secretary", photo: "/commiteeimages/MrunalP.jpeg", year: "4th Year" },
    { name: "Nitya Joshi", post: "Cultural Secretary", photo: "/commiteeimages/NityaJ.jpg", year: "4th Year" },
    { name: "Anish Patankar", post: "Sports Secretary", photo: "/commiteeimages/AnishP.jpg", year: "4th Year" },
    { name: "Aman Patne", post: "Sports Secretary", photo: "/commiteeimages/AmanP.png", year: "4th Year" },
    { name: "Pragati Borkar", post: "Event Manager", photo: "/commiteeimages/PragatiB.jpg", year: "4th Year" },
    { name: "Sumedh Khangan", post: "Event Manager", photo: "/commiteeimages/SumedhK.jpg", year: "4th Year" },
    { name: "Saket Karwa", post: "Event Manager", photo: "/commiteeimages/SaketK.jpg", year: "4th Year" },
    
    // 3rd Year Members
    { name: "Shreyansh Bhagwat", post: "Joint Technical Secretary", photo: "/shreyansh.jpg", year: "3rd Year" },
    { name: "Aman Verma", post: "Joint Technical Secretary", photo: "/aman.jpg", year: "3rd Year" },
    { name: "Sanskruti Shukla", post: "Joint Secretary", photo: "/commiteeimages/SanskrutiS.png", year: "3rd Year" },
    { name: "Sumedh Pittule", post: "Joint Treasurer", photo: "/commiteeimages/SumedhP.jpg", year: "3rd Year" },
    { name: "Palak Zade", post: "Joint Cultural Secretary", photo: "/commiteeimages/PalakZ.jpg", year: "3rd Year" },
    { name: "Janhavi Naidu", post: "Joint Cultural Secretary", photo: "/commiteeimages/JanhaviN.jpg", year: "3rd Year" },
    { name: "Shrushti Ghiya", post: "Joint Sports Secretary", photo: "/commiteeimages/ShrushtiG.jpg", year: "3rd Year" },
    { name: "Yash Chaudhari", post: "Joint Sports Secretary", photo: "/commiteeimages/yashC.jpg", year: "3rd Year" },
    { name: "Soham Choudhari", post: "Joint Event Manager", photo: "/commiteeimages/SohamC.jpg", year: "3rd Year" },
    { name: "Sujal Sanat Pandey", post: "Joint Event Manager", photo: "/commiteeimages/SujalP.jpg", year: "3rd Year" },
    { name: "Vaishnavi Lilhare", post: "Creative Lead", photo: "/commiteeimages/VaishnaviL.jpg", year: "3rd Year" },
    { name: "Himanshu Khobragade", post: "Creative Lead", photo: "/commiteeimages/HimanshuK.jpg", year: "3rd Year" },
    { name: "Chaitali Nadekar", post: "Creative Lead", photo: "/commiteeimages/ChaitaliN.jpg", year: "3rd Year" },
    { name: "Suhani Paliwal", post: "Publicity Lead", photo: "/commiteeimages/SuhaniP.jpg", year: "3rd Year" },
    { name: "Vedant Umap", post: "Publicity Lead", photo: "/commiteeimages/VedantU.jpg", year: "3rd Year" },
    { name: "Aditi Gupta", post: "Publicity Lead", photo: "/commiteeimages/AditiG.jpg", year: "3rd Year" },
    { name: "Viraj Yawle", post: "Media Lead", photo: "/commiteeimages/VirajY.jpg", year: "3rd Year" },
    { name: "Anjali Jaikalyani", post: "Media Lead", photo: "/commiteeimages/AnjaliJ.jpg", year: "3rd Year" },
    { name: "Roshni Chawla", post: "Media Lead", photo: "/commiteeimages/RoshniC.jpg", year: "3rd Year" },
    { name: "Ankit Lanjewar", post: "Venue and Resource Lead", photo: "/commiteeimages/AnkitL.jpg", year: "3rd Year" },
    { name: "Anshum Pal", post: "Venue and Resource Lead", photo: "/commiteeimages/AnshumP.jpg", year: "3rd Year" },
    { name: "Anurag Pathak", post: "Photography and Videography Lead", photo: "/commiteeimages/AnuragP.jpg", year: "3rd Year" },
    { name: "Chitresh Deshmukh", post: "Photography & Videography", photo: "/commiteeimages/ChitreshD.jpg", year: "3rd Year" }
  ];

  // Position hierarchy for sorting (higher number = higher priority)
  const positionHierarchy: { [key: string]: number } = {
    "President": 100,
    "Vice President": 90,
    "Secretary": 80,
    "Treasurer": 70,
    "Technical Secretary": 60,
    "Cultural Secretary": 50,
    "Sports Secretary": 40,
    "Event Manager": 30,
    "Joint Event Manager": 22,
    "Joint Secretary": 24,
    "Joint Treasurer": 23,
    "Joint Technical Secretary": 21,
    "Joint Sports Secretary": 20,
    "Joint Cultural Secretary": 19,
    "Creative Lead": 15,
    "Publicity Lead": 14,
    "Media Lead": 13,
    "Photography and Videography Lead": 12,
    "Photography & Videography": 11,
    "Venue and Resource Lead": 10
  };

  // Sort members: 4th years first, then by position hierarchy
  const sortedMembers = [...committeeMembers].sort((a, b) => {
    // First sort by year (4th year first)
    const yearA = a.year.includes('4th') ? 4 : 3;
    const yearB = b.year.includes('4th') ? 4 : 3;
    
    if (yearA !== yearB) {
      return yearB - yearA; // 4th year first
    }
    
    // Then sort by position hierarchy within same year
    const rankA = positionHierarchy[a.post] || 0;
    const rankB = positionHierarchy[b.post] || 0;
    
    return rankB - rankA; // Higher rank first
  });

  const getYearIcon = (year: string) => {
    return year.includes('4th') ? <Crown className="h-5 w-5 text-yellow-400" /> : <Award className="h-5 w-5 text-primary" />;
  };

  const getYearStyle = (year: string) => {
    return year.includes('4th') 
      ? 'border-yellow-400/30 bg-gradient-to-br from-yellow-400/10 to-yellow-600/5'
      : 'border-primary/30 bg-gradient-to-br from-primary/10 to-primary/5';
  };

  const MemberCard = ({ member }: { member: CommitteeMember }) => (
    <Card className={`glass ${getYearStyle(member.year)} hover-glow transition-all duration-300 h-full`}>
      <CardContent className="p-6 text-center">
        <div className="flex justify-center mb-4">
          {getYearIcon(member.year)}
        </div>
        
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/20">
          <img 
            src={member.photo} 
            alt={member.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        <h3 className="font-bold text-lg mb-2 text-foreground">{member.name}</h3>
        
        <div className="mb-3">
          <div className="text-sm font-semibold text-primary mb-1">{member.post}</div>
          <div className="text-xs text-muted-foreground">
            {member.year}
          </div>
        </div>
      </CardContent>
    </Card>
  );



  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Button 
              onClick={() => navigate('/team')}
              variant="ghost" 
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Technical Team</span>
            </Button>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16 relative">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-10 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8">
                <Users className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Leadership & Organization
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
                Altronix Committee
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Meet the dedicated team behind Altronix - the leaders, organizers, and coordinators who make our events and initiatives possible
              </p>
            </div>
          </div>

          {/* Committee Members */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-4">
                <Users className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold text-gradient">Committee Members</h2>
              </div>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Our dedicated team members organized by hierarchy and year, working together to make Altronix events successful
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
              {sortedMembers.map((member, index) => (
                <MemberCard key={`${member.name}-${index}`} member={member} />
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">{sortedMembers.filter(m => m.year.includes('4th')).length}</div>
              <div className="text-muted-foreground text-sm">4th Year Members</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">{sortedMembers.filter(m => m.year.includes('3rd')).length}</div>
              <div className="text-muted-foreground text-sm">3rd Year Members</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-2xl font-bold text-gradient mb-2">{sortedMembers.length}</div>
              <div className="text-muted-foreground text-sm">Total Members</div>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20 relative">
            <Card className="glass border-white/10 p-8 max-w-2xl mx-auto hover-glow">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Want to join our committee?
              </h3>
              <p className="text-muted-foreground mb-6">
                Be part of the Altronix family and contribute to organizing amazing events and initiatives.
              </p>
              <Button 
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) {
                    window.location.href = '/#contact';
                  }
                }}
                className="px-8 py-3 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold rounded-lg transition-all duration-300 glow-primary hover:scale-105"
              >
                Get In Touch
              </Button>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AltronixCommittee;