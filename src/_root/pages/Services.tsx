import { ServiceGrid } from "@/components/sections/ServiceGrid";
import Hero3 from "@/components/shared/Hero3";
import video2 from '../../../public/videos/site-videos/video2.mp4'

const h1 = "Our Services";
const p = "Bringing people together for life's special moments.";
const mediaType = 'video';
const mediaSrc = video2;
import { useSanityContentArray } from "@/hooks/useSanityContent";

import { SERVICE_GRID_QUERY } from "@/queries/sanityQueries";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function Services() {

  const { data: serviceData, loading, error } = useSanityContentArray(SERVICE_GRID_QUERY);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <>
    <Hero3 h1={h1} p={p} mediaType={mediaType} mediaSrc={mediaSrc}/>
    <ServiceGrid serviceData={serviceData}/> 
    </>
  );
}


// add props to service grid for snanity query