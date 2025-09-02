"use client"
import { ContactForm } from "../../components/forms/ContactForm"
import instagram from '../../../public/assets/icons/instagram.svg'
import facebook from '../../../public/assets/icons/facebook.svg'
import { Link } from "react-router-dom"

const StorefrontContact = () => {

  return (
    <>
    <div className="lg:px-40 animate__animated animate__fadeIn">
    
    <div className="grid grid-cols-1 md:grid-cols-2 pb-20">
      <div className="flex flex-col items-center justify-center">
      <div className="mt-10 lg:mt-0 font-garamond tracking-widest">
        <h2 className="mb-5 text-3xl text-center font-bold text-cream1 sm:text-[40px]/[48px]">
          Questions, Consultations, or Bookings?
        </h2>
        <p className="mb-5 text-base text-center text-body-color dark:text-dark-6">
        Please reach out to us below and we will be in touch!
        </p>
      </div>
        <ContactForm />
      </div>
      <div className="flex items-center justify-center md:pt-0 pt-8">
            <div className="font-garamond tracking-widest text-cream1">
              <h3 className="md:text-4xl text-3xl font-semibold pb-4">Contact Information</h3>
              <div className="space-y-3 md:text-2xl">
                <a href="tel:+15168824266">
                  <p><strong>Phone:</strong> (516) 882-4266</p>
                </a>
                <p><strong>Email:</strong> gourmology18@gmail.com</p>
                <p><strong>Address:</strong> <a href="https://www.google.com/maps/search/?api=1&query=429+Sunrise+Hwy,+Lynbrook,+NY+11563">429 Sunrise Hwy, Lynbrook, NY 11563</a></p>
                <div className="flex items-center">
                    <span>Follow us on:</span>
                    <div className="flex items-center ml-2 gap-4">
                      <Link to="https://www.instagram.com/gourm.ology/" className="block">
                        <img src={instagram} alt="Instagram" className="w-6 h-6 cursor-pointer" />
                      </Link>
                      <Link to="https://www.facebook.com/Gourmology/" className="block">
                        <img src={facebook} alt="Facebook" className="w-6 h-6 cursor-pointer" />
                      </Link>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
    </>
  )
};

export default StorefrontContact;