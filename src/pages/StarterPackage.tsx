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
You've been away. We make sure your clients know you're back. A simple, one-off return campaign — no monthly fees, no faff.            </p>
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
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground">
            Who It's For
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Whether you've been travelling the world, growing a tiny human, or just needed a breather — welcome back.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-border">
              <Users className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                Whether you've been travelling, had a baby, or just needed a break — if your client list is warm, Starter gets you back in business.
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

      {/* How the timing works */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">How the timing works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Before you leave</div>
              <p className="text-muted-foreground">Message 1 goes out. Clients know you're taking a break and when you'll be back.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">4 weeks before return</div>
              <p className="text-muted-foreground">Message 2 builds anticipation. Clients start thinking about rebooking.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Return day</div>
              <p className="text-muted-foreground">Message 3 fires. 2 Instagram posts go live. Bookings open.</p>
            </div>
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