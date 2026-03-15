import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const COOKIE_KEY = "inl_cookie_consent";

type ConsentState = "accepted" | "declined" | null;

const CookieBanner = () => {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY) as ConsentState;
    if (!stored) {
      // Small delay so it doesn't flash immediately on load
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    } else {
      setConsent(stored);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
    // When you add analytics later, initialise it here
    // e.g. window.gtag('consent', 'update', { analytics_storage: 'granted' })
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, "declined");
    setConsent("declined");
    setVisible(false);
  };

  if (!visible || consent !== null) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6"
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">

          {/* Text */}
          <div className="flex-1 space-y-1">
            <p className="text-sm font-semibold text-foreground">
              🍪 We use cookies
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              We use essential cookies to keep the site working, and optional analytics cookies to understand how visitors use it. We never use advertising cookies or sell your data.{" "}
              <Link
                to="/compliance#cookies"
                className="text-primary hover:underline"
              >
                Cookie Policy
              </Link>
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={handleDecline}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-2 rounded-lg hover:bg-muted"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="text-xs font-semibold bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Accept all
            </button>
            <button
              onClick={handleDecline}
              className="text-muted-foreground hover:text-foreground transition-colors p-1"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CookieBanner;