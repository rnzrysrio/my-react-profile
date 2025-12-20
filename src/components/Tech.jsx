import CPNG from "../assets/C-Logo.png";
import JSPNG from "../assets/JS-Logo.png";
import TSPNG from "../assets/TS-Logo.png";
import PHPPNG from "../assets/PHP-Logo.png";
import PYTHONJPEG from "../assets/Python-Logo.jpg"
import REACTPNG from "../assets/React-Logo.png";
import TAILWINDPNG from "../assets/Tailwind-Logo.png";
import JQUERYJPEG from "../assets/JQUERY-Logo.jpg";
import MYSQLPNG from "../assets/MYSQL-Logo.png";
import SQLITEPNG from "../assets/SQLITE-Logo.png";
import GITHUBPNG from "../assets/GITHUB-Logo.png";


const TECHSTACK = [
  { id: 1, category: "Language", tech: "C", iconPath: CPNG },
  { id: 2, category: "Language", tech: "JavaScript", iconPath: JSPNG },
  { id: 3, category: "Language", tech: "TypeScript", iconPath: TSPNG },
  { id: 4, category: "Language", tech: "PHP", iconPath: PHPPNG },
  { id: 5, category: "Language", tech: "Python", iconPath: PYTHONJPEG },
  { id: 6, category: "FrameLib", tech: "React", iconPath: REACTPNG },
  { id: 7, category: "FrameLib", tech: "Tailwind CSS", iconPath: TAILWINDPNG },
  { id: 8, category: "FrameLib", tech: "jQuery", iconPath: JQUERYJPEG },
  { id: 9, category: "Database", tech: "MySQL", iconPath: MYSQLPNG },
  { id: 10, category: "Database", tech: "SQLite", iconPath: SQLITEPNG },
  { id: 11, category: "DevOps", tech: "Git & Github", iconPath: GITHUBPNG },
  { id: 12, category: "DevOps", tech: "Visual Studio Code", iconPath: null },
];

const Tech = () => (
  <section
    id="tech"
    className="items-center bg-[#150052] text-white pt-[80px]"
  >
    {/* Section Header */}
    <div className="my-5">
      <h1 className="text-5xl font-bold text-center">TECH STACK</h1>
    </div>

    {/* Tech Stacks */}
    <div className="w-full p-5 justify-items-center md:grid md:grid-cols-2 md:gap-10">

      {/* LANGUAGES */}
      <div className="flex flex-col border border-[#00B2FF] border-2 rounded-2xl w-full mb-10 md:mb-0">
        <h1 className="bg-sky-600 rounded-xl w-full h-20 text-3xl font-bold p-5 text-center">
            LANGUAGE
        </h1>
        <div className="flex flex-col">
          {TECHSTACK.filter((item) => item.category === "Language").map((item) => (
            <div key={item.id} className="p-3 w-full bg-white-500 flex items-center">
              <img
                src={item.iconPath}
                alt="icon"
                className="h-10 w-10 rounded-full mr-6 md:h-15 md:w-15"
              />
              <h1 className="text-3xl font-bold text-left md:text-2xl">
                {item.tech}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* FRAMEWORKS / LIBRARIES */}
      <div className="flex flex-col border border-[#00B2FF] border-2 rounded-2xl w-full mb-10 md:mb-0">
        <h1 className="bg-sky-600 rounded-xl w-full h-20 text-3xl font-bold p-5 text-center md:p-1 lg:p-5">
            FRAMEWORKS & LIBRARIES
        </h1>
        <div className="flex flex-col">
          {TECHSTACK.filter((item) => item.category === "FrameLib").map((item) => (
            <div key={item.id} className="p-3 w-full bg-white-500 flex items-center">
              <img
                src={item.iconPath}
                alt="icon"
                className="h-10 w-10 rounded-full mr-6 md:h-15 md:w-15"
              />
              <h1 className="text-3xl font-bold text-left md:text-2xl">
                {item.tech}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* DATABASES */}
      <div className="flex flex-col border border-[#00B2FF] border-2 rounded-2xl w-full mb-10 md:mb-0">
        <h1 className="bg-sky-600 rounded-xl w-full h-20 text-3xl font-bold p-5 text-center">
            DATABASE
        </h1>
        <div className="flex flex-col">
          {TECHSTACK.filter((item) => item.category === "Database").map((item) => (
            <div key={item.id} className="p-3 w-full bg-white-500 flex items-center">
              <img
                src={item.iconPath}
                alt="icon"
                className="h-10 w-10 rounded-full mr-6 md:h-15 md:w-15"
              />
              <h1 className="text-3xl font-bold text-left md:text-2xl">
                {item.tech}
              </h1>
            </div>
          ))}
        </div>
      </div>

      {/* DEVOPS */}
      <div className="flex flex-col border border-[#00B2FF] border-2 rounded-2xl w-full">
        <h1 className="bg-sky-600 rounded-xl w-full h-20 text-3xl font-bold p-5 text-center">
            TOOLS
        </h1>
        <div className="flex flex-col">
          {TECHSTACK.filter((item) => item.category === "DevOps").map((item) => (
            <div key={item.id} className="p-3 w-full bg-white-500 flex items-center">
              <img
                src={item.iconPath}
                alt="icon"
                className="h-10 w-10 rounded-full mr-6 md:h-15 md:w-15"
              />
              <h1 className="text-3xl font-bold text-left md:text-2xl">
                {item.tech}
              </h1>
            </div>
          ))}
        </div>
      </div>

    </div>

  </section>
);

export default Tech;