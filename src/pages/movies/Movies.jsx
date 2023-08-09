import React, { useEffect, useState } from 'react'
import  './movies.scss'
import MoviePageRow from './MoviePageRow/MoviePageRow.jsx'
import Footer from '../../components/footer/Footer'
import axios from 'axios'
import { apiKey, baseUrl } from '../../App'
import Spinner from '../../components/spinner/Spinner'

export default function Movies() {
  const [genres,setGenres]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setLoading(true);
    const fetcher= async ()=>{
      const {data}=await axios.get(`${baseUrl}/genre/movie/list?api_key=${apiKey}`)
      setGenres(()=> data.genres);       
      setLoading(false);    
    }
    fetcher();
  },[])

  return (
    <div className='movies-page-container'>
        <h1>Movies</h1>
        <div className='desc'>Movies move us like nothing else can, whether they're scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.</div>
        {
          loading ? <Spinner/>: 
            <div>
            {              
              genres.map((item,i)=>{
                return <MoviePageRow key={i} genre={item} type={"movie"}/>
              })
            }
            </div>
        }
        <Footer/>
    </div>
  )
}
