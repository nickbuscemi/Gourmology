// src/components/Sidebar.tsx
import { Link } from 'react-router-dom'

const liClasses = 'mt-2 cursor-pointer'
const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-full flex flex-col">
      {/* Sidebar content */}
      <div className="p-4">
        <h2 className="text-xl font-bold">Sidebar</h2>
        <ul>
            <li className={liClasses}><Link to='/admin'>Home</Link></li>
            <li className={liClasses}><Link to='/admin/about-sections'>About Sections</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
