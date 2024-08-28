import Hero from "./containers/hero/Hero.tsx";
import "./App.css";
import WorkExperiences from "./containers/work-experiences/WorkExperiences.tsx";
import Projects from "./containers/projects/Projects.tsx";
import AboutMe from "./containers/about-me/AboutMe.tsx";

function App() {
  return (
    <main>
      <Hero />
      <WorkExperiences />
      <Projects />
      <AboutMe />
    </main>
  );
}

export default App;
