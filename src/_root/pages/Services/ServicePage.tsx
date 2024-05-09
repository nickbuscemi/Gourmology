import ServiceContent1 from '@/components/shared/ServiceContent1';
import ServiceContent2 from '@/components/shared/ServiceContent2';
import { useParams } from 'react-router-dom';
import { serviceData } from '../../../data/ServiceData'


export const ServicePage = () => {
  const { serviceName } = useParams<{ serviceName?: string }>();

  

  if (!serviceName) {
    return <div>Service not found</div>; // Fallback for undefined serviceName
  }

  // Convert URL slug back to title format and find the corresponding service
  const pageTitle = serviceName.replace(/-/g, ' ');
  const service = serviceData.find(service => service.title.toLowerCase() === pageTitle.toLowerCase());

  if (!service) {
    return <div>Service not found</div>; // Fallback for no matching service
  }

  // Render the ServiceContent component with the data from the matched service
  return (
    <>
    <ServiceContent1 {...service.content1} />
    <ServiceContent2 {...service.content2} />
    </>
  );
};




