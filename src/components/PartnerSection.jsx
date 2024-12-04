import React from "react";
import krillpay from "../assets/krillpay.png";
import levis from "../assets/levis.png";
import pointduty from "../assets/pointduty.png";
import denso from "../assets/denso.png";

const PartnerSection = ({ isDarkMode }) => (
  <div className="flex flex-col justify-center items-center mt-8 mb-8">
    <h2
      className={`text-3xl font-semibold mb-12 mt-12 ${
        isDarkMode ? "text-yellow-500" : "text-black"
      }`}
    >
      Our Partners
    </h2>
    <div className="flex flex-wrap justify-center gap-8">
      <a
        href="https://www.example1.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={krillpay}
          alt="Krillpay"
          className="w-48 h-48 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
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
          className="w-48 h-48 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
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
          className="w-48 h-48 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
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
          className="w-48 h-48 object-cover rounded-lg shadow-lg transition-transform hover:scale-105"
        />
      </a>
    </div>
  </div>
);

export default PartnerSection;
