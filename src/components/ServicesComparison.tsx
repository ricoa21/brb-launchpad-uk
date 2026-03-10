import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "£99",
    popular: false,
    description: "Your simple comeback",
    features: [
      "Outreach to 100 contacts",
      "3 personalised messages by email and SMS",
      "2 Instagram posts created for you to publish",
      "One-off price — no ongoing fees",
    ],
  },
  {
    name: "Pro",
    price: "£249",
    popular: true,
    description: "Keep warm + full return campaign",
    features: [
      "Everything in Starter",
      "Outreach to 200 contacts",
      "1 keep-warm post per month while you are away (up to 12 months)",
      "Return week — 4 posts across 7 days via Buffer",
      "30 days engagement tracking after return",
    ],
  },
  {
    name: "Concierge",
    price: "From £499",
    popular: false,
    description: "Full-service relaunch",
    features: [
      "Everything in Pro",
      "Dedicated human account manager",
      "Full return campaign — daily content during launch week",
      "3 months post-return support included",
      "Continue from £99/month after that",
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
                  <p className="text-base text-foreground/80 mt-4">
                    {pkg.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-muted-foreground">
                    {pkg.name === "Pro" ? "Everything in Starter, and:" : pkg.name === "Concierge" ? "Everything in Pro, and:" : "Includes:"}
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
                  onClick={() => window.location.href = `/packages/${pkg.name.toLowerCase()}`}
                >
                  {pkg.name === "Concierge" ? "Find out more" : `Get ${pkg.name}`}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="text-center space-y-6 max-w-2xl mx-auto pt-8">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Starter and Pro are one-off payments. Concierge includes optional ongoing support from £99/month after your first 3 months back.
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