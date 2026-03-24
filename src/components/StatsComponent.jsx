import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from "react";
import { motion, useInView } from "framer-motion";

const StatsComponent = () => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef);

  const [counts, setCounts] = useState({});

  const stats = useMemo(
    () => [
      {
        id: "links",
        value: 2.5,
        suffix: "B+",
        label: "Links Processed",
        isDecimal: true,
      },
      {
        id: "uptime",
        value: 99.99,
        suffix: "%",
        label: "Uptime",
        isDecimal: true,
      },
      {
        id: "response",
        value: 50,
        suffix: "ms",
        prefix: "<",
        label: "Response Time",
      },
      { id: "monthly", value: 50, suffix: "M+", label: "Monthly Links" },
      { id: "clients", value: 150, suffix: "+", label: "Enterprise Clients" },
    ],
    [],
  );

  const animateValue = useCallback((id, end, isDecimal) => {
    let start = 0;
    const duration = 1500;
    const step = end / (duration / 20);

    const timer = setInterval(() => {
      start += step;

      setCounts((prev) => ({
        ...prev,
        [id]: isDecimal ? start : Math.floor(start),
      }));

      if (start >= end) {
        setCounts((prev) => ({ ...prev, [id]: end }));
        clearInterval(timer);
      }
    }, 20);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    stats.forEach((stat) => {
      animateValue(stat.id, stat.value, stat.isDecimal);
    });
  }, [isInView]);

  const formatValue = useCallback((stat, value = 0) => {
    let val;

    if (stat.isDecimal) {
      const decimalPlaces = stat.id === "links" ? 1 : 2;
      val = value.toFixed(decimalPlaces);
    } else {
      val = Math.floor(value); 
    }
    return `${stat.prefix || ""}${val}${stat.suffix}`;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  const headerVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7 } },
  };

  const badgeVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
  };

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4"
          >
            {" "}
            <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-[#8c1bca] to-[#8c1bca]" />{" "}
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-700">
              {" "}
              At Scale{" "}
            </span>{" "}
            <div className="w-6 sm:w-8 h-px bg-gradient-to-r from-[#e97868] to-[#e97868]" />{" "}
          </motion.div>
          <h2 className="cursor-hover lg:text-4xl text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
            {" "}
            Performance That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9122cb] to-[#e47b63]">
              {" "}
              Scales Globally{" "}
            </span>{" "}
          </h2>{" "}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {" "}
            Handles billions of interactions monthly with fast, reliable, and
            globally distributed infrastructure.{" "}
          </p>
        </motion.div>

        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="text-center"
            >
              <div className="cursor-hover text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 tracking-tight bg-gradient-to-br from-gray-900 to-gray-700 bg-clip-text group-hover:from-[#9122cb] group-hover:to-[#e47b63] transition-all duration-300">
                {formatValue(stat, counts[stat.id])}
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsComponent;
