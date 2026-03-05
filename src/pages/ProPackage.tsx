import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Users, Globe, Instagram, BarChart3, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const ProPackage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Pro — I Never Left";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" className="mb-8" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
              Pro
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Hands-Off Relaunch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              For established professionals who want a more powerful comeback — more contacts, more channels, more control.
            </p>
            <div className="text-5xl font-bold text-primary mb-8">£249</div>
            <Button size="lg" className="text-lg px-8 py-4 bg-foreground text-background hover:bg-foreground/90">
              Get Started — £249
            </Button>
          </div>
        </div>
      </section>

      {/* Everything in Starter, plus: */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            Everything in Starter, plus:
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "150 contacts",
                description: "Wider outreach to your full professional network, not just your closest clients.",
              },
              {
                icon: Globe,
                title: "Google My Business & WhatsApp",
                description: "We update your GMB profile and set up WhatsApp Business so clients can find and reach you easily.",
              },
              {
                icon: Instagram,
                title: "4 Instagram posts",
                description: "More content, more visibility. Posted via partner access with your privacy fully protected.",
              },
              {
                icon: BarChart3,
                title: "Engagement tracking",
                description: "See who's opening, clicking, and responding — so you know exactly how your comeback is landing.",
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
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground">
            Who It's For
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Whether you've been on a big adventure, on maternity leave, or taking time for yourself — you've earned this comeback.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-border">
              <Users className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You've been away 3–9 months and want a more comprehensive relaunch than a basic email blast.
              </p>
            </Card>
            <Card className="p-8 border-border">
              <Zap className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You want deeper analytics, WhatsApp integration, and a stronger social presence from day one.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Messages */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            A message that means business
          </h2>
          <div className="max-w-2xl mx-auto space-y-8">
            <blockquote className="bg-card p-10 rounded-xl border-l-4 border-primary shadow-soft">
              <p className="text-lg text-card-foreground italic leading-relaxed">
                "Hey [Client Name], [Your Name] is back — with new ways to book, connect, and get updates. Here's everything you need: [Link]"
              </p>
            </blockquote>
            <blockquote className="bg-card p-10 rounded-xl border-l-4 border-primary shadow-soft">
              <p className="text-sm font-semibold text-muted-foreground mb-2">Instagram</p>
              <p className="text-lg text-card-foreground italic leading-relaxed">
                "It's official — I'm back, refreshed, and ready to deliver. Updated booking now live. [Link] #comebackpro"
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a proper comeback?</h2>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 mb-4">
            Choose Pro — £249
          </Button>
          <p className="text-sm opacity-75">
            *Includes ongoing monthly support after your return
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProPackage;
