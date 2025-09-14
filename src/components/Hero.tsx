import { ArrowRight, Sparkles, Bot, Zap, Brain, Cpu, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
    }> = [];

    const colors = ['#0EA5E9', '#8B5CF6', '#06B6D4', '#A855F7'];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.opacity;
        ctx.fill();
      });

      // Draw connections
      particles.forEach((particle, index) => {
        particles.slice(index + 1).forEach(otherParticle => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) + 
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = '#0EA5E9';
            ctx.globalAlpha = (100 - distance) / 500;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-30"
      />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      
      {/* Floating Orbs with Enhanced Animation */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Neural Network Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <path 
            d="M 0,400 Q 300,200 600,300 T 1200,250" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-[dash_4s_ease-in-out_infinite]"
            strokeDasharray="10,5"
          />
          <path 
            d="M 1200,600 Q 900,400 600,500 T 0,450" 
            stroke="url(#lineGradient)" 
            strokeWidth="2" 
            fill="none"
            className="animate-[dash_6s_ease-in-out_infinite]"
            strokeDasharray="8,4"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Enhanced Badge */}
        <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 mb-8 hover-glow group border border-primary/20">
          <div className="relative">
            <Brain className="h-5 w-5 text-primary animate-glow-pulse" />
            <div className="absolute inset-0 h-5 w-5 text-primary opacity-50 animate-glow-pulse blur-sm" />
          </div>
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to Altronix - AI & ML Hub at RBU
          </span>
          <div className="w-2 h-2 rounded-full bg-primary animate-glow-pulse" />
        </div>

        {/* Main Headline with Advanced Typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          <span className="block mb-4">Welcome to</span>
          <span className="block text-gradient animate-gradient-x bg-gradient-to-r from-primary via-secondary to-accent bg-[length:200%_auto] mb-4">
            Altronix
          </span>
          <span className="block text-2xl md:text-4xl lg:text-5xl text-muted-foreground font-bold">
            The AI and Machine Learning hub at RBU driving innovation collaboration and excellence in {' '}
            <span className="text-gradient font-semibold underline decoration-primary/50">
              Technology
            </span>
          </span>
        </h1>

        {/* Enhanced Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
          Join us in shaping the future of AI and Machine Learning through 
          collaboration and innovation! Empowering students, faculty, and industry 
          professionals to tackle complex challenges in technology.
        </p>

        {/* Enhanced CTA Button */}
       

        {/* Advanced Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass rounded-2xl p-8 hover-glow group relative overflow-hidden border border-primary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Collaborative Culture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Foster seamless collaboration between students, faculty, and industry professionals 
                to create innovative solutions.
              </p>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8 hover-glow group relative overflow-hidden border border-secondary/10">
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Network className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Community Engagement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building a vibrant community where knowledge sharing and collective 
                problem-solving drive technological advancement.
              </p>
            </div>
          </div>
          
          <div className="glass rounded-2xl p-8 hover-glow group relative overflow-hidden border border-accent/10">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Cpu className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gradient">Continuous Learning</h3>
              <p className="text-muted-foreground leading-relaxed">
                Embrace lifelong learning through workshops, hackathons, and mentorship 
                programs that keep you at the forefront of technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
