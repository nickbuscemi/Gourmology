
import SideNavBar from "@/components/shared/SideNavBar";
import { useEffect, useState } from "react";
import TopNavbar from "./TopNavbar";


const NavBarSettings = () => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);  // Assuming 768px as the breakpoint

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);  // Update based on the window size
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        {isMobile ? <SideNavBar /> : <TopNavbar />}
    </div>
  )
}

export default NavBarSettings