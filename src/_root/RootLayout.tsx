import { Outlet } from "react-router-dom";
import TopNavbar from "../components/shared/TopNavbar";
//import Footer from "../components/shared/Footer";

import SideNavBar from "@/components/shared/SideNavBar";
import { useState, useEffect } from "react";
import { Footer2 } from "@/components/shared/Footer2";

const RootLayout = () => {

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
    <div className="flex flex-col min-h-screen w-full md:flex">
        {isMobile ? <SideNavBar /> : <TopNavbar />}

        <section className="flex flex-col w-full">
            <Outlet />
        </section>
        <Footer2 />
    </div>
  )
}

export default RootLayout