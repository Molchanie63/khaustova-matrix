import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight, Share2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import matter from "gray-matter";
import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  displayDate: string;
  readingTime: string;
  content: string;
}

const BlogPostPage = () => {
  const { id } = useParams<{ id: string }>();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Динамически импортируем все Markdown-файлы из папки src/data/blog
        const context = import.meta.glob("/src/data/blog/*.md", {
          query: "?raw",
          import: "default",
        });
        const loadedPosts: BlogPost[] = [];

        for (const [filePath, loadModule] of Object.entries(context)) {
          const fileContent = await loadModule();
          const { data, content } = matter(fileContent as string);
          const fileName = filePath.split("/").pop()?.replace(".md", "") || "";
          loadedPosts.push({
            id: fileName,
            content,
            ...data,
          } as BlogPost);
        }

        setPosts(loadedPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error loading posts:", error);
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  if (loading) {
    return <div className="container mx-auto px-4 py-20 text-center">Загрузка...</div>;
  }

  const post = posts.find((p) => p.id === id);
  const currentIndex = posts.findIndex((p) => p.id === id);
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null;
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const relatedPosts = posts
    .filter((p) => p.category === post?.category && p.id !== id)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Статья не найдена</h1>
        <Button asChild>
          <Link to="/blog" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Вернуться к списку
          </Link>
        </Button>
      </div>
    );
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Ольга Хаустова",
    },
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Khaustova Matrix</title>
        <meta name="description" content={post.description} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.description} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://khaustova-matrix.ru/blog/${post.id}`} />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      <section className="py-20 bg-gradient-to-b from-white to-[#F0F7F4]">
        <div className="container mx-auto px-4">
          <div className="text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:underline">Главная</Link> {" > "}{" "}
            <Link to="/blog" className="hover:underline">Блог</Link> {" > "}{" "}
            <span className="text-gray-700">{post.title}</span>
          </div>

          <Button asChild variant="outline" className="mb-6">
            <Link to="/blog" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Назад к списку
            </Link>
          </Button>

          <div className="max-w-3xl mx-auto">
            <div className="relative mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-sm bg-black/60 px-2 py-1 rounded-full">{post.category}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-[#1A3C34] mb-4 font-serif">{post.title}</h1>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <span>{post.displayDate}</span>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>

            <div className="prose prose-lg text-gray-700 mb-12">
              {post.content.split("\n").map((paragraph, index) => (
                <p key={index} className="mb-4 text-justify leading-relaxed md:leading-loose">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="flex gap-3 mb-12">
              <Button variant="outline" asChild>
                <a
                  href={`https://t.me/share/url?url=${encodeURIComponent(`/blog/${post.id}`)}&text=${encodeURIComponent(post.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  Telegram
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(post.title + " " + `/blog/${post.id}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Share2 className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex justify-between mb-12">
              {prevPost ? (
                <Button asChild variant="outline">
                  <Link to={`/blog/${prevPost.id}`} className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Предыдущая
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}
              {nextPost && (
                <Button asChild variant="outline">
                  <Link to={`/blog/${nextPost.id}`} className="flex items-center gap-2">
                    Следующая
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>

            <div className="bg-gradient-to-r from-[#5D9B89]/10 to-[#F0F7F4] p-6 rounded-lg text-center mb-12">
              <h3 className="text-xl font-bold text-[#1A3C34] mb-2">
                Хочешь узнать больше о себе через числа?
              </h3>
              <p className="text-gray-600 mb-4">
                Запишись на консультацию, и я помогу тебе раскрыть твою матрицу личности.
              </p>
              <Button asChild className="bg-[#5D9B89] hover:bg-[#3A6E5A] text-white">
                <a href="https://t.me/NeikaSparkBot" target="_blank" rel="noopener noreferrer">
                  Записаться
                </a>
              </Button>
            </div>

            {relatedPosts.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold text-[#1A3C34] mb-6">Похожие статьи</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card
                      key={relatedPost.id}
                      className="border border-gray-100 bg-white/90 shadow-sm hover:shadow-lg transition-all duration-300 rounded-lg"
                    >
                      <Link to={`/blog/${relatedPost.id}`}>
                        <CardContent className="p-4">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-40 object-cover rounded-md mb-4"
                          />
                          <h4 className="text-lg font-bold text-[#1A3C34] mb-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedPost.description}
                          </p>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPostPage;