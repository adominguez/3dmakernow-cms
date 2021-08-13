import React, { useState } from "react";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const ImageGalery = ({ images }) => {

  const [image, setImage] = useState(images.length ? images[0] : null);

  const isImageSelected = (src) => {
    return image.src === src;
  }

  return (
    <div className="flex flex-col justify-center w-full p-8">
      <div className="flex items-center justify-center flex-1">
        <PreviewCompatibleImage imageInfo={{
          image: image.src,
          alt: image.alt
        }} />
      </div>
      {images && images.length ?
        <ul className="flex max-w-full overflow-auto">
          {images && images.length > 0 && images.map((image, i) => (
            <li key={i} className="w-full p-2 xl:w-1/4 md:w-1/2">
              <label htmlFor="image" className={`relative p-1 flex items-center border border-blueGray-300 rounded-md ${isImageSelected(image.src) ? 'bg-white' : 'bg-blueGray-200 opacity-50'}`}>
                <input type="radio" name="image" value="grid" className="absolute w-full h-full opacity-0 hover:cursor-pointer" checked={isImageSelected(image.src)} onChange={() => setImage(image)} />
                <PreviewCompatibleImage
                  key={i}
                  imageInfo={{
                    image: image.src,
                    alt: image.alt
                  }}
                />
              </label>
            </li>
          ))}
        </ul>
        : null}
    </div>

  )
}

export default ImageGalery;