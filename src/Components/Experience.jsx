import { motion } from "framer-motion";

const experiences = [
  {
    role: "web-developer tutor",
    company: 'Afritrain Academy',
    duration: "2023 - Present",
    description: "Mentored students in building realw-world projects, improving coding skills,and understanding modern web development practices ",
  },
  {
    role: "CTO & lead-developer",
    company:'seidar',
    duration: "2024",
    description: "developed the algorithm and thread-pipeline for onchain nft platform as social platform",
  },
  {
    role:"Trendmint",
    company:'founder',
    duration: "2025",
    description:"worked as the lead-dev during sonic mobius Hackacthon 2025"
  }
];

export default function Experience() {
  return (
    <section className="py-16 px-8 bg-[#e8d8c9] text-black">
      <h2 className="text-4xl font-bold text-center mb-8">Experience</h2>
      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative pl-8 mb-8"
          >
            <div className="absolute left-0 top-2 w-4 h-4 bg-[#f3710e] rounded-full"></div>
            <div className="border-l-2 border-[#f3710e] pl-8">
              <h3 className="text-2xl font-bold">{exp.role}</h3>
              <p className="text-gray-400 mb-2">{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}