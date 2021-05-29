import React from "react";
import styled from "styled-components";
import { makeKey } from "utils";
import data from "./q1-2021.json";

const CategoryTitle = styled.strong`
  font-weight: 900;
`;

const StyledSpan = styled.span`
  font-style: italic;
`;

const Blog = () => {
  const [music, movies, books, tvShows] = data;

  return (
    <section className="blog">
      <h1 className="mb_5 text-center">music, movies, books & tv shows</h1>
      <h2 className="text-center">january - march 2021</h2>

      <div>
        <CategoryTitle>music</CategoryTitle>
        {music.music.map((album, albumMonthKey) => {
          return (
            <div key={makeKey(albumMonthKey)} className="my1">
              <p>
                <CategoryTitle>{album.month}</CategoryTitle>
              </p>

              {album.data.map((albumData, albumKey) => {
                return (
                  <p key={makeKey(albumKey)}>
                    <StyledSpan>{albumData.title}</StyledSpan>&nbsp;
                    <span>({albumData.releaseYear})</span>
                    <span> by {albumData.artist}</span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <CategoryTitle>books</CategoryTitle>
        {books.books.map((book, bookMonthKey) => {
          return (
            <div key={makeKey(bookMonthKey)} className="my1">
              <p>
                <CategoryTitle>{book.month}</CategoryTitle>
              </p>

              {book.data.map((bookData, bookKey) => {
                return (
                  <p bookKey={makeKey(bookKey)}>
                    <StyledSpan>{bookData.title}</StyledSpan>&nbsp;
                    <span>({bookData.releaseYear})</span>
                    <span> by {bookData.author}</span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <CategoryTitle>movies</CategoryTitle>
        {movies.movies.map((movie, movieMonthKey) => {
          return (
            <div key={makeKey(movieMonthKey)} className="my1">
              <p>
                <CategoryTitle>{movie.month}</CategoryTitle>
              </p>

              {movie.data.map((movieData, movieKey) => {
                return (
                  <p key={makeKey(movieKey)}>
                    <span>{movieData.title}</span>&nbsp;
                    <span>({movieData.releaseYear})</span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <CategoryTitle>tv shows</CategoryTitle>
        {tvShows.tvShows.map((show, tvShowsMonthKey) => {
          return (
            <div key={makeKey(tvShowsMonthKey)} className="my1">
              <p>
                <CategoryTitle>{show.month}</CategoryTitle>
              </p>

              {show.data.map((showData, showKey) => {
                return (
                  <p key={makeKey(showKey)}>
                    <span>{showData.title}</span>&nbsp;
                    <span>({showData.releaseYear})</span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Blog;
