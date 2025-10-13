import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Wedding Photographer",
      location: "Edinburgh",
      content: "After 18 months traveling Asia, I was terrified about rebuilding my wedding photography business. BeRightBack's Professional Package helped me reconnect with past clients and book my calendar solid within 3 months. The personalized strategy made all the difference.",
      rating: 5
    },
    {
      name: "James Thompson", 
      role: "UX Design Consultant",
      location: "London",
      content: "Coming back from maternity leave felt overwhelming. The Concierge Package took care of everything - client outreach, portfolio updates, even managed my LinkedIn presence. I secured three major projects before I even officially 'returned' to work.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Wellness Coach",
      location: "Manchester", 
      content: "The Starter Package was perfect for my budget and gave me all the templates and strategies I needed. The 30-day comeback calendar kept me organized and motivated. My client base is now larger than before I took my break!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Success Stories From Fellow Freelancers  
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real UK freelancers who successfully rebuilt their businesses with BeRightBack
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-8 bg-card rounded-xl shadow-soft card-hover h-full">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <svg key={starIndex} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  <blockquote className="text-card-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="border-t pt-4 mt-auto">
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.location}</div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Ready to write your own success story?</p>
          <div className="inline-flex items-center space-x-2">
            <span className="text-accent font-semibold">✓</span>
            <span className="text-foreground">Join 200+ UK freelancers who've successfully returned with BeRightBack</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;