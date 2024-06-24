import About from "@/components/sections/About";
import About3 from "@/components/sections/About3"
import Hero3 from "@/components/shared/Hero3"
import { cloudFlareImages } from "@/data/cloudFlareImagesConfig";
import { useSanityContent } from '../../hooks/useSanityContent';  
import { GENERIC_ABOUT_QUERY } from '../../queries/sanityQueries';


const AboutUs = () => {

  const { data: about3Content, error: about3Error, loading: about3Loading } = useSanityContent(GENERIC_ABOUT_QUERY('aboutAnna'));
  const { data: aboutContent, error: aboutError, loading: aboutLoading } = useSanityContent(GENERIC_ABOUT_QUERY('aboutSammy'));
  

  const h1 = "Anna and Sammy";
  const p = "A gourmet chef and a fine dining service expert, both with their decades of knowledge come together to give you a one of a kind experience.";
  const mediaType = 'image';
  const mediaSrc = cloudFlareImages.aboutheader1;

  if (about3Error || aboutError ) {
    return <div>Failed to load content. Please try again later.</div>;
  }

  if (about3Loading || aboutLoading) {
    return <Hero3 h1={h1} p={p} mediaType={mediaType} mediaSrc={mediaSrc} />;
  }

  return (
    <>
    <Hero3 h1={h1} p={p} mediaType={mediaType} mediaSrc={mediaSrc} />
    <About3 
        title={about3Content.title}
        paragraphs={about3Content.paragraphs}
        buttonText={about3Content.buttonText}
        buttonLink={about3Content.buttonLink}
        imageSrc={about3Content.imageSrc}
        imageAlt={about3Content.imageAlt} 
    />
    <About 
        title={aboutContent.title}
        paragraphs={aboutContent.paragraphs}
        buttonText={aboutContent.buttonText}
        buttonLink={aboutContent.buttonLink}
        imageSrc={aboutContent.imageSrc}
        imageAlt={aboutContent.imageAlt}
    />
    </>
  )
}

export default AboutUs