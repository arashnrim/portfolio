import { FaEnvelope } from "react-icons/fa";
import { SiFigma, SiGithub, SiLinkedin, SiPolywork } from "react-icons/si";

const socials = [
  {
    name: "GitHub",
    icon: (
      <SiGithub className="w-full h-full transition-opacity duration-200 hover:opacity-75" />
    ),
    link: "https://github.com/arashnrim",
  },
  {
    name: "Polywork",
    icon: (
      <SiPolywork className="w-full h-full transition-opacity duration-200 hover:opacity-75" />
    ),
    link: "https://timeline.arash.codes",
  },
  {
    name: "LinkedIn",
    icon: (
      <SiLinkedin className="w-full h-full transition-opacity duration-200 hover:opacity-75" />
    ),
    link: "https://linkedin.com/in/arashnrim",
  },
  {
    name: "email",
    icon: (
      <FaEnvelope className="w-full h-full transition-opacity duration-200 hover:opacity-75" />
    ),
    link: "mailto:hello@arashnrim.me",
  },
];

const Socials = () => (
  <nav className="flex flex-row items-center justify-center mt-5 space-x-6 lg:justify-start lg:items-start">
    {socials.map((social) => (
      <a
        href={social.link}
        target="_blank"
        rel="noreferrer"
        className="w-8 h-8 md:w-10 sm:h-10"
        title={
          social.name === "email"
            ? "Contact via email"
            : `Go to ${social.name} profile`
        }
        aria-label={
          social.name === "email"
            ? "Contact via email"
            : `Go to ${social.name} profile`
        }
        key={social.name}
      >
        {social.icon}
      </a>
    ))}
  </nav>
);

export default Socials;
