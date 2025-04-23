import { useState } from "react";

// Declare ym as a global variable
declare const ym: any;
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import reviews from "@/data/reviews.json";
import { Helmet } from "react-helmet-async";

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});

  const toggleExpand = (id: number) => {
    setExpandedReviews(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemReviewed",
    "name": "Консультации нумеролога Ольги Хаустовой",
    "review": reviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "datePublished": review.date,
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": "5"
      },
      "reviewBody": review.text
    }))
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      <div className="container mx-auto px-4">
        <div ref={headerRef} className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] rounded-full"></div>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 uppercase tracking-wide ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            ЧТО ГОВОРЯТ ТЕ, КТО УЖЕ СО МНОЙ
          </h2>
          <p className={`text-center text-gray-700 mb-12 ${headerVisible ? 'animate-fade-in-up animate-delay-100' : 'opacity-0'}`}>
            Люди приходят ко мне за тем же, что и ты — за ясностью, теплом, ответами. Вот их правда — посмотри, что они пишут после консультаций.
          </p>
          
          <div ref={ref}>
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {reviews.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className={`h-full ${isVisible ? `animate-fade-in-right animate-delay-${100 * (index % 3)}` : 'opacity-0'}`}>
                      <Card className="h-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl min-w-[280px]">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-[#5D9B89]/20 flex items-center justify-center">
                              {testimonial.photo ? (
                                <img src={testimonial.photo} alt={testimonial.name} className="w-full h-full object-cover" />
                              ) : (
                                <span className="text-xl font-semibold text-[#4A6D5C]">{testimonial.name.charAt(0)}</span>
                              )}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">{testimonial.name}</p>
                              <div className="flex">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                          </div>
                          <p className={`text-gray-700 mb-4 ${expandedReviews[testimonial.id] ? '' : 'line-clamp-5'}`}>
                            {testimonial.text}
                          </p>
                          {testimonial.text.length > 200 && (
                            <button
                              onClick={() => toggleExpand(testimonial.id)}
                              className="text-[#5D9B89] hover:text-[#3A6E5A] text-sm mb-2"
                            >
                              {expandedReviews[testimonial.id] ? 'Свернуть' : 'Читать полностью'}
                            </button>
                          )}
                          <small className="text-gray-500 mt-auto">{new Date(testimonial.date).toLocaleDateString()}</small>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-6">
                <CarouselPrevious className="relative static mr-2 bg-[#5D9B89]/20 text-[#4A6D5C] hover:bg-[#5D9B89] hover:text-white" />
                <CarouselNext className="relative static ml-2 bg-[#5D9B89]/20 text-[#4A6D5C] hover:bg-[#5D9B89] hover:text-white" />
              </div>
            </Carousel>
          </div>
          
          <div className={`text-center mt-12 ${isVisible ? 'animate-fade-in-up animate-delay-400' : 'opacity-0'}`}>
          <Button
  className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#4A6D5C] hover:to-[#2D5542] text-white transition-all duration-300 uppercase shadow-md rounded-xl mr-4"
  onClick={() => {
    if (typeof ym !== "undefined") {
      ym(100763552, "reachGoal", "consultation_click");
    }
    window.open("https://t.me/NeikaSparkBot", "_blank");
  }}
>
  <span className="flex items-center">
    Записаться на консультацию
    <ArrowRight className="ml-2 h-4 w-4" />
  </span>
</Button>


            <Button variant="outline" className="border-[#5D9B89] text-[#4A6D5C] hover:bg-[#5D9B89]/10">
              <a href="/reviews" className="flex items-center">
                Все отзывы
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};