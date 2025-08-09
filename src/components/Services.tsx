import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Starter",
      price: "£99",
      description: "One-time outreach with visibility and structure",
      features: [
        "Personalized message templates for your client list",
        "Simple booking link setup",
        "2 social media captions + posting guidance",
        "Outreach to 20-30 clients",
        "Lightweight, hands-on support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      title: "Pro", 
      price: "£249",
      description: "Hands-off social and email campaign management",
      features: [
        "Everything in Starter",
        "Done-for-you social media scheduling (4 weeks)",
        "Booking link integration with calendar management",
        "Personalized warm-up email campaign",
        "Message delivery and engagement tracking"
      ],
      cta: "Choose Pro",
      popular: true
    },
    {
      title: "Concierge",
      price: "£399", 
      description: "Full-service, end-to-end relaunch with coaching",
      features: [
        "Everything in Pro",
        "Management of client replies & confirmations",
        "Personalized coaching session",
        "Portfolio, website bio & social profile refresh",
        "Monthly performance summary & strategy recommendations"
      ],
      cta: "Go Concierge",
      popular: false
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
            From DIY templates to full concierge service, we have the right solution for your comeback journey.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className={`relative p-8 bg-card rounded-2xl shadow-soft card-hover ${service.popular ? 'ring-2 ring-primary' : ''}`}>
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-card-foreground">{service.title}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{service.price}</div>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={service.popular ? "hero" : "default"} 
                className="w-full"
                size="lg"
              >
                {service.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;