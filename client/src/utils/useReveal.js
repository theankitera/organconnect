import { useEffect } from "react";

const useReveal = () => {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      document
        .querySelectorAll(".oc-reveal")
        .forEach((el) => el.classList.add("oc-revealed"));
      return;
    }

    const seen = new WeakSet();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("oc-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const scan = () => {
      document
        .querySelectorAll(".oc-reveal:not(.oc-revealed)")
        .forEach((el) => {
          if (!seen.has(el)) {
            seen.add(el);
            observer.observe(el);
          }
        });
    };

    scan();
    // Products async aate hain — naye nodes ko bhi observe karo
    const mutationObserver = new MutationObserver(() => scan());
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });
    // Fallback timer: koi element atak gaya ho to force reveal
    const safety = setTimeout(() => {
      document
        .querySelectorAll(".oc-reveal")
        .forEach((el) => el.classList.add("oc-revealed"));
    }, 4000);

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(safety);
    };
  }, []);
};

export default useReveal;
