import React from 'react';
import Link  from 'next/link' ; 
const Footer = () => {
  return (
    <div className="bg-blue-500 px-[45%] py-10" >
      <Link href="/" className='text-white hover:text-gray-200 text-2xl'>Footer part</Link>
    </div>
  )
}

export default Footer
