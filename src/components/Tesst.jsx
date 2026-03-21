import React from "react";

const Tesst = () => {
  return (
    <div className="group relative w-64 h-40 rounded-xl overflow-hidden bg-white text-gray-900 flex items-center justify-center ">
      
      {/* Top */}
      <span className="absolute top-0 left-0 w-full h-[2px] bg-purple-400 animate-runX"></span>

      {/* Bottom */}
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 animate-runX"></span>

      {/* Left */}
      <span className="absolute top-0 left-0 h-full w-[2px] bg-purple-400 animate-runY"></span>

      {/* Right */}
      <span className="absolute top-0 right-0 h-full w-[2px] bg-cyan-400 animate-runY"></span>

      Animated Border
    </div>
  );
};

export default Tesst;