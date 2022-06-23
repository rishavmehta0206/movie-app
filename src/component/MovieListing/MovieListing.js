import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"
const MovieListing = () => {
  const dispatch = useDispatch();

  const { movies, shows } = useSelector(state => state.movies)
  useEffect(() => {
    dispatch(fetchAsyncMovies());
  }, [])
  if (movies.Response === 'True') {
    return (
      <div className='movie-wrapper'>
        <div className='movie-list'>
          <h2 style={{textAlign:'center'}}>Movies</h2>
          <div className='movie-container'>{
            movies.Search.map((movie, index) => {
              return (
                <MovieCard key={index} {...movie} />
              )
            })
          }</div>
        </div>
      </div>

    )
  }
  else {
    return (
      <div className='movies-error'>
        <h3>{movies.Error}</h3>
      </div>

    )
  }


}

export default MovieListing