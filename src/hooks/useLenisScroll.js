import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Lenis from "lenis";

export default function useLenisScroll() {
  useEffect(() => {
    ScrollTrigger.config({ limitCallbacks: true });
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,

      touchMultiplier: 2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(1000, 16);

    return () => {
      lenis.destroy();
    };
  }, []);
}
