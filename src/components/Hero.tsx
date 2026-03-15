import INLLogo from "@/components/INLLogo";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const phases = [
  {
    id: "setup",
    label: "Campaign created",
    duration: 2500,
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Setting up</span>
        </div>
        <div className="bg-card/80 border border-border rounded-xl px-4 py-3">
          <p className="text-xs text-muted-foreground mb-1">Client</p>
          <p className="text-sm font-semibold text-foreground">Marcus — Barber</p>
          <p className="text-xs text-muted-foreground mt-2">100 contacts imported. Campaign scheduled. Messages approved.</p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-px flex-1 bg-primary/20" />
          <span className="text-xs text-primary font-medium">✦ I Never Left</span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
      </div>
    ),
  },
  {
    id: "leave",
    label: "Before you leave",
    duration: 2500,
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Message 1 — Sent</span>
        </div>
        <div className="bg-card/80 border border-border rounded-xl px-4 py-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Email</span>
            <span className="text-xs text-muted-foreground">100 contacts</span>
            <span className="text-xs text-primary ml-auto">✓ Delivered</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed italic">
            "Hey Jamie — Marcus here. I'm taking a well-earned break and will be back in the chair from 1st October. I'll be in touch closer to the time..."
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-px flex-1 bg-primary/20" />
          <span className="text-xs text-primary font-medium">✦ I Never Left</span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
      </div>
    ),
  },
  {
    id: "warmth",
    label: "Months pass",
    duration: 2500,
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Keeping warm</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["Month 1", "Month 3", "Month 6"].map((m) => (
            <div key={m} className="bg-card/80 border border-border rounded-xl px-3 py-3 text-center">
              <div className="text-xs text-muted-foreground mb-1">{m}</div>
              <div className="text-xs font-semibold text-primary">Post sent</div>
              <div className="text-xs text-primary mt-1">✓</div>
            </div>
          ))}
        </div>
        <div className="bg-card/80 border border-primary/20 rounded-xl px-4 py-2">
          <p className="text-xs text-muted-foreground text-center">Audience staying warm. No effort from Marcus.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-px flex-1 bg-primary/20" />
          <span className="text-xs text-primary font-medium">✦ I Never Left</span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
      </div>
    ),
  },
  {
    id: "countdown",
    label: "4 weeks to go",
    duration: 2500,
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Message 2 — Sent</span>
        </div>
        <div className="bg-card/80 border border-border rounded-xl px-4 py-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">SMS</span>
            <span className="text-xs text-muted-foreground">100 contacts</span>
            <span className="text-xs text-primary ml-auto">✓ Delivered</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed italic">
            "Hey Jamie — Marcus here. Back in the chair in 4 weeks. First slots are already going — I wanted you to know first: [Link]"
          </p>
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="h-px flex-1 bg-primary/20" />
          <span className="text-xs text-primary font-medium">✦ I Never Left</span>
          <div className="h-px flex-1 bg-primary/20" />
        </div>
      </div>
    ),
  },
  {
    id: "return",
    label: "Return day",
    duration: 2500,
    content: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold text-primary uppercase tracking-widest">Message 3 — Fired</span>
        </div>
        <div className="bg-card/80 border border-border rounded-xl px-4 py-3">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">Email + SMS</span>
            <span className="text-xs text-muted-foreground">100 contacts</span>
            <span className="text-xs text-primary ml-auto">✓ Delivered</span>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed italic">
            "Hey Jamie — I'm back. First slots are live right now. You've always been one of my regulars — grab yours here: [Link]"
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-primary/10 border border-primary/20 rounded-xl px-3 py-2 text-center">
            <div className="text-xs font-bold text-primary">12</div>
            <div className="text-xs text-muted-foreground">Bookings</div>
          </div>
          <div className="bg-primary/10 border border-primary/20 rounded-xl px-3 py-2 text-center">
            <div className="text-xs font-bold text-primary">94%</div>
            <div className="text-xs text-muted-foreground">Delivered</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "never-left",
    label: "Welcome back",
    duration: 3000,
    content: (
      <div className="flex flex-col items-center justify-center gap-4 py-4">
        <div className="text-4xl font-bold text-primary animate-pulse">✦</div>
        <div className="text-center">
          <p className="text-lg font-bold text-foreground leading-tight">Welcome to the</p>
          <p className="text-lg font-bold text-primary leading-tight">Comeback Revolution.</p>
        </div>
        <p className="text-xs text-muted-foreground text-center max-w-48 leading-relaxed">
          Marcus never really left. Neither did his clients.
        </p>
        <div className="flex items-center gap-2 mt-2">
          <div className="h-px w-12 bg-primary/30" />
          <span className="text-xs text-primary font-semibold tracking-widest uppercase">I Never Left</span>
          <div className="h-px w-12 bg-primary/30" />
        </div>
      </div>
    ),
  },
];

