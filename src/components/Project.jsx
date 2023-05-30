import cybertruck from "/Users/nikki/Desktop/Portfolio/src/assets/ProjectImages/home-page.png";
import littleLemon from "/Users/nikki/Desktop/Portfolio/src/assets/ProjectImages/little-lemon.png";

const Project = ({ isDarkMode }) => {
  const projects = [
    {
      id: 1,
      src: cybertruck,
      title: "Cybertruck Landing Page",
      description: "A visually stunning 3D Landing page with scrollcontrolls and colour customization for showcasing the futuristic Cybertruck.",
      techs: ["React-three-fiber", "Tailwind CSS", "ThreeJS"],
      githubLink: "https://github.com/nikhilktom/Cyber-TRUCK",
      liveLink: "https://cybertruck-project.netlify.app/",
    },
    {
      id: 2,
      src: littleLemon,
      title: "Little Lemon Restaurant Website",
      description: "A modern responsive website for Little Lemon Restaurant designed in figma with table reservation feature.",
      techs: ["React", "CSS", "Figma"],
      githubLink: "https://github.com/nikhilktom/Little-Lemon",
      liveLink: "https://little-lemonn.netlify.app",
    },
   
  ];

  return (
    <div name="projects" className="w-full h-full">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pt-24 md:pt-2 pb-28">
          <h1 className="bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text text-2xl md:text-6xl font-raleway font-extrabold px-8 ">
            Projects
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 md:gap-8 px-8">
          {projects.map(({ id, src, title, description, techs, githubLink, liveLink }) => (
            <div key={id} className="shadow-md shadow-blue-600 rounded-lg">
              <div className="flex justify-center items-center ">
                <img
                  src={src}
                  alt=""
                  className=" w-full duration-200 hover:scale-105 px-3 py-3 rounded-3xl"
                 
                />
              </div>
              <div className="flex flex-col justify-between p-4">
                <div>
                  <h2 className={`${
            isDarkMode ? "text-slate-300" : "text-slate-900"
          }  text-2xl mb-4 font-raleway font-extrabold `}>{title}</h2>
                  <p className={`${
            isDarkMode ? "text-slate-500" : "text-slate-500"
          }  text-lg mb-4 font-raleway`}>{description}</p>
                  <ul className="mb-4 text-blue-500 font-mono">
                    {techs.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-125 bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text"
                    onClick={() => window.open(liveLink, "_blank")}
                  >
                    Live
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-2 duration-200 hover:scale-125 bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text"
                    onClick={() => window.open(githubLink, "_blank")}
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
