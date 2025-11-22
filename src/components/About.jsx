import logo from "../assets/XCD-Logo.png";

const About = () => (
  <section
    id="about"
    className="min-h-screen flex items-center bg-[#150052] text-white pt-[120px] md:pt-[90px] lg:pt-[100px]"
  >
    <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-12">

      {/* Left: Text */}
      <div className="text-center md:text-center md:w-[50%]">
        <p className="text-2xl lg:text-xl mb-6 leading-relaxed">
          Hi! I’m Renz, an aspiring Full Stack Developer known as “XCD.” I enjoy creating reliable web apps, designing intuitive interfaces, and exploring modern stacks like JavaScript, Python, and MySQL. When I’m not coding, I’m probably losing to my own bugs or tinkering with fun side projects.
        </p>

        <p className="text-3xl mb-6 leading-relaxed">
          "I write code I don’t fully understand just to see what happens." – Renz
        </p>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center md:w-[40%] lg:w-[45%]">
        <img
          src={logo}
          alt="Renz"
          className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default About;
