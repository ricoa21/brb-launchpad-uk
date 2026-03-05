import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Users, Globe, Instagram, MessageSquare, Zap, Quote } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProPackage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Pro — I Never Left";
  }, []);

  const faqs = [
    {
      question: "What do I need to provide?",
      answer: "Your contact list (up to 150 names, email addresses and/or phone numbers), a brief about your business, your preferred tone, your booking link, and your Instagram handle. We handle everything else including the GMB and WhatsApp setup."
    },
    {
      question: "Can I approve everything before it goes out?",
      answer: "Absolutely. Every message and every keep-warm post comes to you for sign-off first. Nothing is scheduled without your approval."
    },
    {
      question: "How do the monthly keep-warm posts work?",
      answer: "Once you sign up we create all your keep-warm posts in one go — you approve them once and we auto-schedule them monthly via Buffer. One post per month, up to 12 months maximum. You connect your Instagram to Buffer once, we load everything in, and it fires automatically. You can see every scheduled post and revoke access anytime."
    },
    {
      question: "How are the return week posts handled?",
      answer: "On your return week we publish 4 posts across 7 days — an announcement on day 1, behind the scenes on day 3, a booking reminder on day 5, and a wrap-up on day 7. All created by us, scheduled via Buffer, designed to keep you visible all week not just for one day."
    },
    {
      question: "How are the messages sent?",
      answer: "Message 1 goes out by email or SMS — whichever suits you best. Message 2 goes out by SMS about 4 weeks before your return. Message 3 fires by both email and SMS on return day for maximum reach. If you'd prefer a different combination just let us know when you sign up."
    },
    {
      question: "What if I don't have social media?",
      answer: "No problem. We swap all social posts — both the monthly keep-warm posts and the return week content — for additional email and SMS touchpoints instead. Same impact, different channels. Just let us know when you sign up."
    },
    {
      question: "Can I upgrade to Concierge?",
      answer: "Yes — at any point before your return campaign fires. Just get in touch and we'll work out a custom quote based on what you need. The difference will be charged at the Concierge rate."
    },
    {
      question: "What if my return date changes?",
      answer: "No problem. We'll reschedule your entire campaign and keep-warm schedule around your new date. Your Buffer queue updates too."
    },
    {
      question: "How does the GMB and WhatsApp setup work?",
      answer: "We update your Google My Business profile with your return date and updated details, and set up WhatsApp Business so clients can reach you easily. No passwords stored, ever."
    },
    {
      question: "What does the post-return support include?",
      answer: "For 30 days after your return we track engagement across your campaign — who opened, clicked, and replied. At the two week mark we send one SMS nudge to anyone who hasn't responded yet. After that the campaign is complete and you're back in business. Need more ongoing support? That's what Concierge is for."
    },
    {
      question: "What happens if some messages bounce or don't deliver?",
      answer: "We send everything from verified, trusted infrastructure to keep delivery rates high. If any emails or SMS messages bounce we'll let you know straight away. You can swap in a replacement contact within 48 hours and we'll resend. We can't guarantee delivery to contacts with outdated details — so it's worth checking your list is up to date before we start."
    },
    {
      question: "Is Pro a one-off payment?",
      answer: "The £249 covers your full campaign, all keep-warm posts, your return week content, and 30 days of post-return support. No hidden fees."
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
      message: "Hi Sarah, it's Priya — I'm officially back after maternity leave and ready to take on new projects from November. I'd love to reconnect and hear what you've been working on. Here's my updated booking link: [Link]"
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
      <section className="relative py-24 bg-gradient-to-br from-primary/20 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="outline" className="mb-8" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
              Pro
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Hands-Off Relaunch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              You're away for a while. We keep your audience warm the whole time — then make sure they're ready and waiting when you return.
            </p>
            <div className="text-5xl font-bold text-primary mb-8">£249</div>
            <Button size="lg" className="text-lg px-8 py-4 bg-foreground text-background hover:bg-foreground/90">
              Get Started — £249
            </Button>
          </div>
        </div>
      </section>

      {/* Everything in Starter, plus */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            Everything in Starter, plus:
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Users,
                title: "150 contacts",
                description: "Wider outreach to your full professional network, not just your closest clients.",
              },
              {
                icon: Globe,
                title: "Google My Business & WhatsApp",
                description: "We update your GMB profile and set up WhatsApp Business so clients can find and reach you easily.",
              },
              {
                icon: Instagram,
                title: "Keep Warm Monthly Posts",
                description: "One post per month during your entire break (up to 12 months). Pre-approved by you, auto-scheduled via Buffer. Your audience never forgets you exist.",
              },
              {
                icon: MessageSquare,
                title: "Engagement tracking",
                description: "See who's opening, clicking, and responding — so you know exactly how your comeback is landing.",
              },
            ].map((item) => (
              <Card key={item.title} className="p-8 border-border">
                <item.icon className="w-8 h-8 text-primary mb-5" />
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-6 text-foreground">
            Who It's For
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Whether you've been on a big adventure, on maternity leave, or taking time for yourself — you've earned this comeback.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-border">
              <Users className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You've built a strong professional reputation and want a comeback that matches it.
              </p>
            </Card>
            <Card className="p-8 border-border">
              <Zap className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You want deeper reach, more channels, and the data to know it's working.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How the timing works */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            How the timing works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Before you leave</div>
              <p className="text-muted-foreground">Message 1 goes out by email or SMS — whichever suits you best. Clients know you're taking a break and when you'll be back.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Day 1</div>
              <p className="text-muted-foreground">Your keep-warm posts are created, you approve them once via Buffer. Scheduled and ready to go.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Every month you're away</div>
              <p className="text-muted-foreground">One post goes out automatically. Countdown themes, back-soon messaging, early booking teasers. Your audience never forgets you exist.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">4 weeks before return</div>
              <p className="text-muted-foreground">Message 2 goes out by SMS to all 150 contacts. Short, personal, gets noticed. Clients start thinking about rebooking.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Return week</div>
              <p className="text-muted-foreground">Message 3 fires by email and SMS. 4 posts published across your return week — announcement, behind the scenes, booking reminder, wrap-up. Bookings open.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border border-primary/50 bg-primary/5">
              <div className="text-primary font-bold mb-2">Example ✦</div>
              <p className="text-muted-foreground">A barber takes 9 months off. Pro creates 9 monthly posts keeping their chair front of mind — then fires the full return campaign. By the time they're back, clients are already booked in. £249 total.</p>
            </div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">Includes 1 post per month of your break, up to 12 months maximum.</p>
        </div>
      </section>

      {/* 30 days after */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-8 bg-card rounded-xl border border-border">
            <div className="text-primary font-bold mb-2">30 days after your return</div>
            <p className="text-muted-foreground">We track engagement across your campaign — who opened, clicked, and replied. At the two week mark we send one SMS nudge to anyone who hasn't responded yet. Then you're done — and back in business.</p>
          </div>
        </div>
      </section>

      {/* What it actually looks like */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            What it actually looks like
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Every message is written in your voice, for your clients. Here's what that looks like in the real world.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {examples.map((example) => (
              <div
                key={example.name}
                className="bg-card rounded-2xl border border-border p-8 flex flex-col gap-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{example.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{example.name}</p>
                    <p className="text-xs text-muted-foreground">{example.role}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute -top-2 -left-1 text-primary/20">
                    <Quote className="w-8 h-8" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed italic pl-4 border-l-2 border-primary/30">
                    {example.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Good to know */}
      <section className="py-24 bg-muted/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Good to know
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-14">
            Everything you'd want to ask before you commit.
          </p>
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
      <section className="py-24 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for a proper comeback?</h2>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90 mb-4">
            Choose Pro — £249
          </Button>
          <p className="text-sm opacity-75">
            Includes 1 keep-warm post per month of your break, up to 12 months maximum.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProPackage;