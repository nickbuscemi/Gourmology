import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
/*import SigninForm from './_auth/forms/SignInForm';
import SignupForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';*/
import RootLayout from './_root/RootLayout';
import { Home } from './_root';
import { Services, Contact, Menus } from '../src/_root/index';
import AboutUs from './_root/pages/AboutUs';
import CateringMenu from './_root/pages/Menus/CateringMenu';
import { ServicePage } from './_root/pages/Services/ServicePage';

function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        

        {/* private routes */} 
        <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceName" element={<ServicePage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menus" element={<Menus />} />
                <Route path='/menus/catering-menu' element={<CateringMenu />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
      </Routes>
    </main>
  )
}

export default App
