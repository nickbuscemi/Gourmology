import { ServiceItem } from "../shared/ServiceItem";  // Adjust the import path as necessary
{/*import {
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";*/}

import bartenders from '../../../public/assets/icons/serviceIcons/bartenders.png'
import buffet from '../../../public/assets/icons/serviceIcons/buffet.png'
import cookingStations from '../../../public/assets/icons/serviceIcons/cookingStations.png'
import privateChef from '../../../public/assets/icons/serviceIcons/privateChef.png'
import rentals from '../../../public/assets/icons/serviceIcons/rentals.png'
import sitDown from '../../../public/assets/icons/serviceIcons/sitDown.png'

import { serviceData } from "@/data/ServiceData"; // replace with sanity query

const icons: any = {
    "Private Chef Experience": privateChef,
    "Sit Down Dinners": sitDown,
    "Servers Bartenders Grill Man": bartenders,
    "Buffett Service and Delivery": buffet,
    "On Premise Cooking Stations": cookingStations,
    "Rentals": rentals
  };
  

export const ServiceGrid = () => {
  return (
    <div className="container pt-8 pb-8 md:pt-56 md:pb-32 lg:pt-4 font-garamond tracking-widest text-cream1">
      <div className="animate__animated animate__fadeInUp animate__slower">
      <div className="flex flex-col items-center pb-8 md:pb-16">
        {/*<h1 className="text-4xl">Our Services</h1>*/}
        <p className="lg:text-2xl">Select to see more</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12 pb-8 md:pb-24">
          {serviceData.map((service) => (
            <ServiceItem
              key={service.title}
              Icon={icons[service.title]}
              title={service.title}
              description={service.content1.description.join(" ")}
            />
          ))}
        </div>
      </div>
          </div>
    </div>
  );
};

