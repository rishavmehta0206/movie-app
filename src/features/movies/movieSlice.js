import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APIKey } from '../../common/Apis/MovieApiKey'
import { movieApi } from '../../common/Apis/movieApi'
import axios from "axios";
const initialState = {
    loading: false,
    movies: {},
    shows: {},
    singleData: {},
}

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
    const search = 'harry potter';
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`)
        .catch(err => console.log(err));
    console.log(response.data['Search']);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async () => {
    const search = 'friends';
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`)
        .catch(err => console.log(err));
    console.log(response.data);
    return response.data;
});

export const fetchSingleData = createAsyncThunk('movies/fetchSingleData', async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        .catch(err => console.log(err));
    console.log(response.data);
    return response.data;
})

export const fetchUsingSearch = createAsyncThunk('movies/fetchUsingSearch', async (search) => {
    if(search === '') {
        search = 'harry potter';
    }
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${search}&type=movie`)
        .catch(err => console.log(err));
    return response.data;
 });

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            console.log(action.payload);
            state.movies = action.payload;
        },
        removeSelectedMovies: (state, action) => {
            state.movies = {};
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state, action) => {
            state.loading = true;
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, action) => {
            state.loading = false;
            state.movies = action.payload;
        },
        [fetchAsyncMovies.rejected]: (state, action) => {
            console.log("rejected");
        },
        [fetchAsyncShows.pending]: (state, action) => {
            state.loading = true;
            console.log("pending shows");
        },
        [fetchAsyncShows.fulfilled]: (state, action) => {
            console.log("fulfilled shows");
            state.shows = action.payload;
        },
        [fetchAsyncShows.rejected]: (state, action) => { },
        [fetchSingleData.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.singleData = action.payload;
        },
        [fetchUsingSearch.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.movies = action.payload;
            state.shows = action.payload;
        }
    }

});


export default movieSlice.reducer;
export const { addMovies, removeSelectedMovies } = movieSlice.actions;