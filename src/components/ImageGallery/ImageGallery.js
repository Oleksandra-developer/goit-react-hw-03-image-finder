import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images, handleOpenModal }) => (
  <ul className="ImageGallery">
    {images.map(({ webformatURL, tags, id, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        title={tags}
        handleOpenModal={() => handleOpenModal(id)}
        // link={largeImageURL}
      />
    ))}
  </ul>
);

export default ImageGallery;
