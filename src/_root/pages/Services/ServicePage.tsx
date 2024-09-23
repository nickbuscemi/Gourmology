import { useParams } from 'react-router-dom';
import ServiceContent1 from '@/components/shared/ServiceContent1';
import ServiceContent2 from '@/components/shared/ServiceContent2';
import { useSanityContent } from '../../../hooks/useSanityContent';
import { SERVICE_PAGE_QUERY } from '../../../queries/sanityQueries';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export const ServicePage = () => {
  const { serviceName } = useParams<{ serviceName?: string }>();

  if (!serviceName) {
    return <div>Service not found</div>; // Fallback for undefined serviceName
  }

  const pageTitle = serviceName.replace(/-/g, ' ');
  console.log(pageTitle);
  const { data: service, error, loading } = useSanityContent(SERVICE_PAGE_QUERY(pageTitle));

  if (error) {
    return <div>Failed to load content. Please try again later.</div>;
  }

  if (loading || !service) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  // Render the ServiceContent component with the data from the matched service
  return (
    <>
      <ServiceContent1 {...service.content1} />
      <ServiceContent2 {...service.content2} />
    </>
  );
};
