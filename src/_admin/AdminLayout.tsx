
import { Outlet } from 'react-router-dom'
import TopBar from './shared/TopBar'
import SideBar from './shared/SideBar'
import BottomBar from './shared/BottomBar'


const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex flex-col flex-1">
        <TopBar />
        <div className="flex-1 overflow-auto p-4">
          <Outlet />
        </div>
        <BottomBar />
      </div>
    </div>
  )
}

export default AdminLayout