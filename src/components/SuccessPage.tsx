import React from "react";
import { useLocation } from "react-router-dom";

const SuccessPage: React.FC = () => {
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const name = queryParams.get('name');
  const email = queryParams.get('email');

  return (
    <div className="text-center">
      <h1 className="text-2xl">Thank you for your submission!</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default SuccessPage;
