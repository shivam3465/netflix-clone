import React, { useEffect, useState } from 'react'
import './Home.scss';
import homeimage from '../../assets/poster.webp'
import Row from '../Row/Row';
import Footer from '../footer/Footer';
import axios from 'axios';
import Spinner from '../spinner/Spinner';
// import Link from 'react-router-dom'



const Banner=({idNo})=>{
    return (      
        <img src={homeimage} alt=".." id='home-image'/>      
    );
}

export default function Home() {
  const tag=['popular','top_rated','now_playing','upcoming']
  const [a,setA] =useState([]) 
  const [spinning,setSpinning] =useState(true);
  window.scrollTo(0, 0)

  useEffect(()=>{
    const fetcher=async ()=>{
      const obj1= await axios.get(`https://api.themoviedb.org/3/movie/${tag[0]}?api_key=0e60dc2cb3e238675effce08a8cdd770&language=en-US`)
      const obj2= await axios.get(`https://api.themoviedb.org/3/movie/${tag[1]}?api_key=0e60dc2cb3e238675effce08a8cdd770&language=en-US`)
      const obj3= await axios.get(`https://api.themoviedb.org/3/movie/${tag[2]}?api_key=0e60dc2cb3e238675effce08a8cdd770&language=en-US`)
      const obj4= await axios.get(`https://api.themoviedb.org/3/movie/${tag[3]}?api_key=0e60dc2cb3e238675effce08a8cdd770&language=en-US`)

      setA((arr)=>{
         const tem=[...arr,obj1.data.results,obj2.data.results,obj3.data.results,obj4.data.results]
        //  console.log(tem)
         return tem
      })
      setSpinning(()=>  false);
    }
    fetcher();
  },[])
    
  return (
    <div id='container'> 
        {spinning ? <Spinner/>: <Banner/> } 

        {spinning ? <Spinner/>:                     
          <section>
             <Row tag={"popular"} title={"Popular"} key={1} arr={a[0]}/>       
             <Row tag={"top_rated"} title={"Top Rated"} key={2} arr={a[1]}/>
             <Row tag={"now_playing"} title={"Now Playing"} key={3} arr={a[2]}/>
             <Row tag={"upcoming"} title={"Upcoming"} key={4} arr={a[3]}/>
          </section> 
        }
        <Footer/>       
    </div>
  )
}
