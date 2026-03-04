import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Calendar, Users } from "lucide-react";
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
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
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
              Starter
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              The Affordable Relaunch for Freelancers or Returning Parents
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              A simple, cost-effective way to restart, reconnect, and reignite your client relationships—perfect for freelancers or parents returning to work who want a quick, effective relaunch without managing complex campaigns.
            </p>
            <div className="text-5xl font-bold text-primary mb-8">£99</div>
            <Button size="lg" className="text-lg px-8 py-4 bg-foreground text-background hover:bg-foreground/90">
              Get Started with Starter
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
          
          <div className="max-w-2xl mx-auto">
            <div className="p-8 bg-card rounded-xl shadow-soft text-center">
              <p className="text-xl text-card-foreground">
                Affordable at just <span className="font-bold text-primary">£99</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Personalised Outreach */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground">
            Direct Personalised Outreach
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Direct, tailored outreach to up to 100 clients/contacts.
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">What this means:</h3>
              <p className="text-muted-foreground">
                Each message is carefully crafted in your voice and style, tailored for your unique audience—ensuring genuine, personal communication (never generic bulk messaging).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Channel Delivery */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Multi-Channel Delivery
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Three precisely timed messages delivered on your behalf:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>1 before your planned leave (to set expectations)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>1 about a month (or equivalent) before you return</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>1 upon your actual arrival back</span>
                </li>
              </ul>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <h3 className="text-xl font-semibold mb-4 text-card-foreground">Messages are sent via:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>Email</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>SMS</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>Two Instagram posts, tagging you for easy reshare</span>
                </li>
              </ul>
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
          
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-card rounded-xl shadow-soft text-center">
              <p className="text-lg text-card-foreground">
                Freelancers, solo professionals, and parents returning to work—anyone who wants a straightforward, affordable relaunch with maximum impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Dashboard Features
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-card-foreground mb-6">Your dashboard includes:</p>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>Real-time tracking of who opened, clicked, or replied</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>Easy booking link management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>Instant notifications for important actions (like reshares or client replies)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>Simple overview of engagement across channels (email, SMS, Instagram)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>User-friendly controls to pause, reschedule, or update your campaign messages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When It Works Best */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            When It Works Best
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-card rounded-xl shadow-soft text-center">
              <p className="text-lg text-card-foreground">
                Best for returners with an established but inactive client list—whether you've paused for family, travel, health, or personal reasons—and you want an efficient boost back into business. No specified duration: works whether your break was short, long, or somewhere in between.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            How It Works
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>Three tailored messages delivered at key moments in your journey</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>Your network receives personal, timely updates—not pushy or generic blasts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3 font-bold">•</span>
                  <span>Inbound bookings and replies routed directly to you</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Campaign Messages */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Sample Campaign Messages
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-card-foreground">
                  "Hey [Client Name], [Your Name] will be back soon and ready to help with [Your Service]. Reply to get first pick on bookings!"
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-card-foreground font-semibold mb-2">Instagram example:</p>
                <p className="text-card-foreground">
                  "I'm officially back and ready to reconnect! [Booking Link] #freelancerreturns"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Return Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with the Starter Plan for just £99
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            Choose Starter Plan
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StarterPackage;
