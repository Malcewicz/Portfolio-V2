export * from "gsap";
export * from "@gsap/react";
export * from "gsap/ScrollTrigger";
export * from "gsap/ScrollToPlugin";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);
