import React from "react";

const Portfolio = ({ isDarkMode }) => {
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
      description:
        "Levis is an innovative e-commerce platform that brings the iconic Levi's brand into the digital age. Designed for fashion-forward individuals, Levis offers a seamless shopping experience with a wide range of jeans, jackets, t-shirts, and accessories. With personalized recommendations, an easy-to-navigate interface, and secure payment options.",
      link: "https://www.levi.com/GB/en_GB/features/levis-app?srsltid=AfmBOoqJpGMLix6DDrP3dpq83SaB0AfURGaUrgrV-WLNE8dnelzDxhX3",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWbCV51dqeQkqIS6h2DjilDeU1aUIBRmAmf2km2J7z2mdrV2VZ_aD4uZEN6Acd-ZdwQ6E&usqp=CAU",
    },
    {
      title: "Hypnosis App",
      description:
        "The Hypnosis App is a transformative mobile platform designed to help users harness the power of guided hypnosis for relaxation, self-improvement, and mental wellness. Whether you're looking to reduce stress, improve sleep, overcome habits, or boost confidence, the app provides expertly crafted hypnosis sessions tailored to your goals.",
      link: "https://www.josephclough.com/free-hypnosis-and-empowerment-videos",
      image: "https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/ba/2c/61/ba2c615e-f1fe-62c7-0131-5b7d1d60eb0f/AppIcon-1x_U007emarketing-0-10-0-0-85-220-0.png/1200x600wa.png",
    },
    {
      title: "Denso App",
      description:
        "The Denso App is a cutting-edge platform designed to enhance productivity and streamline communication within businesses. Offering a comprehensive set of tools for team collaboration, task management, and real-time communication, Denso empowers teams to work smarter and more efficiently.",
      link: "https://www.denso.com/global/en/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5jOdBKQNyj9K_v1_BVBXvQoUQwerkrBkNIQ&s",
    },
    {
      title: "Point Duty App",
      description:
        "The Point Duty App is a powerful mobile platform designed to help businesses and organizations streamline their operations, track employee performance, and manage tasks with precision. Tailored for industries that require task tracking, monitoring, and performance evaluation, this app brings real-time data and actionable insights directly to your fingertips.",
      link: "https://www.pointduty.com.au/",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeTghbkqw2Ykbn7dd9UsK5c5-h8etZuAAeBg&s",
    },
  ];

  return (
    <section className={`${isDarkMode ? " text-white" : "bg-white text-black"} py-8`}>
      <div className="container mx-auto text-center mb-8">
        <h2 className={`text-4xl font-semibold ${isDarkMode ? " text-yellow-500" : " text-black"}`}>My Portfolio</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-25 h-20 rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:text-indigo-800"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
