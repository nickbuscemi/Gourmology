import { Link } from 'react-router-dom';  
import { NavigationMenuDemo } from '../demos/NavigationMenuDemo';
import { cloudFlareLogos } from '@/data/cloudFlareImagesConfig';
import SiteModeToggle from './SiteModeToggle';

const TopNavbar = () => {
  return (
    <section className="topbar sticky top-0 z-50">
        <div className="flex justify-between items-center py-4 px-16 w-full">
            <Link to="/" className="flex gap-3 items-center">
                <img 
                    src={cloudFlareLogos.siteLogoWhite}
                    alt="logo"
                    width={165}
                    height={165}
                />
            </Link>
            <div className="flex items-center gap-6">
                <SiteModeToggle />
                <NavigationMenuDemo />
            </div>
        </div>
    </section>
  )
}

export default TopNavbar