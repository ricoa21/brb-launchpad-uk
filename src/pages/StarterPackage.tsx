import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Clock, Instagram, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";

const StarterPackage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Starter — I Never Left";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            className="mb-8"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
              Starter
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Your Simple Comeback
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Perfect for freelancers and parents returning from a short break who want a clean, confident relaunch without the faff.
            </p>
            <div className="text-5xl font-bold text-primary mb-8">£99</div>
            <Button size="lg" className="text-lg px-8 py-4 bg-foreground text-background hover:bg-foreground/90">
              Get Started — £99
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            What You Get
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Outreach to 100 contacts",
                description: "Personalised email and SMS messages sent to your clients and contacts on your behalf. Never generic, always in your voice.",
              },
              {
                icon: Clock,
                title: "3 perfectly timed messages",
                description: "One before you leave, one a month before your return, one when you're back. Keeps you front of mind the whole time.",
              },
              {
                icon: Instagram,
                title: "2 Instagram posts",
                description: "We create and publish two posts tagging your handle, ready for you to reshare to your audience.",
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
                You've been away 2–6 months and have an existing client base that's gone quiet.
              </p>
            </Card>
            <Card className="p-8 border-border">
              <Zap className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You want a simple, done-for-you relaunch without managing campaigns yourself.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Message */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            A message that actually sounds like you
          </h2>
          <div className="max-w-2xl mx-auto">
            <blockquote className="bg-card p-10 rounded-xl border-l-4 border-primary shadow-soft">
              <p className="text-lg text-card-foreground italic leading-relaxed">
                "Hey [Client Name], it's [Your Name] — I'm back and ready to help with [Your Service]. I'd love to reconnect. Here's my booking link: [Link]"
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to come back?</h2>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            Start Your Comeback — £99
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StarterPackage;
