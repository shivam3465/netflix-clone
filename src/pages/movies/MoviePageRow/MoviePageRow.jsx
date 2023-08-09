import React, { useEffect, useState } from 'react'
import './moviePageRow.scss'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { apiKey, baseUrl, imageLowQualityUrl, imagebaseUrl } from '../../../App';

const MovieCard=({movie})=>{  
    return (
        <Link to={`/details/${movie.id}`}>
            <div className='card'>
        <img loading='lazy' src={`${imageLowQualityUrl}/${movie.backdrop_path}`} alt="" />
                <div>{movie.title}</div>
            </div>
        </Link>
    );
}

export default function MoviePageRow({genre,type}) {
    const [imgArray,setImgArray] =useState([]);
    useEffect(()=>{
        const fetcher= async ()=>{
            if(type==="movie"){
                const {data}=await axios.get(`${baseUrl}/genre/${genre.id}/movies?api_key=${apiKey}`);
                setImgArray(data.results);
            }
            else{
                const {data}=await axios.get(`${baseUrl}/discover/tv?api_key=${apiKey}&sort_by=popularity.desc&with_genres=${genre.id}`);
                setImgArray(data.results);
            }            
        }
        fetcher();
    },[])
  return (
    <div className='movies-page-row'>
        <h2>{genre.name}</h2>
        <div className="movie-row-container">
            {
                imgArray.map((item,i)=>{
                    return <MovieCard key={i} movie={item}/>;
                })
            }
        </div>
    </div>
  )
}
