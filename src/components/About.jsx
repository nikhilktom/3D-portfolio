import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Avatar } from "./Avatar";

function About({ isMobile, isDarkMode }) {
  return (
    <div id="about" className="flex flex-col md:flex-row w-screen h-screen mt-96 lg:mt-52 xl:mt-52">
      <div className="w-full px-14 h-1/4 sm:h-auto sm:w-1/2 sm:pr-8 xl:pl-80">
        <div className="flex flex-col justify-center h-full">
          <h1 className="bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text text-2xl md:text-6xl font-raleway font-extrabold">
            Hi there
          </h1>
          <p
            className={`${
              isDarkMode ? "text-slate-300" : "text-slate-900"
            } text-xl md:text-3xl font-raleway mt-4`}
          >
            I'm Nikhil, a passionate front-end web developer living in Germany.
            I love using React to build interactive and visually appealing web
            applications. I'm passionate about exploring the boundless possibilities of 3D visualization on the web and embracing the thrilling future of the metaverse.
          </p>
        </div>
      </div>
      <div className="h-1/2 md:h-auto md:w-1/2 md:pl-8">
        <Canvas shadows camera={{ position: [3, 0, 5], fov: 30 }}>
          <Environment preset="sunset" />
          <Avatar isMobile={isMobile} />
        </Canvas>
      <footer className="md:pb-10 justify-items-center text-center text-gray-500 text-sm">
        &copy; 2023 Nikhil Kudilil Tom
      </footer>
      </div>
    </div>
  );
}

export default About;