import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const messages = [
  {
    name: "Marcus",
    role: "Barber",
    initial: "M",
    text: "Hey Jamie, it's Marcus — I'm back in the chair from 1st October. First slots are already going — grab yours here:",
    type: "SMS",
    delay: 0,
  },
  {
    name: "Priya",
    role: "Designer",
    initial: "P",
    text: "Hi Sarah, it's Priya — I'm officially back after maternity leave and ready to take on new projects from November.",
    type: "Email",
    delay: 2000,
  },
  {
    name: "James",
    role: "Chiropractor",
    initial: "J",
    text: "Hi Tom, it's James — I'm back in the clinic from 3rd November. Let's get you booked in:",
    type: "SMS",
    delay: 4000,
  },
];

const Hero = () => {
  const [visible, setVisible] = useState([false, false, false]);

  useEffect(() => {
    messages.forEach((msg, i) => {
      setTimeout(() => {
        setVisible((prev) => {
          const next = [...prev];
          next[i] = true;
          return next;
        });
      }, msg.delay);
    });
  }, []);

  return (
    <section className="relative flex items-center bg-background overflow-hidden">
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

          {/* Right: Message Mock */}
          <div className="relative lg:block">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background border border-primary/20 shadow-2xl p-6 flex flex-col justify-center gap-4">

              {/* Header */}
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-semibold text-primary uppercase tracking-widest">Campaign live</span>
              </div>

              {/* Message Cards */}
              {messages.map((msg, i) => (
                <div
                  key={msg.name}
                  className="transition-all duration-700 ease-out"
                  style={{
                    opacity: visible[i] ? 1 : 0,
                    transform: visible[i] ? "translateY(0)" : "translateY(12px)",
                  }}
                >
                  <div className="flex items-start gap-3 bg-card/80 backdrop-blur rounded-xl border border-border px-4 py-3">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-primary font-bold text-xs">{msg.initial}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-semibold text-foreground">{msg.name}</span>
                        <span className="text-xs text-muted-foreground">{msg.role}</span>
                        <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium shrink-0">{msg.type}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{msg.text}</p>
                    </div>
                    <div className="shrink-0 mt-1">
                      <span className="text-xs text-primary/60">✓</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Footer */}
              <div className="mt-2 flex items-center gap-2">
                <div className="h-px flex-1 bg-primary/10" />
                <span className="text-xs text-muted-foreground">3 messages delivered</span>
                <div className="h-px flex-1 bg-primary/10" />
              </div>

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