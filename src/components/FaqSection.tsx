
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FaqSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>(0.2);

  const faqs = [
    {
      question: "Что такое нумерология?",
      answer: "Нумерология — это учение о числах и их влиянии на нашу жизнь. Она основана на идее, что числа несут в себе определенные вибрации и энергию, которые могут влиять на характер человека, его судьбу и жизненный путь. Метод Александрова — это особый подход к нумерологии, который позволяет получить глубокое понимание личности через анализ даты рождения."
    },
    {
      question: "Как происходит консультация?",
      answer: "Консультация проходит в формате диалога. Сначала я собираю необходимую информацию (дату рождения), затем составляю нумерологическую матрицу и анализирую ее. Во время консультации я объясняю значение каждого числа и линии в матрице, как они влияют на вашу личность, отношения, карьеру и другие аспекты жизни. Вы можете задавать любые вопросы, и я помогу найти на них ответы через числа."
    },
    {
      question: "Нужно ли верить в нумерологию, чтобы она работала?",
      answer: "Нет, метод Александрова работает независимо от вашей веры в него. Это практический инструмент самопознания, основанный на математических расчетах и психологических наблюдениях. Скептическое отношение — это нормально, многие мои клиенты изначально сомневались, но были удивлены точностью анализа. Попробуйте, и результаты говорят сами за себя."
    },
    {
      question: "Можно ли изменить свою судьбу, зная нумерологическую матрицу?",
      answer: "Матрица не определяет вашу судьбу на 100%, а скорее показывает ваши естественные предрасположенности, таланты и потенциальные сложности. Зная их, вы можете принимать более осознанные решения, развивать сильные стороны и компенсировать слабые. Это как карта местности — она не решает, куда вы пойдете, но помогает выбрать оптимальный маршрут к вашим целям."
    },
    {
      question: "Как нумерология может помочь в отношениях?",
      answer: "Анализ совместимости пары через нумерологию позволяет увидеть, как ваши энергии взаимодействуют друг с другом. Вы узнаете о потенциальных зонах конфликтов и о том, как их избежать, поймете сильные стороны ваших отношений и научитесь их усиливать. Это помогает развить эмпатию и понимание, почему партнер ведет себя определенным образом в разных ситуациях."
    },
    {
      question: "Как часто нужно обращаться к нумерологу?",
      answer: "Это зависит от ваших целей. Одной полной консультации достаточно, чтобы получить базовое понимание себя и своего пути. Далее можно обращаться при возникновении конкретных вопросов или для анализа годового цикла (рекомендуется делать в начале года или в день рождения). Некоторые клиенты приходят раз в 3-6 месяцев для корректировки своего движения согласно матрице."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div ref={headerRef} className={`text-center max-w-3xl mx-auto mb-12 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 uppercase tracking-wide">
            ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
          </h2>
          <p className="text-gray-700 font-medium">
            Здесь собраны ответы на самые распространенные вопросы о нумерологии и методе Александрова. Если не нашли ответ на свой вопрос, смело пишите мне!
          </p>
        </div>

        <div ref={ref} className={`max-w-3xl mx-auto ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className={`border border-gray-200 rounded-lg overflow-hidden bg-white/90 backdrop-blur-sm shadow-sm hover:shadow-md transition-all ${isVisible ? `animate-fade-in-up animate-delay-${100 * index}` : 'opacity-0'}`}
              >
                <AccordionTrigger className="px-6 py-4 text-gray-800 hover:text-[#5D9B89] hover:no-underline font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
