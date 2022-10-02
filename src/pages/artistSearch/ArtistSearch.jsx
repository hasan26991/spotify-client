import axios from 'axios'
import React from 'react'
import ArtistGrid from '../../components/artistGrid/ArtistGrid'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getArtistStart, getArtistSuccess, getArtistFailure } from '../../redux/artistRedux';
import './artistSearch.css'

const ArtistSearch = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const artistList = useSelector(state => state.artist.artists);

    const handleSearch = async (value) => {
        let token = window.localStorage.getItem("token")
        if (value === '') return;
        dispatch(getArtistStart);
        try {
            const res = await axios.get('https://api.spotify.com/v1/search', {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params: {
                    q: value,
                    type: 'artist'
                }
            })
            console.log(res?.data?.artists?.items)
            dispatch(getArtistSuccess(res?.data?.artists?.items));
        } catch (error) {
            if (error?.response?.status === 401) {   // if the token in expired delete the token and navigate to login page
                window.localStorage.removeItem('token');
                navigate('/');
            }
            dispatch(getArtistFailure);
        }
    };

    return (
        <div className='artistContainer'>
            <div className='searchContainer'>
                <input className='searchInput' type='text' placeholder='Search for an artist...' onChange={(e) => handleSearch(e.target.value)}></input>
            </div>
            <div className='artistListontainer'>
                {artistList.map((artist, index) => (
                    <ArtistGrid key={index} artist={artist} />
                ))}
            </div>
        </div>
    )
}

export default ArtistSearch