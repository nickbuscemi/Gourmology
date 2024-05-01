import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import instagram from '../../../public/assets/icons/instagram.svg'
import facebook from '../../../public/assets/icons/facebook.svg'
import email from '../../../public/assets/icons/email.svg'
import phone from '../../../public/assets/icons/phone.svg'
import wordsLogo from '../../../public/assets/images/logos/site-logo-words-white.png'
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-dark-1 text-center text-white">
        <div className="container px-6 pt-6 mx-auto">
            {/* Social media icons container */}
            
            {/* Newsletter sign-up form */}
            <div>
                <form action="">
                  <div className="mb-8 mt-8">
                    <img 
                          src={wordsLogo} 
                          alt="Gourmology" 
                          className="mx-auto" 
                          height={50}
                          width={200}
                    />
                  </div>
                    <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3 mb-6">
                        <div className="md:mb-6 md:ml-auto">
                            <p>
                                <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>

                        {/* Newsletter sign-up input field */}
                        <div className="relative md:mb-6">
                            <Input />
                        </div>

                        {/* Newsletter sign-up submit button */}
                        <div className="mb-6 md:mr-auto">
                          <Button variant="outline">Subscribe</Button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Additional content here... */}
             {/* <!-- Copyright information --> */}
                <div className="mb-6">
                    
                      
                </div>

                {/* <!-- Links section --> */}
                <div className="flex items-center justify-center">
                    <div className="mb-4">
                      <ul className="custom-list flex gap-6">
                        <li>
                          <a href="#" className="text-white block cursor-pointer">Contact</a>  
                        </li>
                        <li>
                          <a href="#" className="text-white block cursor-pointer">Lynbrook, NY</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                {/* <!-- Social media icons --> */}
                <div className="mt-8 mb-8 gap-12 flex justify-center">
                    <Link to='https://www.instagram.com/gourm.ology/' >
                    <span>
                      <img src={instagram} alt="Instagram" className="w-8 h-8 cursor-pointer" />
                    </span>
                    </Link>
                    <span>
                      <img src={email} alt="Email" className="w-8 h-8 cursor-pointer" />
                    </span>
                    <span>
                      <a href="tel:+13474537738">
                        <img src={phone} alt="Phone" className="w-8 h-8 cursor-pointer" />
                      </a>
                    </span>
                    <Link to='https://www.facebook.com/Gourmology/'>
                    <span>
                      <img src={facebook} alt="Facebook" className="w-8 h-8 cursor-pointer" />
                    </span>
                    </Link>
                </div>

            </div>

            {/* <!-- Copyright section --> */}
            <div
                className="p-4 text-center bg-black bg-opacity-20">
                © 2024 Copyright: Gourmology, LLC
            </div>
    </footer>
);
}

export default Footer