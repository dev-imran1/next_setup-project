import Image from 'next/image'
import React from 'react';
import images from '/public/image.png'

const setting = () => {
  return (
    <div>
      <h1>setting</h1>
      <Image src={images} alt='images'/>
    </div>
  )
}

export default setting
