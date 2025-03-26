import React from 'react'
import Link  from 'next/link' ;

const Navbar = () => {
  return (
    <div className="bg-blue-500 p-4">
      <div className='flex justify-between items-center'>
        <div>
          <Link href="/" className="text-white text-2xl font-bold">Logo</Link>
        </div>
        <div className="flex gap-12">
          <Link href="/" className="text-white hover:text-gray-200">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-200">About</Link>
          <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
          <Link href="/services" className="text-white hover:text-gray-200">Service</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
