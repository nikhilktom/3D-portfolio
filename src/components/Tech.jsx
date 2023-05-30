import htmlIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/html-5.png";
import cssIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/css.png";
import jsIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/js.png";
import tailwindIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/tailwind.png";
import figmaIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/figma.png";
import reactIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/reactjs.png";
import threeJsIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/threejs.svg";
import gitIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/git.png";
import githubIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/github-2.png";
import bootstrapIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/bootstrap.png";
import cppIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/c-.png";
import sqlIcon from "/Users/nikki/Desktop/Portfolio/src/assets/TechSkills/sql.png";

const Tech = ({isDarkMode}) => {
  const techs = [
    {
      id: 1,
      src: htmlIcon,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssIcon,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: jsIcon,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactIcon,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwindIcon,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: threeJsIcon,
      title: "ThreeJS",
      style: "shadow-pink-400",
    },
    {
      id: 7,
      src: figmaIcon,
      title: "Figma",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: gitIcon,
      title: "Git",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      src: githubIcon,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 10,
      src: bootstrapIcon,
      title: "Bootstrap",
      style: "shadow-purple-400",
    },
    {
      id: 11,
      src: cppIcon,
      title: "c++",
      style: "shadow-blue-400",
    },
    {
      id: 12,
      src: sqlIcon,
      title: "SQL",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div className=" w-full h-screen mt-72 md:mt-32 ">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="font-mono bg-gradient-to-l from-green-300 via-blue-500 to-purple-600 text-transparent bg-clip-text text-2xl md:text-6xl font-extrabold pb-16 px-8">
            Skills
          </h1>

        </div>

        <div className={`${
            isDarkMode ? "text-slate-300" : "text-slate-900"
          } w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0`}>
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tech;
