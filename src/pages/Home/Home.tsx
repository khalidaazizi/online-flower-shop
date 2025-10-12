import BestSellerFlowers from "../../components/BestSellerFlowers/BestSellerFlowers"
import Categories from "../../components/Categories/Categories"
import HowItWorks from "../../components/HowItWorks/HowItWorks"
import InfoSection from "../../components/InfoSection/InfoSection"
import Slider from "../../components/Slider/Slider"

function Home() {
  return (
      < >
     <Slider/>
    
      <BestSellerFlowers />
    
      <InfoSection />
 
      <Categories />
  
      <HowItWorks/>
     </>
   
  )
}

export default Home