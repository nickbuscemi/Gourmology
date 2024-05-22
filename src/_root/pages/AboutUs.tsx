import About3 from "@/components/sections/About3"
import Hero3 from "@/components/shared/Hero3"
import { cloudFlareImages } from "@/data/cloudFlareImagesConfig";


const AboutUs = () => {

  const h1 = "Ana and Sammy";
  const p = "A gourmet chef and a fine dining service expert, both with their decades of knowledge come together to give you a one of a kind experience.";
  const img = cloudFlareImages.aboutheader1;

  return (
    <>
    <Hero3 h1={h1} p={p} img={img}/>
    <About3 />
    </>
  )
}

export default AboutUs