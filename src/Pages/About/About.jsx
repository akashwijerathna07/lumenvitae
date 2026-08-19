import React from "react";

import AboutHero from "../../components/AboutComponents/AboutHero/AboutHero.jsx";
import StorySection from "../../components/AboutComponents/StorySection/StorySection.jsx";
import AboutCoreValues from "../../components/AboutComponents/AboutCoreValues/AboutCoreValues.jsx";

const About = () => {
  return (
    <div>
      <AboutHero />
      <StorySection />
      <AboutCoreValues />
    </div>
  )
}

export default About
