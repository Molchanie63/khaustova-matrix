
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>(0.2);
  
  const testimonials = [
    {
      id: 1,
      name: "Анна",
      photo: "/testimonials/anna.jpg",
      text: "Ольга, не знаю, как вы это делаете, но каждое слово — правда! Я как будто увидела себя в зеркале, которое не врет. Теперь понимаю, почему у нас с мужем были конфликты, хотя оба хотели как лучше. Разговариваем теперь по-другому. Спасибо!",
      rating: 5,
    },
    {
      id: 2,
      name: "Ирина",
      photo: "/testimonials/irina.jpg",
      text: "Долго не решалась, думала — очередная эзотерика. Но Ольга объяснила все настолько четко, без воды и мистики, что теперь я понимаю: это просто метод, который работает. С дочкой-подростком отношения наладились, когда поняла ее ритм и мотивацию.",
      rating: 5,
    },
    {
      id: 3,
      name: "Сергей",
      photo: "/testimonials/sergey.jpg",
      text: "Скептически относился ко всему этому, но жена настояла. После разбора признаю: удивлен точностью. Особенно про работу и энергетические циклы — все один в один. Планирую теперь дела с учетом этих знаний, и правда легче идти стало.",
      rating: 5,
    },
    {
      id: 4,
      name: "Мария",
      photo: "/testimonials/maria.jpg",
      text: "Благодаря разбору совместимости с партнером, мы наконец смогли разобраться в постоянных конфликтах. Оказывается, мы просто воспринимаем информацию по-разному! Теперь знаем, как подстроиться друг под друга. Очень рекомендую.",
      rating: 5,
    },
    {
      id: 5,
      name: "Екатерина",
      photo: "/testimonials/ekaterina.jpg",
      text: "Попала на консультацию в период жизненного кризиса. Ольга не только показала мои сильные стороны, но и точно указала периоды, когда нужно активно действовать, а когда — отдыхать. Следуя этим рекомендациям, смогла добиться повышения без выгорания!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100">
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
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className={`h-full ${isVisible ? `animate-fade-in-right animate-delay-${100 * (index % 3)}` : 'opacity-0'}`}>
                      <Card className="h-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 rounded-xl">
                        <CardContent className="p-6 flex flex-col h-full">
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-[#5D9B89]/20 flex items-center justify-center">
                              <span className="text-xl font-semibold text-[#4A6D5C]">{testimonial.name.charAt(0)}</span>
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
                          <p className="text-gray-700 mb-4 flex-grow">{testimonial.text}</p>
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
            <Button className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#4A6D5C] hover:to-[#2D5542] text-white transition-all duration-300 uppercase shadow-md rounded-xl">
              <a
                href="https://t.me/NeikaSparkBot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Записаться на консультацию
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <p className="mt-4 text-gray-700">
              Жду тебя: <a href="https://t.me/NeikaSparkBot" target="_blank" rel="noopener noreferrer" className="text-[#5D9B89] font-semibold hover:underline">@NeikaSparkBot</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
