import React from 'react'
import './artistGrid.css'
import { useNavigate } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'


const ArtistGrid = ({ artist }) => {
    const navigate = useNavigate();

    return (
        <div className='gridContainer' onClick={() => navigate('/albumsearch', { state: { id: artist?.id, name: artist?.name } })}>
            <div className='imgCaontainer'>
                <img className='gridImage' src={artist?.images[0]?.url} alt='' />
            </div>
            <div className='infooContainer'>
                <div className='titleContainer'>
                    <label className='title'>{artist?.name}</label>
                </div>
                <div className='release-popularityContainer'>
                    <label>{artist?.followers?.total + '   followers'}</label>
                </div>
            </div>
            <div className='rating'>
                <Rating ratingValue={artist?.popularity} allowHover={false} />
            </div>
        </div>
    )
}

export default ArtistGrid