import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Trash2, Lock, HelpCircle, FileText } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      icon: Shield,
      question: "How is my data protected?",
      answer: "All information is encrypted and only accessed by your dedicated campaign manager. We use industry-standard security protocols. Your contact list data is permanently deleted within 30 days of your campaign completing. We never share or sell your information to third parties."
    },
    {
      icon: Trash2,
      question: "What if I want my data deleted?",
      answer: "You can request data deletion at any time during or after your campaign. Simply contact us at hello@ineverleft.co.uk and your information will be permanently removed from our systems. We provide written confirmation once deletion is complete."
    },
    {
      icon: Lock,
      question: "Do I need to share my passwords?",
      answer: "Absolutely not. All integrations use secure OAuth authentication or API tokens. You maintain full control of your accounts at all times. We never ask for, store, or access your passwords."
    },
    {
      icon: HelpCircle,
      question: "What happens after I sign up?",
      answer: "After signup, you'll complete a quick intake form about your business and clients. Within 24 hours, we'll be in touch to arrange a brief consultation call. We then build your campaign, you approve everything, and we handle the rest."
    },
    {
      icon: FileText,
      question: "Are you GDPR compliant?",
      answer: "Yes, fully. We only process data necessary for your campaign, maintain transparent data handling practices, and ensure your rights to access, rectify, and erase your data at any time. All our practices align with UK GDPR and the Data Protection Act 2018. We are registered with the ICO."
    },
    {
      icon: Shield,
      question: "How do you handle client contact lists?",
      answer: "Your uploaded contact list is used solely to deliver your campaign — nothing else. We act as a data processor on your behalf. All contact data is permanently deleted within 30 days of your campaign completing. By uploading a list, you confirm you have the necessary consent to contact those individuals."
    }
  ];

  return (
    <section className="py-20 bg-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Your security and privacy are our top priorities
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-soft hover:shadow-medium transition-shadow"
            >
              <AccordionTrigger className="hover:no-underline py-6">
                <div className="flex items-center gap-4 text-left">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <faq.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-lg text-foreground">
                    {faq.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-14">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

<div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
  <h3 className="text-2xl font-bold mb-3 text-foreground">
    Full Compliance Documentation
  </h3>
  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
    For complete details about our data handling, security practices, and GDPR compliance, please review our comprehensive policy documents.
  </p>
  
    href="/compliance"
    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
  >
    <FileText className="w-5 h-5" />
    View Full Compliance Documentation
  </a>
</div>

export default FAQ;