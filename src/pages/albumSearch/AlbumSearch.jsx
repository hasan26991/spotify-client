import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './albumSearch.css'
import AlbumGrid from '../../components/albumGrid/AlbumGrid'

const AlbumSearch = () => {
    const location = useLocation()
    const id = location?.state?.id
    const name = location?.state?.name
    const [albumList, setAlbumList] = useState([]);


    useEffect(() => {
        const handleSearch = async (e) => {
            let token = window.localStorage.getItem("token")
            try {
                const res = await axios.get(`https://api.spotify.com/v1/artists/${id}/albums`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                setAlbumList(res?.data?.items)
                console.log(res?.data?.items)
            } catch (error) {
                console.log(error)
            }
        }
        handleSearch()
    }, [id])


    return (
        <div className='albumContainer'>
            <div className='artistInfo'>
                <p className='artistName'>{name}</p>
                <p className='artistLabel'>Albums</p>
            </div>

            <div className='MovieListontainer'>
                {albumList.map((album, index) => (
                    <AlbumGrid key={index} album={album} />
                ))}
            </div>
        </div>
    )
}

export default AlbumSearch