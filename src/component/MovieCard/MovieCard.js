import React from 'react'
import './MovieCard.scss'
import { useNavigate } from 'react-router-dom'
const MovieCard = ({ Poster, Title, Type, Year, imdbID }) => {
  const navigate = useNavigate()
  return (
    <div onClick={() => navigate(`/movie/${imdbID}`)} className='card-item'>
      <div className='card-inner'>
        <div className='card-top'>
          <img src={Poster} alt="movie poster" />
        </div>
        <div className='card-bottom'>
          <div className='card-info'>
            <h4>{Title}</h4>
            <p>{Year}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard