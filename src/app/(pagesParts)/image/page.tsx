import React from 'react'
import NextImage from 'next/image'
const Image = () => {
  return (
    <div>
      <NextImage 
      src="/next.svg" 
      alt="foto"
      width={100}
      height={100}
      loading='lazy'
      className="w-100 h-100 mx-[35%] "
      />
    </div>
  )
}

export default Image
