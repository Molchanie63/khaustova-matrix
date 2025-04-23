import { useState, useEffect } from "react";
import { Share2, MessageCircle, ArrowRight, ArrowLeft, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fm from "front-matter";

interface BlogPostAttributes {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  popular?: boolean;
}

interface BlogPost extends BlogPostAttributes {
  id: string;
  viewCount?: number; // Добавляем поле для просмотров
}

interface BlogSectionProps {
  showBackButton?: boolean;
  limit?: number;
}

export const BlogSection = ({ showBackButton = true, limit }: BlogSectionProps) => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>(0.5, { rootMargin: "200px" });
  const [visiblePosts, setVisiblePosts] = useState(limit || 3);
  const [category, setCategory] = useState("all");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const context = import.meta.glob("/src/data/blog/*.md", { query: "?raw", import: "default", eager: false });
        console.log("Найденные файлы:", Object.keys(context));
  
        if (Object.keys(context).length === 0) {
          throw new Error("Не удалось найти Markdown-файлы в папке src/data/blog/");
        }
  
        const loadedPosts: BlogPost[] = [];
  
        for (const [filePath, loadModule] of Object.entries(context)) {
          const fileContent = await loadModule();
          const { attributes } = fm<BlogPostAttributes>(fileContent as string);
          const fileName = filePath.split("/").pop()?.replace(".md", "") || "";
  
          // Запрашиваем количество просмотров для каждой статьи
          const viewResponse = await fetch(`${import.meta.env.VITE_API_URL}/views/${fileName}`);
          if (!viewResponse.ok) throw new Error(`Failed to fetch views for ${fileName}`);
          const viewData = await viewResponse.json();
  
          loadedPosts.push({
            id: fileName,
            title: attributes.title || "Без названия",
            description: attributes.description || "Нет описания",
            image: attributes.image || "/images/placeholder.svg",
            category: attributes.category || "Без категории",
            date: attributes.date || "Не указана дата",
            popular: attributes.popular || false,
            viewCount: viewData.viewCount || 0,
          });
        }
  
        console.log("Загруженные посты:", loadedPosts);
        setPosts(loadedPosts);
        setLoading(false);
      } catch (err) {
        console.error("Error loading posts:", err);
        setError("Не удалось загрузить статьи. Попробуйте позже.");
        setLoading(false);
      }
    };
  
    loadPosts();
  }, []);

  const filteredPosts = category === "all" ? posts : posts.filter((post) => post.category === category);
  console.log("Отфильтрованные посты:", filteredPosts);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  console.log("Отображаемые посты:", displayedPosts);

  const loadMore = () => setVisiblePosts((prev) => prev + 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  if (loading) {
    return (
      <section id="blog" className="pt-20 pb-20 bg-gradient-to-b from-white to-[#F0F7F4] min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-800 text-lg">Загрузка статей...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="pt-20 pb-20 bg-gradient-to-b from-white to-[#F0F7F4] min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600 text-lg">{error}</p>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section id="blog" className="pt-20 pb-20 bg-gradient-to-b from-white to-[#F0F7F4] min-h-screen">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-800 text-lg">Статьи пока не добавлены.</p>
          <Button asChild variant="outline" className="mt-4">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="pt-20 pb-20 bg-gradient-to-b from-white to-[#F0F7F4] min-h-screen">
      <div className="container mx-auto px-4">
        {showBackButton && (
          <div className="flex justify-start mb-8">
            <Button asChild variant="outline" className="border-[#5D9B89] text-gray-800 hover:text-[#3A6E5A] hover:bg-[#5D9B89]/10 rounded-full">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                На главную
              </Link>
            </Button>
          </div>
        )}

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-20 h-1 bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-wide mb-3 relative inline-block pb-2 font-serif">
            Цифровая Библиотека
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#5D9B89]/70 to-transparent rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Открой для себя силу чисел через наши статьи, исследования и практические руководства.
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {["all", "Основы", "Практика", "Личный опыт"].map((cat) => (
            <Button
              key={cat}
              onClick={() => setCategory(cat)}
              variant={category === cat ? "default" : "outline"}
              className={`border-[#5D9B89] text-sm px-6 py-2 rounded-full transition-all duration-300 ${
                category === cat
                  ? "bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] text-white"
                  : "text-gray-800 hover:text-[#3A6E5A] hover:bg-[#5D9B89]/10"
              }`}
            >
              {cat === "all" ? "Все" : cat}
            </Button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {displayedPosts.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
  <Card className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-[32rem]">
    <Link to={`/blog/${post.id}`} className="flex flex-col flex-1">
      <div className="relative overflow-hidden h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
        />
        <span className="absolute top-4 right-4 text-sm text-white font-medium px-3 py-1 bg-gray-800/70 rounded-full flex items-center gap-1">
          <Eye className="h-4 w-4" />
          {post.viewCount || 0}
        </span>
      </div>
      <CardContent className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-sm bg-[#5D9B89]/10 text-[#3A6E5A] px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-serif leading-tight hover:text-[#3A6E5A] transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-700 text-base line-clamp-2 mb-4 leading-relaxed">
          {post.description}
        </p>
        <Button
          variant="default"
          className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#3A6E5A] hover:to-[#2D5542] text-white rounded-full px-6 py-2 flex items-center gap-2 transition-all duration-300 mt-auto"
        >
          Читать далее
          <ArrowRight className="h-5 w-5" />
        </Button>
      </CardContent>
    </Link>
  </Card>
</motion.div>
          ))}
        </motion.div>

        {!limit && visiblePosts < filteredPosts.length && (
          <div className="flex justify-center mt-12">
            <Button
              variant="default"
              className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] text-white hover:from-[#3A6E5A] hover:to-[#2D5542] gap-2 rounded-full px-8 py-3 text-lg transition-all duration-300"
              onClick={loadMore}
            >
              Показать ещё ({visiblePosts}/{filteredPosts.length})
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};