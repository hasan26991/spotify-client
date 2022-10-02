import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import Spotify_logo from '../../images/Spotify_logo.webp'


const Login = () => {
    const CLIENT_ID = 'd8a70d53baa54f10a02fad875518cbdb'
    const REDIRECT_URI = 'http://localhost:3000/'
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize'
    const RESPONSR_TYPE = 'token'
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token")
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith('access_token')).split('=')[1];
            window.localStorage.setItem('token', token);
        }
        setToken(token)
    }, [])

    useEffect(() => {
        token && navigate('/artistsearch')
    }, [token])

    return (
        <div className='loginContainer'>
            <a className='link' href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSR_TYPE}`}>
                <button type='button' className='login' >
                    Login
                </button>
                <img className='spotifyLogo' src={Spotify_logo} alt='' />
            </a>
        </div>

    )
}

export default Login