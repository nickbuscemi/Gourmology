import siteLogo from '../../../public/assets/images/logos/site-logo-white.png';
import { Link } from 'react-router-dom';  
import { NavigationMenuDemo2 } from '../demos/NavigationMenuDemo2';

const SideNavBar = () => {
  return (
    <section className="sidebar sticky top-0 z-50">
        <div className="flex justify-between items-center py-4 px-6 w-full">
            <Link to="/" className="flex gap-3 items-center px-3">
                <img 
                    src={siteLogo}
                    alt="logo"
                    width={65}
                    height={65}
                />
            </Link>
            <NavigationMenuDemo2 />
        </div>
    </section>
  )
}

export default SideNavBar