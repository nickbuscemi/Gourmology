import About from "@/components/sections/About";
import About3 from "@/components/sections/About3"
import Hero3 from "@/components/shared/Hero3"
import { cloudFlareImages } from "@/data/cloudFlareImagesConfig";
//import { useSanityContent } from '../../hooks/useSanityContent';  
//import { ABOUT_QUERY, ABOUT3_QUERY } from '../../queries/sanityQueries';


const AboutUs = () => {

  const h1 = "Anna and Sammy";
  const p = "A gourmet chef and a fine dining service expert, both with their decades of knowledge come together to give you a one of a kind experience.";
  const mediaType = 'image';
  const mediaSrc = cloudFlareImages.aboutheader1;

  const about3Content = {
    sectionId: 'about',
    title: "Anna",
    paragraphs: [
      "Welcome to GOURMOLOGY, where we specialize in eclectic food that entices every type of palate with our mix of Italian, Spanish, and American contemporary cuisine.",
      "We bring the restaurant experience to the comfort of your own home. Our private dining experience includes everything you need to have an unforgettable evening."
    ],
    imageSrc: cloudFlareImages.fish,
    imageAlt: 'A delicious dish of fish'
  };

  const aboutContent = {
    sectionId: 'about',
    title: "Sammy",
    paragraphs: [
      "Any occasion. Big or small. We help create extraordinary dinners, social gatherings, and celebratory events by placing a strong emphasis on personalized customer service, in addition to a diverse menu packed with crisp flavors & fresh ingredients. Ensuring you and your guests will be raving for weeks to come!"
    ],
    imageSrc: cloudFlareImages.lamb,
    imageAlt: 'A delicious dish of lamb'
  };

  return (
    <>
    <Hero3 h1={h1} p={p} mediaType={mediaType} mediaSrc={mediaSrc} />
    <About3 {...about3Content} />
    <About {...aboutContent} />
    </>
  )
}

export default AboutUs