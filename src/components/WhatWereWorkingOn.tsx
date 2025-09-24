import { Presentation, Code2, Users, GitBranch, Lightbulb, Rocket } from 'lucide-react';

const WhatWereWorkingOn = () => {
  const initiatives = [
    {
      title: 'Workshops',
      description: 'Interactive learning sessions covering cutting-edge AI technologies, from fundamentals to advanced implementations.',
      icon: Presentation,
      color: 'primary',
      position: 'top-left'
    },
    {
      title: 'Hackathons',
      description: 'Collaborative coding events where teams build innovative AI solutions to real-world challenges.',
      icon: Code2,
      color: 'secondary',
      position: 'top-right'
    },
    {
      title: 'Mentorship',
      description: 'Connecting experienced professionals with emerging talent to foster growth and knowledge transfer.',
      icon: Users,
      color: 'accent',
      position: 'bottom-left'
    },
    {
      title: 'Collaboration',
      description: 'Building bridges between academia and industry to create impactful technological solutions.',
      icon: GitBranch,
      color: 'primary',
      position: 'bottom-right'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-glass-card/30 to-background" />
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 hover-glow border border-primary/20">
            <Lightbulb className="h-5 w-5 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Our Current Focus
            </span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              What we're working on
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Driving innovation through diverse initiatives that connect theory with practice, 
            fostering a collaborative ecosystem for AI advancement.
          </p>
        </div>

        {/* Initiatives Grid with 3D Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {initiatives.map((initiative, index) => (
            <div 
              key={initiative.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* 3D Card Container */}
              <div className="relative perspective-1000">
                <div className="glass rounded-3xl p-10 hover-glow border border-primary/10 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-y-5">
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon with 3D Effect */}
                    <div className="relative mb-8">
                      <div className={`w-20 h-20 rounded-2xl bg-${initiative.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                        <initiative.icon className={`h-10 w-10 text-${initiative.color}`} />
                      </div>
                      {/* Shadow/Depth Effect */}
                      <div className={`absolute inset-0 w-20 h-20 rounded-2xl bg-${initiative.color}/20 blur-md transform translate-x-2 translate-y-2 -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-300`} />
                    </div>

                    {/* Text Content */}
                    <h3 className="text-3xl font-bold mb-6 text-gradient">{initiative.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {initiative.description}
                    </p>

                    {/* Decorative Elements */}
                    <div className="absolute top-6 right-6 flex space-x-2">
                      <div className="w-3 h-3 bg-primary/50 rounded-full animate-glow-pulse" />
                      <div className="w-2 h-2 bg-secondary/50 rounded-full animate-glow-pulse" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Floating Accent Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 glass rounded-lg flex items-center justify-center animate-float opacity-70">
                <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 glass rounded-lg flex items-center justify-center animate-float opacity-70" style={{ animationDelay: '1s' }}>
                <div className="w-2 h-2 bg-secondary rounded-full animate-glow-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-20">
          <div className="glass rounded-3xl p-12 max-w-4xl mx-auto border border-primary/10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
            
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-gradient">Join Our Mission</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Be part of a transformative journey that's reshaping the future of AI and machine learning. 
                Together, we're building tomorrow's technology today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <div className="px-6 py-3 glass rounded-xl border border-primary/20">
                  <span className="text-lg font-semibold text-primary">30+</span>
                  <span className="text-muted-foreground ml-2">Active Members</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWereWorkingOn;