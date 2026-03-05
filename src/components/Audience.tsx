import { Briefcase, Heart, Sparkles, Baby, TrendingUp } from "lucide-react";

const Audience = () => {
  const freelancerTypes = [
    {
      title: "Hair, Beauty & Personal Care",
      icon: Sparkles,
      description: "Barbers, hairstylists, nail technicians, makeup artists and beauty therapists — your clients are loyal, they just need reminding you're back."
    },
    {
      title: "Health, Wellness & Movement",
      icon: Heart,
      description: "Personal trainers, physiotherapists, chiropractors, massage therapists and yoga instructors — people who've been waiting for you to return to their routine."
    },
    {
      title: "Trades & Local Services",
      icon: Briefcase,
      description: "Window cleaners, gardeners, dog walkers, handypeople and cleaners — regular clients who'll rebook the moment they hear from you."
    },
    {
      title: "Creative Professionals & Freelancers",
      icon: Sparkles,
      description: "Photographers, designers, videographers, copywriters and content creators reconnecting with clients for fresh projects."
    },
    {
      title: "Parents Returning After Maternity",
      icon: Baby,
      description: "You grew a human. Now you're ready to get back to work. We'll make sure your clients are ready and waiting when you are."
    },
    {
      title: "Consultants & Coaches",
      icon: TrendingUp,
      description: "Business consultants, life coaches, and advisors returning to offer their expertise — your reputation hasn't gone anywhere, let's remind people you're back."
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
            Real jobs, real people, real comebacks. Built for the freelancers and sole traders who don't have a marketing team — just a great reputation and clients worth reconnecting with.
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
