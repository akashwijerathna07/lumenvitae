import BrandOverview from "../../components/BrandOverview/BrandOverview";
import ExportCTA from "../../components/ExportCTA/ExportCTA";
import FeaturedSpices from "../../components/FeaturedSpices/FeaturedSpices";
import Hero from "../../components/Hero/Hero";
import WhyUs from "../../components/WhyUs/WhyUs";



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
