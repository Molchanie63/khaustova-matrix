import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { BlogSection } from "@/components/BlogSection";
import BlogPostPageWithErrorBoundary from "@/components/BlogPostPage"; // Дефолтный импорт
import { Navbar } from "@/components/navigation/Navbar";
import ReviewsPage from "./pages/ReviewsPage";
import { Helmet } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => {
  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <HelmetProvider>
          <Helmet>
            <script type="text/javascript">
              {`
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src.indexOf(t) > -1) return;}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                ym(100763552, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true
                });
              `}
            </script>
            <noscript>
              {`
                <div><img src="https://mc.yandex.ru/watch/100763552" style="position:absolute; left:-9999px;" alt="" /></div>
              `}
            </noscript>
          </Helmet>

          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar onScrollToSection={handleScrollToSection} />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<BlogSection />} />
              <Route path="/blog/:id" element={<BlogPostPageWithErrorBoundary />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;