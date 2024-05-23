import Hero from "@/components/shared/Hero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import Hero3 from "@/components/shared/Hero3";
import video2 from '../../../public/videos/site-videos/video2.mp4'

const h1 = "Our Services";
const p = "Bringing people together for life's special moments.";
const mediaType = 'video';
const mediaSrc = video2;

export default function Services() {
  return (
    <>
    <Hero3 h1={h1} p={p} mediaType={mediaType} mediaSrc={mediaSrc}/>
    <ServiceGrid />
    </>
  );
}
