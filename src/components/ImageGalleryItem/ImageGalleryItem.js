import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, title, id }) => (
  <li className="ImageGalleryItem" key={id}>
    <img src={src} alt={title} className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number,
};
export default ImageGalleryItem;
