import React from 'react'
import './albumGrid.css'

const AlbumGrid = ({ album }) => {

    return (
        <div className='albumGridContainer' key={album?.id}>
            <div className='imgCaontainer'>
                <img className='gridImage' src={album?.images[0]?.url} alt='' />
            </div>
            <div className='infooContainer'>
                <div className='titleContainer'>
                    <label className='titleName'>{album?.name}</label>
                </div>
                <div className='artistNames'>
                    {album?.artists.map(elem => {
                        return (<label className='artistNamesSeparator'>{elem?.name}</label>)
                    })}
                </div>
                <div className='releaseDate'>
                    <label>{album?.release_date}</label>
                </div>
                <div className='totalTracks'>
                    <label>{album?.total_tracks + ' tracks'}</label>
                </div>

            </div>
            <button className='previewButton' onClick={() => { window.open(album?.external_urls.spotify) }}>Preview on Spotify</button>

        </div>
    )
}

export default AlbumGrid