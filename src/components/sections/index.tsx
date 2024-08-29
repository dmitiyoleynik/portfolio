import ContactSection from './contact';
import Education from './education';
import Experience from './experience';
import Home from './home';
import Projects from './projects';
import Skills from './skills';

const Sections = () => {
  return (
    <>
      <Home />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <ContactSection />
    </>
  );
};

export default Sections;