const Hero = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const advance = () => {
      setAnimating(false);
      setTimeout(() => {
        setCurrentPhase((prev) => (prev + 1) % phases.length);
        setAnimating(true);
      }, 400);
    };

    const timer = setTimeout(advance, phases[currentPhase].duration);
    return () => clearTimeout(timer);
  }, [currentPhase]);

  const phase = phases[currentPhase];

  return (
    <section className="relative flex items-center bg-background overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left: Text Content */}
          <div className="space-y-8 text-center lg:text-left">

            {/* Logo + wordmark */}
            <div className="flex items-center gap-3 mb-2">
              <INLLogo
                variant="dark"
                size={40}
                onPulse={(intensity) => {
                  const el = document.getElementById("inl-wordmark");
                  if (el) {
                    el.style.transform = `scale(${1 + intensity * 0.08})`;
                    el.style.opacity = String(0.7 + intensity * 0.3);
                    el.style.color = intensity > 0.3
                      ? `hsl(${263 - intensity * 10}, ${70 + intensity * 20}%, ${70 + intensity * 15}%)`
                      : "";
                  }
                }}
              />
              <span
                id="inl-wordmark"
                style={{ transition: "transform 0.05s ease, opacity 0.05s ease, color 0.05s ease", transformOrigin: "left center" }}
                className="text-lg font-bold tracking-tight text-foreground"
              >
                I Never Left
              </span>
            </div>

            {/* Positioning line */}
            <div className="space-y-6">
  <div>
    <span className="text-xs font-semibold text-primary uppercase tracking-widest">
      The only UK service built solely for freelancer re-engagement
    </span>
  </div>
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
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 font-medium"
                onClick={() => {
                  const a = document.createElement("a");
                  a.href = "/I-Never-Left-Info-Sheet-v2.pdf";
                  a.download = "I-Never-Left-Info-Sheet.pdf";
                  a.click();
                }}
              >
                Download Info Pack
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 h-12 font-medium"
                onClick={() => {
                  const el = document.getElementById("services");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Plans & Pricing
              </Button>
            </div>
          </div>

          {/* Right: Animated Journey */}
          <div className="relative lg:block">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 via-background to-background border border-primary/20 shadow-2xl p-6 flex flex-col justify-between">
              <div className="flex items-center gap-1.5 mb-4">
                {phases.map((p, i) => (
                  <div
                    key={p.id}
                    className="h-1 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor: i === currentPhase ? "hsl(var(--primary))" : "hsl(var(--primary) / 0.2)",
                      width: i === currentPhase ? "24px" : "6px",
                    }}
                  />
                ))}
                <span className="ml-auto text-xs text-muted-foreground">{phase.label}</span>
              </div>
              <div
                className="flex-1 flex flex-col justify-center"
                style={{
                  opacity: animating ? 1 : 0,
                  transform: animating ? "translateY(0)" : "translateY(8px)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                }}
              >
                {phase.content}
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
```

One change — the positioning line now sits cleanly between the logo/wordmark and the main h1:
```
[INL logo]  I Never Left        ← animated logo + wordmark
THE ONLY UK SERVICE BUILT SOLELY FOR FREELANCER RE-ENGAGEMENT   ← new line
Welcome to the Comeback Revolution...   ← h1