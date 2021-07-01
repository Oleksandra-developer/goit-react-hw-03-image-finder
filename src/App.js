import React, { Component } from "react";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";
import Loader from "react-loader-spinner";
import Button from "./components/Button";
import Modal from "./components/Modal";
// import axios from "axios";
// import newsApi from "./components/services/imagesApi";
import "./components/styles.css";
import imagesApi from "./components/services/imagesApi";

class App extends Component {
  state = {
    hits: [],
    currentPage: 1,
    searchQuery: "",
    isLoading: false,
    error: null,
    showModal: false,
    targetImgId: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }
  toggleModal = (id) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      targetImgId: id,
    }));
  };
  getImgInModal = () => {
    if (this.state.targetImgId) {
      return this.state.hits.find((hit) => hit.id === this.state.targetImgId);
    }
  };
  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      error: null,
    });
    // console.log(this.state.searchQuery);
  };
  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    // console.log(document.documentElement.scrollHeight);
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoader: true });
    // this.scroll();
    imagesApi(options)
      .then((hits) =>
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .then(this.scroll)
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    // console.log(this.fetchImages);
    const { hits, isLoading, error, showModal } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;
    const ModalImg = this.getImgInModal();
    return (
      <div>
        {error && <h1>Ой ошибка, всё пропало!!!</h1>}

        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery images={hits} handleOpenModal={this.toggleModal} />

        {isLoading && (
          // <h1>Downloading...</h1>
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        )}

        {shouldRenderLoadMoreButton && (
          <Button handleClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal onClose={this.toggleModal} targetImg={ModalImg}></Modal>
        )}
      </div>
    );
  }
}

export default App;
