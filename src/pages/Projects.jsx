import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

import "./animation.css";
import HakimLivs from "../projects/hakim-livs/HakimLivs";
import Waypoint from "../projects/waypoint/Waypoint";
import IosLockScreen from "../projects/ios/Ios";

export default function Projects() {
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
    let waypointTl = gsap.timeline();

    waypointTl
      .fromTo(
        ".waypoint h1",
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
      .fromTo(
        ".waypoint h2",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 },
        "<+0.2"
      )
      .fromTo(
        ".waypoint .tech-stack > div",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.2 },
        "<"
      )
      .fromTo(
        ".waypoint .image-container",
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5 },
        "<+0.2"
      );
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
      .fromTo(
        ".ios .tech-stack",
        { opacity: 0, y: 25 },
        { opacity: 0.8, y: 0 },
        "<+0.3"
      )
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
      <Waypoint />
      <HakimLivs />
      <IosLockScreen />
    </section>
  );
}
