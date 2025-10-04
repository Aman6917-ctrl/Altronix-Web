import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Trophy, Award, Users, Calendar, ArrowRight, Sparkles, Target } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Achievements = () => {
  const navigate = useNavigate();

  const achievementCategories = [
    {
      id: 'branch-cup',
      title: 'Branch Cup Winners',
      description: 'Inter-branch sports competition winners across various sports categories',
      icon: Trophy,
      route: '/branch-cup-winners',
      color: 'primary',
      gradient: 'from-primary/20 to-primary/5',
      sports: ['Chess', 'Table Tennis', 'Badminton', 'Cricket', 'Football'],
      totalWinners: 45
    },
    {
      id: 'anti-ragging',
      title: 'Anti-Ragging Week',
      description: 'Creative competitions promoting awareness and student engagement',
      icon: Award,
      route: '/anti-ragging-week',
      color: 'secondary',
      gradient: 'from-secondary/20 to-secondary/5',
      competitions: ['Poster Making', 'Reel Making', 'Essay Writing'],
      totalWinners: 18
    },
    {
      id: 'technical-events',
      title: 'Technical Events',
      description: 'Winners from hackathons, coding competitions, and tech challenges',
      icon: Target,
      route: '/technical-events',
      color: 'accent',
      gradient: 'from-accent/20 to-accent/5',
      events: ['Hackathon', 'Coding Contest', 'Project Exhibition'],
      totalWinners: 24,
      comingSoon: true
    },
    {
      id: 'cultural-events',
      title: 'Cultural Events',
      description: 'Celebrating creativity through cultural competitions and performances',
      icon: Sparkles,
      route: '/cultural-events',
      color: 'primary',
      gradient: 'from-primary/10 to-secondary/10',
      events: ['Dance', 'Music', 'Drama', 'Art'],
      totalWinners: 32,
      comingSoon: true
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-20 relative">
            {/* Background decorations */}
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-10 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 hover-glow border border-primary/20">
                <Trophy className="h-5 w-5 text-primary animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Celebrating Excellence
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 hover-glow">
                Achievements
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Recognizing outstanding performances and celebrating the winners across various competitions and events
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full glow-primary"></div>
            </div>
          </div>

          {/* Achievement Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {achievementCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={category.id} 
                  className={`glass border-white/10 overflow-hidden group hover:border-primary/30 transition-all duration-300 hover-glow relative ${category.comingSoon ? 'opacity-75' : ''}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-50`} />
                  
                  {/* Coming Soon Badge */}
                  {category.comingSoon && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="px-3 py-1 bg-secondary/80 text-xs font-semibold rounded-full backdrop-blur-sm">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-br from-${category.color}/20 to-${category.color}/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-8 w-8 text-${category.color}`} />
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gradient">{category.totalWinners}+</div>
                        <div className="text-sm text-muted-foreground">Winners</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-200">
                      {category.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Category Details */}
                    <div className="mb-6">
                      {category.sports && (
                        <div className="flex flex-wrap gap-2">
                          {category.sports.map((sport) => (
                            <span key={sport} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              {sport}
                            </span>
                          ))}
                        </div>
                      )}
                      {category.competitions && (
                        <div className="flex flex-wrap gap-2">
                          {category.competitions.map((comp) => (
                            <span key={comp} className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full">
                              {comp}
                            </span>
                          ))}
                        </div>
                      )}
                      {category.events && (
                        <div className="flex flex-wrap gap-2">
                          {category.events.map((event) => (
                            <span key={event} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                              {event}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <Button 
                      onClick={() => !category.comingSoon && navigate(category.route)}
                      disabled={category.comingSoon}
                      className={`w-full bg-${category.color} hover:bg-${category.color}-glow text-${category.color}-foreground font-semibold group-hover:scale-105 transition-all duration-200 ${category.comingSoon ? 'opacity-50 cursor-not-allowed' : 'glow-primary'}`}
                    >
                      {category.comingSoon ? 'Coming Soon' : 'View Winners'}
                      {!category.comingSoon && <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-3xl font-bold text-gradient mb-2">120+</div>
              <div className="text-muted-foreground">Total Winners</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-3xl font-bold text-gradient mb-2">15+</div>
              <div className="text-muted-foreground">Event Categories</div>
            </Card>
            <Card className="glass border-white/10 p-6 text-center hover-glow">
              <div className="text-3xl font-bold text-gradient mb-2">5+</div>
              <div className="text-muted-foreground">Competition Seasons</div>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse" />
            
            <Card className="glass border-white/10 p-8 md:p-12 max-w-3xl mx-auto hover-glow relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Want to be featured here?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Participate in our upcoming events and competitions to showcase your talents and join our winners' community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => {
                    window.location.href = '/#contact';
                  }}
                  className="px-8 py-4 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold rounded-lg transition-all duration-300 glow-primary hover:scale-105"
                >
                  Join Our Team
                </Button>
                <Button 
                  onClick={() => {
                    window.location.href = '/#events';
                  }}
                  variant="outline"
                  className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:glow-primary"
                >
                  Get Updates
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Achievements;