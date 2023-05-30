import { Canvas } from "@react-three/fiber";
import Blob from "./shader/Blob";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

const Hero = ({ isMobile, isDarkMode }) => {
  const [text, count] = useTypewriter({
    words: ["Hi, I am Nikhil", "I Create Visually Rich Web Experiences", "<>"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center mb-24">
      <Canvas>
        <Blob isMobile={isMobile} />
      </Canvas>

      <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/3 mt-40 md:mt-16">
        <h1
          className={`${
            isDarkMode ? "text-slate-500" : "text-slate-700"
          } text-2xl md:text-3xl font-mono font-extrabold uppercase pl-8 pt-8`}
        >
          front-end devoloper
        </h1>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-44 md:mt-24 md:-ml-5">
        <div className="font-extrabold">
          <h1
            className={`${
              isDarkMode
                ? " bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text"
                : " bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text"
            } text-3xl md:text-7xl font-raleway`}
          >
            {text}
            <Cursor cursorColor="purple" />
          </h1>
        </div>
      </div>

      <div className="bottom-0 left-0 right-0 flex items-end justify-center">
      <Link to="projects" smooth duration={500}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-slate-500 flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-slate-500 mb-1"
            />
          </div>
          </Link>
      </div>
    </div>
  );
};

export default Hero;
