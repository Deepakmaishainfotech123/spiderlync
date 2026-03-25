import React, { useState, useEffect, useRef } from "react";
import { CheckCircle, Crown, Mail, Zap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Plans = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardsRef = useRef([]);

  const plans = [
    {
      id: "basic",
      name: "Basic",
      icon: Mail,
      color: "from-blue-500 to-cyan-500",
      badge: null,
      description: "Perfect for individuals & small projects",
      features: [
        { name: "Launch your first campaigns with confidence", included: true },
        { name: "Deliver users to the right destination effortlessly", included: true },
        { name: "Monitor performance in real time", included: true },
        { name: "Start with everything you need to validate your strategy", included: true },
      ],
      cta: "Start Free",
      popular: false,
    },
    {
      id: "essentials",
      name: "Essentials",
      icon: Zap,
      color: "from-purple-600 to-pink-500",
      badge: "Most Popular",
      description: "Best for startups & growing products",
      features: [
        { name: "Measure performance across all channels and partners", included: true },
        { name: "Connect unlimited integrations and workflows", included: true },
        { name: "Optimize user journeys with advanced analytics", included: true },
        { name: "Make data-driven decisions that drive growth", included: true }
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: Crown,
      color: "from-gray-700 to-black",
      badge: "Custom",
      description: "Built for scale, security & performance",
      features: [
        { name: "Predict campaign impact before committing resources", included: true },
        { name: "Gain end-to-end visibility across user touchpoints", included: true },
        { name: "Automate workflows and manage campaigns at scale", included: true },
        { name: "Dedicated support and infrastructure for enterprise reliability", included: true },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  useEffect(() => {
    gsap.set(titleRef.current, { y: 50, opacity: 0 });
    gsap.set(subtitleRef.current, { y: 50, opacity: 0 });

    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, { y: 100, opacity: 0, scale: 0.9, ease: "power1.out" });
      }
    });
    gsap.to(titleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    gsap.to(subtitleRef.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.to(card, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(0.6)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-gray-900 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#8c1bca" }} />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-white">
              Flexible Plans
            </span>
            <div className=" w-8 h-px" style={{ backgroundColor: "#e97868" }} />
          </div>

          <h1 className="cursor-hover w-fit lg:text-4xl text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
            Choose Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9122cb] to-[#e47b63]">
              Perfect Plan
            </span>
          </h1>
          <p
            ref={subtitleRef}
            className="mt-1 max-w-2xl mx-auto text-sm md:text-base text-gray-400 font-normal"
          >
            Everything you need to create, manage, and optimize links, QR codes,
            and deep linking — all in one platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, idx) => {
            const Icon = plan.icon;
            const isHighlight = plan.popular;
            const isMiddleCard = idx === 1;
            const isSideCard = idx === 0 || idx === 2; 
            
            return (
              <div
                key={plan.id}
                ref={(el) => (cardsRef.current[idx] = el)}
                className={`relative transition-all rounded-2xl duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                  isMiddleCard 
                    ? "transform scale-110 z-10 " 
                    : isSideCard 
                    ? "transform scale-95 opacity-90" 
                    : ""
                } ${
                  isHighlight
                    ? "p-[1.5px] bg-gradient-to-r from-[#9122cb] to-[#e47b63]"
                    : "border border-gray-700 bg-gray-800"
                }`}
              >
                <div className={`h-full bg-gray-800 rounded-2xl ${
                  isMiddleCard ? "shadow-2xl shadow-purple-500/20" : ""
                }`}>
                  {plan.badge && (
                    <div
                      className={`absolute top-0 right-0 ${plan.badge === "Custom" ? "bg-[#9122cb]" : "bg-gradient-to-r from-[#9122cb] to-[#e47b63]"} text-white px-3 py-1 text-xs font-medium rounded-tr-2xl rounded-bl-lg`}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <div className={`${isMiddleCard ? "p-8" : "p-6"}`}>
                    <div
                      className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.color} mb-4 ${
                        isMiddleCard ? "scale-110" : ""
                      }`}
                    >
                      <Icon className={`${isMiddleCard ? "w-7 h-7" : "w-6 h-6"} text-white`} />
                    </div>

                    <h3 className={`${isMiddleCard ? "text-2xl" : "text-xl"} font-bold text-white mb-2`}>
                      {plan.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-6">
                      {plan.description}
                    </p>

                    <button
                      className={`w-full py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? "bg-gradient-to-r from-[#9122cb] to-[#e47b63] text-white"
                          : "bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600"
                      }`}
                    >
                      {plan.cta}
                    </button>
                  </div>

                  <div className={`border-t border-gray-700 ${isMiddleCard ? "p-8" : "p-6"}`}>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIdx) => (
                        <li key={featureIdx} className="flex items-start gap-2">
                          {feature.included ? (
                            <CheckCircle className={`${isMiddleCard ? "w-5 h-5" : "w-4 h-4"} text-green-500 mt-0.5 flex-shrink-0`} />
                          ) : (
                            <div className={`${isMiddleCard ? "w-5 h-5" : "w-4 h-4"} rounded-full border border-gray-600 mt-0.5 flex-shrink-0`} />
                          )}
                          <span
                            className={`${isMiddleCard ? "text-sm md:text-sm" : "text-xs md:text-sm"} ${feature.included ? "text-gray-300" : "text-gray-500"}`}
                          >
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Plans;