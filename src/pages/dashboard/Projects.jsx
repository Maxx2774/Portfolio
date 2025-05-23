import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import lockscreen1 from "../../assets/projects/lockscreen.png";
import lockscreen2 from "../../assets/projects/lockscreen2.png";
import hakimMp4 from "../../assets/projects/videos/hakimlivs.mp4";
import useLenisScroll from "../../hooks/useLenisScroll";
import SupabaseIcon from "../../assets/icons/supabase.svg?react";
import JavascriptIcon from "../../assets/icons/javascript.svg?react";
import NodeJsIcon from "../../assets/icons/nodejs.svg?react";
import BootstrapIcon from "../../assets/icons/Bootstrap.svg?react";
import ExpressIcon from "../../assets/icons/express.svg?react";
import ReactIcon from "../../assets/icons/react.svg?react";
import { useNavigate } from "react-router-dom";
import "./animation.css";

export default function Projects() {
  const navigate = useNavigate();
  useLenisScroll();
  useGSAP(() => {
    const panels = document.querySelectorAll(".panel");
    const panelCount = panels.length;
    const vw = window.innerWidth;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        start: "top top",
        end: () => "+=5000",
        scrub: true,
        pin: true,
        pinSpacing: true,
        invalidateOnRefresh: true,
      },
    });

    tl.to(".horizontal-scroll", {
      x: () => -(vw * (panelCount - 1)),
      ease: "none",
    });
    let hakimTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".panel.hakimlivs",
        containerAnimation: tl,
        start: "left 70%",
        end: "right 30%",
        toggleActions: "play none none none",
      },
    });
    hakimTl

      .fromTo(
        ".hakimlivs-h1",
        { y: "-50vh" },
        {
          y: 0,

          scrollTrigger: {
            trigger: ".panel.hakimlivs",
            containerAnimation: tl,
            start: "left 60%",
            end: "right 30%",
            toggleActions: "play none none none",
          },
        }
      )

      .fromTo(".hakimlivs p", { opacity: 0 }, { opacity: 1 })
      .fromTo(
        ".hakimlivs-h2",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.5 },
        "<"
      )
      .fromTo(
        ".hakimlivs-h3",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.5 },
        "<+0.2"
      )
      .fromTo(
        ".hakimlivs .tech-stack > *",
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 }
      )
      .fromTo(".hakim-mp4", { opacity: 0 }, { opacity: 1, duration: 1 }, "<")
      .to(".hakimlivs .live-demo", { opacity: 1, duration: 0.5 }, "<+0.5");

    let iosTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".panel.ios",
        containerAnimation: tl,
        start: "left 60%",
        end: "right 30%",
        toggleActions: "play none none none",
      },
    });

    iosTl
      .fromTo(".ios h1", { y: -250 }, { y: 0 })

      .fromTo(
        ".ios h2",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      )
      .fromTo(".ios .tech-stack", { opacity: 0, y: 25 }, { opacity: 0.8, y: 0 })
      .to({}, { duration: 0.5 })
      .to(".ios .live-demo", { opacity: 1, duration: 1 });

    const lockscreenTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".panel.ios",
        containerAnimation: tl,
        start: "left 30%",
        end: "right 30%",
        toggleActions: "play none none none",
      },
    });

    lockscreenTl
      .fromTo(
        ".lockscreen-1",
        { opacity: 0, scale: 0.75, x: "20vw", y: "20vh" },
        { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.5 }
      )
      .fromTo(
        ".lockscreen-2",
        { opacity: 0 },
        { opacity: 1, x: "45%", y: "15%", duration: 0.75 },
        "<+0.5"
      );
  }, []);
  return (
    <section className="horizontal-scroll">
      <section className="panel waypoint">
        <button className="back" onClick={() => navigate(-1)}>
          Back
        </button>
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white font-extrabold text-[5rem]">
          SCROLL
        </h1>
      </section>
      <section className="panel hakimlivs">
        <h1 className="hakimlivs-h1">HAKIM LIVS</h1>
        <div className="content">
          <div className="text-container">
            <h2 className="hakimlivs-h2">
              My first major project involved developing the backend and
              collaborating closely with frontend developers and QA testers.
            </h2>
            <div className="tech-stack">
              <div>
                <SupabaseIcon className="w-6 h-6 absolute left-2 top-3.5" />
                <p className="supabase">Supabase</p>
              </div>
              <div>
                <NodeJsIcon className="w-6 h-6 absolute left-2 top-3" />
                <p className="node-js">Node.js</p>
              </div>
              <div>
                <ExpressIcon className="w-6 h-6 absolute left-3 top-3 fill-white" />
                <p className="express">Express</p>
              </div>
              <div>
                <JavascriptIcon className="w-6 h-6 absolute left-2.5 rounded-[3px]" />
                <p className="javascript">Javascript</p>
              </div>
              <div>
                <BootstrapIcon className="w-7 h-7 absolute left-2 top-2.5" />
                <p className="bootstrap">Bootstrap</p>
              </div>
            </div>
          </div>
          <div className="video-container">
            <video
              autoPlay
              loop
              muted
              width="100%"
              preload="metadata"
              playsInline
              className="hakim-mp4"
            >
              <source src={hakimMp4} type="video/mp4"></source>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <a
          href="https://be-webshop-2025-fe-eight.vercel.app/"
          target="_blank"
          className="live-demo"
        >
          Live demo
        </a>
        <p className="date">MAR 2025</p>
      </section>
      <section className="panel ios">
        <h1>iOS LOCK SCREEN</h1>
        <div className="content">
          <h2>
            One of my earliest projects involved replicating iOS lock screen
            with music playback controls.
          </h2>
          <div className="tech-stack">
            <div>
              <ReactIcon className="w-7 h-7 absolute left-2 top-2.5 " />
              <p className="bootstrap">React</p>
            </div>
          </div>
        </div>
        <img src={lockscreen1} className="lockscreen-1" />
        <img src={lockscreen2} className="lockscreen-2" />
        <p className="date">JAN 2024</p>
        <a
          href="https://ios-control-center-tsx.vercel.app/"
          target="_blank"
          className="live-demo"
        >
          Live demo
        </a>
      </section>
      <section className="panel"></section>
    </section>
  );
}
