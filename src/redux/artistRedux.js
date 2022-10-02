import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    artists: [],
    isFetching: false,
    error: false,
}

export const artistSlice = createSlice({
    name: 'artist',
    initialState,
    reducers: {
        getArtistStart: (state) => {
            state.isFetching = true;
        },
        getArtistSuccess: (state, action) => {
            state.isFetching = false;
            state.artists = action.payload;
        },
        getArtistFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
})


export const { getArtistStart, getArtistSuccess, getArtistFailure } = artistSlice.actions

export default artistSlice.reducer