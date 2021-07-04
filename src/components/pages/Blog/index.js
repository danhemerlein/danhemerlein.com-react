import React from "react";
import styled from "styled-components";
import { H1, H2, P } from "styles/elements";
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
      <H1 className="mb_5 text-center">music, movies, books & tv shows</H1>
      <H2 className="text-center">january - march 2021</H2>

      <div>
        <P>
          <CategoryTitle>music</CategoryTitle>
        </P>

        {music.music.map((album) => {
          return (
            <div key={album.month} className="my1">
              <P>
                <CategoryTitle>{album.month}</CategoryTitle>
              </P>

              {album.data.map((albumData) => {
                return (
                  <P key={albumData.title}>
                    <StyledSpan>{albumData.title}</StyledSpan>&nbsp;
                    <span>({albumData.releaseYear})</span>
                    <span> by {albumData.artist}</span>
                  </P>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <P>
          <CategoryTitle>books</CategoryTitle>
        </P>

        {books.books.map((book) => {
          return (
            <div key={book.month} className="my1">
              <P>
                <CategoryTitle>{book.month}</CategoryTitle>
              </P>

              {book.data.map((bookData, bookKey) => {
                return (
                  <P bookKey={bookKey.title}>
                    <StyledSpan>{bookData.title}</StyledSpan>&nbsp;
                    <span>({bookData.releaseYear})</span>
                    <span> by {bookData.author}</span>
                  </P>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <P>
          <CategoryTitle>movies</CategoryTitle>
        </P>
        {movies.movies.map((movie) => {
          return (
            <div key={movie.month} className="my1">
              <P>
                <CategoryTitle>{movie.month}</CategoryTitle>
              </P>

              {movie.data.map((movieData) => {
                return (
                  <P key={movieData.title}>
                    <span>{movieData.title}</span>&nbsp;
                    <span>({movieData.releaseYear})</span>
                  </P>
                );
              })}
            </div>
          );
        })}
      </div>

      <div>
        <P>
          <CategoryTitle>tv shows</CategoryTitle>
        </P>
        {tvShows.tvShows.map((show) => {
          return (
            <div key={show.month} className="my1">
              <P>
                <CategoryTitle>{show.month}</CategoryTitle>
              </P>

              {show.data.map((showData) => {
                return (
                  <P key={showData.title}>
                    <span>{showData.title}</span>&nbsp;
                    <span>({showData.releaseYear})</span>
                  </P>
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
