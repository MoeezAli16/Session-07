import React from "react";
import PartnerSection from "./PartnerSection";

// Fixing the component to destructure props correctly
interface AboutUsProps {
  isDarkMode: boolean;
}

const AboutUs: React.FC<AboutUsProps> = ({ isDarkMode }) => {
  return (
    <div className="about-container p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className={`text-3xl font-bold text-center mb-6 ${
          isDarkMode ? "text-yellow-500" : "text-black"
        }`}>About Us</h1>
        <p className={`text-lg ${isDarkMode ? "text-white":"text-black"}`}>
          Welcome to Txend! We are a dedicated team of developers and innovators striving to create seamless digital experiences.
        </p>
        <p className={`text-lg mb-4 ${isDarkMode ? "text-white" : "text-black"}`}>
          Our mission is to help businesses thrive by providing cutting-edge solutions that make their digital presence powerful and effective. With our expertise in various technologies, we work closely with clients to build meaningful, results-driven applications.
        </p>
        <div className="mt-6">
          <h2 className={`text-2xl font-semibold mb-4 ${
          isDarkMode ? "text-yellow-500" : "text-black"
        }`}>Our Values</h2>
          <ul className= {`list-disc pl-6 space-y-2 ${isDarkMode ? "text-white" : "text-black"}`}>
            <li>Innovation: We embrace new technologies and ideas to keep our projects ahead of the curve.</li>
            <li>Collaboration: We believe in the power of teamwork to bring the best solutions to life.</li>
            <li>Customer Focus: Our priority is to understand and meet the needs of our clients.</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className={`ext-2xl font-semibold mb-4 ${
          isDarkMode ? "text-yellow-500" : "text-black"
        }`}>Meet Our Team</h2>
          <p className={`text-lg mb-4 ${isDarkMode ? "text-white":"text-black"}`}>
            Our team is a diverse group of professionals passionate about technology and its ability to solve real-world problems.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="team-member text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz33jQwCNCJN_HSsT_DqgLHT_dK50P4seyWA&s"
                alt="Team Member"
                className="rounded-full mb-2 w-25 h-20"
              />
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </div>
            <div className="team-member text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZltyRGXmEE8NlI9jU3O4ACej4RydUd5g3cA&s"
                alt="Team Member"
                className="rounded-full mb-2 w-25 h-20"
              />
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm text-gray-500">Lead Developer</p>
            </div>
          </div>
        </div>
      </div>
      <PartnerSection  isDarkMode={isDarkMode} />
    </div>
  );
};

export default AboutUs;
