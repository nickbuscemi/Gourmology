import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CateringMenu from "./Menus/CateringMenu";
import HolidayMenu from "./Menus/HolidayMenu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

//import useScrollTrigger from "@/hooks/useScrollTrigger";

const Menus = () => {
  const [isActive, setIsActive] = useState('catering');
  const triggerClass = 'md:text-xl font-bold text-white';
  const tabsContentClass = 'text-center mt-3 text-lg font-garamond tracking-widest text-cream1';
  //const isLoaded = useScrollTrigger();

  const holiday = 'Mother\'s Day';

  return (
    <>
      <div className='relative overflow-hidden py-12 lg:py-24 flex flex-col items-center min-h-screen'>
        <div className="container">
          <div className="max-w-2xl text-center mx-auto">
            <h2 className="scroll-m-20 text-5xl font-garamond text-cream1 tracking-wide lg:text-5xl">
              Our Menus
            </h2>
          </div>
          <div className="flex flex-col mt-3 animate__animated animate__fadeIn">
            <Tabs defaultValue={isActive} onValueChange={setIsActive} className="font-garamond tracking-widest text-cream1 text-2xl">
              <TabsList>
                <TabsTrigger value="catering" onClick={() => setIsActive('catering')} className={isActive === 'catering' ? triggerClass : ''}>Catering</TabsTrigger>
                <TabsTrigger value="holiday" onClick={() => setIsActive('holiday')} className={isActive === 'holiday' ? triggerClass : ''}>{holiday} Special</TabsTrigger>
                {/*<TabsTrigger value="weeklyspecials" onClick={() => setIsActive('weeklyspecials')} className={isActive === 'weeklyspecials' ? triggerClass : ''}>Weekly Specials</TabsTrigger>
                <TabsTrigger value="mealprep" onClick={() => setIsActive('mealprep')} className={isActive === 'mealprep' ? triggerClass : ''}>Meal Prep</TabsTrigger>*/}
              </TabsList>

              <TabsContent value="catering">
                <p className={tabsContentClass}>
                  Our perfectly curated menu packages for any event.
                </p>
                <CateringMenu />
              </TabsContent>

              <TabsContent value="holiday">
                <p className={tabsContentClass}>
                  Let us make {holiday} special this year.
                </p>
                <HolidayMenu />
              </TabsContent>

              {/*<TabsContent value="weeklyspecials">
                <p className={tabsContentClass}>
                  Check out our specials this week!
                </p>
                <h3 className="text-center text-5xl pt-20">Coming Soon...</h3>
              </TabsContent>

              <TabsContent value="mealprep">
                <p className={tabsContentClass}>
                  Save time and eat better with our meal prep services.
                </p>
                <h3 className="text-center text-5xl pt-20">Coming Soon...</h3>
              </TabsContent>*/}
            </Tabs>
          </div>
        </div>
      </div>

      <div className="w-full px-4 pb-24 pt-12">
        <div className="mt-10 lg:mt-0 font-garamond tracking-widest">
          <h2 className="mb-5 text-3xl text-center font-bold text-cream1 sm:text-[40px]/[48px]">
            Not quite what you're looking for?
          </h2>
          <p className="mb-5 text-base text-center text-body-color dark:text-dark-6">
            Please feel free to contact us so we can explore
            more details on how we can customize a superb menu for you.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a href="tel:+13474537738">
              <Button className='bg-cream1 items-center justify-center text-dark-2 rounded-sm'>Call Us!</Button>
            </a>
            <a href="/contact">
              <Button className='bg-cream1 items-center justify-center text-dark-2 rounded-sm'>Contact</Button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menus;
