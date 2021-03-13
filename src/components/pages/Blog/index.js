import styled from 'styled-components'
import React from 'react'
import data from './q1-2021.json'

const CategoryTitle = styled.strong`
  font-weight: 900;
`

// const MonthTitle = styled(CategoryTitle)

const Blog = () => {
  const movies = data[1]

  return (
    <section className='blog'>
      <h1 className='mb_5 text-center'>music movies, books & tv shows</h1>
      <h2 className='text-center'>january - march 2021</h2>

      <div>
        <CategoryTitle>movies</CategoryTitle>
        {movies.movies.map((movie, key) => {
          return (
            <div key={key} className='my1'>
              <p>
                <CategoryTitle>{movie.month}</CategoryTitle>
              </p>

              {movie.data.map((data, key) => {
                return (
                  <p key={key}>
                    <span>{data.title}</span>&nbsp;
                    <span>({data.releaseYear})</span>
                  </p>
                )
              })}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Blog
