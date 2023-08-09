import React, { useEffect, useState } from 'react'
import './recommended.scss'
import axios from 'axios'
import Spinner from '../../spinner/Spinner'
import { Link } from 'react-router-dom'

const Card=({imgLink,idNo,obj,type})=>{
    return (
        <Link to={`/${type==='movie'?'details':type}/${idNo}`}>
            <img src={`https://image.tmdb.org/t/p/w500${imgLink}`} alt="" className='card-image'/>
            <div id='card-title'>{obj.title}</div>
        </Link>
    )
}

export default function Recommended({idNo,type}) {    
    const [arr,setArr]=useState([])
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        const fetcher= async ()=>{
            const {data}=await axios.get(`https://api.themoviedb.org/3/${type}/${idNo}/recommendations?api_key=0e60dc2cb3e238675effce08a8cdd770`);            
            
            const newArr=[],a=data.results;
            for(let i=0;i<a.length ;i++){
                if(a[i].poster_path && a[i].backdrop_path){
                    newArr.push(data.results[i]);
                }
                if(newArr.length>=12) break;
            }            
            setArr(()=> newArr)
            setLoading(() => false);
        }
        fetcher();//eslint-disable-next-line
    },[])

  return (
    <div id='recommended'>

        <h2>More Like This</h2>

        {loading ? <Spinner/>:
            <div className="bottom-row">
                {
                    arr?.map((item,i)=>{                        
                        return <Card imgLink={item.poster_path} key={i} idNo={item.id} obj={item} type={type}/>
                    })
                }
            </div>
        }
    </div>
  )
}
