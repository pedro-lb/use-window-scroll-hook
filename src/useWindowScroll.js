import { useState, useEffect } from "react";

const getScroll = () => ({
  scrollX: (window && window.scrollX) || 0,
  scrollY: (window && window.scrollY) || 0,
});

/**
 * Hook that monitors window scroll, and updates the object
 * at the end of each window scroll. It returns the current
 * offset X and Y position.
 * @param {If true, fires the event only when the user stops scrolling.} onlyOnScrollEnd
 */
export default function useWindowScroll(onlyOnScrollEnd = true) {
  const [windowScroll, setWindowScroll] = useState(getScroll());

  useEffect(() => {
    let scrollId;

    const handleScroll = () => {
      if (onlyOnScrollEnd) {
        clearTimeout(scrollId);
        scrollId = setTimeout(() => setWindowScroll(getScroll()), 200);
      } else {
        setWindowScroll(getScroll());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return windowScroll;
}
