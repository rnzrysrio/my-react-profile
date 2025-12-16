import logo from "../assets/XCD-Logo.png";

const About = () => (
  <section
    id="about"
    className="min-h-screen items-center bg-[#150052] text-white pt-[80px]"
  >
    {/* Section Header */}
    <div className="my-5">
      <h1 className="text-5xl font-bold text-center">ABOUT ME</h1>
    </div>
    
    <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">

      {/* Left: Text */}
      <div className="text-center md:text-center md:w-[50%]">
        <p className="text-xl lg:text-2xl mb-6 leading-relaxed">
          Hi! I’m Renz, an aspiring Full Stack Developer known as “XCD.” I enjoy creating reliable web apps, designing intuitive interfaces, and exploring modern stacks like JavaScript, Python, and MySQL. When I’m not coding, I’m probably losing my mind to my own bugs or tinkering with "fun" side projects that I know I won't finish.
        </p>

        <p className="text-2xl mb-6 leading-relaxed lg:text-3xl">
          "I write code I don’t fully understand just to see what happens." – Renz
        </p>
      </div>

      {/* Right: Image */}
      <div className="flex justify-center md:w-[40%] lg:w-[45%]">
        <img
          src={logo}
          alt="Renz"
          className="w-40 h-40 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>
);

export default About;
