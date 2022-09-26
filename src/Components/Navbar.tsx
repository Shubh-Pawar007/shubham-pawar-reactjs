import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className="h-12 bg-gray-800 p-1 text-gray-400 text-4xl flex justify-evenly items-center">
        <h1 >
           <Link  to="/">S-Mart</Link> 
           
        </h1>
        <h2>
        <Link className='text-lg' to="/add">Add New Product</Link>
        </h2>
    </div>
  )
}

export default Navbar