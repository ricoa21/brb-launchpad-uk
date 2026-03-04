import { Palette, Briefcase, Heart, Sparkles, Baby, ShoppingBag } from "lucide-react";

const Audience = () => {
  const freelancerTypes = [
    {
      title: "Creative Professionals & Content Creators",
      icon: Sparkles,
      description: "Visual artists, writers, videographers, and content creators reconnecting with clients and audiences for fresh creative projects."
    },
    {
      title: "Design & Brand Experts", 
      icon: Palette,
      description: "Designers and branding specialists revitalizing their professional presence to deliver innovative visual and brand solutions."
    },
    {
      title: "Consultants & Advisors",
      icon: Briefcase, 
      description: "Experienced industry consultants returning to offer strategic insights and project leadership."
    },
    {
      title: "Wellness & Lifestyle Coaches",
      icon: Heart,
      description: "A friendly, approachable category for personal trainers, wellness guides, and holistic practitioners inspiring healthier living."
    },
    {
      title: "Parents Returning To Work After Maternity",
      icon: Baby,
      description: "Professionals navigating the balance of childcare and career, rebuilding client relationships with confidence after maternity leave."
    }
  ];

  return (
    <section className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground tracking-tight">
            Built for UK Freelancers Like You
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
            Whether you've been traveling the world, raising a family, or taking time for personal growth, 
            we understand the unique challenges facing UK freelancers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freelancerTypes.map((type, index) => {
            const IconComponent = type.icon;
            return (
              <div 
                key={index} 
                className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <IconComponent className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Don't see your specialty? We work with freelancers across all industries.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-muted rounded-full">
            <span className="text-foreground font-medium">Proudly supporting UK freelancers nationwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;
