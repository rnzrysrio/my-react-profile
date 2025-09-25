const projects = [
  { id: 1, name: "Buildhub Seller", description: "Helped develop and enhance seller-side features for a marketplace platform.", link: "https://github.com/8boxSolutions/Buildhub-Seller-Portal" },
  { id: 2, name: "TowKing Admin", description: "Contributed to a towing service management system.", link: "https://github.com/8boxSolutions/Buildhub-Seller-Portal" },
  { id: 3, name: "Visitor Management System", description: "A functional VMS that stores visitor data in MySQL (phpMyAdmin) and generates tickets in PDF using FPDF.", link: "https://github.com/rnzrysrio/Visitor-Management-System-V2" },
];

const Projects = () => (
  <section id="projects" className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="border rounded p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="mb-4">{project.description}</p>
            <a href={project.link} target="_blank" className="text-blue-500 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
