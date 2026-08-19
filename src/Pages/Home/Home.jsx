import BrandOverview from "../../components/BrandOverview/BrandOverview.jsx";
import ExportCTA from "../../components/ExportCTA/ExportCTA.jsx";
import FeaturedSpices from "../../components/FeaturedSpices/FeaturedSpices.jsx";
import Hero from "../../components/Hero/Hero.jsx";
import WhyUs from "../../components/WhyUs/WhyUs.jsx";



const Home = () => {
  return (
    <div>
      <Hero />
      <BrandOverview />
      <FeaturedSpices />
      <WhyUs />
      <ExportCTA />
      
    </div>
  )
}

export default Home
