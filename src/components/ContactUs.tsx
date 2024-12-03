import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Replace with actual Button component
import { Input } from "@/components/ui/input"; // Replace with actual Input component
import { Label } from "@/components/ui/label"; // Replace with actual Label component
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import instagram from "../assets/insta.png";
import twiter from "../assets/twitter.png";

interface ContactUsProps {
  isDarkMode: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div
      className={`flex flex-col items-center p-8 space-y-6 ${
        isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"
      }`}
    >
      <h1
        className={`text-3xl font-bold ${
          isDarkMode ? "text-yellow-500" : "text-black"
        }`}
      >
        Contact Us
      </h1>
      <p
        className={`text-lg ${
          isDarkMode ? "text-gray-300" : "text-gray-500"
        }`}
      >
        We'd love to hear from you. Please fill out the form below, and we will
        get back to you soon!
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
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
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            rows={5}
            className={`border-2 p-2 rounded-md ${
              isDarkMode ? "text-white bg-gray-800" : "text-black bg-white"
            }`}
          />
        </div>

        <div className="flex justify-center">
          <Button
            type="submit"
            className={` text-white px-6 py-2 rounded-md ${
              isDarkMode ? "text-black bg-white" : "text-white bg-black"
            }`}
          >
            Send Message
          </Button>
        </div>
      </form>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-4">
        <img
          src={linkedin}
          alt="Linkedin"
          className="rounded-full w-10 h-10 cursor-pointer"
        />
        <img
          src={facebook}
          alt="Facebook"
          className="rounded-full w-10 h-10 cursor-pointer"
        />
        <img
          src={twiter}
          alt="Twitter"
          className="rounded-full w-10 h-10 cursor-pointer"
        />
        <img
          src={instagram}
          alt="Instagram"
          className="rounded-full w-10 h-10 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ContactUs;
