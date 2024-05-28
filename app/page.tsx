import {
  Navbar,
  Footer,
  Hero,
  AboutMe,
  Projects,
  Experience,
  Values,
  Contact,
} from "@/app/_components";
import TemporaryDialog from "@/app/_components/!temporary-dialog";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <Values />
        <Contact />

        {/* Temporary dialog */}
        <TemporaryDialog />
      </main>
      <Footer />
    </>
  );
}
