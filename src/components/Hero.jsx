import GradPic from "../assets/GradPic.jpg";

const Hero = () => (
  <section className="h-screen flex items-center bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center md:justify-between">
      
      {/* Left: Text */}
      <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Renz</h1>
        <p className="text-xl mb-6">
          I build web applications with React & Tailwind
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition"
        >
          See my work
        </a>
      </div>

      {/* Right: Image */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img
          src={GradPic}
          alt="Renz"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
        />
      </div>

    </div>
  </section>
);

export default Hero;
