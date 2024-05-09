import { ServiceItem } from "../shared/ServiceItem";  // Adjust the import path as necessary
import {
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";

import bartenders from '../../../public/assets/icons/serviceIcons/bartenders.png'
import buffet from '../../../public/assets/icons/serviceIcons/buffet.png'
import cookingStations from '../../../public/assets/icons/serviceIcons/cookingStations.png'
import privateChef from '../../../public/assets/icons/serviceIcons/privateChef.png'
import rentals from '../../../public/assets/icons/serviceIcons/rentals.png'
import sitDown from '../../../public/assets/icons/serviceIcons/sitDown.png'

import { serviceData } from "@/data/ServiceData";

// Mapping of service titles to icons
{/*const icons: any = {
  "Private Chef Experience": BrainCogIcon,
  "Sit Down Dinners": PackageIcon,
  "Servers, Bartenders, Grill Man": ZapIcon,
  "Buffett Service and Delivery": TrophyIcon,
  "On Premise Cooking Stations": UsersIcon,
  "Rentals": ThumbsUpIcon
};*/}

const icons: any = {
    "Private Chef Experience": privateChef,
    "Sit Down Dinners": sitDown,
    "Servers, Bartenders, Grill Man": bartenders,
    "Buffett Service and Delivery": buffet,
    "On Premise Cooking Stations": cookingStations,
    "Rentals": rentals
  };
  

export const ServiceGrid = () => {
  return (
    <div className="animate__animated animate__fadeInUp animate__slower container pt-8 pb-8 md:pt-56 md:pb-32 lg:pt-72 font-garamond tracking-widest text-cream1">
      <div className=" md:grid-cols-2 gap-24 pb-8 md:pb-24 hidden md:hidden lg:flex">
            <div className="flex items-center">
              <p className="-mt-8 text-3xl md:mt-0 md:text-4xl">
                We all know that the secret to hosting a successful event
                is inviting the right people and serving them incredible food.
              </p>
            </div>
            <div className=" items-center md:border-l-2 md:border-gray-300 md:pr-12">
              <p className="px-20 mt-3 text-2xl">
              That’s why our team is so dedicated to working closely with you to create an 
              unforgettable, distinguished experience that will not only enhance your event, 
              but also keep your guests talking about it for years to come.
              </p>
            </div>
        </div>
      <div className="flex flex-col items-center pb-8">
        <h1 className="text-4xl">Our Services</h1>
        <p>Select to see more</p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-12">
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
  );
};

