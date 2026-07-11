import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const squareRef = useRef(null);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mql.matches) return;

    document.body.classList.add("custom-cursor");
    const dot = dotRef.current;
    const square = squareRef.current;
    if (!dot || !square) return;

    let mx = -100, my = -100, sx = -100, sy = -100, raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      sx += (mx - sx) * 0.1;
      sy += (my - sy) * 0.1;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      const angle = Math.atan2(my - sy, mx - sx) * 57.3 * 0.08;
      square.style.transform = `translate(${sx}px, ${sy}px) rotate(${angle}deg)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <style>{`body.custom-cursor, body.custom-cursor * { cursor: none !important; }`}</style>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full"
        style={{
          width: "6px",
          height: "6px",
          marginLeft: "-3px",
          marginTop: "-3px",
          background: "hsl(var(--sage))",
        }}
      />
      <div
        ref={squareRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] hidden md:block transition-all duration-300"
        style={{
          width: "32px",
          height: "32px",
          marginLeft: "-16px",
          marginTop: "-16px",
          border: "1px solid hsl(var(--sage) / 0.3)",
        }}
      />
    </>
  );
}