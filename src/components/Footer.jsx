import React from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Github,
  Instagram,
  Youtube,
  Globe,
  Cpu,
  Zap,
  ChevronRight,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Code,
  Users,
  MessageCircle,
  Headphones,
  Birdhouse,
} from "lucide-react";
import spyderlync from "../assets/Spider_Lync_Logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: "Home", href: "/spiderlync/", icon: Birdhouse },
    { name: "About Us", href: "/spiderlync/about", icon: Users },
    { name: "Blog", href: "/spiderlync/", icon: MessageCircle },
    { name: "Contact", href: "/spiderlync/contact", icon: Mail },
  ];

  const productLinks = [
    { name: "Features", href: "/spiderlync/", icon: Zap },
    { name: "Pricing", href: "/spiderlync/", icon: TrendingUp },
    { name: "Documentation", href: "/spiderlync/", icon: Code },
    { name: "API Reference", href: "/spiderlync/", icon: Cpu },
  ];

  const resourcesLinks = [
    { name: "Help Center", href: "/spiderlync/" },
    { name: "Community", href: "/spiderlync/" },
    { name: "Security", href: "/spiderlync/" },
    { name: "Privacy Policy", href: "/spiderlync/" },
    { name: "Terms of Service", href: "/spiderlync/" },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:bg-[#1DA1F2]",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
      color: "hover:bg-[#0A66C2]",
    },
    {
      icon: Github,
      href: "https://github.com",
      label: "GitHub",
      color: "hover:bg-[#333]",
    },
    {
      icon: Instagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-[#E4405F]",
    },
    {
      icon: Youtube,
      href: "https://youtube.com",
      label: "YouTube",
      color: "hover:bg-[#FF0000]",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "info@spiderLync.com",
      href: "mailto:info@spiderLync.com",
    },
    { icon: Phone, text: "+91 (123) 456-7890", href: "tel:+911234567890" },
    { icon: MapPin, text: "Faridabad - Haryana, India", href: null },
  ];

  return (
    <footer className="relative bg-gray-900 text-white overflow-hidden">
    
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-8">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
        
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={spyderlync}
                alt="Spider Lync Logo"
                className="w-50 h-auto"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-md">
              Empowering businesses with cutting-edge technology solutions,
              intelligent deep linking, and seamless digital experiences across
              all platforms.
            </p>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  to={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

         
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-purple-400" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                  >
                    <link.icon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {link.name}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

         
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base flex items-center gap-2">
              <Code className="w-4 h-4 text-purple-400" />
              Products
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                  >
                    <link.icon className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {link.name}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base flex items-center gap-2">
              <Globe className="w-4 h-4 text-purple-400" />
              Resources
            </h4>
            <ul className="space-y-3">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 text-sm transition-colors duration-200"
                  >
                    <CheckCircle className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-200" />
                    {link.name}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-8 mt-8 border-t border-b border-gray-800">
          <div className="space-y-3 w-full md:w-auto">
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base flex items-center gap-2">
              <Headphones className="w-4 h-4 text-purple-400" />
              Contact Us
            </h4>
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-4 h-4 text-purple-400" />
                </div>
                {info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-300 hover:text-purple-400 text-sm transition-colors duration-200"
                  >
                    {info.text}
                  </a>
                ) : (
                  <span className="text-gray-300 text-sm">{info.text}</span>
                )}
              </div>
            ))}
          </div>

          <div className="w-full md:w-auto">
            <h3 className="text-white font-semibold text-lg mb-3">
              Subscribe Newsletter:
            </h3>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter Email"
                className="bg-transparent border border-gray-700 px-5 py-3 rounded-l-full outline-none w-full md:w-80 focus:border-purple-400 transition-colors"
              />
              <button className="px-6 py-3 rounded-r-full text-white font-medium bg-gradient-to-r from-orange-500 to-purple-600 hover:opacity-90 transition-opacity cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <p className="text-xs sm:text-sm text-gray-400">
                © {currentYear} All Rights Reserved By Maisha Infotech Softlabs
                LLP
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="/spiderlync/"
                className="text-xs text-gray-400 hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/spiderlync/"
                className="text-xs text-gray-400 hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/spiderlync/"
                className="text-xs text-gray-400 hover:text-purple-400 transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-purple-600 to-orange-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 group"
          aria-label="Back to top"
        >
          <ArrowRight className="w-5 h-5 transform -rotate-90 group-hover:translate-y-[-2px] transition-transform" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
