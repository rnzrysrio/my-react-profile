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
];

const Tech = () => (
  <section
    id="tech"
    className="items-center bg-[#150052] text-white pt-[120px] md:pt-[90px] lg:pt-[100px]"
  >
    {/* Section Header */}
    <div className="my-10">
      <h1 className="text-5xl font-bold text-center">TECH STACK</h1>
    </div>

    {/* Tech Stacks */}
    <div className="w-full flex flex-col p-5 md:grid md:grid-cols-2 md:justify-items-center md:gap-x-5 md:gap-y-10 lg:p-10 lg:gap-y-3">

      {/* LANGUAGES */}
      <div className="border border-[#00B2FF] border-4 rounded-2xl w-full mb-10">
        <h1 className="bg-sky-600 text-5xl font-bold p-5 text-left md:text-center">
          LANGUAGE
        </h1>
        {TECHSTACK.filter((item) => item.category === "Language").map((item) => (
          <div key={item.id} className="p-6 w-full bg-white-500 flex items-center">
            <img
              src={item.iconPath}
              alt=""
              className="h-20 w-20 rounded-full mr-6 md:h-16 md:w-16"
            />
            <h1 className="text-3xl font-bold text-left md:text-2xl">
              {item.tech}
            </h1>
          </div>
        ))}
      </div>

      {/* FRAMEWORKS / LIBRARIES */}
      <div className="border border-[#00B2FF] border-4 rounded-2xl w-full mb-10">
        <h1 className="bg-sky-600 text-5xl font-bold p-5 text-left md:text-center">
          FRAMEWORK / LIBRARY
        </h1>
        {TECHSTACK.filter((item) => item.category === "FrameLib").map((item) => (
          <div key={item.id} className="p-6 w-full bg-white-500 flex items-center">
            <img
              src={item.iconPath}
              alt=""
              className="h-20 w-20 rounded-full mr-6 md:h-16 md:w-16"
            />
            <h1 className="text-3xl font-bold text-left md:text-2xl">
              {item.tech}
            </h1>
          </div>
        ))}
      </div>

      {/* DATABASES */}
      <div className="border border-[#00B2FF] border-4 rounded-2xl w-full mb-10">
        <h1 className="bg-sky-600 text-5xl font-bold p-5 text-left md:text-center">
          DATABASE
        </h1>
        {TECHSTACK.filter((item) => item.category === "Database").map((item) => (
          <div key={item.id} className="p-6 w-full bg-white-500 flex items-center">
            <img
              src={item.iconPath}
              alt=""
              className="h-20 w-20 rounded-full mr-6 md:h-16 md:w-16"
            />
            <h1 className="text-3xl font-bold text-left md:text-2xl">
              {item.tech}
            </h1>
          </div>
        ))}
      </div>

      {/* DEVOPS */}
      <div className="border border-[#00B2FF] border-4 rounded-2xl w-full mb-10">
        <h1 className="bg-sky-600 text-5xl font-bold p-5 text-left md:text-center">
          DEVOPS
        </h1>
        {TECHSTACK.filter((item) => item.category === "DevOps").map((item) => (
          <div key={item.id} className="p-6 w-full bg-white-500 flex items-center">
            <img
              src={item.iconPath}
              alt=""
              className="h-20 w-20 rounded-full mr-6 md:h-16 md:w-16"
            />
            <h1 className="text-3xl font-bold text-left md:text-2xl">
              {item.tech}
            </h1>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Tech;