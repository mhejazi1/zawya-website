import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const lineRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      if (lineRef.current) {
        lineRef.current.style.height = `${progress}%`;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 w-px h-screen z-[100] bg-border/40 hidden md:block">
      <div
        ref={lineRef}
        className="w-full bg-sage"
        style={{ height: "0%" }}
      />
    </div>
  );
}