import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Crown, TrendingUp, Sparkles, Calendar } from "lucide-react";
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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="outline" 
            className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center max-w-4xl mx-auto text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-6">
              <Crown className="w-4 h-4" />
              Concierge
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Full-Service Relaunch
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              Complete campaign management for professionals who want maximum impact
            </p>
            <div className="text-5xl font-bold mb-8">From £499</div>
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Why It's Good */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Why It's Good
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Full-Service</h3>
              <p className="text-muted-foreground">
                Complete relaunch management starting at £499+
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Pre & Post Support</h3>
              <p className="text-muted-foreground">
                Includes pre- and post-return management: weekly IG posts, stories, DM/comment management, daily engagement during launch week
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Premium Add-Ons</h3>
              <p className="text-muted-foreground">
                Extra services available: photography, videography, paid ads, multi-platform (TikTok, LinkedIn) management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Who It's For
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-card-foreground">
                Those coming back from long sabbaticals (6–12+ months)
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-card-foreground">
                Professionals needing hands-off full social management (content, engagement, reporting)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* When It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            When It Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-card-foreground">
                If you want maximum visibility, hands-free social engagement, and cross-platform impact
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-card-foreground">
                Suitable when you need regular reporting, booking handling, or want to make a big relaunch splash
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <p className="text-card-foreground">
                Full campaign setup before you even return, with daily posting, engagement, and DM management
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <p className="text-card-foreground">
                Ongoing reporting and calendar integration, plus direct booking and customer communications managed for you
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <p className="text-card-foreground">
                Optional premium content creation including professional photography and videography
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Template Example */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Template Example
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Campaign Message</h3>
              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-card-foreground">
                  "I'm officially back! Excited to reconnect and help with all your [Your Service] needs. Weekly updates and booking links incoming: [Link]"
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Shareable Post Example</h3>
              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-card-foreground font-semibold mb-2">Instagram/Facebook:</p>
                <p className="text-card-foreground">
                  "Returning after my sabbatical—weekly stories and launches ahead! Join me for updates and exclusive bookings. [Link] #neverleft"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Ready for a Full-Service Relaunch?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with the Concierge Plan from £499
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            Contact Us About Concierge
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConciergePackage;
