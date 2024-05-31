
//import { Button } from '../ui/button';
import 'animate.css';
import useScrollTrigger from '@/hooks/useScrollTrigger';

type ServiceContentProps = {
    imageUrl: string;
    imageAlt: string;
    title: string;
    description: string[];
    buttonLabel: string;
};

const ServiceContent2 = ({
    imageUrl,
    imageAlt,
    title,
    description,
    //buttonLabel
}: ServiceContentProps) => {
    const [isVisibleText, textRef] = useScrollTrigger();
    const [isVisibleImage, imageRef] = useScrollTrigger();

    return (
        <div>
            <section id='about' className="overflow-hidden pb-12 lg:pt-[120px] lg:pb-[90px] bg-dark-1">
                <div className="container mx-auto">
                    <div className="flex flex-wrap items-center justify-between -mx-4">
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="flex items-center -mx-3 sm:-mx-4">
                                <div ref={imageRef}
                                    className={`w-full px-3 sm:px-4 xl:w-full
                                    ${isVisibleImage ? 'animate__animated animate__fadeInDown' : 'opacity-0'}`}
                                >
                                    <div className="relative z-10 my-4">
                                        <img
                                            src={imageUrl}
                                            alt={imageAlt}
                                            className="w-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                            <div ref={textRef}
                                className={`mt-10 lg:mt-0 font-garamond tracking-widest text-cream1 text-lg
                                ${isVisibleText ? 'animate__animated animate__fadeInRight' : 'opacity-0'}`}>
                                <h2 className="mb-5 text-3xl font-bold text-cream1 sm:text-[40px]/[48px]">
                                    {title}
                                </h2>
                                <p className="mb-5 text-base text-body-color">
                                    {description}
                                </p>
                                <h1 className='mb-4'>Check out our menus!</h1>
                                {/*<Button className='bg-cream1 text-dark-2 rounded-sm'>{buttonLabel}</Button>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceContent2;
