import Hero from "./containers/hero/Hero.tsx";
import "./App.css";
import WorkExperiences from "./containers/work-experiences/WorkExperiences.tsx";
import Projects from "./containers/projects/Projects.tsx";
import AboutMe from "./containers/about-me/AboutMe.tsx";
import LanguageSelector from "./components/LanguageSelector.tsx";

function App() {
  return (
    <main>
      <LanguageSelector />
      <Hero />
      <WorkExperiences />
      <Projects />
      <AboutMe />
    </main>
  );
}

export default App;
