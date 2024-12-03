import React, { useState, useEffect, Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button"; 

//For Checking LazyLoading
const FormSection = lazy(() => {
  console.log("Lazy loading FormSection...");
  return import("./components/FormSection");
});
const AboutUs = lazy(() => {
  console.log("Lazy loading AboutUs...");
  return import("./components/About");
});
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const ServiceSection = lazy(() => import("./components/ServiceSection"));
const TestimonialSection = lazy(() => import("./components/TestimonialSection"));
const PartnerSection = lazy(() => import("./components/PartnerSection"));
const ContactUs = lazy(() => import("./components/ContactUs"));
const Career = lazy(() => import("./components/Career"));
const Portfolio = lazy(() => import("./components/Portfolio"));

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [framework, setFramework] = useState("");

  useEffect(() => {
    const savedTheme = localStorage.getItem("isDarkMode");
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newTheme = !prev;
      localStorage.setItem("isDarkMode", JSON.stringify(newTheme));
      document.documentElement.classList.toggle("dark", newTheme);
      return newTheme;
    });
  };

  const handleFormSubmit = (projectName: string, framework: string) => {
    setProjectName(projectName);
    setFramework(framework);
    setFormSubmitted(true);
  };

  return (
    <Router>
      <div className={isDarkMode ? "dark" : ""}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FormSection handleSubmit={handleFormSubmit} />
                  {formSubmitted && (
                    <ProjectDetails
                      projectName={projectName}
                      framework={framework}
                      isDarkMode={isDarkMode}
                    />
                  )}
                  <ServiceSection isDarkMode={isDarkMode} />
                  <TestimonialSection isDarkMode={isDarkMode} />
                  <PartnerSection isDarkMode={isDarkMode} />
                </>
              }
            />
            <Route path="/about" element={<AboutUs isDarkMode={isDarkMode} />} />
            <Route path="/portfolio" element={<Portfolio isDarkMode={isDarkMode} />} />
            <Route path="/career" element={<Career isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<ContactUs isDarkMode={isDarkMode} />} />
          </Routes>
        </Suspense>

        <Footer isDarkMode={isDarkMode} />
      </div>
    </Router>
  );
};

export default App;
