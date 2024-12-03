import React from "react";

interface ServiceSectionProps {
  isDarkMode: boolean;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ isDarkMode }) => (
  <div className="flex flex-col justify-center items-center mt-8 mb-8">
    <h2
      className={`text-3xl font-semibold mb-12 mt-12 ${
        isDarkMode ? "text-yellow-500" : "text-black"
      }`}
    >
      Our Services
    </h2>
    <div className="flex justify-center gap-8">
      <a href="https://www.example1.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlGmKtrnxElpqw3AExKXPWWBulcwjlvDJa1Q&s"
          alt="Image 1"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
      </a>
      <a href="https://www.example2.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png"
          alt="Image 2"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
      </a>
      <a href="https://www.example3.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRss-86vRuxOArrVRmMgerLZ5pi8yCs6U7zsQ&s"
          alt="Image 3"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
      </a>
      <a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg"
          alt="Image 4"
          className="w-48 h-48 object-cover rounded-lg shadow-lg"
        />
      </a>
    </div>
  </div>
);

export default ServiceSection;
