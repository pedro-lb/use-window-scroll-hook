import { useState, useEffect } from "react";

const getScroll = () => ({
  scrollX: (window && window.scrollX) || 0,
  scrollY: (window && window.scrollY) || 0,
});

/**
 * Hook that monitors window scroll, and updates the object
 * at the end of each window scroll. It returns the current
 * offset X and Y position.
 */
export default function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(getScroll());

  useEffect(() => {
    let scrollId;

    const handleScroll = () => {
      clearTimeout(scrollId);
      scrollId = setTimeout(() => setWindowScroll(getScroll()), 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return windowScroll;
}
