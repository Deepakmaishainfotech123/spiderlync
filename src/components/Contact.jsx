import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle
} from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "Office No 701, 7th Floor,SSR Corporate Park, Sector 27B, Opp. NHPC Metro Station Faridabad,Haryana, 121003",
      ],
      color: "#9122cb",
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+1 (415) 555-0123", "+1 (415) 555-0124"],
      color: "#e47b63",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@company.com", "support@company.com"],
      color: "#9122cb",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Sat: 10:00 AM - 2:00 PM",
        "Sun: Closed",
      ],
      color: "#e47b63",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const formVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const infoVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const mapVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
         <motion.div initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }} className="inline-flex items-center gap-3 mb-4">
            <div className="w-8 h-px" style={{ backgroundColor: "#8c1bca" }} />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-700">
              Get in touch
            </span>
            <div className="w-8 h-px" style={{ backgroundColor: "#e97868" }} />
          </motion.div>
           <h1 className="cursor-hover lg:text-4xl text-xl md:text-2xl font-bold text-gray-900 mb-6 leading-tight">
              Let's start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9122cb] to-[#e47b63]">
               conversation
              </span>
            </h1>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            Whether you have a question about our services or just want to say
            hello, we'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={formVariants}>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Send us a message
              </h3>
              <p className="text-gray-500 mb-8">
                Fill out the form below and we'll get back to you within 24
                hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9122cb] focus:ring-2 focus:ring-[#9122cb]/20 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9122cb] focus:ring-2 focus:ring-[#9122cb]/20 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9122cb] focus:ring-2 focus:ring-[#9122cb]/20 transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9122cb] focus:ring-2 focus:ring-[#9122cb]/20 transition-all"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#9122cb] focus:ring-2 focus:ring-[#9122cb]/20 transition-all resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-[#9122cb] to-[#e47b63] text-white font-medium rounded-lg  transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </motion.svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div variants={infoVariants}>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 h-full">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Contact information
              </h3>
              <p className="text-gray-500 mb-8">
                Here are the different ways you can reach us.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, idx) => {
                  const Icon = info.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1, duration: 0.5 }}
                      className="flex gap-5 group"
                    >
                      <div className="flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow"
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{ color: info.color }}
                          />
                        </motion.div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-base font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIdx) => (
                          <p
                            key={detailIdx}
                            className="text-gray-600 text-sm leading-relaxed"
                          >
                            {detail}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={mapVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="bg-gray-50 rounded-2xl overflow-hidden">
            <div className="p-6 md:p-8 border-b border-gray-200">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                    Visit our office
                  </h3>
                
                </div>
                
              </div>
            </div>
            <div className="relative h-[400px] w-full">
             
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6871629732764!2d77.30357157382883!3d28.45884539194988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02339e9d5589%3A0x7591a5b161c6c05d!2sMaisha%20Infotech%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1774263847662!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed bottom-6 right-6 bg-gray-900 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 z-50"
          >
            <CheckCircle className="w-5 h-5 text-green-400" />
            <div>
              <p className="font-medium">Message sent!</p>
              <p className="text-sm text-gray-300">
                We'll get back to you soon
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactUs;
