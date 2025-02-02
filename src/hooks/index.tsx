"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function useIs404() {
  const pathname = usePathname();
  const [is404, setIs404] = useState(false);

  useEffect(() => {
    const checkRouteExists = async () => {
      try {
        const res = await fetch(pathname);
        setIs404(res.status === 404);
      } catch (error) {
        setIs404(true);
      }
    };

    checkRouteExists();
  }, [pathname]);

  return is404;
}

export const useScrollTop = () => {
  const pathname = usePathname();
  const scrollBtn = useRef<HTMLDivElement | null>(null);
  const isBrowser = () => typeof window !== "undefined";
  useEffect(() => {
    window.addEventListener("scroll", animateIn);
    return () => {
      window.removeEventListener("scroll", animateIn);
    };
  }, []);
  const animateIn = () => {
    if (!isBrowser()) return;
    if (scrollBtn.current) {
      if (
        document.body.scrollTop > 120 ||
        document.documentElement.scrollTop > 120
      ) {
        scrollBtn.current.style.bottom = "30px";
        scrollBtn.current.style.opacity = "1";
      } else {
        scrollBtn.current.style.bottom = "-20px";
        scrollBtn.current.style.opacity = "0";
      }
    }
  };
  const scrollTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return { scrollTop, scrollBtn, pathname };
};
