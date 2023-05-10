import React, { useEffect, useState } from 'react'
import './pagNavBar.scss'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

export function PageNavBar({pageNo,setPageNo}) {  
  const a=[-1,0,1];  
  return (
    <div id='page-navbar'>
        <ArrowBack  onClick={()=> setPageNo(pageNo>1 ? pageNo-1:1)}/>
        <span className={pageNo === 1 ? "active" : ""} onClick={()=> setPageNo(1)}>1</span>
        {pageNo <=3 && 
            <span className={pageNo === 2 ? "active" : ""} onClick={()=> setPageNo(2)}key={101}>2</span>
        }
        {pageNo <=3 && 
            <span className={pageNo === 3 ? "active" : ""} onClick={()=> setPageNo(3)}key={102}>3</span>
        }
        {pageNo >3 && <span>. . .</span>}        
        {pageNo <=3 && 
            <span className={pageNo === 4 ? "active" : ""} onClick={()=> setPageNo(4)}key={103}>4</span>
        }
        {
            pageNo >3 && 
            a.map((key,i)=>{
                return <span className={pageNo === pageNo+key ? "active" : ""} onClick={()=> setPageNo(pageNo+key)} key={i}>{pageNo+key}</span>                
            })                
        }
        {pageNo <8 && <span>. . .</span>}
        {pageNo <9 && <span className={pageNo === 10 ? "active" : ""} onClick={()=> setPageNo(10)}>10</span>}
        {pageNo >7 && <span>. . .</span>}
        <ArrowForward onClick={()=> setPageNo(pageNo+1)}/>
    </div>
  )
}