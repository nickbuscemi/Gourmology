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
//import CateringMenu from './_root/pages/Menus/CateringMenu';
import { ServicePage } from './_root/pages/Services/ServicePage';
import AuthLayout from './_auth/AuthLayout';
import SignInForm from './_auth/forms/SignInForm';
import SignUpForm from './_auth/forms/SignUpForm';
//import Gallery from './_root/pages/Gallery';

import AdminLayout from './_admin/AdminLayout';
import MainDash from './_admin/pages/MainDash';
import AboutSections from './_admin/pages/AboutSections';


function App() {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <main className='flex h-screen'>
      <Routes>
        {/* private routes */}
        <Route element={<AuthLayout />}>
                <Route path="/sign-in" element={<SignInForm />} />
                <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        
        {/* public admin routes */} 
        <Route element={<AdminLayout />}>
                <Route path="/admin" element={<MainDash />} />
                <Route path="/admin/about-sections" element={<AboutSections/>} />
        </Route>
        {/* public client routes */} 
        <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceName" element={<ServicePage />} />
                <Route path="/aboutus" element={<AboutUs />} />
                {/*<Route path="/gallery" element={<Gallery />} />*/}
                <Route path="/contact" element={<Contact />} />
                <Route path="/menus" element={<Menus />} />
                
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
      </Routes>
    </main>
  )
}

export default App
