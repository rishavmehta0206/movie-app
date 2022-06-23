import React, { useEffect } from 'react'
import "./Footer.scss"
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllMoviesAvail } from '../../features/movies/movieSlice'
const Footer = () => {
  const { movies } = useSelector(state => state.movies);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAllMoviesAvail());
  // }, [])
  return (
    <div className='footer'>
      <div>Movie App</div>
      <div>is mayonnaise an instrument?</div>
    </div>
  )
}

export default Footer