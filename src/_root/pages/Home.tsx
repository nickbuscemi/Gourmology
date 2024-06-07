// components
import Hero2 from '@/components/shared/Hero2';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import About2 from '@/components/sections/About2';
import About3 from '@/components/sections/About3';
import About4 from '@/components/sections/About4';
import Instagram from '@/components/sections/Instagram';

// hooks
import { useSanityContent } from '../../hooks/useSanityContent';  

// queries
import { ABOUT_QUERY, ABOUT2_QUERY, ABOUT3_QUERY, ABOUT4_QUERY } from '../../queries/sanityQueries';


export default function Home() {
  const { data: about3Content, error: about3Error, loading: about3Loading } = useSanityContent(ABOUT3_QUERY);
  const { data: aboutContent, error: aboutError, loading: aboutLoading } = useSanityContent(ABOUT_QUERY);
  const { data: about2Content, error: about2Error, loading: about2Loading } = useSanityContent(ABOUT2_QUERY);
  const { data: about4Content, error: about4Error, loading: about4Loading } = useSanityContent(ABOUT4_QUERY);

  if (about3Error || aboutError || about2Error || about4Error) {
    return <div>Failed to load content. Please try again later.</div>;
  }

  if (about3Loading || aboutLoading || about2Loading || about4Loading) {
    return <Hero2 />;
  }


  return (
    <div className='flex flex-col w-full'>
      <Hero2 />
      <About3 
        title={about3Content.title}
        paragraphs={about3Content.paragraphs}
        buttonText={about3Content.buttonText}
        buttonLink={about3Content.buttonLink}
        imageSrc={about3Content.imageSrc}
        imageAlt={about3Content.imageAlt}
      />
      <About4 
          title={about4Content.title}
          paragraph={about4Content.paragraph}
          buttonText={about4Content.buttonText}
          buttonLink={about4Content.buttonLink}
        />
      <About 
        title={aboutContent.title}
        paragraphs={aboutContent.paragraphs}
        buttonText={aboutContent.buttonText}
        buttonLink={aboutContent.buttonLink}
        imageSrc={aboutContent.imageSrc}
        imageAlt={aboutContent.imageAlt}
      />
      <About2 
        title={about2Content.title}
        paragraphs={about2Content.paragraphs}
      />
      <Instagram />
      <Testimonials />
    </div>
  );
}
