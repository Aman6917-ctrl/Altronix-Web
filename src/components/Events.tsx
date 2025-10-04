import { Calendar, Trophy, Brain, Code, ArrowRight, Sparkles, Zap, Target, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Events = () => {
  const events = [
    {
      title: 'Hirewire',
      subtitle: 'The Ultimate AI Creativity Challenge!',
      description:  'HireWire was a placement simulator conducted by the AIML branch. The event included resume building sessions, mock placement processes, and senior guidance. Students experienced multiple real-world hiring rounds such as coding, group discussion, technical, and HR. HireWire helped participants gain practical exposure, confidence, and readiness for placements.' ,
      icon: Sparkles,
      color: 'primary',
      status: 'completed',
      gradient: 'from-primary/20 to-primary/5'
    },
    {
      title: 'AIPL',
      subtitle: 'From Auction Tables to Trophy Tales - That\'s AIPL!',
      description: 'AIPL (Artificial Intelligence Premier League) is an exciting cricket tournament organized by the AIML branch. Experience the thrill of competitive cricket with player auctions, team formations, and championship matches. Register now to showcase your cricket skills and be part of this premier sporting event where talent meets teamwork on the field.',
      icon: Trophy,
      color: 'accent',
      status: 'register',
      gradient: 'from-accent/20 to-accent/5'
    },
    {
      title: 'Safar',
      subtitle: 'Play. Compete. Celebrate.',
      description: 'Safar is a flagship sports and games event organized by the AIML branch. It features a wide range of outdoor sports like cricket, football, and athletics, along with indoor games such as chess, carrom, and e-sports. The event is designed to encourage teamwork, competitive spirit, and active participation among students. Safar creates an engaging platform where talent, energy, and camaraderie come together in a festive atmosphere.',
      icon: Waves,
      color: 'secondary',
      status: 'coming-soon',
      gradient: 'from-secondary/20 to-secondary/5'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 hover-glow border border-primary/20">
            <Calendar className="h-5 w-5 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Join Our Community Events
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Our Events
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our cutting-edge competitions and collaborative learning experiences 
            that push the boundaries of AI and machine learning innovation.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div 
              key={event.title}
              className="glass rounded-3xl p-8 hover-glow group relative overflow-hidden border border-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Event Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-${event.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <event.icon className={`h-8 w-8 text-${event.color}`} />
                </div>

                {/* Event Content */}
                <h3 className="text-2xl font-bold mb-3 text-gradient">{event.title}</h3>
                <h4 className="text-lg font-semibold mb-4 text-muted-foreground">{event.subtitle}</h4>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {event.description}
                </p>

                {/* Action Button */}
                {event.status === 'register' ? (
                  <Link to={event.title === 'AIPL' ? '/aipl-registration' : '/hirewire-registration'} className="block">
                    <Button
                      className="w-full bg-primary hover:bg-primary-glow text-primary-foreground rounded-xl py-6 text-lg font-semibold group/btn"
                    >
                      REGISTER NOW
                      <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Button>
                  </Link>
                ) : event.status === 'completed' ? (
                  <Button
                    className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6 text-lg font-semibold group/btn cursor-default"
                    disabled
                  >
                    EVENT COMPLETED ✓
                  </Button>
                ) : (
                  <Button
                    className="w-full bg-muted hover:bg-muted/80 text-foreground rounded-xl py-6 text-lg font-semibold group/btn"
                    disabled
                  >
                    COMING SOON
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </Button>
                )}
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-primary/50 rounded-full animate-glow-pulse" />
              <div className="absolute bottom-8 left-4 w-2 h-2 bg-secondary/50 rounded-full animate-glow-pulse" style={{ animationDelay: '1s' }} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Events;