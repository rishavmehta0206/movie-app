import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MovieListing from '../MovieListing/MovieListing'
import "./Home.scss"
import { useDispatch, useSelector } from 'react-redux'
import { APIKey } from '../../common/Apis/MovieApiKey'
import { movieApi } from '../../common/Apis/movieApi'
import { addMovies, fetchAsyncMovies, fetchAsyncShows, fetchUsingSearch } from '../../features/movies/movieSlice'
const baseURL = "http://www.omdbapi.com/?i=tt3896198?apikey=a7a6dfcb";


const Home = () => {
  const { movies } = useSelector(state => state.movies)
  const dispatch = useDispatch()
  const [search, setSearch] = useState("")
  const fetchMovies = async () => {
    // const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`)
    //   .catch(err => console.log(err));
    // dispatch(addMovies(response.data))
  }

  const searchByClick = () => {
    setSearch("");
    dispatch(fetchUsingSearch(search))
  }

  // useEffect(() => {
  //   // setTimeout(() => {
  //   //   fetchMovies();
  //   // }, 2000)
  //   dispatch(fetchAsyncMovies());
  //   dispatch(fetchAsyncShows());
  // }, [])

  useEffect(() => {
  }, [searchByClick])

  return (
    <div>
      <div className='searchBar'>
        <input type="text" placeholder='search movies' value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchByClick}>search</button>
      </div>
    </div>
  )
}

export default Home