import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Certificates from "../components/Certificates";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Certificates />
    </main>
  );
}