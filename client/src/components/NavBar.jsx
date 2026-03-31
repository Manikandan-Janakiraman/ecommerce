import { Link } from "react-router-dom";
import { useState } from 'react';


const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); 
  };

  return (
    <>
      
      <div className="bg-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-sm md:text-base">
          <p>Mobile: +91 98844 85312</p>
          <p>Email: manij472@gmail.com</p>
        </div>
      </div>

      
      <div className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto h-20 flex justify-between items-center px-4 md:px-10">

          
          <div className="font-bold text-xl md:text-3xl text-gray-900">
            Bhakthi<span className="text-red-500">Mart</span>
          </div>

          
          <div className="hidden md:flex gap-10 font-medium">
            <button onClick={() => scrollToSection("home")} className="hover:text-red-600">Home</button>
            <button onClick={() => scrollToSection("about")} className="hover:text-red-600">About</button>
            <button onClick={() => scrollToSection("product")} className="hover:text-red-600">Product</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-red-600">Contact Us</button>
          </div>

          
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
          </div>
        </div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-white w-full flex flex-col items-center gap-6 py-6 shadow-lg">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("about")}>About Us</button>
          <button onClick={() => scrollToSection("product")}>Product</button>
          <button onClick={() => scrollToSection("contact")}>Contact Us</button>
        </div>
      )}
    </>
  );
};

export default NavBar;