import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference for the current billing cycle. There are no cancellation fees or hidden charges.",
    },
    {
      id: 2,
      question: "How secure is the platform?",
      answer: "We take security seriously. Our platform is SOC 2 Type II certified and GDPR compliant. All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption. We also offer features like SSO, MFA, and custom security policies for enterprise customers.",
    },
    {
      id: 3,
      question: "Can I use my own domain for short URLs?",
      answer: "Absolutely! All our paid plans support custom domains. You can use your own branded domain (like links.yourbrand.com) for all your short URLs. This helps maintain brand consistency and builds trust with your audience. We provide easy DNS configuration steps.",
    },
    {
      id: 4,
      question: "What happens if I exceed my plan limits?",
      answer: "We'll notify you when you're approaching your limits. If you exceed them, we'll automatically upgrade you to the next tier or you can purchase additional credits. You'll never be charged overage fees without prior notification.",
    },
    {
      id: 5,
      question: "Do you provide support for all plans?",
      answer: "Yes! Basic plan includes email support with 24-hour response time. Essentials includes priority email and chat support. Enterprise customers get 24/7 phone support, dedicated account manager, and SLA guarantees.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-24 overflow-hidden">
    
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
            <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#8c1bca" }} />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-white">
              FAQ
            </span>
            <div className=" w-8 h-px" style={{ backgroundColor: "#e97868" }} />
          </div>

          <h1 className="cursor-hover w-fit lg:text-4xl text-xl md:text-2xl font-bold text-white mb-1 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9122cb] to-[#e47b63]">
              Questions
            </span>
          </h1>
          <p
            className="mt-1 max-w-2xl mx-auto text-sm  text-gray-400 font-normal"
          >
            Have questions about our plans, features, or services? Here are the answers to the most common queries to help you choose the right plan.
          </p>
          
        </motion.div>

      
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="faq-item"
                >
                  <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden hover:border-gray-600 transition-all duration-300">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full px-6 py-5 flex justify-between items-center text-left group"
                    >
                      <h3 className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-violet-400 transition-colors" />
                      </motion.div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{height:0,opacity:0}}
                          whileInView={{height:"auto",opacity:1}}
                          exit={{height:0,opacity:1}}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5">
                            <p className="text-gray-300 leading-relaxed text-sm">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
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

export default FAQSection;