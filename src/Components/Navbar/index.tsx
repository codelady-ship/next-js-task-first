import React from 'react'
import Link  from 'next/link' ;

const Navbar = () => {
  return (
    <div className="bg-blue-500 p-4">
      <div className='flex justify-between items-center px-5'>
        <div>
          <Link href="/" className="text-white text-2xl font-bold">Logo</Link>
        </div>
        <div className="flex gap-10 ">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/users" className="text-white hover:text-gray-200">Users</Link>
          <Link href="/image" className="text-white hover:text-gray-200">Image</Link>
          <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
