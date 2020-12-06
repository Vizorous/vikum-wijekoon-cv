import logo from "./logo.svg";
import "./App.css";
import AboutMe from "./features/AboutMe/AboutMe";
import AboutMeContainer from "./features/AboutMe/AboutMeContainer";
import AboutMeDetails from "./features/AboutMe/AboutMeDetails";
import { createContext, useState } from "react";
import { SectionsContainer, Section } from "react-fullpage";
import Projects from "./features/Projects/Projects";
import ContactMe from "./features/ContactMe/ContactMe";

export const AnimContext = createContext(false);
function App() {
  const [startAnim, setStartAnim] = useState(false);
  const options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    arrowNavigation: true,
  };
  return (
    <div className="App">
      <AnimContext.Provider
        value={{ startAnim: startAnim, setStartAnim: setStartAnim }}>
        <SectionsContainer {...options}>
          <Section>
            <AboutMeContainer></AboutMeContainer>
          </Section>
          <Section>
            <Projects />
          </Section>
          <Section>
            <ContactMe />
          </Section>
        </SectionsContainer>
      </AnimContext.Provider>
    </div>
  );
}

export default App;
