import { Upload, MessageCircle, TrendingUp } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Tell us your dates and upload your client list",
    description: "Share your timeline and contacts — our simple template makes it easy to get started.",
    icon: Upload,
  },
  {
    number: 2,
    title: "We craft and send your personalised multi-channel campaign",
    description: "Tailored messages across email, SMS, and social — matched to your tone and brand.",
    icon: MessageCircle,
  },
  {
    number: 3,
    title: "Track bookings and reconnect as clients respond",
    description: "Monitor engagement in real-time and welcome clients back effortlessly.",
    icon: TrendingUp,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Your entire relaunch in one place.
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div 
              key={step.number} 
              className="flex flex-col items-center text-center space-y-4 p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold leading-tight">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
