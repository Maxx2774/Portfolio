import JS from "../assets/icons/javascript.svg?react";
import TS from "../assets/icons/typescript.svg?react";
import React from "../assets/icons/react.svg?react";
import Node from "../assets/icons/nodejs.svg?react";
import Supabase from "../assets/icons/supabase.svg?react";
import Next from "../assets/icons/nextjs.svg?react";
import TailWindCSS from "../assets/icons/tailwindcss.svg?react";
import Jira from "../assets/icons/jira.svg?react";
import FramerMotion from "../assets/icons/framer.svg?react";
import Figma from "../assets/icons/figma.svg?react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
export default function Outro() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".outro",
        start: "top 95%",
      },
    });
    tl.to(".tech-stack-icons svg", {
      opacity: 1,
      delay: 3,
      stagger: 0.1,
      duration: 0.5,
    }).to(".email", { opacity: 1 });
  });
  return (
    <div className="outro">
      <div className="tech-stack-icons">
        <JS />
        <TS />
        <React />
        <Supabase />
        <Node />
        <Next />
        <TailWindCSS />
        <Jira />
        <FramerMotion />
        <Figma />
      </div>
    </div>
  );
}
