import { useEffect } from "react";

export const useParallax = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll("[data-parallax]");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top >= -100 && rect.bottom <= window.innerHeight + 100;
        if (isInViewport) {
          el.classList.add("parallax-active");
        } else {
          el.classList.remove("parallax-active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};