import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

// Placeholder images - you'll need to add actual event photos to the public folder
const eventData = {
  safar: {
    title: "Safar",
    description: "Journey through innovation and technology",
    images: [
      { src: "/placeholder.svg", alt: "Safar Event 1" },
      { src: "/placeholder.svg", alt: "Safar Event 2" },
      { src: "/placeholder.svg", alt: "Safar Event 3" },
      { src: "/placeholder.svg", alt: "Safar Event 4" },
      { src: "/placeholder.svg", alt: "Safar Event 5" },
    ]
  },
  xpression: {
    title: "Xpression",
    description: "Unleashing creativity and artistic expression",
    images: [
      { src: "/placeholder.svg", alt: "Xpression Event 1" },
      { src: "/placeholder.svg", alt: "Xpression Event 2" },
      { src: "/placeholder.svg", alt: "Xpression Event 3" },
      { src: "/placeholder.svg", alt: "Xpression Event 4" },
      { src: "/placeholder.svg", alt: "Xpression Event 5" },
    ]
  },
  womensDay: {
    title: "Women's Day 2024",
    description: "Celebrating the power and achievements of women in tech",
    images: [
      { src: "/placeholder.svg", alt: "Women's Day 1" },
      { src: "/placeholder.svg", alt: "Women's Day 2" },
      { src: "/placeholder.svg", alt: "Women's Day 3" },
      { src: "/placeholder.svg", alt: "Women's Day 4" },
      { src: "/placeholder.svg", alt: "Women's Day 5" },
    ]
  }
};

const EventGallery = ({ title, description, images }: { title: string; description: string; images: Array<{ src: string; alt: string }> }) => (
  <div className="mb-20 relative">
    {/* Background decoration */}
    <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-pulse" />
    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
    
    <div className="text-center mb-12 relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 hover-glow">{title}</h2>
      <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">{description}</p>
      <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full"></div>
    </div>
    
    <Carousel className="w-full max-w-6xl mx-auto relative z-10" opts={{ align: "start", loop: true }}>
      <CarouselContent className="-ml-2 md:-ml-4">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
            <Card className="glass border-white/10 overflow-hidden group hover:border-primary/30 hover-glow transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <CardContent className="p-0 relative">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="glass border-white/10 hover:border-primary/30 text-foreground hover:text-primary hover:glow-primary -left-12 md:-left-16 transition-all duration-300" />
      <CarouselNext className="glass border-white/10 hover:border-primary/30 text-foreground hover:text-primary hover:glow-primary -right-12 md:-right-16 transition-all duration-300" />
    </Carousel>
  </div>
);

const Gallery = () => {
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
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Memories in Motion
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gradient mb-6 hover-glow">
                Event Gallery
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Capturing moments of innovation, creativity, and celebration from our memorable events
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full glow-primary"></div>
            </div>
          </div>

          {/* Event Galleries */}
          <div className="space-y-20">
            <EventGallery 
              title={eventData.safar.title}
              description={eventData.safar.description}
              images={eventData.safar.images}
            />
            
            <EventGallery 
              title={eventData.xpression.title}
              description={eventData.xpression.description}
              images={eventData.xpression.images}
            />
            
            <EventGallery 
              title={eventData.womensDay.title}
              description={eventData.womensDay.description}
              images={eventData.womensDay.images}
            />
          </div>

          {/* CTA Section */}
          <div className="text-center mt-24 relative">
            {/* Background decoration */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl animate-pulse" />
            
            <Card className="glass border-white/10 p-8 md:p-12 max-w-3xl mx-auto hover-glow relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gradient mb-6">
                Want to be part of our next event?
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Stay connected with Altronix and never miss our exciting events and workshops. Join our community of innovators and creators.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      window.location.href = '/#contact';
                    }
                  }}
                  className="px-8 py-4 bg-primary hover:bg-primary-glow text-primary-foreground font-semibold rounded-lg transition-all duration-300 glow-primary hover:scale-105"
                >
                  Get In Touch
                </button>
                <button 
                  onClick={() => window.location.href = '/team'}
                  className="px-8 py-4 border border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:glow-primary"
                >
                  Meet Our Team
                </button>
              </div>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;