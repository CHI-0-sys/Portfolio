import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Oxmanua is one of the most brilliant developer i have ever come across !",
    author: "bitdev",
  },
  {
    quote: "He is exception,he feeds on onchain automation",
    author: "juan lee",
  },
  {
    quote: "Detailing like an artist, from Him i knew coding is an art ",
    author: "Justice Uzoigwe",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-8 bg-[#e8d8c9] text-black">
      <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>
      <div className="flex overflow-x-scroll gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="min-w-[300px] bg-[#272d4e] p-6 rounded-lg text-[#e8d8c9]"
          >
            <p className="italic mb-4">"{testimonial.quote}"</p>
            <p className="text-right font-bold">- {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}