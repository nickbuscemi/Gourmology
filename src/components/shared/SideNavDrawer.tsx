
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
const pTagClasses = "text-3xl tracking-widest hover:bg-white/20 backdrop-blur-sm rounded-md p-2 transition duration-300 ease-in-out";


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
            
          <div className="flex flex-col gap-4 p-4 items-center justify-center pt-10">
          
            <Link to="/menus" className={pTagClasses}>
              <DrawerClose>
                menus
              </DrawerClose>
            </Link>
            
            <Link to="/services" className={pTagClasses}>
              <DrawerClose>
                services
              </DrawerClose>
            </Link>

            <Link to="/aboutus" className={pTagClasses}>
              <DrawerClose>
                our team
              </DrawerClose>
            </Link>

            {/*<Link to="/gallery" className={pTagClasses}>
              <DrawerClose>
                gallery
              </DrawerClose>
  </Link>*/}

            <Link to="/contact" className={pTagClasses}>
              <DrawerClose>
                contact us
              </DrawerClose>
            </Link>

            <Link to="/" className={pTagClasses}>
              <DrawerClose>
                home
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
