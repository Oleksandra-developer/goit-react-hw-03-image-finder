import React, { Component } from "react";
// import PropTypes from "prop-types";

class SearchBar extends Component {
  state = {
    query: "",
  };
  handleChange = (e) => {
    this.setState({ query: e.currentTarget.value });
    // console.log(e.currentTarget.value);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    // console.log(this.state.query);
    this.setState({ query: "" });
    // console.log(this.props.onSubmit);
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.handleSubmit}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
