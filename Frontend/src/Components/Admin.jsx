import React from 'react'
import { Link } from 'react-router-dom'
const Admin = () => {
  return (
    <div>
      <div className='flex flex-col items-center justify-center'>
        <Link to='/admin/register'>
          <button className='px-4 py-3 bg-blue-400 font-bold text-white my-4 rounded-lg'>Admin Register</button>
        </Link>
        <Link to='/admin/login'>
          <button className='px-4 py-3 bg-blue-400 font-bold text-white my-4 rounded-lg'>Admin Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Admin
