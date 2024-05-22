
import { Button } from "@/components/ui/button"
import { cloudFlareIcons } from "@/data/cloudFlareImagesConfig"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  //DrawerDescription,
  DrawerFooter,
  //DrawerHeader,
  //DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { FC } from "react"
import { Link } from "react-router-dom"
const pTagClasses = "text-3xl font-semibold tracking-widest hover:bg-white/20 backdrop-blur-sm rounded-md p-2 transition duration-300 ease-in-out";


const SideNavDrawer: FC = () => {
  return (
    <div>
      <Drawer>
        <DrawerTrigger className="focus:outline-none">
          <Button>
            <img src={cloudFlareIcons.menuIcon} alt="menu" height={55} width={35}/>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
            
          <div className="flex flex-col gap-4 p-4 items-center justify-center pt-16">
          
            <Link to="/menus" className={pTagClasses}>
              <DrawerClose>
                Menus
              </DrawerClose>
            </Link>
            
            <Link to="/services" className={pTagClasses}>
              <DrawerClose>
                Services
              </DrawerClose>
            </Link>

            <Link to="/aboutus" className={pTagClasses}>
              <DrawerClose>
                Our Team
              </DrawerClose>
            </Link>

            <Link to="/contact" className={pTagClasses}>
              <DrawerClose>
                Contact Us
              </DrawerClose>
            </Link>

            <Link to="/" className={pTagClasses}>
              <DrawerClose>
                Home
              </DrawerClose>
            </Link>
            
          </div>

          <DrawerFooter>
            <DrawerClose>
            <Button>
            <img src={cloudFlareIcons.xicon} alt="menu" height={55} width={35}/>
          </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default SideNavDrawer
