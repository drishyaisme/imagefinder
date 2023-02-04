import React from 'react'

const ImageShow = ({ image }) => {
  return (
    <div className=''>
      <div>
        <img className='opacity-75 hover:opacity-100 w-[100%] mb-2' src={image.urls.raw} alt={image.alt_description} />
      </div>
    </div>
  )
}

export default ImageShow