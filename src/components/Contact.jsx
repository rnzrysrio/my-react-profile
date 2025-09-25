const Contact = () => (
  <section id="contact" className="py-20 bg-gray-800 text-white">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <p className="mb-6">Feel free to reach out via email or connect on LinkedIn</p>
      <div className="flex justify-center space-x-4">
        <a href="mailto:renzreysario312@gmail.com" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition">
          Email
        </a>
        <a href="https://www.linkedin.com/in/renz-rey-sario/" target="_blank" className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition">
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

export default Contact;