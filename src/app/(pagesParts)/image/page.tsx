import React from 'react'
import NextImage from 'next/image'
const Image = () => {
  return (
    <div>
       <NextImage 
      src="/public/globe.svg"
      alt="foto"
      width={100}
      height={100}
      loading='lazy'
      className="w-50 h-50 object-cover"
      />
    </div>
  )
}

export default Image
