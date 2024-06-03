import Hero2 from '@/components/shared/Hero2';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import About2 from '@/components/sections/About2';
import About3 from '@/components/sections/About3';
import About4 from '@/components/sections/About4';
import Instagram from '@/components/sections/Instagram';
import { cloudFlareImages } from '@/data/cloudFlareImagesConfig';


export default function Home() {
  
  const about3Content = {
    sectionId: 'about',
    title: "It's kind of our thing.",
    paragraphs: [
      "Welcome to GOURMOLOGY, where we specialize in eclectic food that entices every type of palate with our mix of Italian, Spanish, and American contemporary cuisine.",
      "We bring the restaurant experience to the comfort of your own home. Our private dining experience includes everything you need to have an unforgettable evening."
    ],
    buttonText: 'Contact Us',
    buttonLink: '/contact',
    imageSrc: cloudFlareImages.fish,
    imageAlt: 'A delicious dish of fish'
  };

  const aboutContent = {
    sectionId: 'about',
    title: "Tailored to your needs.",
    paragraphs: [
      "Any occasion. Big or small. We help create extraordinary dinners, social gatherings, and celebratory events by placing a strong emphasis on personalized customer service, in addition to a diverse menu packed with crisp flavors & fresh ingredients. Ensuring you and your guests will be raving for weeks to come!"
    ],
    buttonText: 'Services',
    buttonLink: '/services',
    imageSrc: cloudFlareImages.lamb,
    imageAlt: 'A delicious dish of lamb'
  };

  return (
    <div className='flex flex-col w-full'>
      
      <Hero2 />
      <About3 {...about3Content}/>
      <About4 />
      <About {...aboutContent} />
      <About2 />
      <Instagram />
      <Testimonials />
      
    </div>
  );
}
