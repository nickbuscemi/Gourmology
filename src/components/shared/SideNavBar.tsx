import { Link } from 'react-router-dom';  
import { NavigationMenuDemo2 } from '../demos/NavigationMenuDemo2';
import { cloudFlareLogos } from '@/data/cloudFlareImagesConfig'


const SideNavBar = () => {
  return (
    <section className="sidebar sticky top-0 z-50">
        <div className="flex justify-between items-center py-4 px-4 w-full">
            <Link to="/" className="flex gap-3 items-center">
                <img 
                    src={cloudFlareLogos.siteLogoWhite}
                    alt="logo"
                    width={105}
                    height={105}
                />
            </Link>
            <NavigationMenuDemo2 />
        </div>
    </section>
  )
}

export default SideNavBar