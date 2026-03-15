const sections = [
  {
    title: "1. Who We Are",
    intro: "I Never Left (\"we\", \"us\", \"our\") is a UK-based freelance re-engagement service. You can contact us at hello@ineverleft.co.uk.",
    bullets: [],
  },
  {
    title: "2. What Data We Collect",
    intro: "We collect the following categories of personal data:",
    bullets: [
      "Name and email address — provided when you sign up or contact us via our website form.",
      "Client contact lists — CSV files you upload containing names, email addresses and/or phone numbers of your clients.",
      "Payment details — processed securely via Stripe. We do not store card details directly.",
      "Usage data and cookies — including IP address, browser type, pages visited and time spent on site.",
      "LinkedIn and social data — if you contact us or interact with us via social media platforms.",
    ],
  },
  {
    title: "3. How We Use Your Data",
    intro: "We use your personal data for the following purposes:",
    bullets: [
      "To deliver the re-engagement campaign service you have purchased.",
      "To communicate with you about your campaign, account or enquiry.",
      "To process payments securely via our payment provider Stripe.",
      "To improve our website and services through anonymised usage analytics.",
      "To comply with our legal obligations.",
    ],
  },
  {
    title: "4. Your Client Contact Lists",
    intro: "When you upload a contact list as part of our service, you confirm that you have obtained the necessary consent from those individuals to receive marketing communications from you, and that you are authorised to share their data with us for campaign delivery purposes. We act as a data processor on your behalf for this data. We will not use your client contact list for any purpose other than delivering your campaign. All contact list data is deleted within 30 days of your campaign completing.",
    bullets: [],
  },
  {
    title: "5. Legal Basis for Processing",
    intro: "We process your personal data under the following legal bases:",
    bullets: [
      "Contract — to fulfil the service you have purchased from us.",
      "Legitimate interests — to improve our services and communicate with prospective customers.",
      "Legal obligation — where we are required to process data to comply with applicable law.",
      "Consent — where you have explicitly opted in, for example to receive marketing emails.",
    ],
  },
  {
    title: "6. Data Sharing",
    intro: "We do not sell your personal data. We may share data with trusted third-party service providers who assist us in operating our business, including:",
    bullets: [
      "Stripe — payment processing.",
      "Zoho Mail — email communications.",
      "Vercel — website hosting.",
      "Buffer — social media scheduling (Pro and Concierge packages).",
    ],
  },
  {
    title: "7. Data Retention",
    intro: "We retain your personal data only for as long as necessary. Client contact lists are deleted within 30 days of campaign completion. Account and transaction data is retained for 7 years in line with HMRC requirements. You may request deletion of your data at any time by contacting us at hello@ineverleft.co.uk.",
    bullets: [],
  },
  {
    title: "8. Your Rights",
    intro: "Under UK GDPR, you have the following rights:",
    bullets: [
      "Right to access — request a copy of the data we hold about you.",
      "Right to rectification — ask us to correct inaccurate data.",
      "Right to erasure — ask us to delete your data in certain circumstances.",
      "Right to restrict processing — ask us to limit how we use your data.",
      "Right to data portability — receive your data in a portable format.",
      "Right to object — object to processing based on legitimate interests.",
    ],
  },
  {
    title: "9. Cookies",
    intro: "Our website uses cookies to improve your experience and analyse site usage. You can control cookie settings through your browser. We use essential cookies (required for the site to function) and analytics cookies (to understand how visitors use the site). We do not use advertising cookies.",
    bullets: [],
  },
  {
    title: "10. Contact & Complaints",
    intro: "If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us at hello@ineverleft.co.uk. You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk if you believe your data has been handled incorrectly.",
    bullets: [],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest">Legal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Privacy Policy</h1>
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

export default PrivacyPolicy;