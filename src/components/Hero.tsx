import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    { name: "Sarah M.", quote: "Back booking clients within 2 weeks!" },
    { name: "James K.", quote: "They handled everything - I just showed up." },
    { name: "Emma L.", quote: "My comeback felt effortless and professional." }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-light to-secondary">
      {/* Floating elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl" style={{ animationDelay: '0s' }}></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-20 h-20 bg-white/20 rounded-full blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element absolute bottom-1/3 left-1/3 w-24 h-24 bg-white/15 rounded-full blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content - Desktop: side-by-side, Mobile: stacked */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-white space-y-8 text-center lg:text-left">
            <div className="animate-fade-in space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                I Never Left:
                <span className="block mt-2">Relaunch Your Freelance Career</span>
              </h1>
              
              <p className="text-xl sm:text-2xl font-light leading-relaxed text-white/90">
                Return stronger. We reconnect you with clients and reboot your business after any break.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up">
              <Button 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-6 font-bold shadow-strong hover:scale-105 transition-transform rounded-full"
                onClick={() => window.location.href = "/return-journey"}
              >
                Start Your Comeback
              </Button>
            </div>

            {/* Testimonial Carousel */}
            <div className="mt-8">
              <Carousel
                opts={{ loop: true }}
                plugins={[
                  Autoplay({ delay: 3000 })
                ]}
                className="w-full max-w-lg mx-auto lg:mx-0"
              >
                <CarouselContent>
                  {testimonials.map((testimonial, index) => (
                    <CarouselItem key={index}>
                      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                        <div className="flex gap-1 mb-3 justify-center lg:justify-start">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <Quote className="w-8 h-8 text-white/40 mb-2" />
                        <p className="text-lg text-white/90 mb-2">"{testimonial.quote}"</p>
                        <p className="text-sm text-white/70 font-semibold">— {testimonial.name}</p>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-strong">
              <img 
                src="/lovable-uploads/9a5fe860-9176-4a89-956f-2880fda3493c.png"
                alt="Confident freelancer stepping into the spotlight"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full blur-2xl opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;