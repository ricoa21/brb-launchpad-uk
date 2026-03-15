import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Crown, CalendarCheck, Users, BarChart3, Sparkles, Zap, MessageSquare, UserCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ConciergePackage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Concierge — I Never Left";
  }, []);

  const faqs = [
    {
      question: "What's included in the £499?",
      answer: "Everything in Pro plus a dedicated human account manager, monthly keep-warm posts while you are away, your full return campaign, and 3 full months of post-return support. It covers your entire break and your first 3 months back. After that, continue from £99 per month or walk away. No lock-in."
    },
    {
      question: "How long does £499 cover?",
      answer: "Your entire break — however long that is — plus 3 months after your return. The only cap is on keep-warm posts which max out at 12 months, same as Pro."
    },
    {
      question: "What does the dedicated account manager do?",
      answer: "Your account manager is a real person — not a bot, not an automated system. They know your name, your industry, your clients, and your comeback story. From day one they handle your campaign setup, approve content with you, manage your social scheduling, and are on hand throughout your break for any changes or questions. One human, full accountability."
    },
    {
      question: "What does the 3 months post-return support include?",
      answer: "Month 1: 2 posts per week, DMs monitored during return week, booking enquiries logged and followed up. Month 2: 1 post per week, one SMS nudge to anyone who hasn't rebooked, a check-in call with your account manager. Month 3: 1 post per week, full performance report, and a handover pack covering what worked and how to keep the momentum going yourself."
    },
    {
      question: "What happens during my return week?",
      answer: "Your full return campaign fires — email and SMS to your entire contact list. Daily content published all week. DMs monitored so nothing gets missed. It is the biggest moment of the whole campaign and we treat it that way."
    },
    {
      question: "How are messages sent?",
      answer: "Message 1 goes out by email or SMS before you leave — whichever suits you best. Message 2 goes out by SMS 4 weeks before your return, though this can also be sent by email if you prefer — just let us know when you sign up. Message 3 fires by both email and SMS on return day for maximum reach."
    },
    {
      question: "What are the optional add-ons?",
      answer: "Additional platforms — from £49 per month per platform for TikTok or LinkedIn. Premium content — need professional photography, video or animation? Through our friends at Company Content we can source the right creative talent. Custom quote."
    },
    {
      question: "What if I don't have social media?",
      answer: "We swap all social posts for additional email and SMS touchpoints instead. Same impact, different channels. Just let us know when you sign up."
    },
    {
      question: "Can I downgrade to Pro?",
      answer: "Yes — but only before your return campaign fires. Once your return week begins, the 3 month post-return support kicks in automatically and the full £499 applies. If you have not notified us before return day, the Concierge rate stands. Get in touch before that point and we will adjust without any fuss."
    },
    {
      question: "What if my return date changes?",
      answer: "No problem at all. Your account manager will reschedule everything around your new date. Nothing falls through the cracks."
    },
    {
      question: "What happens if some messages bounce?",
      answer: "We send everything from verified infrastructure to keep delivery rates high. If anything bounces we will let you know and you can swap in replacement contacts within 48 hours. Worth making sure your list is up to date before we kick off."
    },
    {
      question: "Is the £499 a one-off payment?",
      answer: "Yes — £499 is a one-off payment covering your entire break and 3 months back. After that, if you want to keep the momentum going, we can continue from £99 per month. No hidden fees, cancel anytime."
    },
  ];

  const examples = [
    {
      name: "Marcus",
      role: "Barber — 9 months away",
      message: "Hey Jamie, it's Marcus — just wanted to let you know I'm back in the chair from 1st October. You've always been one of my regulars and I'd love to have you back. First slots are already going — grab yours here: [Link]"
    },
    {
      name: "Priya",
      role: "Freelance Designer — returning after maternity leave",
      message: "Hi Sarah, it's Priya — I'm officially back after maternity leave and ready to take on new projects from November. I'd love to reconnect. Here's my updated booking link: [Link]"
    },
    {
      name: "James",
      role: "Chiropractor — returning after sabbatical",
      message: "Hi Tom, it's James — I'm back in the clinic from 3rd November and wanted to reach out to my regulars first. If your back's been giving you grief while I've been away, let's get you booked in. Here's my link: [Link]"
    },
  ];

  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            className="mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center max-w-3xl mx-auto text-white">
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Crown className="w-4 h-4" />
              Concierge
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              Full-Service Relaunch
            </h1>
            <p className="text-xl mb-6 opacity-90 max-w-2xl mx-auto">
              Full presence management from the day you leave to 3 months after you return. You focus on your break — we make sure your business never misses a beat.
            </p>
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-8">
              <UserCheck className="w-4 h-4" />
              <span className="text-sm font-medium">Managed by a real human, start to finish</span>
            </div>
            <div className="text-5xl font-bold mb-8">From £499</div>
            <a href="mailto:hello@ineverleft.co.uk">
              <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
                Get in Touch
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            What's included
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Everything in Pro, plus a dedicated human account manager and 3 full months of post-return support.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 border-border">
              <UserCheck className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Your own account manager</h3>
              <p className="text-muted-foreground leading-relaxed">A real person — not a bot. They know your name, your industry, and your comeback story. One human, full accountability, from day one to 3 months after your return.</p>
            </Card>
            <Card className="p-8 border-border">
              <CalendarCheck className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">3 months post-return support</h3>
              <p className="text-muted-foreground leading-relaxed">Month 1: 2 posts per week and DMs managed. Month 2: 1 post per week and an SMS nudge to non-rebookers. Month 3: 1 post per week, performance report, and handover pack.</p>
            </Card>
            <Card className="p-8 border-border">
              <BarChart3 className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Full return campaign</h3>
              <p className="text-muted-foreground leading-relaxed">Pre-return build-up, daily launch week content, and DMs monitored throughout — all managed by your account manager.</p>
            </Card>
            <Card className="p-8 border-border">
              <Sparkles className="w-8 h-8 text-primary mb-5" />
              <h3 className="text-xl font-semibold text-card-foreground mb-3">Optional add-ons</h3>
              <p className="text-muted-foreground leading-relaxed">Additional platforms, premium content via Company Content, and extended monthly management available. Build the package that is right for you.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing clarity */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Simple, transparent pricing</h2>
          <p className="text-xl text-muted-foreground mb-8">
            £499 — your entire break managed, plus 3 months back on your feet. After that, if you want to keep the momentum going, we can continue from £99/month.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-1">Base — £499</div>
              <p className="text-sm text-muted-foreground">Entire break plus 3 months back</p>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-1">Continue — from £99/month</div>
              <p className="text-sm text-muted-foreground">Ongoing posts, reporting, booking management</p>
            </div>
            <div className="p-4 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-1">Add-ons — from £49</div>
              <p className="text-sm text-muted-foreground">Extra platforms, premium content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground">Who It Is For</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Whether you have been away for months or years — this one is for the big return.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-border">
              <Users className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You have been away a while and want everything handled — no DIY, no guesswork, no chasing.
              </p>
            </Card>
            <Card className="p-8 border-border">
              <Zap className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You want a dedicated human managing your comeback from start to finish — not just a campaign but a proper relaunch.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How the timing works */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">How the timing works</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Before you leave</div>
              <p className="text-muted-foreground">Message 1 goes out by email or SMS. Account manager assigned, content plan approved, everything scheduled. Clients know you are taking a break and when you will be back.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Every month you are away</div>
              <p className="text-muted-foreground">One keep-warm post goes out automatically — countdown themes, back-soon messaging, early booking teasers. Your audience never forgets you exist.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">4 weeks before return</div>
              <p className="text-muted-foreground">Message 2 goes out to your full contact list.* Return campaign begins building. Early booking teasers ramp up.</p>
              <p className="text-xs text-muted-foreground mt-3">*Sent by SMS by default — just let us know if you prefer email.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Return week</div>
              <p className="text-muted-foreground">Message 3 fires by email and SMS. Daily content published all week. DMs monitored so nothing gets missed. Maximum visibility, maximum bookings.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Months 1 to 3 back</div>
              <p className="text-muted-foreground">Month 1: 2 posts per week, bookings logged. Month 2: 1 post per week, SMS nudge to non-rebookers, check-in call. Month 3: 1 post per week, performance report, handover pack.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-primary/50 bg-primary/5">
              <div className="text-primary font-bold mb-2">After that — your call</div>
              <p className="text-muted-foreground">If you want to keep the momentum going, we can continue from £99/month. Or take what we have built and run with it yourself. Either way, you are back in business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Content */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-10 bg-card rounded-2xl border border-border text-center">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">Premium content add-on</p>
            <h3 className="text-2xl font-bold text-foreground mb-4">Need video, photography or animation?</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              Our friends at Company Content are a creative collaboration of photographers, videographers and animators — the people behind campaigns for Selfridges, BBC, Royal Mail and more. If your comeback needs content that really makes an impact, we will make the introduction.
            </p>
            <a href="https://company-content.webflow.io" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Meet Company Content
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* What it actually looks like */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">What it actually looks like</h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14">
    
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examples.map((example) => (
              <div key={example.name} className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{example.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{example.name}</p>
                    <p className="text-xs text-muted-foreground">{example.role}</p>
                  </div>
                </div>
                <div className="pl-4 border-l-2 border-primary/30">
                  <MessageSquare className="w-6 h-6 text-primary/20 mb-2" />
                  <p className="text-muted-foreground leading-relaxed italic">{example.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">Good to know</h2>
          <p className="text-lg text-muted-foreground text-center mb-14">Everything you would want to ask before you commit.</p>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left font-semibold text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to make a big comeback?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            £499 — your entire break managed, plus 3 months back on your feet. After that, if you want to keep the momentum going, we can continue from £99/month.
          </p>
          <a href="mailto:hello@ineverleft.co.uk">
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
              Get in Touch
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConciergePackage;