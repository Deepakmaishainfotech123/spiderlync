import React from "react";
import { motion } from "framer-motion";
import { Eye, Target, Rocket, Heart, Users, Zap, Sparkles } from "lucide-react";

const VisionMission = () => {
  const visionPoints = [
    {
      icon: Eye,
      title: "Innovation First",
      description:
        "Pioneering the future of link management and deep linking technology",
    },
    {
      icon: Rocket,
      title: "Global Impact",
      description:
        "Empowering businesses worldwide with intelligent link solutions",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Putting our customers at the heart of everything we do",
    },
  ];

  const missionPoints = [
    {
      icon: Target,
      title: "Simplify Complexity",
      description: "Making advanced linking technology accessible to everyone",
    },
    {
      icon: Zap,
      title: "Drive Results",
      description: "Delivering measurable ROI through smart link optimization",
    },
    {
      icon: Users,
      title: "Build Together",
      description:
        "Creating lasting partnerships with our clients and community",
    },
  ];

  return (
    <div className="bg-white py-20 md:py-28 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            <div className="w-8 h-px" style={{ backgroundColor: "#8c1bca" }} />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-700">
              Our Purpose
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: "#e97868" }} />
          </motion.div>
          <h1 className="cursor-hover lg:text-4xl text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
            Vision &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9122cb] to-[#e47b63]">
              Mission
            </span>
          </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            Guiding principles that drive us to create exceptional experiences
            and deliver value to our customers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="p-[1.5px] rounded-2xl w-fit bg-gradient-to-r from-[#9122cb] to-[#e47b63] mb-3">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-2 py-1">
                  <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#9122cb] to-[#e47b63] flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[13px] font-medium text-gray-600">
                    Our Vision
                  </span>
                </div>
              </div>
              <h2 className="cursor-hover text-3xl font-bold text-gray-900 mb-4 w-fit">
                Shaping the future of digital connections
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We envision a world where every link tells a story, every click
                creates value, and every connection drives meaningful outcomes.
                Our vision is to become the global standard for intelligent link
                management and deep linking technology.
              </p>
            </div>

            <div className="space-y-6">
              {visionPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#9122cb]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#9122cb]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {point.title}
                      </h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Vision"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#e47b63]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#9122cb]/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Mission"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#e47b63]/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#9122cb]/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="mb-6">
              <div className="p-[1.5px] rounded-2xl w-fit bg-gradient-to-r from-[#9122cb] to-[#e47b63] mb-3">
                <div className="flex items-center gap-2 rounded-2xl bg-white px-2 py-1">
                  <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#9122cb] to-[#e47b63] flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-[13px] font-medium text-gray-600">
                    Our Mission
                  </span>
                </div>
              </div>
              <h2 className="cursor-hover text-3xl font-bold text-gray-900 mb-4">
                Empowering businesses through intelligent links
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Our mission is to democratize advanced linking technology,
                making it accessible and valuable for businesses of all sizes.
                We're committed to continuous innovation, exceptional service,
                and delivering measurable results that help our clients grow.
              </p>
            </div>

            <div className="space-y-6">
              {missionPoints.map((point, idx) => {
                const Icon = point.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-[#e47b63]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#e47b63]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {point.title}
                      </h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
