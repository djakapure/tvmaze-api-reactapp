import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SearchShows.css";
import NoImage from './no-image.jpg';

class Search extends Component {
  state = {
    searchValue: "",
    showList: [],
  };

  handleOnChange = event => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    this.makeApiCall(this.state.searchValue);
  };

  makeApiCall = searchInput => {
    var searchUrl = `https://api.tvmaze.com/search/shows?q=${searchInput}`;
    fetch(searchUrl)
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        this.setState({ showList: jsonData});
      });
  };
  handleClickImage = showId => { 
    console.log('ims',showId)
    this.setState({ showId: showId })
    //history.push("/season");
  }

  render() {
    return (
      <div id="main">
        <h1>Welcome to TV shows search app</h1>
        <input
          name="text"
          type="text"
          placeholder="Search"
          onChange={event => this.handleOnChange(event)}
          value={this.state.searchValue}
        />
        <button onClick={this.handleSearch}>Search</button>
        {this.state.showList ? (
          <div id="search-shows-container">
            {this.state.showList.map((showObj, index) => (
              <div className="single-search-shows" key={index}>
                <h2>{showObj.show.name}</h2>
                <Link to={{pathname: `season/${showObj.show.id}`}}>
                {showObj.show.image !== null ?<img src={showObj.show.image.medium} alt="meal-thumbnail" /> : <img src={NoImage} alt="meal-thumbnail" />}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Try searching for a meal</p>
        )}
      </div>
    );
  }
}

export default Search;
