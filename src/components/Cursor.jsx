import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [text, setText] = useState("");

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.2,
        ease: "power3.out",
      });
    };

    let activeEl = null; 

    const handleMouseMove = (e) => {
      const target = e.target.closest(".cursor-hover");

    
      if (target && target !== activeEl) {
        activeEl = target;

        setText(target.innerText);

        gsap.to(cursorRef.current, {
          scale: 4,
          duration: 0.3,
        });
      }

    
      if (!target && activeEl) {
        activeEl = null;

        setText("");

        gsap.to(cursorRef.current, {
          scale: 1,
          duration: 0.3,
        });
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 flex items-center justify-center 
      h-5 w-5 rounded-full pointer-events-none z-[9999]
      bg-white mix-blend-difference "
    >
      <span className="text-black text-xs font-bold whitespace-nowrap">
        {/* {text} */}
      </span>
    </div>
  );
};

export default Cursor;