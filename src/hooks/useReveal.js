import { useEffect } from "react";

/**
 * Menandai elemen [data-reveal] dengan kelas `in` saat 12% terlihat (sekali saja).
 * Kelas `rv-on` hanya dipasang di root bila IntersectionObserver tersedia,
 * sehingga tanpa IO konten tetap terlihat.
 */
export function useReveal(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return undefined;

    root.classList.add("rv-on");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const seen = new WeakSet();
    const scan = () => {
      root.querySelectorAll("[data-reveal]:not([data-in])").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        io.observe(el);
      });
    };

    scan();
    // elemen yang dirender belakangan (mis. hasil filter proyek)
    const mo = new MutationObserver(scan);
    mo.observe(root, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      io.disconnect();
      root.classList.remove("rv-on");
    };
  }, [rootRef]);
}
