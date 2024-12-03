import React from "react";

interface PortfolioProps {
  isDarkMode: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isDarkMode }) => {
  const portfolioItems = [
    {
      title: "KrillPay",
      description:
        "KrillPay is a cutting-edge payment solution designed to streamline and secure online transactions for businesses and consumers alike. With its user-friendly interface and robust security features, KrillPay enables instant, secure, and seamless payments across various platforms.",
      link: "https://krillpay.com/",
      image: "https://cdn.durable.co/blocks/1eYgoNHDB85vMXvUZ2ZgbzLPS1uwoDzs0mjFoOTT2G1pMPX3aJKzVc1M4gETAQoG.png", 
    },
    {
      title: "Levis Clothing Brand",
      description: "Levis is an innovative e-commerce platform that brings the iconic Levi's brand into the digital age. Designed for fashion-forward individuals, Levis offers a seamless shopping experience with a wide range of jeans, jackets, t-shirts, and accessories. With personalized recommendations, an easy-to-navigate interface, and secure payment options.",
      link: "https://www.levi.com/GB/en_GB/features/levis-app?srsltid=AfmBOoqJpGMLix6DDrP3dpq83SaB0AfURGaUrgrV-WLNE8dnelzDxhX3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbCV51dqeQkqIS6h2DjilDeU1aUIBRmAmf2km2J7z2mdrV2VZ_aD4uZEN6Acd-ZdwQ6E&usqp=CAU",
    },
    {
      title: "Hypnosis App",
      description: "Description of Project 3The Hypnosis App is a transformative mobile platform designed to help users harness the power of guided hypnosis for relaxation, self-improvement, and mental wellness. Whether you're looking to reduce stress, improve sleep, overcome habits, or boost confidence, the app provides expertly crafted hypnosis sessions tailored to your goals..",
      link: "https://www.josephclough.com/free-hypnosis-and-empowerment-videos",
      image: "https://play-lh.googleusercontent.com/lLt6Mj0SwunuLzgi1q3BKgiCvlNKrJEYDjQ2BwmSUjVrU0vbKQE0m_0DPjRtIfwmcDpy",
    },
    {
      title: "Denso App",
      description: "The Denso App is a cutting-edge platform designed to enhance productivity and streamline communication within businesses. Offering a comprehensive set of tools for team collaboration, task management, and real-time communication, Denso empowers teams to work smarter and more efficiently.",
      link: "https://www.denso.com/global/en/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jOdBKQNyj9K_v1_BVBXvQoUQwerkrBkNIQ&s", 
    },
    {
      title: "Point Duty App",
      description: "The Point Duty App is a powerful mobile platform designed to help businesses and organizations streamline their operations, track employee performance, and manage tasks with precision. Tailored for industries that require task tracking, monitoring, and performance evaluation, this app brings real-time data and actionable insights directly to your fingertips.",
      link: "https://www.pointduty.com.au/",
      image: "data:image/png;base64,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", 
    },
    {
      title: "Chip App",
      description: "The Chip App is a smart, automated savings platform designed to help users save money effortlessly. With the goal of making saving as easy as spending, Chip uses AI-powered technology to analyze your spending habits and automatically transfer small amounts of money into your savings account, without requiring any active input from you.",
      link: "https://www.chipinc.net/",
      image: "https://img.freepik.com/premium-vector/vector-technology-cpu-design-with-square-microprocessor-scheme-computer-circuit-board-digital-element-technology-microchip-logo_570429-22887.jpg",
    },
  ];

  return (
    <div
      className={`mb-48 ${isDarkMode ? " text-white" : " text-black"} p-8`}
    >
      <h2 className={`text-4xl font-bold text-center mb-6 ${
          isDarkMode ? "text-yellow-500" : "text-black"
        }`}>Portfolio</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="border-2 p-4 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            <h3 className="text-2xl font-semibold">{item.title}</h3>
            <img
              src={item.image}
              alt={item.title}
              className="rounded-lg mb-2 w-25 h-20 object-cover mt-4"
            />
            <p className="mt-2 text-gray-600 dark:text-gray-300">{item.description}</p>
            <a
              href={item.link}
              className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
