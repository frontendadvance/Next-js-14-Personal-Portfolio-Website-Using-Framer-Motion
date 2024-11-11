import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center pt-20 md:pt-28 px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
