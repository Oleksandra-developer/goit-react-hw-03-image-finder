import React, { Component } from "react";
import { createPortal } from "react-dom";
import "../styles.css";
// import "./Modal.scss";

const modalRoot = document.querySelector("#modal-root");

export default class Modal extends Component {
  // state = {
  //   targetImg: "",
  // };
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.targetImg;
    // console.log(this.props.targetImg);
    return createPortal(
      <div className="Overlay" onClick={this.handleBackdropClick}>
        <div className="Modal">
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>,
      modalRoot
    );
  }
}
