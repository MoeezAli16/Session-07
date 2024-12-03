import React from "react";

interface TestimonialSectionProps {
  isDarkMode: boolean;
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ isDarkMode }) => (
  <div className="flex flex-col justify-center items-center mt-8 mb-8">
    <h2
      className={`text-3xl font-semibold mb-12 mt-12 ${
        isDarkMode ? "text-yellow-500" : "text-black"
      }`}
    >
      Our Testimonials
    </h2>
    <div className="flex justify-center gap-8">
      <a href="https://www.example1.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLW1iYH1EKAiQ_P9RGgogaMH7Mt5Z4FuTSQw&s"
          alt="Image 1"
          className="w-48 h-50 object-cover rounded-lg shadow-lg"
        />
        <p className="text-center">React Native</p>
      </a>
      <a href="https://www.example2.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNkzBLP4vbRzNBLzOfllxso6CQAettSfRaT53QSb4j7Yi5mdabSGXCa6BzEs7e_0bDLrM&usqp=CAU"
          alt="Image 2"
          className="w-48 h-25 object-cover rounded-lg shadow-lg"
        />
        <p className="text-center">MongoDb</p>
      </a>
      <a href="https://www.example3.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://media.istockphoto.com/id/1409948380/photo/business-portrait.jpg?s=612x612&w=0&k=20&c=m2ivjMl1v_eK5n-yv-NM3OqpKMy8XZ_gFOv0pih2TPk="
          alt="Image 3"
          className="w-48 h-39 object-cover rounded-lg shadow-lg"
        />
        <p className="text-center">Html & Css</p>
      </a>
      <a href="https://www.example4.com" target="_blank" rel="noopener noreferrer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbeH7lYII2X6VTBVjN7Kn6qQ91poUT6xB7CoKjR81AlkyTO6SoyiwgIR8igyoMjD4lNQ&usqp=CAU"
          alt="Image 4"
          className="w-48 h-50 object-cover rounded-lg shadow-lg"
        />
        <p className="text-center">JavaScript</p>
      </a>
    </div>
  </div>
);

export default TestimonialSection;
