import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom"; 

interface ContactUsProps {
  isDarkMode: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const navigate = useNavigate();

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

    navigate(`/success?name=${formData.name}&email=${formData.email}`);
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

        <Button
          type="submit"
          className={`text-white px-6 py-2 rounded-md ${
            isDarkMode ? "text-black bg-white" : "text-white bg-black"
          }`}
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactUs;
