import { Users, Award, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50+', label: 'AI Projects Delivered', icon: Target },
    { number: '98%', label: 'Client Satisfaction', icon: Award },
    { number: '25+', label: 'Expert Team Members', icon: Users },
    { number: '5+', label: 'Years of Innovation', icon: Lightbulb }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI, constantly exploring new technologies and methodologies.'
    },
    {
      title: 'Client-Centric',
      description: 'Your success is our mission. We work closely with you to understand your unique challenges and goals.'
    },
    {
      title: 'Ethical AI',
      description: 'We believe in responsible AI development that benefits humanity while respecting privacy and fairness.'
    },
    {
      title: 'Continuous Learning',
      description: 'In the rapidly evolving AI landscape, we stay ahead by continuously learning and adapting.'
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-primary/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Users className="h-4 w-4 text-secondary animate-glow-pulse" />
            <span className="text-sm font-medium">About Altronixx</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pioneering the Future of <span className="text-gradient">AI Innovation</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of AI experts, engineers, and visionaries dedicated to transforming 
            businesses through intelligent technology solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="glass rounded-xl p-6 text-center hover-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="h-8 w-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Built for the AI-First Future
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded by AI researchers and industry veterans, Altronixx emerged from a simple belief: 
              artificial intelligence should empower businesses to achieve extraordinary outcomes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our multidisciplinary team combines deep technical expertise with real-world business 
              acumen, ensuring that every solution we deliver drives measurable impact.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-foreground font-medium">Cutting-edge research and development</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                <span className="text-foreground font-medium">Industry-leading expertise and knowledge</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                <span className="text-foreground font-medium">Proven track record of success</span>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="glass rounded-lg p-6 hover-glow group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors duration-200">
                  {value.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="glass rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Our <span className="text-gradient">Mission</span>
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            To democratize artificial intelligence by making advanced AI capabilities accessible 
            to businesses of all sizes, enabling them to innovate, compete, and thrive in an 
            increasingly digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;