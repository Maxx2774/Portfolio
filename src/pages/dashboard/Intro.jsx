import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import LocationIcon from "../../assets/icons/location.svg?react";
import LinkedInIcon from "../../assets/icons/linkedin.svg?react";
import GithubIcon from "../../assets/icons/github.svg?react";

export default function Intro() {
  const navigate = useNavigate();

  useGSAP(() => {
    const introTl = gsap.timeline();
    introTl.to(".max-h1", { opacity: 1, duration: 1, delay: 1 });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".max",
        start: "top top",
        end: "+=500vh",
        pin: true,
        scrub: 1.5,
        pinSpacing: true,
      },
    });

    scrollTl
      .to(".developer-h2", { opacity: 1, duration: 1 })
      .to(".location", { opacity: 1, delay: 2, duration: 5 })
      .to({}, { duration: 2 });

    const slowTl = gsap.timeline({
      scrollTrigger: { trigger: ".max", start: "bottom 20%", end: "+=100vh" },
    });
    slowTl
      .fromTo(
        ".intro-text h3",
        { y: 50 },
        { y: 0, opacity: 1, duration: 1, stagger: 1 }
      )
      .to(
        ".my-work",

        { opacity: 1, duration: 2 },
        "<+2"
      );
  }, []);
  return (
    <div className="intro">
      <nav className="nav">
        <a
          href="https://www.linkedin.com/in/max-viggo-nordin-ab6b35254/"
          target="_blank"
        >
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Maxx2774" target="_blank">
          <GithubIcon />
        </a>
      </nav>
      <div className="max">
        <h1 className="max-h1">MAX NORDIN</h1>
        <h2 className="developer-h2">FULLSTACK DEVELOPER</h2>
        <div className="location">
          <LocationIcon />
          <p className="stockholm">Stockholm</p>
        </div>
      </div>
      <div className="intro-text">
        <h3 className="pt1">
          I design solutions with real impact by prioritizing user needs and
          thoughtful problem-solving.
        </h3>
        <h3 className="pt2">
          In team settings, I emphasize clear communication and strong
          relationships, as I see collaboration and mutual understanding as
          essential to success.
        </h3>
        <button className="my-work" onClick={() => navigate("projects")}>
          Projects
        </button>
      </div>
    </div>
  );
}
