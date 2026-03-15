const sections = [
  {
    title: "1. About These Terms",
    intro: "These Terms & Conditions govern your use of the I Never Left service and website at ineverleft.co.uk. By purchasing a package or using our service, you agree to these terms. Please read them carefully. These terms are governed by the laws of England & Wales.",
    bullets: [],
  },
  {
    title: "2. Our Service",
    intro: "I Never Left provides freelance re-engagement campaign services, including:",
    bullets: [
      "Starter — a one-off campaign with up to 100 contacts and 3 personalised messages.",
      "Pro — an extended campaign with up to 200 contacts, keep-warm posts and 30 days tracking.",
      "Concierge — a full-service campaign with unlimited contacts, a dedicated account manager and 3 months post-return support.",
    ],
  },
  {
    title: "3. Purchasing a Package",
    intro: "When you purchase a package, you will be asked to provide your details, upload a contact list and select your return date. A consultation call will be arranged within 24 hours of purchase. No campaign messages will be sent until you have reviewed and approved all content.",
    bullets: [],
  },
  {
    title: "4. Your Responsibilities",
    intro: "By using our service, you confirm that:",
    bullets: [
      "You have obtained the necessary consent from contacts in your uploaded list to receive marketing messages.",
      "The contact information you provide is accurate and lawfully obtained.",
      "You are a freelancer, sole trader, or self-employed individual returning from a career break.",
      "You will not use our service to send unsolicited, misleading or unlawful communications.",
    ],
  },
  {
    title: "5. Payment",
    intro: "All prices are listed in GBP and are inclusive of VAT where applicable. Payment is processed securely via Stripe. For Starter and Pro packages, payment is taken in full at the time of purchase. For Concierge packages, a deposit may be required with the balance due prior to campaign launch. We reserve the right to adjust pricing with reasonable notice.",
    bullets: [],
  },
  {
    title: "6. Cancellations & Refunds",
    intro: "Cancellation and refund terms are as follows:",
    bullets: [
      "Cancellation before campaign build begins — full refund minus a £25 administration fee.",
      "Cancellation after campaign build but before messages are sent — 50% refund.",
      "Cancellation after messages have been sent — no refund is available.",
      "If we are unable to deliver your campaign due to circumstances on our end, a full refund will be issued.",
    ],
  },
  {
    title: "7. Upgrades",
    intro: "You may upgrade your package at any point before your return campaign fires. The difference in price between packages will be charged at the time of upgrade. Downgrades are not permitted once campaign build has commenced.",
    bullets: [],
  },
  {
    title: "8. Intellectual Property",
    intro: "All campaign content created by I Never Left on your behalf remains your property once delivered. Our website content, branding, and materials remain the intellectual property of I Never Left and may not be reproduced without written permission.",
    bullets: [],
  },
  {
    title: "9. Limitation of Liability",
    intro: "I Never Left will not be liable for any indirect, incidental or consequential loss arising from your use of our service, including but not limited to loss of revenue, clients or business opportunity. Our total liability in any circumstance is limited to the amount you paid for your package. Nothing in these terms limits our liability for fraud, death or personal injury caused by our negligence.",
    bullets: [],
  },
  {
    title: "10. Changes to These Terms",
    intro: "We may update these Terms & Conditions from time to time. We will notify you of material changes by email or by posting a notice on our website. Continued use of the service after changes constitutes acceptance of the updated terms. The current version is always available at ineverleft.co.uk/terms.",
    bullets: [],
  },
  {
    title: "11. Contact",
    intro: "For any questions about these terms, please contact us at hello@ineverleft.co.uk.",
    bullets: [],
  },
];

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-muted-foreground text-lg">I Never Left &nbsp;·&nbsp; Effective March 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        {sections.map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold text-foreground mb-4 pb-2 border-b border-border">
              {section.title}
            </h2>
            {section.intro && (
              <p className="text-muted-foreground leading-relaxed mb-4">{section.intro}</p>
            )}
            {section.bullets.length > 0 && (
              <ul className="space-y-3">
                {section.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1 shrink-0">✦</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {/* Footer note */}
        <div className="border-t border-border pt-8 text-sm text-muted-foreground">
          <p>Registered in England & Wales. For questions, contact <a href="mailto:hello@ineverleft.co.uk" className="text-primary hover:underline">hello@ineverleft.co.uk</a></p>
        </div>
      </div>
    </div>
  );
};

export default Terms;