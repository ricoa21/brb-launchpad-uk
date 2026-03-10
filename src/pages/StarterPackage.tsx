import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Mail, Clock, Instagram, Users, Zap, MessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const StarterPackage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Starter — I Never Left";
  }, []);

  const faqs = [
    {
      question: "What do I need to provide?",
      answer: "Your contact list (up to 100 names, email addresses and/or phone numbers), a brief about your business and the service you offer, your preferred tone, and your booking link. That's it — we handle everything else."
    },
    {
      question: "Can I approve the messages before they go out?",
      answer: "Absolutely. We send you all three messages for sign-off before anything is scheduled. Nothing goes out without your say-so."
    },
    {
      question: "How long does setup take?",
      answer: "Once we receive your contact list and brief, we'll have your campaign ready within 48 hours. You approve, we schedule, done."
    },
    {
      question: "How are the messages sent?",
      answer: "The default sequence is Email then SMS then Email and SMS on return day, which is what we have found works best. If you would prefer a different combination — say all email or all SMS — just let us know when you sign up and we will tailor it for you."
    },
    {
      question: "Can I upgrade my plan?",
      answer: "Yes — and you can do it at any point before your return campaign fires. If you upgrade to Pro, you will get one keep-warm Instagram post for every month remaining in your break. So if you have got 6 months left, that is 6 posts. Upgrade earlier = more posts, more value. Just get in touch and we will sort it. The only thing we cannot do is upgrade after your final return message has gone out."
    },
    {
      question: "What if my return date changes?",
      answer: "No problem at all. Just let us know and we will reschedule the campaign around your new date. Dates shift — we are flexible."
    },
    {
      question: "How do the Instagram posts work?",
      answer: "We create both posts for you — designed, captioned, and ready to go. We will send them straight to you to publish yourself. No password sharing, no third-party access — just you posting great content that we have made for you. Takes about 30 seconds on your end."
    },
    {
      question: "What happens if some messages bounce or don't deliver?",
      answer: "We send everything from verified, trusted infrastructure to keep delivery rates high. If anything bounces we will let you know straight away. You can swap in replacement contacts within 48 hours and we will resend. Worth making sure your list is up to date before we kick off."
    },
    {
      question: "Is this a one-off payment or a subscription?",
      answer: "Starter is a one-off payment of £99. No monthly fees, no hidden costs, no surprises."
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
      <section className="relative py-24 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            className="mb-8"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-5 py-1.5 rounded-full text-sm font-semibold mb-6">
              Starter
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Your Simple Comeback
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              You have been away. We make sure your clients know you are back. A simple, one-off return campaign — no monthly fees, no faff.
            </p>
            <div className="text-5xl font-bold text-primary mb-8">£99</div>
            <Button size="lg" className="text-lg px-8 py-4 bg-foreground text-background hover:bg-foreground/90">
              Get Started — £99
            </Button>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-14 text-foreground">
            What You Get
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Mail,
                title: "Outreach to 100 contacts",
                description: "Personalised email and SMS messages sent to your clients and contacts on your behalf. Never generic, always in your voice.",
              },
              {
                icon: Clock,
                title: "3 perfectly timed messages",
                description: "One before you leave, one a month before your return, one when you are back. Keeps you front of mind the whole time.",
              },
              {
                icon: Instagram,
                title: "2 Instagram posts",
                description: "We create both posts for you — designed, captioned, and ready to go. You publish them yourself with one tap. No password sharing, ever.",
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
            Who It Is For
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-14">
            Whether you have been travelling the world, growing a tiny human, or just needed a breather — welcome back.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 border-border">
              <Users className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                Whether you have been travelling, had a baby, or just needed a break — if your client list is warm, Starter gets you back in business.
              </p>
            </Card>
            <Card className="p-8 border-border">
              <Zap className="w-8 h-8 text-primary mb-5" />
              <p className="text-lg text-card-foreground leading-relaxed">
                You want a simple, done-for-you relaunch without managing campaigns yourself.
              </p>
            </Card>
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
            Every message is written in your voice, for your clients. Here is what that looks like in the real world.
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

      {/* How the timing works */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">How the timing works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Before you leave</div>
              <p className="text-muted-foreground">Message 1 goes out by email. Clients know you are taking a break and when you will be back.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">4 weeks before return</div>
              <p className="text-muted-foreground">Message 2 goes out by SMS. Short, personal, and gets noticed. Clients start thinking about rebooking.</p>
            </div>
            <div className="p-8 bg-card rounded-xl border border-border">
              <div className="text-primary font-bold mb-2">Return day</div>
              <p className="text-muted-foreground">Message 3 fires by email and SMS. 2 Instagram posts sent to you ready to publish. Bookings open.</p>
            </div>
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
            Everything you would want to ask before you commit.
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
          <h2 className="text-4xl font-bold mb-6">Ready to come back?</h2>
          <Button size="lg" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
            Start Your Comeback — £99
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StarterPackage;