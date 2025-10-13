import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax and animated overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/9a5fe860-9176-4a89-956f-2880fda3493c.png"
          alt="Professional freelancer working confidently"
          className="w-full h-full object-cover parallax-bg"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 gradient-shift opacity-90"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="floating-element absolute top-1/4 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl" style={{ animationDelay: '0s' }}></div>
        <div className="floating-element absolute top-1/3 right-1/4 w-20 h-20 bg-secondary/20 rounded-full blur-xl" style={{ animationDelay: '2s' }}></div>
        <div className="floating-element absolute bottom-1/3 left-1/3 w-24 h-24 bg-primary/20 rounded-full blur-xl" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">BRB:</span>
            <span className="text-white block drop-shadow-lg">Because Your Clients Are Waiting</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl mb-8 max-w-4xl mx-auto font-light leading-relaxed drop-shadow-md">
            Helping UK freelancers confidently re-enter their markets after travel, maternity leave, or extended time away
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-4 shadow-strong hover:scale-105 transition-transform"
              onClick={() => window.location.href = "/return-journey"}
            >
              Start Your Return Journey
            </Button>
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