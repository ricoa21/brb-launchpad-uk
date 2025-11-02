import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "£99",
    popular: false,
    description: "Your simple comeback",
    breakLength: "Best for 2-6 month breaks",
    features: [
      "Outreach to 100 contacts",
      "3 message touchpoints",
      "Social media posts",
      "Booking guidance",
      "One-off price - no ongoing fees",
    ],
  },
  {
    name: "Pro",
    price: "£249",
    popular: true,
    description: "Hands-off relaunch",
    breakLength: "Best for 3-9 month breaks",
    features: [
      "Everything in Starter",
      "Outreach to 150 contacts",
      "Enhanced privacy settings",
      "Google My Business setup",
      "WhatsApp integration",
      "Engagement tracking",
      "Ongoing monthly support after return*",
    ],
  },
  {
    name: "Concierge",
    price: "From £499",
    popular: false,
    description: "Full campaign management",
    breakLength: "Best for 6-12 month sabbaticals",
    features: [
      "Everything in Pro",
      "Full social media management",
      "Pre-return, launch & post-return support",
      "Premium content creation",
      "Paid ads management (optional)",
      "Dedicated account manager",
      "Monthly ongoing costs after return*",
    ],
  },
];

const ServicesComparison = () => {
  return (
    <section className="py-32 px-4 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight leading-tight">
            Because I{" "}
            <span className="text-primary inline-flex items-center gap-2">
              never really
              <Sparkles className="w-10 h-10 animate-pulse" />
            </span>
            {" "}left
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Welcome to the comeback revolution.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Built for freelancers to enjoy being free.
          </p>
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
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {pkg.breakLength}
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
            * All prices cover your time away. Pro and Concierge tiers include ongoing monthly fees once you've returned to work.
          </p>
          <p className="text-sm text-muted-foreground">
            Not sure which package is right for you?{" "}
            <a href="mailto:hello@ineverleft.co.uk" className="text-primary hover:underline">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesComparison;
