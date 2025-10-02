import { CheckCircle, Users, BookOpen, TrendingUp, Brain, Network, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import download from '/download.png';

const Vision = () => {
  return (
    <section id="vision" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl lg:text-6xl font-bold mb-8">
              <span className="block text-foreground">Our Vision and</span>
              <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Mission
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              We promote synergy and knowledge-sharing among students and faculty, 
              empowering teams to tackle complex challenges in technology.
            </p>

            {/* Enhanced Feature List */}
            <div className="space-y-8">
              <div className="group">
                <div className="flex items-start space-x-4 p-6 glass rounded-2xl hover-glow border border-primary/10">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gradient">Collaborative Culture</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We foster a culture where students, faculty, and industry professionals 
                      collaborate seamlessly. By promoting teamwork and collective problem-solving, 
                      we aim to create an environment where innovation thrives and complex 
                      technological challenges are tackled together.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 glass rounded-2xl hover-glow border border-secondary/10">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Users className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gradient">Community Engagement</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Building a vibrant community that extends beyond traditional boundaries, 
                      connecting academia with industry to drive meaningful technological advancement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start space-x-4 p-6 glass rounded-2xl hover-glow border border-accent/10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3 text-gradient">Continuous Learning</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Embracing lifelong learning through workshops, seminars, and hands-on 
                      experiences that keep our community at the forefront of technological evolution.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Content - Enhanced Orbital Diagram */}
          <div className="relative flex items-center justify-center h-[600px]">
            {/* Central Hub */}
            <div className="relative z-20 w-32 h-32 glass rounded-full flex items-center justify-center border-2 border-primary glow-primary">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                <img src={download} alt="Central Hub" className="h-12 w-auto object-contain" />
              </div>
            </div>

            {/* Orbital Rings */}
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
            <div className="absolute inset-8 border border-secondary/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

            {/* Orbiting Icons */}
            <div className="absolute inset-0 animate-orbital">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center glow-primary">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 animate-orbital" style={{ animationDelay: '-5s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center glow-secondary">
                  <Network className="h-6 w-6 text-secondary" />
                </div>
              </div>
            </div>

.
            <div className="absolute inset-0 animate-orbital" style={{ animationDelay: '-10s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center glow-primary">
                  <Target className="h-6 w-6 text-accent" />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 animate-orbital" style={{ animationDelay: '-15s' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="w-12 h-12 glass rounded-xl flex items-center justify-center glow-secondary">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Additional floating elements */}
            <div className="absolute top-16 right-8 w-8 h-8 glass rounded-lg flex items-center justify-center animate-float">
              <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse" />
            </div>
            <div className="absolute bottom-20 left-12 w-10 h-10 glass rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-4 h-4 bg-secondary rounded-full animate-glow-pulse" />
            </div>
            <div className="absolute top-32 left-8 w-6 h-6 glass rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
              <div className="w-2 h-2 bg-accent rounded-full animate-glow-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
