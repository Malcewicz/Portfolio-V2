import {
  Navbar,
  Hero,
  AboutMe,
  Projects,
  Experience,
  Values,
  Contact,
  Footer,
} from "./_components";
import TemporaryDialog from "./_components/ui/temporary-dialog";

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
