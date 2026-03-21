import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Briefcase,
  Code,
  BookOpen,
  Mail,
  LogIn,
  UserPlus,
  Search,
  Globe,
  Zap,
  Cpu,
  Layers,
  Shield,
  TrendingUp,
  Sparkles,
  HelpCircle,
  Users,
  Birdhouse,
} from "lucide-react";
import spyderlync from '../assets/Spider_Lync_Logo-.png';

const NAVIGATION_ITEMS = {
    Home: { name: "Home", href: "/", },
    AboutUs:{name:"About US" , href: "/about" },
  products: {
    name: "Products",
    href: "/products",
    icon: Briefcase,
    dropdown: true,
    items: [
      { name: "Deep Linking Platform", href: "/products/deep-linking", icon: Zap, description: "Intelligent deep linking solutions" },
      { name: "Analytics Suite", href: "/products/analytics", icon: TrendingUp, description: "Real-time analytics & insights" },
      { name: "API Gateway", href: "/products/api", icon: Cpu, description: "Scalable API management" },
      { name: "Security Suite", href: "/products/security", icon: Shield, description: "Enterprise-grade security" },
    ]
  },
  solutions: {
    name: "Solutions",
    href: "/solutions",
    icon: Layers,
    dropdown: true,
    items: [
      { name: "E-commerce", href: "/solutions/ecommerce", icon: Sparkles, description: "Boost conversions with smart links" },
      { name: "Mobile Apps", href: "/solutions/mobile", icon: Code, description: "Seamless app-to-app navigation" },
      { name: "Marketing", href: "/solutions/marketing", icon: TrendingUp, description: "Track campaign performance" },
      { name: "Enterprise", href: "/solutions/enterprise", icon: Shield, description: "Scalable solutions" },
    ]
  },
  resources: {
    name: "Resources",
    href: "/resources",
    icon: BookOpen,
    dropdown: true,
    items: [
      { name: "Documentation", href: "/docs", icon: BookOpen, description: "Guides & API references" },
      { name: "Blog", href: "/blog", icon: BookOpen, description: "Latest insights" },
      { name: "Community", href: "/community", icon: Users, description: "Join our community" },
      { name: "Support", href: "/support", icon: HelpCircle, description: "Get help" },
    ]
  },
  contact: { name: "Contact", href: "/contact" },
  
  
};

const AUTH_ACTIONS = [

  { name: "Request A Demo", href: "/contact", icon: UserPlus, variant: "primary" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleDropdownToggle = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", searchQuery);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            <a href="/" className="flex items-center">
              <img 
                src={spyderlync} 
                alt="Spider Lync" 
                className="h-10 w-auto"
              />
            </a>

            <nav className="hidden lg:flex items-center space-x-1">
              {Object.entries(NAVIGATION_ITEMS).map(([key, item]) => (
                <div key={key} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => handleDropdownToggle(key)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
                          openDropdown === key
                            ? 'text-purple-600 bg-purple-50'
                            : 'text-gray-700 hover:text-purple-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 ${openDropdown === key ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {openDropdown === key && (
                        <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                          {item.items.map((subItem, idx) => (
                            <a
                              key={idx}
                              href={subItem.href}
                              className="flex items-start gap-3 px-4 py-3 hover:bg-gray-50"
                              onClick={() => setOpenDropdown(null)}
                            >
                              <subItem.icon className="w-5 h-5 text-purple-600 mt-0.5" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">{subItem.name}</div>
                                <div className="text-xs text-gray-500">{subItem.description}</div>
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50"
                    >
                     
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            <div className="flex items-center gap-3">
           
             

         
              

              
              <div className="hidden lg:flex items-center gap-3">
                {AUTH_ACTIONS.map((action) => (
                  <a
                    key={action.name}
                    href={action.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium ${
                      action.variant === 'primary'
                        ? 'bg-purple-600 text-white hover:bg-purple-700'
                        : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <action.icon className="w-4 h-4" />
                      {action.name}
                    </div>
                  </a>
                ))}
              </div>

             
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-purple-600 hover:bg-gray-100"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

     
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-20">
          <div className="w-full max-w-2xl mx-4">
            <div className="bg-white rounded-lg shadow-xl">
              <div className="p-4 border-b border-gray-200">
                <form onSubmit={handleSearch} className="flex items-center gap-3">
                  <Search className="w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search documentation, features, or resources..."
                    className="flex-1 outline-none text-gray-900 placeholder-gray-400"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    className="p-1 text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </form>
              </div>
              <div className="p-4 text-sm text-gray-500">
                Try searching for "deep linking", "analytics", or "API"
              </div>
            </div>
          </div>
        </div>
      )}

     
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img src={spyderlync} alt="Spider Lync" className="h-8" />
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
                          onClick={() => handleDropdownToggle(key)}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg"
                        >
                          <div className="flex items-center gap-3">
                            <item.icon className="w-5 h-5" />
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <ChevronDown className={`w-5 h-5 ${openDropdown === key ? 'rotate-180' : ''}`} />
                        </button>
                        {openDropdown === key && (
                          <div className="ml-11 space-y-1">
                            {item.items.map((subItem, idx) => (
                              <a
                                key={idx}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="space-y-3">
                  <select className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                  
                  {AUTH_ACTIONS.map((action) => (
                    <a
                      key={action.name}
                      href={action.href}
                      className={`block w-full text-center py-3 rounded-lg font-medium ${
                        action.variant === 'primary'
                          ? 'bg-purple-600 text-white hover:bg-purple-700'
                          : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <action.icon className="w-4 h-4" />
                        {action.name}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

     
      <div className="h-16 lg:h-20" />
    </>
  );
};

export default Header;