import { useState } from "react";
import { Share2, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Мелодия судьбы: как услышать ритм своего пути",
    description: "А что, если даты — это не просто числа, а загадочные отражения твоей жизни? Каждый день рождения, каждое событие — это нота в мелодии, которую ты сочиняешь, сам того не замечая. Числовые созвучия — как зеркала, где мелькают твои мечты, корни и тайные силы.",
    date: "31.03.2025",
    image: "/images/blog-post-1.jpg",
    category: "Основы",
    popular: true,
  },
  {
    id: 2,
    title: "Как найти общий язык с детьми и близкими через цифры",
    description: "Вы когда-нибудь задумывались, почему некоторые люди так легко находят общий язык с окружающими, а другие сталкиваются с трудностями в общении? Или почему вам так сложно понять своего ребенка, даже когда вы стараетесь изо всех сил?",
    date: "5 апреля 2025",
    image: "/images/blog-post-2.jpg",
    category: "Личный опыт",
  },
  {
    id: 3,
    title: "Мой путь в нумерологии",
    description: "Личный опыт: как я начала использовать метод Александрова и что это изменило.",
    date: "10 апреля 2025",
    image: "/images/blog-post-3.jpg",
    category: "Личный опыт",
  },
  {
    id: 4,
    title: "Число года: как рассчитать и использовать для планирования",
    description: "Каждый год несёт свою энергию, которая влияет на твои решения и события. Узнай, как рассчитать своё число года и использовать его для планирования важных шагов в жизни.",
    date: "15 апреля 2025",
    image: "/images/blog-post-4.jpg",
    category: "Практика",
  },
  {
    id: 5,
    title: "5 мифов о нумерологии, которые мешают тебе начать",
    description: "Нумерология окружена мифами: от скептицизма до магических ожиданий. Разбираем 5 самых популярных заблуждений и показываем, как числа могут стать твоим инструментом для самопознания.",
    date: "20 апреля 2025",
    image: "/images/blog-post-5.jpg",
    category: "Основы",
  },
  {
    id: 6,
    title: "Как числа помогают справляться с тревогой и стрессом",
    description: "В современном мире стресс стал частью жизни, но числа могут стать твоими союзниками. Узнай, как использовать нумерологию для гармонии и внутреннего спокойствия.",
    date: "25 апреля 2025",
    image: "/images/blog-post-6.jpg",
    category: "Практика",
  },
];

export const BlogSection = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.1);
  const [visiblePosts, setVisiblePosts] = useState(3);
  const [category, setCategory] = useState("all");

  const filteredPosts = category === "all" ? blogPosts : blogPosts.filter((post) => post.category === category);
  const loadMore = () => setVisiblePosts((prev) => prev + 3);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide mb-3 relative inline-block pb-2 font-serif">
            Цифровая Библиотека
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#5D9B89]/70 to-transparent rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Погрузитесь в мир чисел и их влияния на нашу жизнь через статьи, исследования и практические руководства.
          </p>
        </div>

        {/* Фильтры */}
        <div className="flex justify-center gap-2 mb-8 flex-wrap">
          {["all", "Основы", "Практика", "Личный опыт"].map((cat) => (
            <Button
              key={cat}
              onClick={() => setCategory(cat)}
              variant={category === cat ? "default" : "outline"}
              className={`border-[#5D9B89] text-sm px-4 py-1 rounded-full ${
                category === cat ? "bg-[#5D9B89] text-white" : "text-[#3A6E5A] hover:bg-[#5D9B89]/10"
              }`}
            >
              {cat === "all" ? "Все" : cat}
            </Button>
          ))}
        </div>

        {/* Список статей */}
        <div
          ref={ref}
          className={`space-y-6 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredPosts.slice(0, visiblePosts).map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg">
                <Link to={`/blog/${post.id}`}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 sm:h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                      />
                    </div>
                    <CardContent className="p-5 flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-gray-500">{post.date}</span>
                        <span className="text-xs text-gray-500">·</span>
                        <span className="text-xs text-[#5D9B89]">{post.category}</span>
                        {post.popular && (
                          <span className="text-xs text-white font-medium px-2 py-1 bg-red-500 rounded-full">
                            🔥 Популярное
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-[#1A3C34] mb-2">{post.title}</h3>
                      <p className="text-gray-600 text-sm line-clamp-3">{post.description}</p>
                    </CardContent>
                  </div>
                </Link>
                <div className="flex gap-2 p-5 pt-0">
                  <a
                    href={`https://t.me/share/url?url=${encodeURIComponent(`/blog/${post.id}`)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3A6E5A] hover:text-[#2D5542]"
                  >
                    <MessageCircle className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + `/blog/${post.id}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3A6E5A] hover:text-[#2D5542]"
                  >
                    <Share2 className="h-5 w-5" />
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Кнопка "Показать ещё" */}
        {visiblePosts < filteredPosts.length && (
          <div className="flex justify-center mt-12">
            <Button
              variant="default"
              className="bg-[#5D9B89] text-white hover:bg-[#3A6E5A] gap-2 rounded-full px-6 py-2"
              onClick={loadMore}
            >
              Показать ещё ({visiblePosts}/{filteredPosts.length})
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};