import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Calendar, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const ProPackage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button 
            variant="outline" 
            className="mb-8"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
              PRO PLAN
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Hands-Off Relaunch
            </h1>
            <p className="text-2xl text-muted-foreground mb-8">
              More robust relaunch for established professionals
            </p>
            <div className="text-5xl font-bold text-primary mb-8">£249</div>
            <Button size="lg" className="text-lg px-8 py-4 bg-foreground text-background hover:bg-foreground/90">
              Get Started with Pro
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
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">More Contacts</h3>
              <p className="text-muted-foreground">
                Handles 150 contacts with comprehensive outreach
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Advanced Tools</h3>
              <p className="text-muted-foreground">
                Adds Google My Business updates and WhatsApp Business setup
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Full Control</h3>
              <p className="text-muted-foreground">
                4 Instagram posts with full privacy controls and smart engagement tracking
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
                Established professionals who took longer breaks (3–9 months)
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-card-foreground">
                For those needing performance tracking and integration with their existing business tools
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
                If you want deeper engagement, more control, and analytics
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-card-foreground">
                Especially useful if you want to integrate booking/calendar solutions or update your online presence
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
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <p className="text-card-foreground">
                Everything in Starter, plus Google My Business and WhatsApp integration
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <p className="text-card-foreground">
                Instagram posts handled by INL via partner access, with privacy ensured
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <p className="text-card-foreground">
                Follows up with SMS nudges and smart engagement monitoring
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
                  "Hey [Client Name], [Your Name] is relaunching—new ways to book, connect, and get updates. Booking: [Link]"
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Shareable Post Example</h3>
              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-card-foreground font-semibold mb-2">Instagram:</p>
                <p className="text-card-foreground">
                  "It's official—I'm back, refreshed, and ready to deliver even more. Updated booking available! [Link] #comebackpro"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a Hands-Off Relaunch?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with the Pro Plan for £249
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            Choose Pro Plan
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProPackage;
