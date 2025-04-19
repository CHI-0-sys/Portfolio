import { motion } from "framer-motion";
import  bot from "../assets/bot.jpeg"
import  unique  from "../assets/unique.jpeg";
import apple from "../assets/apple.png"
import sei from '../assets/sei.png'

const projects = [
  {
    title: "seidar",
    tags: ["React", "Node.js","move","EVM"],
    image : sei, 
    demo: "#",
    github: "#",
  },
  {
    title: "Apple CLONE",
    tags: ["React", "Node.js"],
    image : apple, 
    demo: "#",
    github: "#",
  },
  {
    title: "unique",
    tags: ["Next.js", "Mongo.db","Ethereum"],
    image : unique, 
    demo: "#",
    github: "#",
  },
  {
    title: "QUANT",
    tags: ["Node.js", "Solana" ,"Botfather"],
    image : bot , 
    demo: "#",
    github: "#",
  },
  
];

export default function Projects() {
  return (
    <section className="py-16 px-8 bg-[#e8d8c9] text-black">
      <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#f3710e] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#272d4e] transition-all"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-[#272d4e] text-[#e8d8c9] px-2 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href={project.demo} className="text-[#000] hover:underline">
                  Live Demo
                </a>
                <a href={project.github} className="text-[#000] hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}