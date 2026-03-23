import React, { useState, useRef } from "react";
import { Menu, X, ChevronDown, Moon, Sun } from "lucide-react";
import spyderlync from "../assets/Spider_Lync_Logo.png";
import { useThemeStore } from "../store/useThemeStore";

const NAVIGATION_ITEMS = {
  products: {
    name: "Products",
    href: "/products",
    dropdown: true,
    items: [
      {
        name: "Deep Linking Platform",
        href: "/products/deep-linking",
        description: "Intelligent deep linking solutions",
      },
      {
        name: "Analytics Suite",
        href: "/products/analytics",
        description: "Real-time analytics & insights",
      },
      {
        name: "API Gateway",
        href: "/products/api",
        description: "Scalable API management",
      },
      {
        name: "Security Suite",
        href: "/products/security",
        description: "Enterprise-grade security",
      },
    ],
  },
  solutions: {
    name: "Solutions",
    href: "/solutions",
    dropdown: true,
    items: [
      {
        name: "E-commerce",
        href: "/solutions/ecommerce",
        description: "Boost conversions with smart links",
      },
      {
        name: "Mobile Apps",
        href: "/solutions/mobile",
        description: "Seamless app-to-app navigation",
      },
      {
        name: "Marketing",
        href: "/solutions/marketing",
        description: "Track campaign performance",
      },
      {
        name: "Enterprise",
        href: "/solutions/enterprise",
        description: "Scalable solutions",
      },
    ],
  },
  resources: {
    name: "Resources",
    href: "/resources",
    dropdown: true,
    items: [
      {
        name: "Documentation",
        href: "/docs",
        description: "Guides & API references",
      },
      { name: "Blog", href: "/blog", description: "Latest insights" },
      {
        name: "Community",
        href: "/community",
        description: "Join our community",
      },
      { name: "Support", href: "/support", description: "Get help" },
    ],
  },
  pricing: { name: "Pricing", href: "/pricing" },
  contact: { name: "Contact", href: "/contact" },
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRefs = useRef({});
  const { theme, toggleTheme } = useThemeStore();

  return (
    <>
      <header className="  sticky top-0 z-40 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <a href="/" className="flex items-center">
              <img src={spyderlync} alt="Spider Lync" className="h-10 w-auto" />
            </a>

            <nav className="hidden lg:flex items-center space-x-1">
              {Object.entries(NAVIGATION_ITEMS).map(([key, item]) => (
                <div
                  key={key}
                  className="relative"
                  ref={(el) => (dropdownRefs.current[key] = el)}
                  onMouseEnter={() => item.dropdown && setOpenDropdown(key)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        className={`px-4 py-2 rounded-lg text-sm cursor-pointer font-medium transition-all duration-300 ${
                          openDropdown === key
                            ? "text-purple-600 bg-purple-50"
                            : "dark:text-white text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                        }`}
                      >
                        {item.name}
                        <ChevronDown
                          className={`inline-block ml-1 w-4 h-4 transition-transform duration-300 ${openDropdown === key ? "rotate-180" : ""}`}
                        />
                      </button>

                      {openDropdown === key && (
                        <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-dropdownOpen group/dropdownContainer">
                          {item.items.map((subItem, idx) => (
                            <a
                              key={idx}
                              href={subItem.href}
                              className="block px-4 py-3 transition-all duration-300 group/item"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <div className="transition-all duration-300 group-hover/item:pl-2">
                                <div className="text-sm font-medium text-gray-900 transition-all duration-300 group-hover/dropdownContainer:text-gray-400 group-hover/item:text-black">
                                  {subItem.name}
                                </div>
                                <div className="text-xs text-gray-600 transition-all duration-300 group-hover/dropdownContainer:text-gray-400 group-hover/item:text-gray-700">
                                  {subItem.description}
                                </div>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 rounded-lg text-sm font-medium dark:text-white text-gray-700 hover:text-purple-600 hover:bg-gray-50 transition-all duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <div className=" items-center gap-3">
                <button
                  onClick={toggleTheme}
                  className="group relative p-2 rounded-lg transition-all duration-200 
                     bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
                     text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100
                     focus:outline-none cursor-pointer"
                >
                  {theme === "light" ? (
                    <Moon className="w-5 h-5" />
                  ) : (
                    <Sun className="w-5 h-5" />
                  )}

                  <div className="relative group">
                   
                    <span
                      className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 
                        text-xs text-white bg-gray-900 dark:bg-gray-700 rounded 
                        opacity-0 group-hover:opacity-100 transition-opacity 
                        pointer-events-none whitespace-nowrap"
                    >
                     
                      <span
                        className="absolute -top-1 left-1/2 -translate-x-1/2 
                        w-2 h-2 bg-gray-900 dark:bg-gray-700 rotate-45"
                      ></span>

                      {theme === "light" ? "Dark mode" : "Light mode"}
                    </span>
                  </div>
                </button>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-all duration-200"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl overflow-y-auto animate-slideInRight z-50">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img
                  src={spyderlync}
                  alt="Spider Lync"
                  className="h-8 w-auto object-contain"
                />

                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-1">
                {Object.entries(NAVIGATION_ITEMS).map(([key, item]) => (
                  <div key={key}>
                    {item.dropdown ? (
                      <>
                        <button
                          onClick={() =>
                            setOpenDropdown(openDropdown === key ? null : key)
                          }
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-200 ${openDropdown === key ? "rotate-180" : ""}`}
                          />
                        </button>
                        {openDropdown === key && (
                          <div className="ml-4 space-y-1 animate-slideDown group/mobileContainer">
                            {item.items.map((subItem, idx) => (
                              <a
                                key={idx}
                                href={subItem.href}
                                className="block px-4 py-2 transition-all duration-300 group/mobileItem"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <div className="transition-all duration-300 group-hover/mobileItem:pl-2">
                                  <div className="text-sm text-gray-900 transition-all duration-300 group-hover/mobileContainer:text-gray-400 group-hover/mobileItem:text-black font-medium">
                                    {subItem.name}
                                  </div>
                                  <div className="text-xs text-gray-600 transition-all duration-300 group-hover/mobileContainer:text-gray-400 group-hover/mobileItem:text-gray-700">
                                    {subItem.description}
                                  </div>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="block px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg font-medium transition-all duration-200"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
