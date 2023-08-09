import React, { useEffect, useState } from 'react'
import './tvShows.scss'
import Footer from '../../components/footer/Footer'
import axios from 'axios';
import { apiKey, baseUrl } from '../../App';
import Spinner from '../../components/spinner/Spinner';
import TVPageRow from './tvshowRowComponent/TVPageRow';


export default function TvSeries() {
  const [genres,setGenres]=useState([]);
  const [loading,setLoading]=useState(true);

  useEffect(()=>{
    setLoading(true);
    const fetcher= async ()=>{
      const {data}=await axios.get(`${baseUrl}/genre/tv/list?api_key=${apiKey}`)
      setGenres(()=> data.genres);       
      setLoading(false);    
    }
    fetcher();
  },[])

  return (
    <div className='tv-page-container'>
        <h1>TV Series</h1>
        <div className='desc'>These days, the small screen has some very big things to offer. From sitcoms to dramas to travel and talk shows, these are all the best programs on TV.</div>        
        {
          loading ? <Spinner/> :
          <div>
            {
              genres.map((item,i)=>{
                return <TVPageRow key={i} genre={item} type={"tv"}/>;
              })          
            }
          </div>
        }        
        <Footer/>
    </div>
  )
}
