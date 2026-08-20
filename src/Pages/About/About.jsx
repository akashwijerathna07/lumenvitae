import React from "react";
import { Helmet } from "react-helmet-async";

import AboutHero from "../../components/AboutComponents/AboutHero/AboutHero.jsx";
import StorySection from "../../components/AboutComponents/StorySection/StorySection.jsx";
import AboutCoreValues from "../../components/AboutComponents/AboutCoreValues/AboutCoreValues.jsx";

const About = () => {
  return (
    <div>

      <Helmet>
        <title>About Us - Lumen Vitae Exporters</title>

        <meta
          name="description"
          content="Learn about Lumen Vitae, a Sri Lankan spice brand focused on authentic quality, careful sourcing and reliable global partnerships."
        />
      </Helmet>

      <AboutHero />
      <StorySection />
      <AboutCoreValues />

    </div>
  )
}

export default About