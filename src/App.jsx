import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function App() {
  return (
    <div className="bg-[#1A1A1A] text-white">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}