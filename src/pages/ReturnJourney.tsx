import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Upload, Download, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ReturnJourney = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Form state
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    businessName: "",
    businessType: "",
    phone: "",
    returnDate: null as Date | null,
    package: "",
    channels: [] as string[],
    messagetone: "",
    customTone: "",
    bookingUrl: "",
    dataConsent: false,
    termsConsent: false,
    marketingConsent: false,
  });

  const [contactListFile, setContactListFile] = useState<File | null>(null);
  const [socialImages, setSocialImages] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    {
      id: "starter",
      name: "Starter",
      price: "£99",
      features: ["Up to 50 clients and industry contacts", "Single channel", "Basic support"],
    },
    {
      id: "pro",
      name: "Pro", 
      price: "£249",
      features: ["Up to 200 clients and industry contacts", "Multi-channel", "Priority support", "Social media posts"],
    },
    {
      id: "concierge",
      name: "Concierge",
      price: "from £499",
      features: ["Unlimited clients and industry contacts", "Full service", "Dedicated account manager", "Complete campaign management"],
    },
  ];

  const channels = [
    { id: "sms", label: "SMS" },
    { id: "email", label: "Email" },
    { id: "linkedin", label: "LinkedIn" },
    { id: "instagram", label: "Instagram" },
    { id: "facebook", label: "Facebook" },
    { id: "twitter", label: "Twitter/X" },
  ];

  const tones = [
    { id: "professional", label: "Professional" },
    { id: "cheeky", label: "Cheeky" },
    { id: "warm", label: "Warm & Friendly" },
    { id: "confident", label: "Confident" },
    { id: "custom", label: "Custom (specify below)" },
  ];

  const handleChannelChange = (channelId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      channels: checked 
        ? [...prev.channels, channelId]
        : prev.channels.filter(c => c !== channelId)
    }));
  };

  const handleContactListUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setContactListFile(file);
    }
  };

  const handleSocialImagesUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setSocialImages(prev => [...prev, ...files]);
  };

  const removeSocialImage = (index: number) => {
    setSocialImages(prev => prev.filter((_, i) => i !== index));
  };

  const downloadTemplate = () => {
    const csvContent = "Name,Channel Preference,Phone,Email,Notes\nJohn Smith,SMS,07123456789,john@example.com,Previous client\nJane Doe,Email,,jane@example.com,Potential collaboration";
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'contact-list-template.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert lead data into Supabase
      const { error } = await supabase
        .from('Leads')
        .insert({
          'Full name': formData.fullName,
          'Email': formData.email,
          'Field of work': formData.businessType,
          'Phone': formData.phone,
        });

      if (error) throw error;

      toast({
        title: "Journey Started!",
        description: "We've received your details and will be in touch within 24 hours to discuss your return campaign.",
      });

      // Navigate to a confirmation page or back to home
      navigate("/");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="block text-foreground">Start Your</span>
            <span className="gradient-text block">Return Journey</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Let's create a campaign that announces your return and re-energizes your professional network. 
            All data is handled securely and deleted after your campaign completes.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Contact List Upload */}
          <Card>
            <CardHeader>
              <CardTitle>1. Upload Your Clients and Industry Contacts List</CardTitle>
              <CardDescription>
                Upload your clients and industry contacts list in Excel or CSV format. We'll handle your data securely and delete files after your campaign.
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
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Template
                  </Button>
                </div>
                {contactListFile && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected: {contactListFile.name}
                  </p>
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

          {/* Personal & Business Details */}
          <Card>
            <CardHeader>
              <CardTitle>2. Your Details</CardTitle>
              <CardDescription>
                Tell us about yourself and your business for personalized campaign messaging.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="businessName">Business/Brand Name *</Label>
                  <Input
                    id="businessName"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="businessType">Type of Business/Sector</Label>
                <Select value={formData.businessType} onValueChange={(value) => setFormData(prev => ({ ...prev, businessType: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consulting">Consulting</SelectItem>
                    <SelectItem value="design">Design & Creative</SelectItem>
                    <SelectItem value="marketing">Marketing & PR</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="writing">Writing & Content</SelectItem>
                    <SelectItem value="coaching">Coaching & Training</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Return Date Selection */}
          <Card>
            <CardHeader>
              <CardTitle>3. Return Date</CardTitle>
              <CardDescription>
                When are you "back" and ready for your campaign to launch?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label>Campaign Launch Date *</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal mt-2",
                        !formData.returnDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.returnDate ? format(formData.returnDate, "PPP") : "Select your return date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.returnDate || undefined}
                      onSelect={(date) => setFormData(prev => ({ ...prev, returnDate: date || null }))}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>

          {/* Package Selection */}
          <Card>
            <CardHeader>
              <CardTitle>4. Choose Your Package</CardTitle>
              <CardDescription>
                Select the campaign package that best fits your needs and contact list size.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={formData.package}
                onValueChange={(value) => setFormData(prev => ({ ...prev, package: value }))}
                className="space-y-4"
              >
                {packages.map((pkg) => (
                  <div key={pkg.id} className="border rounded-lg p-4 hover:border-primary transition-colors">
                    <div className="flex items-start space-x-3">
                      <RadioGroupItem value={pkg.id} id={pkg.id} className="mt-1" />
                      <div className="flex-1">
                        <Label htmlFor={pkg.id} className="text-base font-semibold cursor-pointer">
                          {pkg.name} - {pkg.price}
                        </Label>
                        <ul className="mt-2 space-y-1">
                          {pkg.features.map((feature, index) => (
                            <li key={index} className="text-sm text-muted-foreground">
                              • {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Communication Preferences */}
          <Card>
            <CardHeader>
              <CardTitle>5. Communication Channels</CardTitle>
              <CardDescription>
                Which channels would you like us to use for your return campaign?
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-base font-medium">Select Channels</Label>
                <div className="grid md:grid-cols-3 gap-3 mt-3">
                  {channels.map((channel) => (
                    <div key={channel.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={channel.id}
                        checked={formData.channels.includes(channel.id)}
                        onCheckedChange={(checked) => handleChannelChange(channel.id, checked as boolean)}
                      />
                      <Label htmlFor={channel.id} className="cursor-pointer">
                        {channel.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Message Tone</Label>
                <RadioGroup
                  value={formData.messagetone}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, messagetone: value }))}
                  className="grid md:grid-cols-2 gap-3 mt-3"
                >
                  {tones.map((tone) => (
                    <div key={tone.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={tone.id} id={tone.id} />
                      <Label htmlFor={tone.id} className="cursor-pointer">
                        {tone.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                {formData.messagetone === "custom" && (
                  <div className="mt-3">
                    <Label htmlFor="customTone">Describe your preferred tone</Label>
                    <Textarea
                      id="customTone"
                      value={formData.customTone}
                      onChange={(e) => setFormData(prev => ({ ...prev, customTone: e.target.value }))}
                      placeholder="e.g., Enthusiastic but humble, with a touch of humor..."
                      className="mt-2"
                    />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Social Media Images */}
          <Card>
            <CardHeader>
              <CardTitle>6. Brand Images for Social Posts</CardTitle>
              <CardDescription>
                Upload images we can use for your social media announcements (JPG, PNG, up to 5MB each).
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="social-images">Upload Brand Images</Label>
                <Input
                  id="social-images"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleSocialImagesUpload}
                  className="mt-2 cursor-pointer"
                />
              </div>
              
              {socialImages.length > 0 && (
                <div>
                  <Label className="text-sm font-medium">Selected Images:</Label>
                  <div className="mt-2 space-y-2">
                    {socialImages.map((file, index) => (
                      <div key={index} className="flex items-center justify-between bg-muted p-2 rounded">
                        <span className="text-sm">{file.name}</span>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeSocialImage(index)}
                        >
                          Remove
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="bg-muted p-3 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Image Guidelines:</strong> High-quality photos of you, your work, or your brand. 
                  Minimum 1080x1080px for best results. We'll optimize them for each platform.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Booking Link */}
          <Card>
            <CardHeader>
              <CardTitle>7. Booking Integration (Optional)</CardTitle>
              <CardDescription>
                Provide your calendar or booking system URL to include in campaign messages.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="bookingUrl">Booking/Calendar URL</Label>
                <Input
                  id="bookingUrl"
                  type="url"
                  value={formData.bookingUrl}
                  onChange={(e) => setFormData(prev => ({ ...prev, bookingUrl: e.target.value }))}
                  placeholder="https://calendly.com/yourname or your booking link"
                  className="mt-2"
                />
              </div>
            </CardContent>
          </Card>

          {/* Consent & Legal */}
          <Card>
            <CardHeader>
              <CardTitle>8. Consent & Legal</CardTitle>
              <CardDescription>
                Please confirm your consent for data processing and campaign execution.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="dataConsent"
                    checked={formData.dataConsent}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, dataConsent: checked as boolean }))}
                  />
                  <Label htmlFor="dataConsent" className="text-sm leading-relaxed cursor-pointer">
                    I consent to BRB processing my personal and business data to execute my return campaign. 
                    I understand data will be securely deleted within 7 days of campaign completion. *
                  </Label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="termsConsent"
                    checked={formData.termsConsent}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsConsent: checked as boolean }))}
                  />
                  <Label htmlFor="termsConsent" className="text-sm leading-relaxed cursor-pointer">
                    I agree to the Terms of Service and Privacy Policy. *
                  </Label>
                </div>
                
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="marketingConsent"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked) => setFormData(prev => ({ ...prev, marketingConsent: checked as boolean }))}
                  />
                  <Label htmlFor="marketingConsent" className="text-sm leading-relaxed cursor-pointer">
                    I'd like to receive updates about new BRB services and freelancer resources.
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit */}
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <Button
                  type="submit"
                  size="lg"
                  disabled={!formData.dataConsent || !formData.termsConsent || isSubmitting}
                  className="px-8 py-3"
                >
                  {isSubmitting ? "Starting Your Journey..." : "Start My Return Campaign"}
                </Button>
                
                <div className="text-sm text-muted-foreground max-w-md mx-auto">
                  <p className="font-medium mb-2">What happens next:</p>
                  <ul className="text-left space-y-1">
                    <li>• We'll review your details within 24 hours</li>
                    <li>• Schedule a brief consultation call</li>
                    <li>• Finalize your campaign strategy</li>
                    <li>• Launch your return announcement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ReturnJourney;