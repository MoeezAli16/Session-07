import React, { useState } from "react";
import Header from "./components/Header";
import FormSection from "./components/FormSection";
import ProjectDetails from "./components/ProjectDetails";
import ServiceSection from "./components/ServiceSection";
import TestimonialSection from "./components/TestimonialSection";
import PartnerSection from "./components/PartnerSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [framework, setFramework] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode); 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <FormSection
        projectName={projectName}
        setProjectName={setProjectName}
        framework={framework}
        setFramework={setFramework}
        handleSubmit={handleSubmit}
      />
      {formSubmitted && (
        <ProjectDetails
          projectName={projectName}
          framework={framework}
          isDarkMode={isDarkMode} // Pass isDarkMode here
        />
      )}
      <ServiceSection />
      <TestimonialSection />
      <PartnerSection />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;
