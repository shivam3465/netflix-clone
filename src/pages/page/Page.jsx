import React from 'react'
import './page.scss'
import { useParams } from 'react-router-dom'
import {PageNavBar} from '../PageNavBar/PageNavBar.jsx';
import PageContents from '../PageContents/PageContents.jsx';
import Footer from '../../components/footer/Footer';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Spinner from '../../components/spinner/Spinner';

export default function Page() {
  const params=useParams();
  const category=params.category;
  const [pageNo,setPageNo]=useState(1);
  const [arr,setArr]=useState([]);
  const [spinning,setSpinning]=useState(true);
  window.scrollTo(0, 0)

  useEffect(()=>{
    setSpinning(()=> true);    
    const fetcher= async ()=>{
      const {data}=await axios.get(`https://api.themoviedb.org/3/movie/${category}?api_key=0e60dc2cb3e238675effce08a8cdd770&language=en-US&page=${pageNo}`);

        setSpinning(()=> false);
        setArr(()=> data.results);
    }
    fetcher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pageNo])

  return (
    <div id='page'>        
        <PageNavBar pageNo={pageNo} setPageNo={setPageNo}/>
        {spinning ? <Spinner/> : 
          <PageContents arr={arr} category={category}/> 
        }
        <Footer/>    
    </div>
  )
}
