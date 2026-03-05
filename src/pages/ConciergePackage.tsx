import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Crown, CalendarCheck, Users, BarChart3, Sparkles, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const ConciergePackage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Concierge — I Never Left";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center max-w-3xl mx-auto text-white">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Crown className="w-4 h-4" />
              Concierge
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Full-Service Relaunch
            </h1>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We handle everything — before you leave, while you're away, and when you return. You just show up.
            </p>
            <div className="text-5xl font-bold mb-8">From £499</div>
            <a href="mailto:hello@ineverleft.co.uk">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            What's included
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: CalendarCheck,
                title: "Full campaign setup",
                description: "Everything planned and scheduled before you even return. Daily posting, engagement, and DM management handled for you.",
              },
              {
                icon: Users,
                title: "Pre & post-return support",
                description: "We're with you from before you leave to months after your return. Weekly IG posts, stories, and launch week daily engagement.",
              },
              {
                icon: BarChart3,
                title: "Booking & reporting",
                description: "Ongoing calendar integration, direct booking management, and monthly performance reports so you always know what's working.",
              },
              {
                icon: Sparkles,
                title: "Premium add-ons",
                description: "Optional photography, videography, paid ads, and multi-platform management across TikTok and LinkedIn.",
              },
            ].map((item) => (
              <Card key={item.title} className="p-8 border-border">
                <item.icon className="w-8 h-8 text-primary mb-5" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            Who It's For
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-border">
              <Users className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You've been away 6–12+ months and need a serious, managed relaunch — not just a few emails.
              </p>
            </Card>
            <Card className="p-8 border-border">
              <Zap className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You want everything handled. Content, engagement, bookings, reporting — all off your plate.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Messages */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            The kind of message that makes people stop scrolling
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <blockquote className="bg-card p-10 rounded-xl border-l-4 border-primary shadow-soft">
              <p className="text-lg text-card-foreground italic leading-relaxed">
                "I'm officially back — and I'm ready to help with all your [Your Service] needs. Weekly updates and booking links incoming: [Link]"
              </p>
            </blockquote>
            <blockquote className="bg-card p-10 rounded-xl border-l-4 border-primary shadow-soft">
              <p className="text-sm font-semibold text-muted-foreground mb-2">Instagram/Facebook</p>
              <p className="text-lg text-card-foreground italic leading-relaxed">
                "Returning after my sabbatical — weekly stories and exclusive booking access ahead. Come with me. [Link] #neverleft"
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to make a big comeback?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Concierge is our most powerful plan — priced from £499 and fully customised to your needs.
          </p>
          <a href="mailto:hello@ineverleft.co.uk">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConciergePackage;
