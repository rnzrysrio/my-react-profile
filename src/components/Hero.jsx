import GradPic from "../assets/GradPic.jpg";

const Hero = () => (
  <section
    id="home"
    className="min-h-screen flex items-center bg-[#150052] text-white pt-[120px] md:pt-[90px] lg:pt-[100px]"
  >
    <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-12">

      {/* Left: Image */}
      <div className="flex justify-center md:w-[40%] lg:w-[45%]">
        <img
          src={GradPic}
          alt="Renz"
          className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
        />
      </div>

      {/* Right: Text */}
      <div className="text-center md:text-left md:w-[50%]">
        <h1 className="text-5xl font-bold mb-4 lg:text-6xl">
          Hi, I'm Renz
        </h1>

        <p className="text-2xl mb-4 italic">
          An Aspiring Full Stack Developer
        </p>

        <p className="text-lg lg:text-xl mb-6 leading-relaxed">
          I am passionate about creating systems and solutions that solve real-world problems through technology.
        </p>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start gap-6">
          <a
            href="#projects"
            className="px-6 py-3 text-xl font-bold bg-blue-500 rounded-xl hover:bg-blue-600 transition"
          >
            See my work
          </a>

          <a
            href="https://www.linkedin.com/in/renz-rey-sario/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xl font-bold bg-blue-500 rounded-xl hover:bg-blue-600 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
