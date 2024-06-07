import  { useEffect, useState } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
//import { cloudFlareLogos } from '@/data/cloudFlareImagesConfig'
import { supabase } from '../supabaseClient'

const AuthLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if there's an active session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setIsAuthenticated(!!session)
    }

    checkSession()

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session)
    })

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  if (isAuthenticated === null) {
    return <div>Loading...</div>
  }

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/admin" />
      ) : (
        <>
          <section className='flex flex-1 justify-center items-center flex-col py-10'>
            <Outlet />
          </section>

          <img 
            src="https://akqmdqkuzjliggqqmlaj.supabase.co/storage/v1/object/public/Gourmology/logos/site-logo-white-tiled.png"
            alt="logo"
            className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat' 
          />
        </>
      )}
    </>
  )
}

export default AuthLayout
