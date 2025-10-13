import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Calendar, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const StarterPackage = () => {
  const navigate = useNavigate();

  const exampleMessages = [
    {
      type: "Email",
      subject: "I'm back and ready to create!",
      content: "Hi [Client Name],\n\nI hope this message finds you well! I wanted to reach out personally to let you know I'm back from my travels and excited to reconnect.\n\nI've been away exploring [destination], but I'm now ready to dive back into projects with the same energy and creativity you know me for.\n\nI'd love to catch up and hear what you've been working on. Are you available for a quick call next week?\n\nLooking forward to collaborating again!\n\nBest,\n[Your Name]"
    },
    {
      type: "SMS",
      content: "Hey [Client Name]! Just wanted to let you know I'm back and taking on new projects. Would love to work together again soon. Let me know if you need anything! 😊"
    },
    {
      type: "Social Media",
      content: "🎉 I'M BACK! 🎉\n\nAfter an incredible journey, I'm ready to dive back into what I love most — creating amazing work for amazing clients.\n\nIf you've been thinking about starting that project, now's the perfect time. My calendar is open and I'm energized with fresh ideas!\n\nDM me or drop a comment if you'd like to chat. Let's make something brilliant together! ✨\n\n#FreelanceLife #BackInBusiness #ReadyToCreate"
    }
  ];

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
              STARTER PACKAGE
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Simple, Structured Return
            </h1>
            <p className="text-2xl text-muted-foreground mb-8">
              Perfect for freelancers who want a straightforward re-entry with personalized outreach and social presence
            </p>
            <div className="text-5xl font-bold text-primary mb-8">£99</div>
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              Get Started with Starter
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            What's Included
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">30 Contacts</h3>
              <p className="text-muted-foreground">
                One round of personalized outreach to up to 30 clients and industry contacts via your choice of SMS, email, or social platform
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Custom Messages</h3>
              <p className="text-muted-foreground">
                Ready-to-use message templates crafted in your tone and style, fully customizable before sending
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Social Content</h3>
              <p className="text-muted-foreground">
                2 social media captions crafted for you with step-by-step posting guidance using your own images
              </p>
            </div>
          </div>

          <div className="bg-card p-8 rounded-xl shadow-soft">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">Additional Features</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "Booking link setup support",
                "Choose your communication tone/style",
                "Lightweight guided support throughout",
                "Multi-channel upgrade available (+£20-25)",
                "GDPR-compliant data handling",
                "Data deletion after campaign"
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span className="text-card-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Example Messages */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Example Messages We'll Craft for You
          </h2>
          
          <div className="space-y-8">
            {exampleMessages.map((example, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-card-foreground">{example.type}</h3>
                </div>
                {example.subject && (
                  <p className="font-semibold text-lg mb-2 text-card-foreground">
                    Subject: {example.subject}
                  </p>
                )}
                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-primary">
                  <p className="text-card-foreground whitespace-pre-line">{example.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-muted-foreground mb-6">
              All messages are fully customizable and reviewed by you before sending
            </p>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Perfect For
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Freelancers on a budget",
              "Short breaks (1-3 months)",
              "Small client base",
              "DIY-friendly individuals"
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-card rounded-xl shadow-soft card-hover">
                <div className="text-4xl mb-4">✓</div>
                <p className="text-lg font-semibold text-card-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Return Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Get started with the Starter Package for just £99
          </p>
          <Button size="lg" variant="hero" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            Choose Starter Package
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StarterPackage;
