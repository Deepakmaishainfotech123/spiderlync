import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";

const ComparePlans = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedSections, setExpandedSections] = useState({});

  const plans = useMemo(
    () => [
      {
        name: "Basic",
        features: {
          deepLinking: ["Smart routing to apps or web pages"],
          parseIntegration: [],
          tinyUrl: [
            "Branded and customizable short URLs",
            "Rapid link creation for campaigns",
            "QR code generation per URL",
          ],
          mailcow: [],
          mailContent: [],
          qrCode: [
            "Static and dynamic QR codes",
            "Integration with deep links and campaigns",
          ],
        },
      },
      {
        name: "Essentials",
        features: {
          deepLinking: [
            "Smart routing to apps or web pages",
            "Device & platform-specific targeting",
            "Real-time click and conversion tracking",
            "Seamless integration with QR codes and campaigns",
          ],
          parseIntegration: [
            "Automated collection of app and web events",
            "Workflow automation based on events",
            "Performance monitoring and reporting",
            "Dashboard insights for actionable analysis",
          ],
          tinyUrl: [
            "Branded and customizable short URLs",
            "Rapid link creation for campaigns",
            "QR code generation per URL",
            "Analytics for clicks and user engagement",
          ],
          mailcow: [
            "Dedicated SMTP server setup",
            "Tracking for delivery, opens, and clicks",
            "Email templates and content personalization",
            "Bounce monitoring and engagement metrics",
          ],
          mailContent: [
            "Dynamic content creation for campaigns",
            "A/B testing to optimize engagement",
            "Integration with analytics for insights",
            "Personalized messaging by user segment",
          ],
          qrCode: [
            "Static and dynamic QR codes",
            "Custom branding and color options",
            "Click tracking per QR code",
            "Integration with deep links and campaigns",
          ],
        },
      },
      {
        name: "Enterprise",
        features: {
          deepLinking: [
            "Smart routing to apps or web pages",
            "Device & platform-specific targeting",
            "Real-time click and conversion tracking",
            "Seamless integration with QR codes and campaigns",
          ],
          parseIntegration: [
            "Automated collection of app and web events",
            "Workflow automation based on events",
            "Performance monitoring and reporting",
            "Dashboard insights for actionable analysis",
          ],
          tinyUrl: [
            "Branded and customizable short URLs",
            "Rapid link creation for campaigns",
            "QR code generation per URL",
            "Analytics for clicks and user engagement",
          ],
          mailcow: [
            "Dedicated SMTP server setup",
            "Tracking for delivery, opens, and clicks",
            "Email templates and content personalization",
            "Bounce monitoring and engagement metrics",
          ],
          mailContent: [
            "Dynamic content creation for campaigns",
            "A/B testing to optimize engagement",
            "Integration with analytics for insights",
            "Personalized messaging by user segment",
          ],
          qrCode: [
            "Static and dynamic QR codes",
            "Custom branding and color options",
            "Click tracking per QR code",
            "Integration with deep links and campaigns",
          ],
        },
      },
    ],
    [],
  );

  const categories = [
    { id: "all", name: "All Features" },
    {
      id: "deepLinking",
      name: "Deep Linking",
      desc: "Effortlessly route users to the right destination across platforms and devices.",
    },
    {
      id: "parseIntegration",
      name: "Parse Integration",
      desc: "Integrate backend systems to capture and automate event data with precision.",
    },
    {
      id: "tinyUrl",
      name: "Tiny URL Creation",
      desc: "Create short, branded URLs to enhance sharing and engagement.",
    },
    {
      id: "mailcow",
      name: "Mailcow SMTP / Email Delivery",
      desc: "Reliable and secure email delivery for campaigns and transactional messaging.",
    },

    {
      id: "qrCode",
      name: "QR Code Generator",
      desc: "Generate and track QR codes to drive engagement across channels.",
    },
  ];

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const allFeatures = useMemo(() => {
    const features = {};
    categories.forEach(({ id }) => {
      if (id !== "all") {
        const set = new Set();
        plans.forEach((plan) =>
          (plan.features[id] || []).forEach((f) => set.add(f)),
        );
        features[id] = Array.from(set);
      }
    });
    return features;
  }, [plans, categories]);

  const filteredCategories = useMemo(
    () =>
      activeCategory === "all"
        ? categories.filter((c) => c.id !== "all")
        : categories.filter((c) => c.id === activeCategory),
    [activeCategory, categories],
  );

  const isFeatureIncluded = (plan, category, feature) =>
    (plan.features[category] || []).includes(feature);

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          {" "}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-4"
          >
            {" "}
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "#8c1bca" }}
            />{" "}
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-700">
              {" "}
              Most Flexible Plans{" "}
            </span>{" "}
            <div
              className="w-8 h-px"
              style={{ backgroundColor: "#e97868" }}
            />{" "}
          </motion.div>{" "}
          <h1 className="cursor-hover lg:text-4xl text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
            {" "}
            Compare Our Plans &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9122cb] to-[#e47b63]">
              {" "}
              Find the Perfect Fit{" "}
            </span>{" "}
          </h1>{" "}
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            {" "}
            Easily see which services and features are included in each plan.
            Choose the plan that fits your campaign goals, scale, and workflow
            needs.{" "}
          </p>{" "}
        </motion.div>

        <div className="border-b border-gray-200 mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-200 ${activeCategory === c.id ? "text-purple-600 border-b-2 border-purple-600" : "text-gray-500 hover:text-gray-700"}`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {filteredCategories.map((category) => {
            const features = allFeatures[category.id] || [];
            const isExpanded = expandedSections[category.id] || false;

            return (
              <motion.div
                key={category.id}
                className="border border-gray-200 rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <button
                  onClick={() => toggleSection(category.id)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex justify-between items-center"
                >
                  <div>
                    <h3 className="text-lg text-left font-semibold text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-sm text-left text-gray-500 mt-1">
                      {category.desc}
                    </p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">
                                Features
                              </th>
                              {plans.map((plan) => (
                                <th
                                  key={plan.name}
                                  className="px-6 py-3 text-center text-sm font-semibold text-gray-900 min-w-[100px]"
                                >
                                  {plan.name}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {features.map((feature, idx) => (
                              <tr
                                key={idx}
                                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                              >
                                <td className="px-6 py-4 text-sm text-gray-700">
                                  {feature}
                                </td>
                                {plans.map((plan) => (
                                  <td
                                    key={plan.name}
                                    className="px-6 py-4 text-center"
                                  >
                                    {isFeatureIncluded(
                                      plan,
                                      category.id,
                                      feature,
                                    ) ? (
                                      <Check className="w-5 h-5 text-green-500 mx-auto" />
                                    ) : (
                                      <X className="w-5 h-5 text-gray-300 mx-auto" />
                                    )}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ComparePlans;
