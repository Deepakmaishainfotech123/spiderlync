import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Layers,
  Sparkles,
  GitBranch,
  Link2,
  RefreshCw,
  CheckCircle2,
  Globe,
  Shield,
  TrendingUp,
  Database,
  Code2,
  ArrowRight,
  Zap,
  Infinity,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const EcosystemApproach = () => {
  const featuresRef = useRef([]);
  const statsRef = useRef([]);
  const titleRef = useRef(null);
  const integrationsRef = useRef(null);

  const features = [
    {
      icon: Layers,
      title: "Maintain Consistency",
      description: "Unified design language across all digital touchpoints",
      points: [
        "Centralized control",
        "Brand consistency",
        "Seamless experience",
      ],
      gradient: "from-violet-300 to-purple-400",
      iconGradient: "from-violet-400 to-purple-500",
      color: "#8b5cf6",
      bgGradient: "from-violet-600/40 to-purple-600/40",
      metric: "Consistent",
      metricIcon: Sparkles,
    },
    {
      icon: GitBranch,
      title: "Reduce Overhead",
      description: "Eliminate fragmentation with centralized operations",
      points: [
        "Streamlined workflows",
        "Lower operational costs",
        "Faster execution",
      ],
      gradient: "from-pink-500 to-rose-600",
      iconGradient: "from-pink-400 to-rose-500",
      color: "#ec489a",
      bgGradient: "from-pink-600/20 to-rose-600/20",
      metric: "Efficient",
      metricIcon: Zap,
    },
    {
      icon: RefreshCw,
      title: "Scale Seamlessly",
      description: "Infinite scalability without performance compromise",
      points: [
        "Auto-scaling infrastructure",
        "Global distribution",
        "99.99% uptime",
      ],
      gradient: "from-cyan-500 to-blue-600",
      iconGradient: "from-cyan-400 to-blue-500",
      color: "#06b6d4",
      bgGradient: "from-cyan-600/20 to-blue-600/20",
      metric: "Unlimited",
      metricIcon: Infinity,
    },
  ];

  const integrations = [
    { name: "Analytics", icon: Database, color: "#8b5cf6", tag: "Real-time" },
    {
      name: "Smart Routing",
      icon: Link2,
      color: "#ec489a",
      tag: "Context-Aware",
    },
    { name: "Dynamic Links", icon: Code2, color: "#06b6d4", tag: "Flexible" },
    { name: "Campaigns", icon: TrendingUp, color: "#10b981", tag: "Automated" },
    { name: "Security", icon: Shield, color: "#f59e0b", tag: "Enterprise" },
    { name: "Global CDN", icon: Globe, color: "#3b82f6", tag: "Edge-Ready" },
  ];

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      );
    }

    featuresRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 60, opacity: 0, rotationX: 10 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "back.out(0.6)",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });

    statsRef.current.forEach((stat, index) => {
      if (stat) {
        gsap.to(stat, {
          y: -8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
          delay: index * 0.2,
        });
      }
    });

    if (integrationsRef.current) {
      const integrationCards =
        integrationsRef.current.querySelectorAll(".integration-card");
      integrationCards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "back.out(0.3)",
          });
        });
        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          ref={titleRef}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px" style={{ backgroundColor: "#8c1bca" }} />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-100">
              Ecosystem Approach
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: "#e97868" }} />
          </motion.div>
          <h1 className="cursor-hover w-fit lg:text-4xl text-xl md:text-2xl font-bold text-gray-100 mb-6 leading-tight">
            One platform.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9122cb] to-[#e47b63]">
              Infinite possibilities.
            </span>
          </h1>
          <p className="text-gray-200 text-sm md:text-base leading-relaxed">
            We don't build standalone tools — we design a unified ecosystem
            where capabilities are deeply integrated and work in harmony.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {features.map((feature, idx) => (
            <div
              key={idx}
              ref={(el) => (featuresRef.current[idx] = el)}
              className="group"
            >
              <div className="relative h-full">
                <div className="relative bg-gray-800/60 rounded-2xl border border-gray-700/50 group-hover:border-gray-600 transition-all duration-500 h-full overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  />

                  <div className="p-8 relative z-10">
                    <div className="relative mb-8">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                      />
                      <div
                        className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.iconGradient} p-[2px]`}
                      >
                        <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                          <feature.icon
                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: feature.color }}
                          />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
                      {feature.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      {feature.points.map((point, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 group/item"
                        >
                          <div className="relative">
                            <CheckCircle2 className="w-5 h-5 text-violet-400 flex-shrink-0 transition-transform duration-300 group-hover/item:scale-110" />
                          </div>
                          <span className="text-gray-300 group-hover/item:text-white transition-colors text-sm md:text-base">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-gray-700/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`p-2 rounded-lg bg-gradient-to-br ${feature.iconGradient} bg-opacity-20`}
                          >
                            <feature.metricIcon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="text-base font-semibold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                              {feature.metric}
                            </div>
                            <div className="text-xs text-gray-500">
                              Performance
                            </div>
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          className="cursor-pointer"
                        >
                          <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-violet-400 transition-all" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div ref={integrationsRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <h3 className="cursor-hover w-fit lg:text-4xl text-xl md:text-2xl font-bold text-gray-100 mb-6 leading-tight">
              Everything <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9122cb] to-[#e47b63]"> Connected</span> 
            </h3>
            <p className="text-gray-400 text-sm md:text-base">
              Deep integration across all your critical business functions
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {integrations.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: idx * 0.05,
                    duration: 0.4,
                    type: "spring",
                  }}
                  whileHover={{ y: -6 }}
                  className="integration-card cursor-pointer"
                >
                  <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-700/50 hover:border-gray-600 transition-all duration-300 group">
                    <div className="relative mb-3">
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-${item.color}/20 to-transparent rounded-full blur-md`}
                      />
                      <Icon
                        className="w-10 h-10 mx-auto transition-transform duration-300 group-hover:scale-110"
                        style={{ color: item.color }}
                      />
                    </div>
                    <div className="text-white font-medium text-sm mb-1">
                      {item.name}
                    </div>
                    <div className="inline-block px-2 py-0.5 rounded-full bg-gray-700/50 text-xs text-gray-400">
                      {item.tag}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemApproach;
