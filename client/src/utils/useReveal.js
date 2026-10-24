import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".oc-reveal");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("oc-revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("oc-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default useReveal;
