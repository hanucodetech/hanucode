import React from 'react';

const MainProduct = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="bg-animated cyber-grid py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text glitch-effect" data-text="QUANTUM FEATURES">
            QUANTUM FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                className="rounded-lg p-6 backdrop-blur-md bg-opacity-50 border border-cyan-500 transition-transform transform hover:translate-y-[-10px] hover:scale-105 hover:shadow-lg"
                key={index}
                style={{ animationDelay: `${index * 0.5}s`, animation: 'floating 6s ease-in-out infinite' }}
              >
                <div className={`text-5xl mb-4 ${feature.color} transition-transform transform hover:rotate-360 hover:scale-110`}>
                  <i className={feature.icon}></i>
                </div>
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes neon-pulse {
          0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00ffff, 0 0 35px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff, 0 0 75px #00ffff; }
          50% { text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #00ffff, 0 0 17px #00ffff, 0 0 20px #00ffff, 0 0 25px #00ffff, 0 0 37px #00ffff; }
        }

        .neon-text {
          animation: neon-pulse 1.5s infinite alternate;
        }

        @keyframes floating {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .glitch-effect {
          position: relative;
          overflow: hidden;
        }

        .glitch-effect::before,
        .glitch-effect::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }

        .glitch-effect::before {
          left: 2px;
          text-shadow: -2px 0 #ff00de;
          animation: glitch-anim 3s infinite linear alternate-reverse;
        }

        .glitch-effect::after {
          left: -2px;
          text-shadow: -2px 0 #00ffff;
          animation: glitch-anim 2s infinite linear alternate-reverse;
        }

        @keyframes glitch-anim {
          0% { clip: rect(39px, 9999px, 71px, 0); }
          20% { clip: rect(3px, 9999px, 5px, 0); }
          40% { clip: rect(6px, 9999px, 38px, 0); }
          60% { clip: rect(13px, 9999px, 43px, 0); }
          80% { clip: rect(44px, 9999px, 93px, 0); }
          100% { clip: rect(54px, 9999px, 47px, 0); }
        }
      `}</style>
    </div>
  );
};

const features = [
  {
    title: "Revolutionary Speed",
    description: "Experience unmatched processing power with quantum computing. Solve complex problems in seconds that would take classical computers years, enabling faster decision-making and innovation.",
    icon: "fas fa-brain",
    color: "text-cyan-400",
  },
  {
    title: "Enhanced Optimization",
    description: "Leverage quantum algorithms to optimize operations across various industries. From supply chain management to financial modeling, achieve greater efficiency and cost savings with precise solutions.",
    icon: "fas fa-shield-alt",
    color: "text-pink-500",
  },
  {
    title: "Advanced Data Security",
    description: "Protect your sensitive information with quantum encryption techniques. Our solutions provide a higher level of security, safeguarding your data against future cyber threats.",
    icon: "fas fa-vr-cardboard",
    color: "text-purple-500",
  },
  {
    title: " Customizable Solutions",
    description: "Tailor quantum technology to meet your specific business needs. We work closely with you to develop bespoke solutions that address your unique challenges and goals.",
    icon: "fas fa-network-wired",
    color: "text-green-400",
  },
  {
    title: "Cutting-Edge Research Partnerships",
    description: "Benefit from our collaborations with leading academic institutions and research organizations. Stay ahead of the curve by accessing the latest advancements in quantum technology and innovation.",
    icon: "fas fa-bolt",
    color: "text-yellow-400",
  },
  {
    title: " Future-Ready Investments",
    description: "Position your business for success in a rapidly evolving landscape. By integrating quantum solutions today, you prepare for tomorrow's challenges and opportunities, ensuring long-term growth and competitiveness.",
    icon: "fas fa-dna",
    color: "text-red-500",
  },
];

export default MainProduct;
