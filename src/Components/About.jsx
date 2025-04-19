import { motion } from "framer-motion";
import pfp from "../assets/pfp.jpeg"

export default function About() {
  return (
    <section className="py-16 px-8 bg-[#e8d8c9] text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={pfp} 
            alt="Profile"
            className="w-88 h-88 rounded-full border-4 border-[#f3701e]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="mb-6">
          Hi there! My name is Emmanuel,known Onchain as <span className="bg-[#f3701e]">OxManua</span> and i'm a passionate Web3 developer, innovation technology and blockchain lover. I construct decentralized applications (dApps), trading bots, and other web-related stuff with amazing technologies like Solana, Next.js, Tailwind CSS, TypeScript, and others.

Having experience in DeFi, Forex trading, and Web3 services, I created several projects ranging from crypto-to-fiat payment systems to automated trading bots and tokenized trend markets. As an example, I can mention my newest project,<span className="bg-[#f3710e]">Trendmint</span>, which is aimed at tokenizing trending phenomena as Solana tokens and making them accessible for independent trading over the social media and DeFi platforms.

Outside of Web3, I also build advanced websites, work on 3D visualization applications, and create interactive UI/UX designs with GSAP animations for various clients. What goals do I strive for? Move further in the decentralized technologies and change the approach to digital trading, authentication, and user interactions for the better.

Let’s Build Something Cool

If blockchain, Web apps with great impact and DeFi interest you, why don’t we work together? I’m open for new partnership opportunities, for exchanging views and innovations in technology.


          </p>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Solana</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-[#f3710e] h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <p className="font-bold">Anchor</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-[#f3710e] h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <p className="font-bold">Ethereum</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-[#f3710e] h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <p className="font-bold">RedhAT</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-[#f3710e] h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <p className="font-bold">Typescript</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-[#f3710e] h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <p className="font-bold">React</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-[#f3710e] h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
            <div>
              <p className="font-bold">Next.js</p>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="bg-[#f3710e] h-2.5 rounded-full"
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}