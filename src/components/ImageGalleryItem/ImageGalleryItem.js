import React from "react";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ src, title, id, handleOpenModal }) => (
  <li className="ImageGalleryItem" key={id} onClick={handleOpenModal}>
    {/* <a href={link}> */}
    <img src={src} alt={title} className="ImageGalleryItem-image" />
    {/* </a> */}
  </li>
);

ImageGalleryItem.propTypes = {
  link: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number,
};
export default ImageGalleryItem;
