import gsap from "gsap";
import Dashboard from "./pages/dashboard/Dashboard";
import Projects from "./pages/dashboard/Projects";
import useLenisScroll from "./hooks/useLenisScroll";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Routes, Route } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function App() {
  useLenisScroll();
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
