import React from 'react';
import Link  from 'next/link' ; 
const Footer = () => {
  return (
    <div className="bg-blue-500 px-[35%] py-10" >
      <Link href="/" className='text-white hover:text-gray-200 '>Footer part</Link>
    </div>
  )
}

export default Footer
