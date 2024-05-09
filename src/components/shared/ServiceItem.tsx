// Import React and any other dependencies
import { useState, FC } from 'react';
import { Link } from 'react-router-dom';

// Define the prop types for the ServiceItem component
type ServiceItemProps = {
  Icon: any,
  title: string,
  description: string,
};

// Define the ServiceItem component
export const ServiceItem: FC<ServiceItemProps> = ({ Icon, title, description }) => {
  const [hover, setHover] = useState(false);

  const serviceName = title.toLowerCase().replace(/\s/g, '-');

  const defaultStyle = {
    transition: 'background-color 0.3s ease, opacity 0.3s ease',
    cursor: 'pointer',
    borderRadius: '10px',
  };

  const hoverStyle = {
    ...defaultStyle,
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // White background with opacity
    opacity: 0.7,
  };

  return (
    <Link to={`/services/${serviceName}`}>
        <div 
        className="flex p-4"
        style={hover ? hoverStyle : defaultStyle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
        {/*<Icon className="flex-shrink-0 mt-2 h-8 w-8" />*/}
        <img src={Icon} alt={title} style={{ width: '40px', height: '40px' }} />
        <div className="ms-5 sm:ms-8">
            <h3 className="text-base sm:text-lg font-semibold">
            {title}
            </h3>
            <p className="mt-1 text-muted-foreground">
            {description}
            </p>
        </div>
        </div>
    </Link>
  );
}


