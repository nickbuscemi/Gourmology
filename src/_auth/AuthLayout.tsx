import { Outlet, Navigate } from 'react-router-dom';
import { cloudFlareLogos } from '@/data/cloudFlareImagesConfig';

const AuthLayout = () => {

    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated ? (
                <Navigate to="/" />
            ): (
                <>
                    <section className='flex flex-1 justify-center items-center flex-col py-10'>
                        <Outlet />
                    </section>

                    
                    <img 
                        src={cloudFlareLogos.siteLogoWhite }
                        alt="logo"
                        className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat' 
                    />
                </>
            )}
        </>
    )
}

export default AuthLayout