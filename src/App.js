import React, { Component } from "react";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/SearchBar";
import Loader from "react-loader-spinner";
import Button from "./components/Button";
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
    // error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      hits: [],
      // error: null,
    });
    console.log(this.searchQuery);
  };

  fetchImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoader: true });

    imagesApi(options)
      .then((hits) =>
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };
  render() {
    console.log(this.fetchImages);
    const { hits, isLoading } = this.state;
    const shouldRenderLoadMoreButton = hits.length > 0 && !isLoading;

    return (
      <div>
        {/* {error && <h1>Ой ошибка, всё пропало!!!</h1>} */}

        <SearchBar onSubmit={this.onChangeQuery} />
        <ImageGallery images={hits} />

        {isLoading && (
          <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
        )}

        {shouldRenderLoadMoreButton && (
          <Button handleClick={this.fetchImages} />
        )}
      </div>
    );
  }
}
//Проблемы: 1. не передается запрос в стейт Апп,
// проблемы с онКликом на кнопке. Модалка и скролл
export default App;
