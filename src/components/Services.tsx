import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      title: "Starter",
      price: "£99",
      description: "One‑time outreach for a simple, structured return",
      features: [
        "One round of personalized outreach to up to 30 clients via your choice of SMS, email, or a social platform",
        "Ready-to-use message templates (choose your tone/style)",
        "Booking link setup support",
        "2 social media captions crafted for you, with step‑by‑step posting guidance",
        "Client provides images for branded, authentic social posts",
        "Lightweight, guided support throughout your campaign",
        "Multi‑channel upgrade: Additional £20–£25 for a second/third channel",
        "Clients post social content themselves (add-on available for \"we post for you\")"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      title: "Pro", 
      price: "£249",
      description: "Multi-channel, hands-off re-engagement for a confident comeback",
      features: [
        "Everything in Starter, PLUS:",
        "Outreach to up to 100 clients",
        "Multi-step campaign: 3 personalized messages per client via SMS, email, and social platform",
        "Done‑for‑you social media scheduling & posting (4–6 posts, 4 weeks, using your images)",
        "Booking link integration with calendar (Google, Outlook, etc.)",
        "Client list segmentation for targeted outreach",
        "Campaign delivery & engagement tracking report",
        "Seamless, hands-off service with GDPR‑compliance"
      ],
      cta: "Choose Pro",
      popular: true
    },
    {
      title: "Concierge",
      price: "from £399", 
      description: "Full-service relaunch, communications management & strategic support",
      features: [
        "Everything in Pro, PLUS:",
        "Fully managed replies, enquiries, and booking requests across all channels (while you're away)",
        "Custom campaign planning: You decide the number of social posts/week, messaging frequency, and campaign duration",
        "Portfolio, bio, and profile refresh as needed",
        "Monthly performance summary & actionable strategy recommendations",
        "Personalized coaching session to support your goals",
        "Pricing calculator: Custom quotes based on campaign scale, minimum charge above Pro"
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