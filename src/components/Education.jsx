const EDUCATION = [
    {id: 1, school: "Polytechnic University of the Philippines - Sta. Mesa", course: "BS in Computer Science", year: "2021-2025", description: "Studied the fundamental and theoretical concepts of programming", achievements: "Graduated Cum Laude"},
    {id: 2, school: "Lagro High School", course: "Science, Technology, Engineering, Mathematics (STEM)", year: "2019-2021", description: "Studied the fundamental and foundational concepts of mathematics, natural sciences, arts, and practical research", achievements: "Graduated with High Honors"},
    {id: 3, school: "North Fairview High School", course: "Junior High", year: "2015-2019", description: "Studied the basics and foundations of mathematics, sciences, arts, morals and virtues, history, and basic research", achievements: "Graduated with Honors"},
    {id: 4, school: "Fairview Elementary School", course: "Primary/Grade School", year: "2010-2015", description: "Studied the basics of mathematics, sciences, and morals and virtues", achievements: "Academic Achiever"},
];

const Education = () => (
  <section id="education" className="min-h-screen items-center bg-[#150052] text-white pt-[80px] flex flex-col">
    {/* Section Header */}
    <div className="my-5">
      <h1 className="text-5xl font-bold text-center">Education</h1>
    </div>

    <div className="w-5/6 border-2 border-[#00B2FF] rounded-xl p-5 flex flex-col">
        <div class="relative border-l-2 border-gray-300 w-4/5">
        {EDUCATION.map((item, index) => {
            if(index === 3){
                return(
                    <div key={item.id} class="mb-10 ml-6">
                        <div class="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5"></div>
                        <h3 class="text-xl text-sky-300 font-semibold">{item.school}</h3>
                        <p class="text-sm">{item.course} • {item.year}</p>
                        <p class="mt-2">{item.description}</p>
                        <p class="mt-2 "><span className="text-sky-300 font-semibold">Notable Achievements:</span> {item.achievements}</p>
                        <div class="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5 top-[100%]"></div>
                    </div>
                )
            }
            else{
                return(
                    <div key={item.id} class="mb-10 ml-6">
                        <div class="absolute w-3 h-3 bg-blue-500 rounded-full -left-1.5"></div>
                        <h3 class="text-xl text-sky-300 font-semibold">{item.school}</h3>
                        <p class="text-sm">{item.course} • {item.year}</p>
                        <p class="mt-2">{item.description}</p>
                        <p class="mt-2 "><span className="text-sky-300 font-semibold">Notable Achievements:</span> {item.achievements}</p>
                    </div>
                )
            }
        })}
        </div>
    </div>
  </section>
);

export default Education;