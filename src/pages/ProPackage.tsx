import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Calendar, Users, TrendingUp, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const ProPackage = () => {
  const navigate = useNavigate();

  const exampleMessages = [
    {
      round: "Round 1 - Initial Outreach",
      type: "Email",
      subject: "Excited to reconnect!",
      content: "Hi [Client Name],\n\nI hope you're doing well! I'm reaching out because I'm back from [travel/leave] and excited to get back to doing what I love.\n\nI've been thinking about our past projects together and I'd love to explore how we might work together again. I have some fresh ideas and renewed energy that I think you'll appreciate.\n\nWould you be open to a quick call next week to catch up?\n\nLooking forward to hearing from you!\n\nWarm regards,\n[Your Name]"
    },
    {
      round: "Round 2 - Follow-up",
      type: "SMS",
      content: "Hi [Client Name], just following up on my email from last week. I'd love to reconnect and hear about what you're working on. Free for a quick chat this week? 📞"
    },
    {
      round: "Round 3 - Final Touch",
      type: "Social DM",
      content: "Hey [Client Name]! 👋 Saw your recent post about [relevant topic]. Would love to catch up and see how I might be able to help with that. My calendar is open if you'd like to chat!"
    }
  ];

  const socialPosts = [
    {
      week: "Week 1",
      content: "🎉 BIG NEWS! 🎉\n\nAfter [time away], I'm officially back and ready to take on new projects!\n\nMy time away gave me:\n✨ Fresh perspectives\n🚀 New creative energy\n💡 Innovative ideas\n\nMy calendar is filling up fast, but I have a few spots available for the right projects.\n\nIf you've been thinking about [your service], now's the perfect time to reach out.\n\nComment 'INFO' or DM me to learn more!\n\n#FreelanceLife #BackInBusiness #[YourNiche]"
    },
    {
      week: "Week 2",
      content: "Behind the scenes: What I learned during my time away 🌟\n\n[Swipe for carousel of insights]\n\n1️⃣ Fresh perspectives lead to better solutions\n2️⃣ Rest isn't a luxury, it's essential\n3️⃣ I missed creating with incredible clients like you!\n\nReady to bring this energy to your next project? Let's chat! 💬\n\n#CreativeJourney #FreelancerLife"
    }
  ];

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
              PRO PACKAGE - MOST POPULAR
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Multi-Channel, Hands-Off Re-Engagement
            </h1>
            <p className="text-2xl text-muted-foreground mb-8">
              For freelancers who want a confident comeback without lifting a finger
            </p>
            <div className="text-5xl font-bold text-primary mb-8">£249</div>
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              Choose Pro Package
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Everything in Starter, Plus Premium Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="p-8 bg-card rounded-xl shadow-soft card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">100 Contacts</h3>
              <p className="text-muted-foreground">
                Reach up to 100 clients and industry contacts with personalized messages
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <MessageSquare className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">3 Message Rounds</h3>
              <p className="text-muted-foreground">
                Multi-step campaign with strategic follow-ups via SMS, email, and social
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Done-For-You Social</h3>
              <p className="text-muted-foreground">
                4-6 posts over 4 weeks, scheduled and posted by us using your images
              </p>
            </div>

            <div className="p-8 bg-card rounded-xl shadow-soft card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Full Tracking</h3>
              <p className="text-muted-foreground">
                Campaign delivery and engagement tracking report with insights
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-foreground text-center">Pro Package Advantages</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Multi-channel approach (SMS + Email + Social)",
                "Client list segmentation for targeted outreach",
                "Full calendar integration (Google, Outlook, etc.)",
                "Booking link setup and management",
                "GDPR-compliant data handling",
                "Completely hands-off service",
                "Professional campaign tracking report",
                "Strategic timing and follow-ups"
              ].map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-accent mr-3 flex-shrink-0 mt-1" />
                  <span className="text-foreground font-medium">{feature}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Step Campaign Example */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            3-Round Campaign Strategy
          </h2>
          
          <div className="space-y-8">
            {exampleMessages.map((example, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">{example.round}</h3>
                    <p className="text-muted-foreground">{example.type}</p>
                  </div>
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
        </div>
      </section>

      {/* Social Media Examples */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Done-For-You Social Media Posts
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {socialPosts.map((post, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-soft">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold text-card-foreground">{post.week}</h3>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg">
                  <p className="text-card-foreground whitespace-pre-line">{post.content}</p>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  ✓ Scheduled and posted by us using your brand images
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Perfect For
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Established freelancers",
              "Medium to long breaks (3-12 months)",
              "50-100+ clients",
              "Busy professionals"
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
          <h2 className="text-4xl font-bold mb-6">Ready for a Hands-Off Return?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us handle everything while you enjoy your time away
          </p>
          <Button size="lg" variant="hero" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            Choose Pro Package
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProPackage;
