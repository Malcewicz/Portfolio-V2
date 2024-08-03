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
      </main>
      <Footer />
    </>
  );
}
