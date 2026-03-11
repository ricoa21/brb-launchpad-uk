import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Download, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const ReturnJourney = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    businessType: "",
    phone: "",
    returnDate: null as Date | null,
    returnTime: "09:00",
    package: "",
    channels: [] as string[],
    bookingUrl: "",
    dataConsent: false,
    termsConsent: false,
    marketingConsent: false,
  });

  const [contactListFile, setContactListFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "£99",
      features: [
        "Outreach to 100 contacts",
        "3 personalised messages by email and SMS",
        "2 Instagram posts created for you to publish",
        "One-off price — no ongoing fees",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      price: "£249",
      features: [
        "Everything in Starter",
        "Outreach to 200 contacts",
        "1 keep-warm post per month while you are away (up to 12 months)",
        "Return week — 4 posts across 7 days via Buffer",
        "30 days engagement tracking after return",
      ],
    },
    {
      id: "concierge",
      name: "Concierge",
      price: "From £499",
      features: [
        "Everything in Pro",
        "Dedicated human account manager",
        "Full return campaign — daily content during launch week",
        "3 months post-return support included",
        "Continue from £99/month after that",
      ],
    },
  ];

  const channelsList = [
    { id: "sms", label: "SMS" },
    { id: "email", label: "Email" },
    { id: "instagram", label: "Instagram" },
  ];

  const handleChannelChange = (channelId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      channels: checked
        ? [...prev.channels, channelId]
        : prev.channels.filter((c) => c !== channelId),
    }));
  };

  const handleContactListUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setContactListFile(file);
  };

  const downloadTemplate = () => {
    const csvContent =
      "Name,Channel Preference,Phone,Email,Notes\nJohn Smith,SMS,07123456789,john@example.com,Previous client\nJane Doe,Email,,jane@example.com,Potential collaboration";
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact-list-template.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create FormData from state
      const formDataSubmit = new FormData();
      formDataSubmit.append("fullName", formData.fullName);
      formDataSubmit.append("email", formData.email);
      formDataSubmit.append("businessName", formData.businessName);
      formDataSubmit.append("businessType", formData.businessType);
      formDataSubmit.append("phone", formData.phone);
      formDataSubmit.append("returnDate", formData.returnDate ? format(formData.returnDate, "yyyy-MM-dd") : "");
      formDataSubmit.append("returnTime", formData.returnTime || "09:00");
      formDataSubmit.append("package", formData.package);
      formDataSubmit.append("channels", JSON.stringify(formData.channels));
      formDataSubmit.append("bookingUrl", formData.bookingUrl);
      formDataSubmit.append("marketingConsent", formData.marketingConsent.toString());
      formDataSubmit.append("dataConsent", formData.dataConsent.toString());
      formDataSubmit.append("termsConsent", formData.termsConsent.toString());
      
      if (contactListFile) {
        formDataSubmit.append("contactList", contactListFile);
      }

      const response = await fetch("https://formspree.io/f/xqapergy", {
        method: "POST",
        body: formDataSubmit,
        headers: { 
          "Accept": "application/json" 
        },
      });

      if (response.ok) {
        toast({
          title: "Journey Started!",
          description: "We have received your details and will be in touch within 24 hours.",
        });
        navigate("/");
      } else {
        const errorData = await response.json();
        console.error("Formspree error:", errorData);
        throw new Error(errorData.error || "Submission failed");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly at hello@ineverleft.co.uk",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="outline" onClick={() => navigate("/")} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-foreground">Start Your</span>
            <span className="gradient-text block">Comeback Journey</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Let's create a campaign that announces your return and re-energizes your professional network.
            All data is handled securely and deleted after your campaign completes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* 1. Contact List Upload */}
          <Card>
            <CardHeader>
              <CardTitle>1. Upload Your Client Contact List</CardTitle>
              <CardDescription>
                Download our template, fill in your client details, and upload it here. We handle your data securely and delete all files after your campaign completes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="contact-list">Contact List File</Label>
                <div className="mt-2 flex items-center gap-4">
                  <div className="flex-1">
                    <Input
                      id="contact-list"
                      type="file"
                      accept=".csv,.xlsx,.xls"
                      onChange={handleContactListUpload}
                      className="cursor-pointer"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={downloadTemplate}
                    className="flex items-center gap-2 shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    Download Template
                  </Button>
                </div>
                {contactListFile && (
                  <p className="text-sm text-muted-foreground mt-2">Selected: {contactListFile.name}</p>
                )}
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-medium text-foreground mb-2">GDPR Compliance</p>
                <p className="text-sm text-muted-foreground">
                  Your contact data is processed securely and will be permanently deleted within 7 days of campaign completion.
                  We only use this data to execute your return campaign as specified.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 2. Your Details */}
          <Card>
            <CardHeader>
              <CardTitle>2. Your Details</CardTitle>
              <CardDescription>Tell us about yourself and your business for personalised campaign messaging.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2
