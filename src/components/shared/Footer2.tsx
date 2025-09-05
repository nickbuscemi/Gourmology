"use client";
import { useState } from 'react';
import { cloudFlareLogos } from '@/data/cloudFlareImagesConfig';
import { cloudFlareIcons } from '@/data/cloudFlareImagesConfig';
import { Link } from 'react-router-dom';
import { Footer } from "flowbite-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer2() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:5001/api/newsletter-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage('Thank you for signing up!');
        setEmail('');
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <Footer container className='bg-dark-3 font-garamond lg:px-10'>
      <div className="w-full">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 pt-6 md:pt-2 w-full px-6">

          {/* Newsletter Signup - Left on large screens */}
          <div className='flex flex-col lg:w-1/2 w-full order-1'>
            <div className='flex'>
              <Footer.Brand
                href="/"
                src={cloudFlareLogos.siteLogoWhiteWords}
                alt="Gourmology Logo"
              />
            </div>
            <div className='md:pt-2 md:-mb-8'>
              <form onSubmit={handleFormSubmit}>
                <div className="flex flex-col md:items-start gap-4 mb-6">
                  <div className="text-cream1 tracking-widest font-garamond">
                    <p>Sign up for our newsletter</p>
                  </div>

                  <div className='flex flex-col md:flex-row md:items-center gap-4 w-full'>
                    <div className="relative md:mb-6 flex-1 w-full">
                      <Input
                        placeholder="enter your email"
                        className="w-full text-dark-2"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="mb-6 md:mr-auto font-garamond pt-2 md:pt-0 flex-1 md:flex-none">
                      <Button
                        variant="outline"
                        className="bg-cream1 tracking-widest items-center justify-center text-dark-2 rounded-sm w-full md:w-auto"
                        type="submit"
                      >
                        Subscribe
                      </Button>
                    </div>
                  </div>

                  {message && (
                    <div className="text-cream1">
                      {message}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Store Hours & Contact Info - Centered on mobile, right-aligned container on large, left-aligned text */}
<div className="flex flex-col lg:flex-row text-cream1 font-garamond tracking-widest lg:w-1/2 w-full order-2 items-center lg:items-end text-left gap-8">
  
  {/* Store Hours */}
  <div className="space-y-3 text-lg">
    <p><strong>Store Hours:</strong></p>
    <div className="text-base space-y-1">
      <p><em>Closed Mondays</em></p>
      <p>Tue - Thu: 10 AM - 7 PM</p>
      <p>Friday: 10 AM - 9 PM</p>
      <p>Saturday: 11 AM - 9 PM</p>
      <p>Sunday: 11 AM - 6 PM</p>
    </div>
  </div>

  {/* Contact Info */}
  <div className="space-y-3 text-lg">
    <p>
      <strong>Phone:</strong>{" "}
      <a href="tel:+15168824266" className="hover:text-cream2 transition">
        (516) 882-4266
      </a>
    </p>
    <p>
      <strong>Email:</strong>{" "}
      <a href="mailto:gourmology18@gmail.com" className="hover:text-cream2 transition">
        gourmology18@gmail.com
      </a>
    </p>
    <p>
      <strong>Address:</strong>{" "}
      <a
        href="https://www.google.com/maps/search/?api=1&query=429+Sunrise+Hwy,+Lynbrook,+NY+11563"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-cream2 transition"
      >
        429 Sunrise Hwy, Lynbrook, NY 11563
      </a>
    </p>
  </div>
</div>


        </div>

        <Footer.Divider />

        {/* Bottom Section */}
        <div className="w-full sm:flex sm:items-center sm:justify-between px-8">
          <div className='flex gap-6'>
            <Footer.Copyright href="#" by="Gourmology, LLC" year={2025} />
            <Link to='https://gourmology.sanity.studio/structure'>
              <p className='text-light-2 hover:underline'>Admin</p>
            </Link>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <a href="https://www.instagram.com/gourm.ology/" target="_blank" rel="noopener noreferrer">
              <img src={cloudFlareIcons.instagram} alt="Instagram" className="w-6 h-6 cursor-pointer" />
            </a>
            <a href="mailto:gourmology18@gmail.com">
              <img src={cloudFlareIcons.email} alt="Email" className="w-6 h-6 cursor-pointer" />
            </a>
            <a href="tel:+15168824266">
              <img src={cloudFlareIcons.phone} alt="Phone" className="w-6 h-6 cursor-pointer" />
            </a>
            <a href="https://www.facebook.com/Gourmology/" target="_blank" rel="noopener noreferrer">
              <img src={cloudFlareIcons.facebook} alt="Facebook" className="w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </Footer>
  );
}
