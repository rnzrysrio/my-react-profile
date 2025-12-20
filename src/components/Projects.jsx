const PROJECTS = [
  { id: 1, name: "BUILDHUB SELLER", description: "Helped develop and enhance seller-side features for a marketplace platform.", techstack: "React, Tailwind CSS, Zustand, TanStack Query", link: "https://github.com/8boxSolutions/Buildhub-Seller-Portal" },
  { id: 2, name: "TOWKING ADMIN", description: "Contributed to a towing service management system.", techstack: "React, Tailwind CSS, Zustand, TanStack Query" , link: "https://github.com/8boxSolutions/Buildhub-Seller-Portal" },
  { id: 3, name: "VISITOR MANAGEMENT SYSTEM", description: "A functional VMS proof of concept that stores visitor data in MySQL (phpMyAdmin) and generates tickets in PDF using FPDF.", techstack: "PHP, HTML, CSS, MySQL, FPDF" , link: "https://github.com/rnzrysrio/Visitor-Management-System-V2" },
];

const Projects = () => (
  <section
    id="projects"
    className="items-center bg-[#150052] text-white pt-[80px]"
  >
    {/* Section Header */}
    <div className="my-5">
      <h1 className="text-5xl font-bold text-center">PROJECTS</h1>
    </div>

    <div className="flex flex-col items-center">

      {PROJECTS.map(items => (
      <div key={items.id} className="border-2 border-[#00B2FF] rounded-xl w-[90%] mb-10 lg:px-10 lg:pb-10">
        <h1 className="h-20 text-3xl font-bold text-center pt-5">
              {items.name}
        </h1>

        <div className="flex flex-col md:flex-row">
          <div className="p-5 md:w-[70%]">
            <h1 className="text-2xl font-bold text-left">
              DESCRIPTION
            </h1>
            <p className="text-xl text-justify leading-relaxed mb-5">
              {items.description}
            </p>
            <h1 className="text-2xl font-bold text-left">
              TECH STACK
            </h1>
            <p className="text-xl text-justify leading-relaxed">
              {items.techstack}
            </p>
          </div>

          <div className="flex justify-center items-center p-5 md:w-[30%]">
            <a href={items.link} target="_blank" className="text-xl font-bold bg-blue-500 hover:bg-blue-600 transition h-15 w-70 rounded-xl flex justify-center items-center md:w-40">Go To Repo &rarr;</a>
          </div>
        </div>
      </div>
      ))}

    </div>

  </section>
);

export default Projects;
