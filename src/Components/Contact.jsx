import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-16 px-8 bg-[#e8d8c9] text-black">
      <h2 className="text-4xl font-bold text-center mb-8">Contact Me</h2>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto flex flex-col items-center gap-6"
      >
        <a
          href="https://wa.me/2348141316850" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-[#25D366] text-white font-bold rounded-lg hover:bg-[#128C7E] transition-all"
        >
          Message on WhatsApp
        </a>
        
        <a
          href="https://t.me/chiweb" // Replace with your Telegram username
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center px-6 py-3 bg-[#0088cc] text-white font-bold rounded-lg hover:bg-[#005f99] transition-all"
        >
          Chat on Telegram
        </a>
      </motion.div>
    </section>
  );
}
