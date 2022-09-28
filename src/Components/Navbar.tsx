import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="h-auto w-full bg-gray-800 px-6 py-2 text-gray-400 text-4xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center ">
        <div className='pl-12'>
           <Link  to="/">S-Mart</Link> 
           
        </div>
        <div className='text-lg pl-12'>
        <Link  to="/add">Add New Product</Link>
        </div>
        <div className='text-lg pl-12'>
        <Link  to="/favourite">Favourite List</Link>
        </div>
    </div>
  )
}

export default Navbar