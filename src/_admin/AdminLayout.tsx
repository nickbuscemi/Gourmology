
import { Outlet } from 'react-router-dom'
import TopBar from './shared/TopBar'
import SideBar from './shared/SideBar'
import BottomBar from './shared/BottomBar'

const AdminLayout = () => {
  return (
    <div className='w-full md:flex'>
      <TopBar />
      <SideBar />

      <section className='flex flex-1 h-full'>
        <Outlet />
      </section>

      <BottomBar />
    </div>
  )
}

export default AdminLayout