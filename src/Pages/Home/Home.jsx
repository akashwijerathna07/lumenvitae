import BrandOverview from "../../components/BrandOverview/BrandOverview.jsx";
import ExportCTA from "../../components/ExportCTA/ExportCTA.jsx";
import FeaturedSpices from "../../components/FeaturedSpices/FeaturedSpices.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import WhyUs from "../../components/WhyUs/WhyUs.jsx";

import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Lumen Vitae Exporters</title>

        <meta
          name="description"
          content="Lumen Vitae supplies premium Sri Lankan spices, carefully sourced for quality, authentic flavour and global partnerships."
        />
      </Helmet>

      <Hero />
      <BrandOverview />
      <FeaturedSpices />
      <WhyUs />
      <ExportCTA />

    </div>
  )
}

export default Home