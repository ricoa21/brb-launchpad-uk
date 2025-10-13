import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const ServicesComparison = () => {
  const packages = [
    { name: "Starter", price: "£99", popular: false },
    { name: "Pro", price: "£249", popular: true },
    { name: "Concierge", price: "from £499", popular: false }
  ];

  const features = [
    {
      category: "Outreach & Contacts",
      items: [
        { name: "Number of clients and industry contacts", values: ["30", "100", "Custom"] },
        { name: "Personalized message rounds", values: ["1 round", "3 rounds", "Custom"] },
        { name: "Communication channels", values: ["1 channel (+£20-25/channel)", "Multi-channel (SMS, email, social)", "Multi-channel"] },
        { name: "Client list segmentation", values: [false, true, true] }
      ]
    },
    {
      category: "Social Media",
      items: [
        { name: "Social media captions created", values: ["2 captions", "4-6 posts", "Custom"] },
        { name: "Social media posting", values: ["Client posts (add-on available)", "Done for you (4 weeks)", "Fully managed (custom duration)"] },
        { name: "Content scheduling", values: [false, true, true] }
      ]
    },
    {
      category: "Management & Support",
      items: [
        { name: "Booking link setup", values: [true, true, true] },
        { name: "Calendar integration", values: [false, true, true] },
        { name: "Reply & enquiry management", values: [false, true, "Full management"] },
        { name: "Campaign tracking report", values: [false, true, true] },
        { name: "Portfolio/profile refresh", values: [false, false, true] },
        { name: "Monthly performance summary", values: [false, false, true] },
        { name: "Personalized coaching session", values: [false, false, true] }
      ]
    },
    {
      category: "Compliance & Security",
      items: [
        { name: "GDPR compliance", values: [true, true, true] },
        { name: "Data deletion after campaign", values: [true, true, true] }
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Choose Your Return Strategy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Compare our packages to find the perfect fit for your comeback journey
          </p>
        </div>

        {/* Package Headers */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="col-span-1"></div>
          {packages.map((pkg, index) => (
            <div key={index} className={`text-center p-6 rounded-t-2xl ${pkg.popular ? 'bg-gradient-to-b from-primary to-secondary text-white' : 'bg-muted'}`}>
              {pkg.popular && (
                <div className="text-sm font-semibold mb-2">MOST POPULAR</div>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <div className="text-3xl font-bold">{pkg.price}</div>
            </div>
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-card rounded-2xl shadow-soft overflow-hidden">
          {features.map((category, catIndex) => (
            <div key={catIndex}>
              <div className="bg-muted/50 px-6 py-4 border-b">
                <h4 className="font-bold text-lg text-foreground">{category.category}</h4>
              </div>
              {category.items.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-4 gap-4 border-b last:border-b-0 hover:bg-muted/20 transition-colors">
                  <div className="col-span-1 px-6 py-4 font-medium text-card-foreground">
                    {feature.name}
                  </div>
                  {feature.values.map((value, valueIndex) => (
                    <div key={valueIndex} className="px-6 py-4 text-center flex items-center justify-center">
                      {typeof value === 'boolean' ? (
                        value ? (
                          <Check className="w-6 h-6 text-accent" />
                        ) : (
                          <X className="w-6 h-6 text-muted-foreground" />
                        )
                      ) : (
                        <span className="text-card-foreground">{value}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-1"></div>
          {packages.map((pkg, index) => (
            <div key={index} className="text-center">
              <Button 
                variant={pkg.popular ? "hero" : "default"} 
                className="w-full"
                size="lg"
              >
                Choose {pkg.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComparison;
