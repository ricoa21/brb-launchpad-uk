import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Starter",
    monthlyPrice: 99,
    annualPrice: 950,
    description: "Your simple comeback",
    features: [
      "100 contacts",
      "3 custom messages",
      "2 Instagram posts",
      "Email support",
      "Campaign dashboard"
    ],
    popular: false
  },
  {
    name: "Pro",
    monthlyPrice: 249,
    annualPrice: 2390,
    description: "Hands-off re-engagement",
    features: [
      "250 contacts",
      "4-message campaign",
      "5 Instagram + LinkedIn posts",
      "Priority support",
      "Creative network access",
      "Advanced analytics"
    ],
    popular: true
  },
  {
    name: "Concierge",
    monthlyPrice: 499,
    annualPrice: 4790,
    description: "Full-service growth",
    features: [
      "500+ contacts",
      "Unlimited messages",
      "Complete social management",
      "Dedicated success manager",
      "Custom strategy",
      "White-glove service"
    ],
    popular: false
  }
];

const ServicesComparison = () => {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const getPrice = (pkg: typeof packages[0]) => {
    const price = billingPeriod === "monthly" ? pkg.monthlyPrice : pkg.annualPrice;
    return pkg.name === "Concierge" ? `£${price}+` : `£${price}`;
  };

  return (
    <section className="py-32 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            I may have been away but I{" "}
            <span className="text-primary inline-flex items-center gap-2">
              Never
              <Sparkles className="w-10 h-10 animate-pulse" />
            </span>
            {" "}really left
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Choose the plan that brings you back
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center items-center gap-4 mb-16">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`text-base font-medium transition-colors ${
              billingPeriod === "monthly" 
                ? "text-foreground" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => 
              setBillingPeriod(billingPeriod === "monthly" ? "annual" : "monthly")
            }
            className="relative w-12 h-6 rounded-full bg-muted transition-colors hover:bg-muted/80"
            aria-label="Toggle billing period"
          >
            <span 
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-primary transition-transform ${
                billingPeriod === "annual" ? "translate-x-6" : ""
              }`}
            />
          </button>
          <button
            onClick={() => setBillingPeriod("annual")}
            className={`text-base font-medium transition-colors ${
              billingPeriod === "annual" 
                ? "text-foreground" 
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Annual
            <span className="ml-2 text-sm text-primary font-normal">(save 20%)</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative p-8 transition-all duration-300 border ${
                pkg.popular
                  ? "bg-card border-primary/50"
                  : "bg-card border-border hover:border-border/60"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-8">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Popular
                  </span>
                </div>
              )}

              <div className="space-y-8">
                {/* Header */}
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-3">
                    <span className="text-5xl font-bold tracking-tight">
                      {getPrice(pkg)}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {billingPeriod === "monthly" ? "per month" : "per year"}
                  </p>
                  <p className="text-base text-foreground/80 mt-4">
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">
                    {pkg.name === "Pro" ? "Everything in Starter, and:" : "Includes:"}
                  </p>
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-foreground shrink-0 mt-1" />
                      <span className="text-sm text-foreground/90 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  className={`w-full h-11 text-sm font-medium ${
                    pkg.popular 
                      ? "bg-foreground text-background hover:bg-foreground/90" 
                      : "bg-transparent border border-border text-foreground hover:bg-muted"
                  }`}
                  onClick={() => window.location.href = `/${pkg.name.toLowerCase()}-package`}
                >
                  {pkg.name === "Concierge" ? "Contact us" : `Get ${pkg.name}`}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-6 max-w-2xl mx-auto pt-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Need more capabilities for your business?
          </p>
          <Button 
            variant="outline" 
            className="border-border text-foreground hover:bg-muted"
            onClick={() => window.location.href = 'mailto:hello@ineverleft.co.uk'}
          >
            Contact us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesComparison;
