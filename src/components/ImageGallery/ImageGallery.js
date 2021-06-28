import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";

const ImageGallery = ({ images }) => (
  <ul className="ImageGallery">
    {images.map(({ webformatURL, tags, id }) => (
      <ImageGalleryItem key={id} src={webformatURL} title={tags} />
    ))}
  </ul>
);

export default ImageGallery;
