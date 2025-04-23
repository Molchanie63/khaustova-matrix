import React from "react";
import reviews from "@/data/reviews.json";
import { Star, ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

const ReviewsPage = () => {
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
    <section className="py-20 bg-gray-100 min-h-screen">
      <Helmet>
        <title>Отзывы клиентов | Нумеролог Ольга Хаустова</title>
        <meta name="description" content="Читайте отзывы клиентов о консультациях нумеролога Ольги Хаустовой. Узнайте, как матрица судьбы помогает в жизни." />
        <script type="application/ld+json">
          {JSON.stringify(reviewSchema)}
        </script>
      </Helmet>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800 uppercase tracking-wide">
          Отзывы клиентов
        </h1>
        <p className="text-center text-gray-700 mb-12">
          Узнайте, что говорят те, кто уже прошёл консультацию и расчёт матрицы судьбы.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 min-w-[280px]">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4 bg-[#5D9B89]/20 flex items-center justify-center">
                  {review.photo ? (
                    <img src={review.photo} alt={review.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-xl font-semibold text-[#4A6D5C]">{review.name.charAt(0)}</span>
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{review.text}</p>
              <small className="text-gray-500">{new Date(review.date).toLocaleDateString()}</small>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button className="bg-gradient-to-r from-[#5D9B89] to-[#3A6E5A] hover:from-[#4A6D5C] hover:to-[#2D5542] text-white transition-all duration-300 uppercase shadow-md rounded-xl">
            <a
              href="https://t.me/NeikaSparkBot?start=leave_review"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Оставить отзыв
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsPage;