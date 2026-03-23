import React from "react";
import {
  Sparkles,
  ArrowRight,
  Network,
  Zap,
  Globe,
  Fingerprint
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-3xl">
            <div className="p-[1.5px] rounded-2xl w-fit bg-gradient-to-r from-[#9122cb] to-[#e47b63] mb-4">
              <div className="flex items-center gap-2 rounded-2xl bg-white px-2 py-1">
                <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-[#9122cb] to-[#e47b63] flex items-center justify-center">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
                <span className="text-[13px] font-medium text-gray-600">
                  About us
                </span>
              </div>
            </div>
            <h1 className="lg:text-4xl text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
              Simplifying DeepLinking for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9122cb] to-[#e47b63]">
                Modern Digital Experiences
              </span>
            </h1>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-2xl">
              Every day, billions of digital interactions fail because users
              land in the wrong place. We're fixing that with intelligent deep
              linking.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        <div className="relative mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 auto-rows-[200px]">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }} // Custom cubic-bezier for smoother motion
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
              className="lg:col-span-7 sm:col-span-2 relative group row-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9122cb]/40 via-transparent to-[#e47b63]/40 z-10 rounded-2xl mix-blend-overlay" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"
                alt="Team"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute bottom-3 left-3 z-20 bg-black/30 backdrop-blur-sm rounded-lg px-3 py-1">
                <span className="text-xs text-white">
                  Global team · 12 countries
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.1,
              }} 
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-3 sm:col-span-1 row-span-2 relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop"
                alt="Analytics"
                className="w-full h-full object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out" // Smooth hover transition
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9122cb]/60 via-transparent to-transparent rounded-2xl" />
              <div className="absolute bottom-3 left-4 text-white text-xs">
                <Zap className="w-4 h-4 mb-1" />
                Real-time
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-2 sm:col-span-1 relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&auto=format&fit=crop"
                alt="Mobile"
                className="w-full h-full object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#e47b63]/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-2 left-2 text-white text-xs">
                <Fingerprint className="w-3 h-3 mb-1" />
                Secure
              </div>
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="lg:col-span-2 sm:col-span-1 relative group"
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop"
                alt="Dashboard"
                className="w-full h-full object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#9122cb]/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-2 left-2 text-white text-xs">
                <Globe className="w-3 h-3 mb-1" />
                Global
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute -top-15 right-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-gray-100 min-w-[160px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#9122cb] to-[#e47b63] flex items-center justify-center">
                <Network className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">2.5B</div>
                <div className="text-xs text-gray-500">links processed</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 border border-gray-100 min-w-[180px]"
          >
            <div className="flex gap-2 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />{" "}
             
                <span className="text-xs text-gray-600">99.9% uptime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9122cb]" />
                <span className="text-xs text-gray-600">50ms response</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mt-20">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                We exist to make every click count
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                Founded in 2020, we've built the most sophisticated deep linking
                infrastructure that powers connections for the world's leading
                brands.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="text-2xl font-bold text-[#9122cb] mb-1">
                  50M+
                </div>
                <p className="text-xs text-gray-500">Monthly active links</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5">
                <div className="text-2xl font-bold text-[#e47b63] mb-1">
                  150+
                </div>
                <p className="text-xs text-gray-500">Enterprise clients</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                <div className="relative bg-white border border-gray-200 group-hover:border-transparent rounded-full px-5 py-2.5 transition-all duration-300 hover:shadow-lg">
                  <span className="text-xs md:text-sm font-medium transition-all duration-300">
                    Universal Links
                  </span>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                <div className="relative bg-white border border-gray-200 group-hover:border-transparent rounded-full px-5 py-2.5 transition-all duration-300 hover:shadow-lg">
                  <span className="text-xs md:text-sm font-medium  transition-all duration-300">
                    App Links
                  </span>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                <div className="relative bg-white border border-gray-200 group-hover:border-transparent rounded-full px-5 py-2.5 transition-all duration-300 hover:shadow-lg">
                  <span className="text-xs md:text-sm font-medium  transition-all duration-300">
                    Deferred Deep Links
                  </span>
                </div>
              </div>
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>
                <div className="relative bg-white border border-gray-200 group-hover:border-transparent rounded-full px-5 py-2.5 transition-all duration-300 hover:shadow-lg">
                  <span className="text-xs md:text-sm font-medium  transition-all duration-300">
                    Contextual Routing
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Traditional deep linking is broken. Users click links and end up
              on homepages, not the content they actually want. We've reimagined
              the entire experience.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              Our intelligent routing engine considers device type, app
              installation status, user preferences, and historical behavior to
              deliver users to exactly the right destination - every single
              time.
            </p>

            <div className="pt-4">
              <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-[#9122cb] to-[#e47b63] text-white px-6 py-3 rounded-xl font-medium text-xs md:text-base hover:shadow-xl transition-all duration-300">
                Learn more about our platform
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
