"use client";
import { useState, useEffect, useRef } from "react";

export function useScrollDirection(threshold = 10) {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) >= threshold) {
        setDirection(currentScrollY > lastScrollY.current ? "down" : "up");
        lastScrollY.current = currentScrollY;
      }
      setScrollY(currentScrollY);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(update);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return { direction, scrollY };
}
