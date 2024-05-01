import Hero2 from '@/components/shared/Hero2';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import About2 from '@/components/sections/About2';
import About3 from '@/components/sections/About3';
import About4 from '@/components/sections/About4';
import Instagram from '@/components/sections/Instagram';

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <Hero2 />
      <About3 />
      <About4 />
      <About />
      <About2 />
      <Instagram />
      <Testimonials />
    </div>
  );
}
