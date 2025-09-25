import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-3xl font-bold">XCD</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>☰</button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 pb-4 space-y-2 bg-gray-800">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;