import './App.css'
import { Routes, Route } from 'react-router-dom';
/*import SigninForm from './_auth/forms/SignInForm';
import SignupForm from './_auth/forms/SignUpForm';
import AuthLayout from './_auth/AuthLayout';*/
import RootLayout from './_root/RootLayout';
import { Home } from './_root';
import { Services, Contact, Menus } from '../src/_root/index';
import Book from './_root/pages/Book';
import CateringMenu from './_root/pages/Menus/CateringMenu';


function App() {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* public routes */}
        

        {/* private routes */} 
        <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/menus" element={<Menus />} />
                <Route path='/menus/catering-menu' element={<CateringMenu />} />
                <Route path="/book" element={<Book />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Route>
      </Routes>
    </main>
  )
}

export default App
