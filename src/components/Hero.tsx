import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-backpack.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground mb-4">
              FREELANCE RE-ENGAGEMENT SERVICES
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
                Welcome to the Comeback Revolution. Because you never <em className="italic font-bold">really</em> left.
              </h1>
              
              <p className="text-lg sm:text-xl font-semibold leading-relaxed max-w-2xl mt-6">
                Helping freelancers, creatives, and parents coming back from maternity leave relaunch with ease, reconnect with their world, and get back to doing what they love — all in one place.
              </p>

              <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-foreground/80">
                Built for freelancers to enjoy being free.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="text-base px-8 h-12 bg-foreground text-background hover:bg-foreground/90 font-medium"
                onClick={() => window.location.href = "/return-journey"}
              >
                Start Your Comeback
              </Button>
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative lg:block">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-border">
              <img 
                src={heroImage}
                alt="Travel backpack symbolizing return from break or sabbatical"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
