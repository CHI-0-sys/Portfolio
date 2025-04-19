import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-[#e8d8c9] text-black p-8">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-bold mb-4"
      >
        Emmanuel Chibuike - Blockchain-Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-xl mb-8"
      >
        Bringing decentralize economy to every pocket!!
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex gap-4"
      >
        <button className="px-6 py-3 bg-[#f3701E] text-[#1A1A1A] font-bold rounded-lg hover:bg-[#4b607f] transition-all">
          View Projects
        </button>
        <button className="px-6 py-3 border-2 border-[#4b607f] text-[#000] font-bold rounded-lg hover:bg-[#f3701e] hover:text-[#] transition-all">
          Contact Me
        </button>
      </motion.div>
    </section>
  )   
}