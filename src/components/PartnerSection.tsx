import React from "react";
import krillpay from "../assets/krillpay.png";
import levis from "../assets/levis.png";
import pointduty from "../assets/pointduty.png";
import denso from "../assets/denso.png";

interface PartnerSectionProps {
  isDarkMode: boolean;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ isDarkMode }) => (
  <div className="flex flex-col justify-center items-center mt-8 mb-8">
    <h2
      className={`text-3xl font-semibold mb-12 mt-12 ${
        isDarkMode ? "text-yellow-500" : "text-black"
      }`}
    >
      Our Partners
    </h2>
    <div className="flex justify-center gap-8">
      <a
        href="https://www.example1.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={krillpay}
          alt="Krillpay"
          className="w-48 h-50 object-cover rounded-lg shadow-lg"
        />
      </a>
      <a
        href="https://www.example2.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={levis}
          alt="Levis"
          className="w-48 h-50 object-cover rounded-lg shadow-lg"
        />
      </a>
      <a
        href="https://www.example3.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={pointduty}
          alt="Point Duty"
          className="w-48 h-45 object-cover rounded-lg shadow-lg"
        />
      </a>
      <a
        href="https://www.example4.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={denso}
          alt="Denso"
          className="w-48 h-50 object-cover rounded-lg shadow-lg"
        />
      </a>
    </div>
  </div>
);

export default PartnerSection;
