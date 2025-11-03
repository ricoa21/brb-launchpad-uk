import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const StarterPackage = () => {
  const navigate = useNavigate();

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
              STARTER PLAN
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Your Affordable Relaunch
            </h1>
            <p className="text-2xl text-muted-foreground mb-8">
              Simple comeback for freelancers and small business owners
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
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Affordable Relaunch</h3>
              <p className="text-muted-foreground">
                Simple, affordable way to relaunch for just £99
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Direct Outreach</h3>
              <p className="text-muted-foreground">
                Covers direct outreach to 100 clients/contacts
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Multi-Channel</h3>
              <p className="text-muted-foreground">
                Includes multi-channel reactivation: email, SMS, and 2 Instagram posts
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
                Freelancers and small business owners who have taken a short break (2–6 months)
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-card-foreground">
                Anyone wanting a simple comeback without handling social media management themselves
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
                Works best if your client base is already established but inactive
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <p className="text-lg text-card-foreground">
                Perfect for those returning from brief sabbaticals or leaves
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
                INL sends a series of three tailored messages via email and SMS
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <p className="text-card-foreground">
                2 Instagram posts on your behalf tagging you for easy resharing
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <p className="text-card-foreground">
                You receive booking link guidance and personalized SMS alerts
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
                  "Hey [Client Name], [Your Name] is back! Ready to help with [Your Service]. Book now: [Link]"
                </p>
              </div>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Shareable Post Example</h3>
              <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                <p className="text-card-foreground font-semibold mb-2">Instagram:</p>
                <p className="text-card-foreground">
                  "I'm officially back from my break and ready to support you—let's reconnect! [Booking Link] #freelancerreturns"
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
