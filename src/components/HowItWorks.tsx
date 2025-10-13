import { Calendar, ClipboardList, MessageSquare, Camera, Rocket, Sparkles, BookOpen } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Tell Us Your Return Date",
      description: "Share your planned comeback date so we can time your outreach and posts for maximum impact.",
      icon: Calendar
    },
    {
      number: "2", 
      title: "Send Your Client and Industry Contact List",
      description: "Upload your past or priority client and industry contact details (phone numbers and/or emails) securely. GDPR‑compliant handling. Deleted as soon as your campaign ends.",
      icon: ClipboardList
    },
    {
      number: "3",
      title: "Choose Your Package & Communication Style", 
      description: "Pick the service level that suits your needs — from a single round of outreach with a couple of social updates, to multi‑channel campaigns, to full management of messages, posts, and replies while you're away.",
      icon: MessageSquare
    },
    {
      number: "4",
      title: "Provide Social Images (if using socials)",
      description: "Send 1–3 brand‑appropriate images for your posts, or we can help source/create them.",
      icon: Camera
    },
    {
      number: "5", 
      title: "We Create & Launch Your 'I'M BACK' Campaign",
      description: "We prepare and send friendly, personalised messages, set up booking links, schedule posts (Pro/Concierge), and manage replies where included.",
      icon: Rocket
    },
    {
      number: "6",
      title: "You Relax — We Handle Everything",
      description: "While you're away, we keep your audience warm, reply to enquiries (Pro/Concierge), and track engagement.",
      icon: Sparkles
    },
    {
      number: "7", 
      title: "Come Back to a Warm Client Base",
      description: "When you return, your diary is already filling — no awkward first messages, no starting from scratch. Just a confident, fully booked return.",
      icon: BookOpen
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            How Does It Work?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We make your comeback simple, stress‑free, and effective — whether you're away for a few weeks or several months.
          </p>
        </div>
        
        <div className="space-y-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-soft">
                    <IconComponent className="w-16 h-16 text-primary" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 max-w-2xl">
            <div className="text-4xl mb-4">💡</div>
            <p className="text-2xl font-semibold text-foreground mb-2">
              "You've been away — but your business hasn't missed a beat."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;