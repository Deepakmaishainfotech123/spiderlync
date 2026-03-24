import { useRef } from "react";
import { useInView, motion } from "framer-motion";

const Learning = () =>{
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
    >
      Hello, I appear when in view!
    </motion.div>
  );
}

export default Learning