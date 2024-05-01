import siteLogo from '../../../public/assets/images/logos/site-logo-white.png';
import { Link } from 'react-router-dom';  
import { NavigationMenuDemo } from '../demos/NavigationMenuDemo';


const TopNavbar = () => {
  return (
    <section className="topbar sticky top-0 z-50">
        <div className="flex justify-between items-center py-4 px-16 w-full">
            <Link to="/" className="flex gap-3 items-center">
                <img 
                    src={siteLogo}
                    alt="logo"
                    width={165}
                    height={165}
                />
            </Link>
            <NavigationMenuDemo />
        </div>
    </section>
  )
}

export default TopNavbar