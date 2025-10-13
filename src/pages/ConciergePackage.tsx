import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Crown, Shield, TrendingUp, Users, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Footer from "@/components/Footer";

const ConciergePackage = () => {
  const navigate = useNavigate();

  const premiumFeatures = [
    {
      icon: MessageSquare,
      title: "Full Reply Management",
      description: "We handle all client replies, enquiries, and booking requests across every channel while you're away"
    },
    {
      icon: TrendingUp,
      title: "Custom Campaign Planning",
      description: "You decide the number of posts per week, messaging frequency, and campaign duration - we execute flawlessly"
    },
    {
      icon: Users,
      title: "Portfolio & Profile Refresh",
      description: "Complete update of your portfolio, bio, and professional profiles to showcase your best work"
    },
    {
      icon: Sparkles,
      title: "Monthly Strategy Reports",
      description: "Detailed performance summaries with actionable recommendations to keep growing your business"
    },
    {
      icon: Crown,
      title: "Personal Coaching Session",
      description: "One-on-one strategy call to align your goals and ensure continued success after your return"
    },
    {
      icon: Shield,
      title: "White-Glove Service",
      description: "Dedicated account manager, priority support, and complete peace of mind throughout your journey"
    }
  ];

  const exampleScenarios = [
    {
      duration: "3-Month Campaign",
      includes: [
        "150 personalized client outreach messages",
        "12 social media posts (3 per week for 4 weeks)",
        "Full reply and booking management",
        "Weekly progress updates",
        "Portfolio refresh and optimization"
      ],
      price: "£499"
    },
    {
      duration: "6-Month Campaign",
      includes: [
        "300 personalized client outreach messages",
        "24 social media posts (weekly for 6 months)",
        "Complete communications management",
        "Bi-weekly strategy calls",
        "Quarterly performance reports",
        "Profile refresh across all platforms"
      ],
      price: "£899"
    },
    {
      duration: "12-Month Campaign",
      includes: [
        "Unlimited client outreach",
        "48+ social media posts (weekly)",
        "Full business development support",
        "Monthly strategy sessions",
        "Comprehensive quarterly reports",
        "Ongoing brand management",
        "Priority VIP support"
      ],
      price: "Custom Quote"
    }
  ];

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
              CONCIERGE PACKAGE - PREMIUM
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Full-Service Relaunch & Communications Management
            </h1>
            <p className="text-2xl mb-8 opacity-90">
              The ultimate white-glove service for freelancers who want complete peace of mind
            </p>
            <div className="text-5xl font-bold mb-8">from £499</div>
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Everything in Pro, Plus Elite Features
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="p-8 bg-gradient-to-br from-card to-card/80 rounded-xl shadow-strong card-hover border-2 border-primary/20">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Pricing Examples */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            Flexible Pricing Based on Your Needs
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {exampleScenarios.map((scenario, index) => (
              <div key={index} className={`p-8 rounded-2xl shadow-soft ${index === 1 ? 'bg-gradient-to-br from-primary/10 to-secondary/10 ring-2 ring-primary' : 'bg-card'}`}>
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-center text-foreground">{scenario.duration}</h3>
                <div className="text-3xl font-bold text-center text-primary mb-6">{scenario.price}</div>
                
                <ul className="space-y-3">
                  {scenario.includes.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-card-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-muted-foreground mb-6">
              Need a custom duration or specific services? We'll create a personalized package just for you.
            </p>
            <Button size="lg" variant="hero">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>

      {/* The Concierge Difference */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
            The Concierge Difference
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">What Sets Us Apart</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Dedicated Account Manager",
                    description: "Your personal point of contact who knows your business inside and out"
                  },
                  {
                    title: "Real-Time Communication",
                    description: "We respond as you would - maintaining your voice and professionalism"
                  },
                  {
                    title: "Strategic Growth Focus",
                    description: "Not just maintaining - we actively grow your client base while you're away"
                  },
                  {
                    title: "Complete Transparency",
                    description: "Full access to all communications, reports, and analytics"
                  }
                ].map((item, index) => (
                  <div key={index} className="p-6 bg-card rounded-lg shadow-soft">
                    <h4 className="text-xl font-bold text-card-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground mb-6">Perfect For</h3>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-xl">
                <ul className="space-y-4">
                  {[
                    "High-value freelancers (£100k+ annual revenue)",
                    "Extended breaks (6+ months)",
                    "Large client bases (100+ contacts)",
                    "Premium service providers",
                    "Freelancers wanting business growth, not just maintenance",
                    "Those seeking complete peace of mind"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Crown className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                      <span className="text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card p-12 rounded-2xl shadow-strong">
            <div className="flex mb-6">
              {[...Array(5)].map((_, index) => (
                <svg key={index} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-xl text-card-foreground mb-6 leading-relaxed">
              "The Concierge Package was worth every penny. I took 8 months off for maternity leave, and when I came back, my business had actually grown. They managed everything - client communications, social media, even secured three new long-term contracts. I felt like I had a whole team supporting me."
            </blockquote>
            <div className="border-t pt-6">
              <div className="font-bold text-xl text-card-foreground">Alexandra Chen</div>
              <div className="text-muted-foreground">Brand Strategist</div>
              <div className="text-primary">London</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Crown className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Experience White-Glove Service</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can create a custom package perfect for your needs
          </p>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            Schedule Consultation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConciergePackage;
