
"use client";
import { cloudFlareLogos } from '@/data/cloudFlareImagesConfig'
import { cloudFlareIcons } from '@/data/cloudFlareImagesConfig';
import { Link } from 'react-router-dom';
import { Footer } from "flowbite-react";
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer2() {
  return (
    <Footer container className='bg-dark-3 font-garamond lg:px-10'>
      <div className="w-full">

        <div className="flex flex-col md:flex-row items-center md:justify-between pt-6 md:pt-2 w-full px-6">
        <div className='flex flex-col md:w-2/4 lg:w-1/4 w-full'>
            <div className='flex'>
                <Footer.Brand
                    href="/"
                    src={cloudFlareLogos.siteLogoWhiteWords}
                    alt="Flowbite Logo"
                />
            </div>
            <div className='md:pt-2 md:-mb-8'>
                <form action="">
                    <div className="flex flex-col md:items-start gap-4 mb-6">
                        <div className="text-cream1 tracking-widest font-garamond">
                            <p>Sign up for our newsletter</p>
                        </div>

                        {/* Newsletter sign-up input field */}
                        <div className='flex flex-col md:flex-row md:items-center gap-4 w-full'>
                            <div className="relative md:mb-6 flex-1 w-full">
                                <Input placeholder="enter your email" className="w-full"/>
                            </div>

                            {/* Newsletter sign-up submit button */}
                            <div className="mb-6 md:mr-auto font-garamond pt-2 md:pt-0 flex-1 md:flex-none">
                                <Button variant="outline" className="bg-cream1 tracking-widest items-center justify-center text-dark-2 rounded-sm w-full md:w-auto">Subscribe</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

          
          <div className="flex gap-8 sm:mt-4 mb-6 sm:grid-cols-3">
         
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Legal</Footer.Link>
                <Footer.Link href="#">Careers</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Facebook</Footer.Link>
                <Footer.Link href="#">Instagram</Footer.Link>
              </Footer.LinkGroup>
            </div>
            
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between px-8">
          <Footer.Copyright href="#" by="Gourmology, LLC" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                    <Link to='https://www.instagram.com/gourm.ology/' >
                    <span>
                      <img src={cloudFlareIcons.instagram} alt="Instagram" className="w-6 h-6 cursor-pointer" />
                    </span>
                    </Link>
                    <span>
                      <img src={cloudFlareIcons.email} alt="Email" className="w-6 h-6 cursor-pointer" />
                    </span>
                    <span>
                      <a href="tel:+13474537738">
                        <img src={cloudFlareIcons.phone} alt="Phone" className="w-6 h-6 cursor-pointer" />
                      </a>
                    </span>
                    <Link to='https://www.facebook.com/Gourmology/'>
                    <span>
                      <img src={cloudFlareIcons.facebook} alt="Facebook" className="w-6 h-6 cursor-pointer" />
                    </span>
                    </Link>
          </div>
        </div>
      </div>
    </Footer>
  );
}
