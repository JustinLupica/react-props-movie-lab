import React, { Component } from "react";
import MovieCard from "./card-components/MovieCard.js";
import movieData from "./data.js";

export default class MovieShowcase extends Component {
  generateMovieCards = () => {
    return movieData.map((movie, index) => {
      return (
        <MovieCard
          key={index}
          title={movie.title}
          genres={movie.genres}
          poster={movie.poster}
          IMDBRating={movie.IMDBRating}
        />
      );
    });
  };

  render() {
    return <div id="movie-showcase">{this.generateMovieCards()}</div>;
  }
}
