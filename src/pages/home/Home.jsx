import React, { useEffect, useState } from 'react'
import './Home.scss';
import homeimage from '../../assets/poster.webp'
import Row from '../../components/Row/Row'
import Footer from '../../components/footer/Footer'
import Spinner from '../../components/spinner/Spinner'
import axios from 'axios';
import { apiKey, baseUrl } from '../../App';

// const Row=React.lazy(()=> import('../../components/Row.jsx'))

// import Link from 'react-router-dom'



const Banner=({idNo})=>{
    return (      
        <img loading='lazy' src={homeimage} alt=".." id='home-image'/>      
    );
}

export default function Home() {
  const tag=['popular','top_rated','now_playing','upcoming']
  const [a,setA] =useState([]) 
  const [spinning,setSpinning] =useState(true);
  window.scrollTo(0, 0)

  useEffect(()=>{
    const fetcher=async ()=>{
      const obj1= await axios.get(`${baseUrl}/movie/${tag[0]}?api_key=${apiKey}`)
      const obj2= await axios.get(`${baseUrl}/movie/${tag[1]}?api_key=${apiKey}`)
      const obj3= await axios.get(`${baseUrl}/movie/${tag[2]}?api_key=${apiKey}`)
      const obj4= await axios.get(`${baseUrl}/movie/${tag[3]}?api_key=${apiKey}`)

      setA((arr)=>{
         const tem=[...arr,obj1.data.results,obj2.data.results,obj3.data.results,obj4.data.results]
        //  console.log(tem)
         return tem
      })
      setSpinning(()=>  false);
    }
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
