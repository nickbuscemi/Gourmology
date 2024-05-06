import { ServiceItem } from "../shared/ServiceItem"; // Adjust the import path as necessary
import {
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
} from "lucide-react";

export const ServiceGrid = () => {
  return (
    <div className="container py-24 lg:py-64 font-garamond text-cream1">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-12">
          <div className="space-y-6 lg:space-y-10">
            <ServiceItem
              Icon={BrainCogIcon}
              title="Private Chef Experience"
              description="We choose our teams carefully. Our people are the secret to great work."
            />
            <ServiceItem
              Icon={PackageIcon}
              title="Sit Down Dinners"
              description="Benefit from automatic updates to all boards any time you need to make a change to your website."
            />
            <ServiceItem
              Icon={ZapIcon}
              title="Servers, Bartenders, Grill Man"
              description="We've user tested our own process by shipping over 1k products for clients."
            />
          </div>
          <div className="space-y-6 lg:space-y-10">
            <ServiceItem
              Icon={TrophyIcon}
              title="Buffett Service and Delivery"
              description="We stay lean and help your product do one thing well."
            />
            <ServiceItem
              Icon={UsersIcon}
              title="On Premise Cooking Stations"
              description="We actively pursue the right balance between functionality and aesthetics, creating delightful experiences."
            />
            <ServiceItem
              Icon={ThumbsUpIcon}
              title="Rentals"
              description="From boarding passes to movie tickets, there's pretty much nothing you can't do."
            />
          </div>
          <div className="space-y-6 lg:space-y-10">
            <ServiceItem
              Icon={TrophyIcon}
              title="Buffett Service and Delivery"
              description="We stay lean and help your product do one thing well."
            />
            <ServiceItem
              Icon={UsersIcon}
              title="On Premise Cooking Stations"
              description="We actively pursue the right balance between functionality and aesthetics, creating delightful experiences."
            />
            <ServiceItem
              Icon={ThumbsUpIcon}
              title="Rentals"
              description="From boarding passes to movie tickets, there's pretty much nothing you can't do."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
