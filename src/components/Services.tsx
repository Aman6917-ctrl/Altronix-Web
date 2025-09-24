import { Brain, Database, Cpu, Workflow, Shield, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Custom ML models that learn and adapt to your business needs, delivering predictive insights and intelligent automation.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights with advanced analytics and AI-powered data processing.',
      features: ['Data Mining', 'Real-time Analytics', 'Data Visualization', 'Business Intelligence']
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your existing systems and workflows for maximum impact.',
      features: ['API Development', 'Cloud Integration', 'System Architecture', 'Performance Optimization']
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Automate complex business processes with intelligent workflows that adapt and improve over time.',
      features: ['Workflow Design', 'Task Automation', 'Decision Trees', 'Process Optimization']
    },
    {
      icon: Shield,
      title: 'AI Security',
      description: 'Protect your AI systems with robust security measures and compliance frameworks.',
      features: ['Model Security', 'Data Privacy', 'Compliance', 'Risk Assessment']
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Monitor and optimize your AI systems with comprehensive analytics and performance metrics.',
      features: ['Model Monitoring', 'Performance Metrics', 'A/B Testing', 'ROI Analysis']
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 mb-6">
            <Cpu className="h-4 w-4 text-primary animate-glow-pulse" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">AI Solutions</span> for Every Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From machine learning models to full-scale AI transformations, 
            we deliver comprehensive solutions that drive real business value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="glass rounded-xl p-8 hover-glow group relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Service Icon */}
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-200">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More Button */}
              <Button 
                variant="ghost" 
                className="w-full text-primary hover:bg-primary/10 font-medium"
              >
                Learn More
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how AI can drive innovation and growth in your organization.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-glow glow-primary px-8"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;