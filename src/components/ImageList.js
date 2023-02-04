import ImageShow from './ImageShow'

const ImageList = ({ images }) => {
  const renderedImages = images.map((image) => {
    return (
      <div key={image.id}>
        <ImageShow image={image} />
      </div>
    )
  });
  return (
    <div className='grid grid-cols-5 gap-4 object-cover'>{renderedImages}</div>
  )
}

export default ImageList;