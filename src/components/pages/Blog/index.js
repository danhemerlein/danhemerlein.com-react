import React from "react";
import styled from "styled-components";
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
        {music.music.map((album, key) => {
          return (
            <div key={key} className="my1">
              <p>
                <CategoryTitle>{album.month}</CategoryTitle>
              </p>

              {album.data.map((data, key) => {
                return (
                  <p key={key}>
                    <StyledSpan>{data.title}</StyledSpan>&nbsp;
                    <span>({data.releaseYear})</span>
                    <span> by {data.artist}</span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <CategoryTitle>books</CategoryTitle>
        {books.books.map((book, key) => {
          return (
            <div key={key} className="my1">
              <p>
                <CategoryTitle>{book.month}</CategoryTitle>
              </p>

              {book.data.map((data, key) => {
                return (
                  <p key={key}>
                    <StyledSpan>{data.title}</StyledSpan>&nbsp;
                    <span>({data.releaseYear})</span>
                    <span> by {data.author}</span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <CategoryTitle>movies</CategoryTitle>
        {movies.movies.map((movie, key) => {
          return (
            <div key={key} className="my1">
              <p>
                <CategoryTitle>{movie.month}</CategoryTitle>
              </p>

              {movie.data.map((data, key) => {
                return (
                  <p key={key}>
                    <span>{data.title}</span>&nbsp;
                    <span>({data.releaseYear})</span>
                  </p>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <CategoryTitle>tv shows</CategoryTitle>
        {tvShows.tvShows.map((show, key) => {
          return (
            <div key={key} className="my1">
              <p>
                <CategoryTitle>{show.month}</CategoryTitle>
              </p>

              {show.data.map((data, key) => {
                return (
                  <p key={key}>
                    <span>{data.title}</span>&nbsp;
                    <span>({data.releaseYear})</span>
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
