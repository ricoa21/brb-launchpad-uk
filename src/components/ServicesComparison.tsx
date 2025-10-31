import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ServicesComparison = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const packages = [
    { 
      name: "Starter", 
      monthlyPrice: 99,
      annualPrice: 89,
      popular: false,
      description: "Perfect for testing the waters",
      features: [
        "100 contacts reached",
        "3 custom messages",
        "2 Instagram posts",
        "Email support",
        "GDPR compliant",
        "Data deletion after campaign"
      ]
    },
    { 
      name: "Pro", 
      monthlyPrice: 249,
      annualPrice: 225,
      popular: true,
      description: "Most popular choice for serious relaunches",
      features: [
        "250 contacts reached",
        "4 custom messages",
        "4-6 Instagram posts",
        "Multi-channel support (Instagram & Facebook)",
        "Priority help",
        "Creative network included",
        "Content scheduling",
        "Email support",
        "GDPR compliant",
        "Data deletion after campaign"
      ]
    },
    { 
      name: "Concierge", 
      monthlyPrice: 499,
      annualPrice: 449,
      popular: false,
      description: "Full-service, white-glove experience",
      features: [
        "500+ contacts reached",
        "Unlimited custom messages",
        "Custom social media plan",
        "Multi-channel support (Instagram & Facebook)",
        "Dedicated success manager",
        "Custom onboarding",
        "Priority help",
        "Creative network included",
        "Content scheduling",
        "Email support",
        "GDPR compliant",
        "Data deletion after campaign"
      ]
    }
  ];

  const getPrice = (pkg: typeof packages[0]) => {
    const price = billingPeriod === "monthly" ? pkg.monthlyPrice : pkg.annualPrice;
    return pkg.name === "Concierge" ? `from £${price}` : `£${price}`;
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
            I may have been away but I{" "}
            <span className="text-primary">Never</span>{" "}
            really left
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Choose the perfect package to relaunch your freelance career
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center bg-muted rounded-full p-1.5 gap-1">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                billingPeriod === "monthly"
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                billingPeriod === "annual"
                  ? "bg-primary text-white shadow-md"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-accent text-white px-2 py-0.5 rounded-full">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                pkg.popular
                  ? "bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary shadow-xl scale-105 z-10"
                  : "bg-white border-2 border-border hover:border-primary/30 shadow-lg hover:shadow-xl"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-md">
                  Best Value
                </div>
              )}

              {/* Package Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {pkg.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {pkg.description}
                </p>
                <div className="mb-6">
                  <div className="text-5xl font-bold text-foreground mb-1">
                    {getPrice(pkg)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    per {billingPeriod === "monthly" ? "month" : "year"}
                  </div>
                </div>
                <Button
                  className="w-full h-12 rounded-xl font-semibold text-base shadow-md hover:shadow-lg transition-all"
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={() => navigate(`/packages/${pkg.name.toLowerCase()}`)}
                >
                  {pkg.name === "Concierge" ? "Contact for Proposal" : "Get Started"}
                </Button>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3.5 h-3.5 text-accent" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-card-foreground leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm">
            All packages include GDPR compliance and secure data handling.
            <br />
            Your information is deleted within 7 days after campaign completion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesComparison;
