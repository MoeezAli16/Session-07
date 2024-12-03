import React, { useState } from "react";
import { Button } from "@/components/ui/button"; 
import { Input } from "@/components/ui/input"; 
import { Label } from "@/components/ui/label"; 

interface CareerProps {
  isDarkMode: boolean; 
}

const Career: React.FC<CareerProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    resume: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Job application submitted", formData);
  };

  return (
    <div className={`flex flex-col items-center p-8 space-y-6 ${isDarkMode ? "text-white" : "text-black"}`}>
      <h1 className={`text-3xl font-bold ${isDarkMode ? "text-yellow-500":"text-black"}`}>Career Opportunities</h1>
      <p className={`text-lg  ${isDarkMode ? " text-white" : " text-gray-500"}`}>We are always looking for talented individuals to join our team. Apply to one of the open positions below.</p>

      {/* Job Listings */}
      <div className="w-full max-w-4xl mt-8">
        <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? "text-yellow-500":"text-black"}`}>Available Positions</h2>
        <ul className="space-y-4">
          <li className="p-4 border-2 rounded-md">
            <h3 className="font-bold text-lg">Frontend Developer</h3>
            <p>Join our frontend team and help us build amazing web applications using modern JavaScript frameworks like React, Next.js, and more.</p>
            <Button className={`mt-2 text-white ${
              isDarkMode ? "text-black bg-white" : "text-white bg-black"
            }`}>Apply Now</Button>
          </li>
          <li className="p-4 border-2 rounded-md">
            <h3 className="font-bold text-lg">Backend Developer</h3>
            <p>We're looking for a backend developer with experience in Node.js, Express, and MongoDB to help build scalable web services.</p>
            <Button className={`mt-2 text-white ${
              isDarkMode ? "text-black bg-white" : "text-white bg-black"
            }`}>Apply Now</Button>
          </li>
          <li className="p-4 border-2 rounded-md">
            <h3 className="font-bold text-lg">UX/UI Designer</h3>
            <p>If you're passionate about creating intuitive and beautiful user experiences, we want you on our team!</p>
            <Button className={`mt-2 text-white ${
              isDarkMode ? "text-black bg-white" : "text-white bg-black"
            }`}>Apply Now</Button>
          </li>
        </ul>
      </div>

      <div className="mt-8 w-full max-w-md">
        <h2 className={`text-2xl font-bold ${isDarkMode ? "text-yellow-500":"text-black"}`}>Apply Now</h2>
        <p className={`text-lg  ${isDarkMode ? " text-white" : " text-gray-500"}`}>Fill out the form below to apply for a position.</p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="flex flex-col">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="border-2 p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="border-2 p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              placeholder="Position you're applying for"
              className="border-2 p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="resume">Resume (Link or File)</Label>
            <Input
              id="resume"
              name="resume"
              value={formData.resume}
              onChange={handleInputChange}
              placeholder="Provide your resume link or upload a file"
              className="border-2 p-2 rounded-md"
            />
          </div>

          <div className="flex justify-center">
            <Button type="submit" className={` text-white px-6 py-2 rounded-md ${
              isDarkMode ? "text-black bg-white" : "text-white bg-black"
            }`}>
              Submit Application
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Career;
