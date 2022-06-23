import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MovieCard from '../MovieCard/MovieCard'
import { useNavigate } from 'react-router-dom'
import { fetchAsyncShows } from '../../features/movies/movieSlice'
const Shows = () => {
    const { shows } = useSelector(state => state.movies);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncShows());
    }, [])

    if (shows.Response === 'True') {
        return (
            <div className='movie-list'>
                <h2>Shows</h2>
                <div className='movie-container'>
                    {
                        shows.Search.map((show, index) => {
                            return (
                                <MovieCard key={index} {...show} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <div className='movies-error'>
                <h3>{shows.Error}</h3>
            </div>
        )
    }

}

export default Shows