import { Button } from "@/components/ui/button";
import { Star, ArrowRight, User, Users, Heart, Calendar, Search, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { ServiceCard } from "@/components/ServiceCard";
import { Testimonials } from "@/components/Testimonials";
import { CalculatorSection } from "@/components/CalculatorSection";
import { MethodSection } from "@/components/MethodSection";
import { ContactSection } from "@/components/ContactSection";
import { FaqSection } from "@/components/FaqSection";
import { BlogSection } from "@/components/BlogSection";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Khaustova Matrix | Цифровой психоанализ",
    url: "https://khaustova-matrix.ru",
    description: "Погрузитесь в тайны чисел и раскройте истинное предназначение через матрицу личности с помощью цифрового психоанализа.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://khaustova-matrix.ru/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <Helmet>
        <title>Khaustova Matrix | Цифровой психоанализ</title>
        <meta
          name="description"
          content="Погрузитесь в тайны чисел и раскройте истинное предназначение через матрицу личности с помощью цифрового психоанализа."
        />
        <meta property="og:title" content="Khaustova Matrix | Цифровой психоанализ" />
        <meta
          property="og:description"
          content="Погрузитесь в тайны чисел и раскройте истинное предназначение через матрицу личности с помощью цифрового психоанализа."
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://khaustova-matrix.ru" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <div className="min-h-screen bg-gray-100">
        {/* Герой секция */}
        <HeroSection />

        {/* Обо мне */}
        <AboutMe />

        {/* Услуги */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-20 h-1 bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide mb-3 relative inline-block pb-2">
                Выбери свой разбор
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#5D9B89]/70 to-transparent rounded-full"></span>
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Через цифры я помогу тебе найти ответы и гармонию. От лёгкого старта до глубокого разбора — выбери, что нужно именно тебе.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<Star className="h-7 w-7" />}
                title="Быстрый разбор"
                description="Не знаешь, с чего начать? За 30 минут раскрою твои сильные стороны, уровень энергии и главную цель жизни — отличный старт к себе настоящему."
                duration="30–40 минут"
                price={2000}
              />

              <ServiceCard
                icon={<User className="h-7 w-7" />}
                title="Полная консультация"
                description="Потерялась в целях и эмоциях? Дам полный портрет личности — таланты, характер, циклы — и карту, как жить в согласии с собой."
                duration="1–2 часа"
                price={5000}
              />

              <ServiceCard
                icon={<Heart className="h-7 w-7" />}
                title="Совместимость пары"
                description="Устала от конфликтов или одиночества? Покажу, где в отношениях стабильность, а где подвох, и как понять друг друга через цифры."
                duration="2 часа"
                price={6000}
              />

              <ServiceCard
                icon={<Users className="h-7 w-7" />}
                title="Разбор детской матрицы"
                description="Хочешь быть ближе к ребёнку? Узнай его характер, как он видит мир и когда ему нужна поддержка — стань его проводником."
                duration="1,5 часа"
                price={5000}
              />

              <ServiceCard
                icon={<Search className="h-7 w-7" />}
                title="Разбор имени"
                description="Имя кажется просто звуком? Открою, как оно усиливает твою энергию и путь — лёгкий, но мощный инсайт."
                duration="зависит от запроса"
                price={1500}
              />

              <ServiceCard
                icon={<Calendar className="h-7 w-7" />}
                title="Личный календарь"
                description="Жизнь хаотична? Дам план на месяц или год — когда действовать, когда отдыхать, чтобы быть в своём ритме."
                duration="индивидуально"
                price={3000}
                note="Варианты: месяц (3000 ₽) / год (уточняется)"
              />
            </div>

            <div className="mt-14 bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-[#A8D5BA]/30 shadow-md max-w-3xl mx-auto hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#2D5542] mb-2">Специальное предложение</h3>
                  <p className="text-[#3A6E5A]">
                    Только до конца месяца для первых 10 клиентов! Быстрый разбор за 1500 ₽ вместо 2000 ₽ + мини-совет по твоей энергии.
                  </p>
                  <p className="font-medium mt-2">Пиши "Хочу попробовать" в Telegram!</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Button className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#4A6D5C] hover:to-[#2D5542] text-white rounded-lg shadow-md group-hover:shadow-lg group-hover:shadow-[#5D9B89]/20 transition-all duration-300">
                    <a href="https://t.me/NeikaSparkBot" target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Написать
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Почему это работает */}
        <MethodSection />

        {/* Попробуй сам */}
        <CalculatorSection />

        {/* Блог секция */}
        <BlogSection showBackButton={false} limit={3} />

        {/* Часто задаваемые вопросы */}
        <FaqSection />

        {/* Отзывы */}
        <Testimonials />

        {/* Контакты */}
        <ContactSection />

        {/* Футер */}
        <footer className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 overflow-hidden">
          {/* Декоративный узор */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRkZGRkZGIiBzdHJva2Utd2lkdGg9IjAuNSI+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iNDUiLz48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIzNSIvPjxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjI1Ii8+PGNpcmNsZSBjeD0iNTAiIGN5PSI1MCIgcj0iMTUiLz48bGluZSB4MT0iNSIgeTE9IjUwIiB4Mj0iOTUiIHkyPSI1MCIvPjxsaW5lIHgxPSI1MCIgeTE9IjUiIHgyPSI1MCIgeTI9Ijk1Ii8+PHBvbHlnb24gcG9pbnRzPSI1MCw1IDk1LDUwIDUwLDk1IDUsNTAiLz48L2c+PC9zdmc+")`,
              }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-[#A8D5BA] bg-clip-text text-transparent">
                  Цифровой психоанализ
                </h3>
                <p className="text-gray-300 max-w-xs">
                  Погрузитесь в тайны чисел и раскройте истинное предназначение через матрицу личности.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://t.me/NeikaSparkBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#A8D5BA]"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z"></path>
                      <path d="M22 2 11 13"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Навигация</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#A8D5BA] rounded-full mr-2"></span>
                      Обо мне
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#A8D5BA] rounded-full mr-2"></span>
                      Услуги
                    </a>
                  </li>
                  <li>
                    <a href="#calculator" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#A8D5BA] rounded-full mr-2"></span>
                      Калькулятор
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#A8D5BA] rounded-full mr-2"></span>
                      Блог
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Полезные ссылки</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#A8D5BA] rounded-full mr-2"></span>
                      Все статьи
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#A8D5BA] rounded-full mr-2"></span>
                      Часто задаваемые вопросы
                    </a>
                  </li>
                  <li>
                    <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                      <span className="w-1.5 h-1.5 bg-[#A8D5BA] rounded-full mr-2"></span>
                      Отзывы
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Контакты</h3>
                <p className="text-gray-300">
                  Telegram:{" "}
                  <a
                    href="https://t.me/NeikaSparkBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#A8D5BA] hover:underline"
                  >
                    @NeikaSparkBot
                  </a>
                </p>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <p className="text-sm text-white">
                    Жду тебя на консультации, где я подробно расскажу о твоей матрице и помогу найти ответы на важные вопросы.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
              <p className="text-lg font-medium bg-gradient-to-r from-white to-[#A8D5BA] bg-clip-text text-transparent mb-4 md:mb-0">
                © 2025 Ольга | Цифровой психоанализ
              </p>
              <p className="text-sm text-gray-300 italic">Все права защищены</p>
            </div>
          </div>
        </footer>
      </div>
    </>
    
  );
};

export default Index;