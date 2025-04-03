
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`flex flex-col md:flex-row gap-8 items-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <div className="max-w-xl text-left">
            <div className="mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] rounded-full mb-4"></div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white uppercase tracking-wide">
                ГОТОВА К ПЕРЕМЕНАМ? Я ЗДЕСЬ!
              </h2>
            </div>
            <p className="text-lg text-gray-300 mb-10 font-medium">
              Хочешь понять себя и близких через цифры? Всё начинается с простого шага — пиши мне, и мы разберём твою карту вместе. Мой бот в Telegram ждёт твою дату рождения и запрос — это твой старт к ясности. Я рядом, чтобы помочь тебе найти тепло и ответы, которые ты ищешь. Давай сделаем это сейчас!
            </p>
            
            <div className={`${isVisible ? 'animate-fade-in-up animate-delay-200' : 'opacity-0'}`}>
              <Button size="lg" className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#4A6D5C] hover:to-[#2D5542] text-white uppercase shadow-md transition-all duration-300 rounded-lg">
                <a
                  href="https://t.me/NeikaSparkBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Написать в Telegram
                </a>
              </Button>
            </div>
            
            <p className={`mt-6 text-gray-300 ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
              Старт здесь: <a href="https://t.me/NeikaSparkBot" target="_blank" rel="noopener noreferrer" className="text-[#A8D5BA] hover:text-white hover:underline font-semibold">@NeikaSparkBot</a>
            </p>
          </div>
          
          <div className={`flex-1 ${isVisible ? 'animate-fade-in-up animate-delay-300' : 'opacity-0'}`}>
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-gray-700/30">
              <img 
                src="/images/contact-photo.jpg" // Замени на свой путь
                alt="Ольга Хаустова - нумерологическая консультация" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(45,85,66,0.5)] to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
