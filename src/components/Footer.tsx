import logoLight from "../assets/lg-light.png"; 
import logoDark from "../assets/lg-dark.png";

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => (
  
  <div>
    <hr className={`border-t-2 ${isDarkMode ? "border-white" : "border-black"}`} />
  <div className={`flex flex-col justify-center pt-8 ${isDarkMode ? "bg-black text-white" : "bg-gray-200 text-black"}`}>
    {/* Input form for email and message */}
    <div className="flex justify-center gap-96 mb-4 items-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-[300px] p-2 rounded-md mt-6"
      />
    </div>
    <div className="flex justify-center gap-96 mb-1 items-center">
      <input
        type="text"
        placeholder="Enter your message"
        className="w-[300px] p-2 rounded-md"
      />
    </div>
    <div className="flex justify-center gap-96 mb-4 items-center">
      <button className={`cursor-pointer hover:text-yellow-500 mb-4 p-2 rounded-md  ${isDarkMode ? "bg-black text-white" : "bg-grey text-black"}`}>
        Submit
      </button>
    </div>
    <div className="flex justify-center gap-96 mb-2 items-center">
      <img src={isDarkMode ? logoDark : logoLight} alt="Logo" className="mb-2 w-40 h-30 rounded-2xl" />
      <p className="cursor-pointer hover:text-yellow-500">Copyright (c) 2024 Txend</p>
      <p className="cursor-pointer hover:text-yellow-500">Discover@Txend.com</p>
    </div>
    
  </div>
  </div>
);

export default Footer;
