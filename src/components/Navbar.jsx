import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#150052] text-white z-50 px-14 py-6 md:px-5 lg:px-3 lg:py-5 shadow-md">

      {/* Top row */}
      <div className="flex justify-between items-center md:justify-around lg:pt-2">

        {/* Logo */}
        <div className="text-5xl font-bold md:text-3xl md:pl-10 lg:text-5xl lg:ml-[-100px]">
          XCD
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-4xl font-bold transition-all"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:w-1xl lg:w-4xl justify-around text-center">
          <a href="#home" className="mx-5 hover:bg-[#82D9F1] text-3xl font-bold transition-colors duration-500 lg:text-5xl">
            HOME
          </a>
          <a href="#about" className="mx-5 hover:bg-[#82D9F1] text-3xl font-bold transition-colors duration-500 lg:text-5xl">
            TECH
          </a>
          <a href="#projects" className="mx-5 hover:bg-[#82D9F1] text-3xl font-bold transition-colors duration-500 lg:text-5xl">
            PROJECTS
          </a>
          <a href="#contact" className="mx-5 hover:bg-[#82D9F1] text-3xl font-bold transition-colors duration-500 lg:text-5xl">
            CONTACT
          </a>
        </div>
      </div>

      {/* Mobile Backdrop */}
      <div
        className={`absolute top-full left-0 w-full h-screen bg-[#82D9F1]/50 z-40
        transition-opacity duration-300 ease-out md:hidden
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      >

        {/* Mobile Sidebar */}
        <aside
          className={`bg-[#150052] h-full max-w-[50%] pt-10
          transform transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-4">
            <a
              href="#home"
              className="py-4 text-center hover:bg-[#82D9F1] text-4xl font-bold transition-colors duration-500"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </a>

            <a
              href="#about"
              className="py-4 text-center hover:bg-[#82D9F1] text-4xl font-bold transition-colors duration-500"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </a>

            <a
              href="#tech"
              className="py-4 text-center hover:bg-[#82D9F1] text-4xl font-bold transition-colors duration-500"
              onClick={() => setIsOpen(false)}
            >
              TECH STACK
            </a>

            <a
              href="#projects"
              className="py-4 text-center hover:bg-[#82D9F1] text-4xl font-bold transition-colors duration-500"
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </a>

            <a
              href="#education"
              className="py-4 text-center hover:bg-[#82D9F1] text-4xl font-bold transition-colors duration-500"
              onClick={() => setIsOpen(false)}
            >
              EDUCATION
            </a>

            <a
              href="#contact"
              className="py-4 text-center hover:bg-[#82D9F1] text-4xl font-bold transition-colors duration-500"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </a>
          </nav>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;
