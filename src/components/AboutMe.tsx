
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutMe = () => {
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation<HTMLDivElement>(0.1);
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation<HTMLDivElement>(0.1);
  
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div 
            ref={imageRef}
            className={`w-full lg:w-1/2 transition-all duration-700 mb-8 lg:mb-0 ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="rounded-2xl overflow-hidden shadow-xl max-w-md mx-auto transform transition-all duration-300 hover:scale-[1.02] border border-gray-200">
              <AspectRatio ratio={3/4} className="bg-gray-100">
              <img 
                  src="/images/olga-photo.jpg" // Укажи правильный путь к файлу
                  alt="Ольга Хаустова" 
                  className="h-full w-full object-cover" // object-cover сохраняет пропорции
                />
              </AspectRatio>
            </div>
          </div>
          
          <div 
            ref={textRef}
            className={`w-full lg:w-1/2 transition-all duration-700 delay-300 ${textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="mb-8">
              <div className="w-16 h-1 bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] rounded-full mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5D9B89] to-[#2D5542] uppercase tracking-wide relative inline-block">
                ТВОЙ ПРОВОДНИК В МИР ЦИФР
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#5D9B89]/70 to-transparent rounded-full"></span>
              </h2>
            </div>
            <div className="text-gray-700 space-y-4">
              <p>
                Привет, я Ольга! Было время, когда я не могла достучаться до близких — с сыном сплошной разлад, с родными холодная тишина, общение шло через силу.
              </p>
              <p>
                Я выдохлась от этого и в 2023 году сказала себе: пора что-то менять. Так я наткнулась на метод Александрова.
              </p>
              <p>
                Это не про фокусы — цифры просто взяли и показали: у каждого свой ритм и свои причины спорить или молчать. И вот оно: с сыном мы теперь на одной волне, с родными появился тот самый уют, а с мужем — лёгкость и открытость.
              </p>
              <p className="font-medium text-[#2D5542]">
                Теперь я здесь для тебя — чтобы ты тоже нашла эту ясность, поняла себя и тех, кто рядом. Хочешь наладить свою жизнь через цифры? Давай начнём этот путь вместе!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
