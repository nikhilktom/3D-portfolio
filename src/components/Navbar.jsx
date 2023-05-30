import React from "react";
import sunImage from "../assets/navbarLogo/sun-512.png";
import moonImage from "../assets/navbarLogo/moon-2287.png";
import instagramIcon from "../assets/navbarLogo/instagram (1).png";
import githubIcon from "../assets/navbarLogo/icons8-github-64.png";
import linkedinIcon from "../assets/navbarLogo/linkedin (1).png";
import instagramIcon2 from "../assets/navbarLogo/instagram.png";
import githubIcon2 from "../assets/navbarLogo/icons8-github-480.png";
import linkedinIcon2 from "../assets/navbarLogo/linkedin.png";
import { Link } from "react-scroll";

const Navbar = ({ toggleDarkMode, isDarkMode, isMobile }) => {
  const handleContactClick = () => {
    window.open("mailto:nikhilktom0@gmail.com", "_blank");
  };

  const navLinks = [
    {
      id: 1,
      title: "Projects",
      link: "projects",
    },
    {
      id: 2,
      title: "About",
      link: "about",
    },
  ];



  return (
    <nav className="w-screen bg-transparent py-5 md:py-10 fixed top-0 z-20">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4">
        <div className="flex items-center">
          <ul className="list-none flex flex-row gap-10">
            <li>
              <a
                href="https://www.instagram.com/nikhilktom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={isDarkMode ? instagramIcon : instagramIcon2} alt="Instagram" className="w-6 h-6 mt-2" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nikhilktom"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={isDarkMode ? githubIcon : githubIcon2} alt="GitHub" className="w-9 h-9" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/nikhil-kudilil-tom/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={isDarkMode ? linkedinIcon : linkedinIcon2} alt="LinkedIn" className="w-6 h-6 mt-2" />
              </a>
            </li>
          </ul>
        </div>
        <ul className="list-none flex flex-row gap-20">
          {!isMobile && (
            <>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${
                    isDarkMode ? "text-slate-300" : "text-slate-700"
                  }  text-18px hover:text-white font-medium cursor-pointer`}
                >
                  <Link to={nav.link} smooth duration={500}>{nav.title}</Link>
                </li>
              ))}
              <li className={`${
                isDarkMode ? "text-slate-300" : "text-slate-700"
              } text-18px  hover:text-white font-medium cursor-pointer`}>
                <button onClick={handleContactClick}>Contact</button>
              </li>
            </>
          )}
          <li className="text-18px bg-gradient-to-l from-purple-500 via-blue-500 to-purple-600 text-transparent bg-clip-text hover:text-black font-medium cursor-pointer">
            <button className="flex items-center" onClick={toggleDarkMode}>
              {isDarkMode ? (
                <img src={sunImage} alt="Moon" className="w-6 h-6" />
              ) : (
                <img src={moonImage} alt="Sun" className="w-6 h-6" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
