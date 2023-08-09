import React from 'react'
import {Link,useParams} from 'react-router-dom'
import './movie.scss';
import netflix_icon from '../../assets/favicon-netflix.png'
import netflix_logo from '../../assets/logo.png'
import notFoundImage from '../../assets/not-found-image.jpg'
import Footer from '../footer/Footer';
import { PlayArrow} from '@mui/icons-material';
import Recommended from './recommended/Recommended';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from '../spinner/Spinner';
import { baseUrl ,apiKey,imagebaseUrl} from '../../App'; 

const TrailerCard=({id,imageLink,videoKey})=>{  
  return (
    <div className='trailer-card' >
      <Link to={videoKey ? `https://www.youtube.com/watch?v=${videoKey}`:`/details/${id}`} target='_blank'>
        <img src={`${imagebaseUrl}${imageLink}`} alt="" className='trailer-image'/>
        <span id='play-container'>
          <PlayArrow id="play-icon"/>                     
        </span> 
      </Link>
    </div>
  );
}

const NotAvailable=()=>{
  return (
      <div id='not-found'>
        <img src={notFoundImage} alt="" id='not-found-image'/>
        <div>No Trailers Available !!</div>        
      </div>
  );
}

export default function Movie() {
  const params=useParams();  
  const idNo=params.id;
  let imageUrl="";

  const [movie,setMovie]=useState({})
  const [arr,setArr]=useState([]);
  const [imageLink,setImageLink]=useState('');
  const [logoLink,setLogoLink]=useState('');
  const [loading,setLoading]=useState(true);
  const [trailer,setTrailer]=useState([]);
  window.scrollTo(0,0);

  useEffect(()=>{
      setLoading(()=> true);
      const fetcher= async ()=>{        
          const data1=await axios.get(`${baseUrl}/movie/${idNo}?api_key=${apiKey}`);            
          const data2=await axios.get(`${baseUrl}/movie/${idNo}/images?api_key=${apiKey}`);            
          const data3=await axios.get(`${baseUrl}/movie/${idNo}/videos?api_key=${apiKey}`);            
  
          // console.log(data3.data)  
            setTrailer(()=> data3.data.results);
            setMovie(()=> data1.data)      
            setImageLink(()=> data1.data.backdrop_path);
            
            setArr(()=> data2.data.backdrops)
                              
            let tem=data2.data.logos,englishLogoLink='';          
            if(tem.length){
              for(let i=0;i<tem?.length;i++){              
                if(tem[i].iso_639_1==='en'){                 
                  englishLogoLink=tem[i].file_path;                 
                  break;
                }
              }
              (englishLogoLink ? setLogoLink(()=> englishLogoLink) : setLogoLink(()=> tem[0].file_path))
            }          
                      
          setLoading(() => false);
        }        
      fetcher();
  },[idNo])

  return (
    
    <div id='details'>

      {loading ? <Spinner/> :   
      <img src={imageLink ? `${imagebaseUrl}${imageLink}`: notFoundImage} alt="" id='movie-poster' />}

      { loading ? <Spinner/>:

        <div id='top'>                      
          <div id="movie-detail">          
            <img src={logoLink.length ? `${imagebaseUrl}${logoLink}` :netflix_logo} alt="" id="movie-logo" />
            <div id="movie-title" className='middle'>{movie.original_title}</div>
            <div id="middle-details" className='middle'>
              {movie.release_date.slice(0,4)} &nbsp;| <span id='adult-checker'> U/A {movie.adult ? "18+":"16+"}</span> &nbsp; | {Math.floor(movie.runtime/60)}h {movie.runtime%60}m  |  {movie.genres[0].name}
            </div>
            <div id="movie-desc" className='middle'>{movie.overview} </div>
          </div>
        </div>

      }

      <div id="join">     
        <div className="left">
          <img src={netflix_icon} alt=""/>
          <p>Watch all you want.</p>
        </div> 
        <Link to={'/register'}>
          <button>JOIN NOW</button>
        </Link>          
      </div>

      <div id='rule'></div>

      <div id='trailer'>
        <div className='top'>
          <span>Videos</span> 
          <span className='title'>{movie?.original_title}</span>
        </div>

        <div id="trailer-row">  
          {loading ? <Spinner/>:                             
          <div id='card-container'>            
               {/* {console.log(trail)} */}
              {         
                trailer.map((item,i)=>{                               
                  imageUrl= (arr.length>=1 ?arr[(i+1)%arr.length].file_path:imageLink);
                  return (item.type==="Teaser" || item.type==="Trailer" ) && <TrailerCard arr={arr} imageLink={imageUrl} videoKey={item.key} key={i}/>
                })
              }                                             
              {trailer.length===0 && <NotAvailable/>}
          </div> 
          }         
        </div>

        <div className='bottom'><span>Trailer</span>: {movie?.original_title}</div>
      </div>

      <Recommended idNo={idNo} type={'movie'}/>

      <Footer/>
  
    </div>
    
  )
}
