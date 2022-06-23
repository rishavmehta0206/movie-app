import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-regular-svg-icons'
import { useSelector, useDispatch } from 'react-redux'
import { fetchSingleData, removeSelectedMovies } from '../../features/movies/movieSlice'
import { useNavigate } from 'react-router-dom'
import "./MovieDetail.scss"
const MovieDetail = () => {
    const { singleData } = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchSingleData(id));
        return () => {
            dispatch(removeSelectedMovies());
        }
    }, [id])
    return (
        <div className='movie-section'>
            {Object.keys(singleData).length === 0 ?
                <div className='movie-detail-container'>Loading...</div> :
                <>
                    <div className='section-left'>
                        <div className='movie-title'>
                            {singleData.Title}
                        </div>
                        <div className='movie-rating'>
                            <span>IMDB Rating <i style={{ color: 'gold' }} className="fa fa-star"></i>: {singleData.imdbRating}</span>
                            <span>IMDB Votes <i style={{ color: 'gold' }} className="fa fa-thumbs-up"></i>: {singleData.imdbRating}</span>
                            <span>Runtime <i style={{ color: 'gold' }} className="fa fa-film"></i>: {singleData.Runtime}</span>
                            <span>Year <i style={{ color: 'gold' }} className="fa fa-calendar"></i>: {singleData.Year}</span>
                        </div>
                        <div className='movie-plot'>
                            {singleData.Plot}
                        </div>
                        <div className='movie-info'>
                            <span>Director</span>
                            <span>{singleData.Director}</span>
                        </div><div className='movie-info'>
                            <span>Stars</span>
                            <span>{singleData.Actors}</span>
                        </div><div className='movie-info'>
                            <span>Generes</span>
                            <span>{singleData.Genre}</span>
                        </div><div className='movie-info'>
                            <span>Languages</span>
                            <span>{singleData.Language}</span>
                        </div>
                        <div className='movie-info'>
                            <span>Award</span>
                            <span>{singleData.Award}</span>
                        </div>
                        <div className='back-btn'>
                            <a onClick={()=>navigate(`/`)}><i class="fa fa-solid fa-angles-left"></i>  back to movie list</a>
                        </div>
                    </div>
                    <div className='section-right'>
                        <img src={singleData.Poster} alt={singleData.Title} />
                    </div>
                </>}

        </div>
    )
}

export default MovieDetail