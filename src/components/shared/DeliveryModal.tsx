import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import doordashLogo from '../../../public/assets/images/logos/doordash.png';
import ubereatsLogo from '../../../public/assets/images/logos/ubereats.png';
import grubhubLogo from '../../../public/assets/images/logos/grubhub.png';
import cloverLogo from '../../../public/assets/images/logos/clover.png';

interface DeliveryModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function DeliveryModal({ open, onOpenChange }: DeliveryModalProps) {
  const deliveryServices = [
    {
      name: 'DoorDash',
      url: 'https://order.online/store/gourmology-lynbrook-35167229/?hideModal=true&pickup=true&redirected=true',
      logo: doordashLogo,
      bgColor: 'bg-red-600 hover:bg-red-700'
    },
    {
      name: 'Uber Eats',
      url: 'https://www.order.store/store/gourmology/3Cas4pPwUnal7ggADGSsmw',
      logo: ubereatsLogo,
      bgColor: 'bg-black hover:bg-gray-800'
    },
    {
      name: 'Grubhub',
      url: 'https://www.grubhub.com/restaurant/gourmology-lynbrook-12345', // You'll need to update with actual URL  
      logo: grubhubLogo,
      bgColor: 'bg-orange-600 hover:bg-orange-700'
    },
    {
      name: 'Clover',
      url: 'https://www.clover.com/online-ordering/gourmology-lynbrook',
      logo: cloverLogo,
      bgColor: 'bg-green-600 hover:bg-green-700'
    }
  ];

  const handleServiceClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-100 border-gray-300 text-gray-800">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-garamond text-gray-800 tracking-widest">
            Order Delivery
          </DialogTitle>
          <DialogDescription className="text-gray-600 font-garamond tracking-wide">
            Choose your preferred delivery service
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-6">
          {deliveryServices.map((service) => (
            <Button
              key={service.name}
              onClick={() => handleServiceClick(service.url)}
              className="bg-transparent hover:bg-dark-3/20 h-16 rounded-lg transition-all duration-200 hover:scale-105 flex items-center justify-center p-4 border-none shadow-none"
              variant="ghost"
            >
              <img 
                src={service.logo} 
                alt={`${service.name} logo`} 
                className={
                  service.name === 'Clover' ? "h-12 w-auto" :
                  service.name === 'DoorDash' ? "h-24 w-auto" :
                  "h-20 w-auto"
                }
              />
            </Button>
          ))}
        </div>
        
        <div className="text-center">
          <Button
            variant="ghost"
            onClick={() => onOpenChange(false)}
            className="text-gray-600 hover:text-gray-800 font-garamond tracking-widest"
          >
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}