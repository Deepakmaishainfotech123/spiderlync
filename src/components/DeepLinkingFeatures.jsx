import React from "react";

const DeepLinkingFeatures = () => {
  const features = [
    {
      title: "Smart Deep Linking",
      description:
        "Send users directly to specific in-app screens or web pages instead of generic landing pages.",
    },
    {
      title: "Deferred Deep Linking",
      description:
        "Route users to the correct content even after app installation for a seamless experience.",
    },
    {
      title: "Real-Time Analytics",
      description:
        "Track clicks, installs, conversions, and engagement with powerful performance insights.",
    },
    {
      title: "Campaign Tracking",
      description:
        "Add UTM parameters and measure marketing campaign performance across platforms.",
    },
    {
      title: "Cross-Platform Routing",
      description:
        "Automatically detect devices and route users to iOS, Android, or web destinations.",
    },
    {
      title: "Custom Branded Links",
      description:
        "Use your own domain to create branded short links that build trust and recognition.",
    },
  ];

  const purple = {
    primary: "#8c1bca",
    light: "#8B5CF6",
    ultraLight: "#EDE9FE",
  };

  const orange = {
    primary: "#e97868",
    light: "#F97316",
    ultraLight: "#FFF7ED",
  };

  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <div
              className="w-8 h-px"
              style={{ backgroundColor: purple.primary }}
            />
            <span className="text-sm font-medium tracking-[0.2em] uppercase text-gray-700">
              Features
            </span>
            <div
              className="w-8 h-px"
              style={{ backgroundColor: orange.primary }}
            />
          </div>
          <h2 class="lg:text-4xl text-xl md:text-2xl font-bold">Powerful Deep Linking <span class="bg-[linear-gradient(90deg,rgba(235,120,101,1),rgba(138,26,212,0.71))] bg-clip-text text-transparent">Capabilities</span></h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-700 font-normal">
            Connect users directly to content, track every interaction, and
            optimize campaigns with enterprise-grade deep linking
            infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const isPurple = index % 2 === 0;
            const accentColor = isPurple ? purple.primary : orange.primary;
            const lightAccentColor = isPurple ? purple.light : orange.light;
            const dotColor = isPurple ? orange.primary : purple.primary;

            return (
              <div
                key={index}
                className="group relative bg-white   p-8 transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
              {/* Top Left Border Line - Horizontal */}
                <div
                  className="absolute top-0 left-0 w-0 h-[3px] group-hover:w-16 transition-all duration-300 ease-in-out"
                  style={{ backgroundColor: accentColor }}
                />
                
               
                <div
                  className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-16 transition-all duration-300 ease-in-out"
                  style={{ backgroundColor: accentColor }}
                />

                
                <div
                  className="absolute bottom-0 right-0 w-0 h-[3px] group-hover:w-16 transition-all duration-300 ease-in-out"
                  style={{ backgroundColor: accentColor }}
                />
                
               
                <div
                  className="absolute bottom-0 right-0 w-[3px] h-0 group-hover:h-16 transition-all duration-300 ease-in-out"
                  style={{ backgroundColor: accentColor }}
                />

            
                <div
                  className="absolute top-6 right-8 text-5xl font-black opacity-10 group-hover:opacity-20 transition-opacity"
                  style={{ color: lightAccentColor }}
                >
                  {(index + 1).toString().padStart(2, "0")}
                </div>

               
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: dotColor }}
                  />
                  <div
                    className="w-12 h-px"
                    style={{ backgroundColor: `${accentColor}80` }}
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-black">
                  {feature.title}
                </h3>

                <p className="text-gray-700 leading-relaxed text-[0.95rem] font-normal">
                  {feature.description}
                </p>

               
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span
                    className="text-sm font-semibold flex items-center gap-2"
                    style={{ color: accentColor }}
                  >
                    Learn more
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        d="M9 5l7 7-7 7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeepLinkingFeatures;
