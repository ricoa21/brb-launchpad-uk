import Hero from "@/components/Hero";
import Problem from "@/components/Problem";  
import Audience from "@/components/Audience";
import HowItWorks from "@/components/HowItWorks";
import ServicesComparison from "@/components/ServicesComparison";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Audience />
      <HowItWorks />
      <ServicesComparison />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
