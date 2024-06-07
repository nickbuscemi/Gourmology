import { useNavigate } from 'react-router-dom'
import { supabase } from '../../supabaseClient'

const BottomBar = () => {

    const navigate = useNavigate()

    const handleLogout = async () => {
      const { error } = await supabase.auth.signOut()
      if (error) {
        console.error('Error logging out:', error.message)
      } else {
        navigate('/sign-in')
      }
    }
    return (
        <div className="w-full bg-gray-900 text-white p-4 flex justify-center items-center">
            <h1>Bottom Bar</h1>
            <button onClick={handleLogout} className="shad-button_primary">
                Logout
            </button>
        </div>
    )
}

export default BottomBar