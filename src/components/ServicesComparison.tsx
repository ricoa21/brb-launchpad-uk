import { Button } from "@/components/ui/button";
import { Check, X, Users, MessageSquare, Instagram, Facebook, Headset, Award, Calendar, TrendingUp, Shield, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesComparison = () => {
  const navigate = useNavigate();
  const packages = [
    { 
      name: "Starter", 
      price: "£99", 
      popular: false, 
      badge: null,
      description: "Perfect for testing the waters"
    },
    { 
      name: "Pro", 
      price: "£249", 
      popular: true, 
      badge: "Best Value",
      description: "Most popular choice for serious relaunches"
    },
    { 
      name: "Concierge", 
      price: "from £499", 
      popular: false, 
      badge: "Hands-off Support",
      description: "Full-service, white-glove experience"
    }
  ];

  const features = [
    {
      category: "Outreach & Contacts",
      icon: Users,
      items: [
        { name: "Contacts reached", values: ["100 contacts", "250 contacts", "500+ contacts"], icon: Users },
        { name: "Custom messages", values: ["3 messages", "4 messages", "Unlimited"], icon: MessageSquare },
        { name: "Multi-channel support", values: [false, true, true], icon: Headset }
      ]
    },
    {
      category: "Social Media",
      icon: Instagram,
      items: [
        { name: "Instagram posts", values: ["2 posts", "4-6 posts", "Custom plan"], icon: Instagram },
        { name: "Facebook support", values: [false, true, true], icon: Facebook },
        { name: "Content scheduling", values: [false, true, true], icon: Calendar }
      ]
    },
    {
      category: "Management & Support",
      icon: Headset,
      items: [
        { name: "Email support", values: [true, true, true], icon: Headset },
        { name: "Priority help", values: [false, true, true], icon: Award },
        { name: "Creative network included", values: [false, true, true], icon: TrendingUp },
        { name: "Dedicated success manager", values: [false, false, true], icon: Award },
        { name: "Custom onboarding", values: [false, false, true], icon: Users }
      ]
    },
    {
      category: "Compliance & Security",
      icon: Shield,
      items: [
        { name: "GDPR compliance", values: [true, true, true], icon: Shield },
        { name: "Data deletion after campaign", values: [true, true, true], icon: Trash2 }
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative text-center p-8 rounded-2xl shadow-soft ${
                pkg.popular 
                  ? 'bg-gradient-to-b from-primary to-primary-dark text-white border-4 border-primary transform scale-105' 
                  : 'bg-card border-2 border-border'
              }`}
            >
              {pkg.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-sm font-bold ${
                  pkg.popular ? 'bg-secondary text-white' : 'bg-accent text-white'
                }`}>
                  {pkg.badge}
                </div>
              )}
              <h3 className={`text-3xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-foreground'}`}>
                {pkg.name}
              </h3>
              <div className={`text-4xl font-bold mb-3 ${pkg.popular ? 'text-white' : 'text-primary'}`}>
                {pkg.price}
              </div>
              <p className={`text-sm mb-6 ${pkg.popular ? 'text-white/80' : 'text-muted-foreground'}`}>
                {pkg.description}
              </p>
              <Button 
                variant={pkg.popular ? "secondary" : "default"}
                className="w-full font-bold"
                size="lg"
                onClick={() => navigate(`/packages/${pkg.name.toLowerCase()}`)}
              >
                {pkg.name === "Concierge" ? "Contact for Proposal" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>

        {/* Detailed Feature Comparison */}
        <div className="bg-card rounded-2xl shadow-soft overflow-hidden border border-border">
          {features.map((category, catIndex) => (
            <div key={catIndex} className="border-b last:border-b-0">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 px-6 py-5 border-b flex items-center gap-3">
                <category.icon className="w-6 h-6 text-primary" />
                <h4 className="font-bold text-xl text-foreground">{category.category}</h4>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody>
                    {category.items.map((feature, featureIndex) => (
                      <tr key={featureIndex} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
                        <td className="px-6 py-5 font-medium text-card-foreground flex items-center gap-3 min-w-[250px]">
                          {feature.icon && <feature.icon className="w-5 h-5 text-muted-foreground" />}
                          {feature.name}
                        </td>
                        {feature.values.map((value, valueIndex) => (
                          <td key={valueIndex} className="px-6 py-5 text-center min-w-[200px]">
                            {typeof value === 'boolean' ? (
                              value ? (
                                <Check className="w-6 h-6 text-accent mx-auto" />
                              ) : (
                                <X className="w-6 h-6 text-muted-foreground mx-auto opacity-30" />
                              )
                            ) : (
                              <span className="text-card-foreground font-medium">{value}</span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesComparison;
