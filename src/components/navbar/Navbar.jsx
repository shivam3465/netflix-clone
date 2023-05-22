import React, {  useState } from 'react'
import './navbar.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { Person, Search ,Menu } from '@mui/icons-material';
// import { Menu } from '@mui/material';

const Options=({setShowDetails,isScrolled})=>{
  return (
    <div className='options' onMouseLeave={()=> setShowDetails(false)} onBlur={()=> setShowDetails(false)} style={{backgroundColor: isScrolled && "black",transition:"all 0.7s ease-in-out"}}>
      <Link to={'/profile'} onClick={()=>setShowDetails(false)}>Profile</Link>
      <Link to={'/watchlist'} onClick={()=>setShowDetails(false)}>Watchlist</Link>
      <Link to={'/login'} onClick={()=>setShowDetails(false)}>Login</Link>
      <Link to={'/help'} onClick={()=>setShowDetails(false)}>Help</Link>
    </div>
  );
}
const MainNavBar=({name,isScrolled,setHamActive})=>{    
  return (
    <div className={name} style={{backgroundColor: isScrolled && name==="mobile-view-navbar" && "black",transition:"background-color 0.7s ease-in-out"}}>
      <Link to={"/"} onClick={()=>setHamActive(false)}>Home</Link>
      <Link to={"/tv-series"} onClick={()=>setHamActive(false)}>TV Series</Link>
      <Link to={"/movies"} onClick={()=>setHamActive(false)}>Movies</Link>
      <Link to={"/my-list"} onClick={()=>setHamActive(false)}>My List</Link>
    </div>
  )
}

export default function Navbar() {
  const [searchActive,setSearchActive] =useState(false);
  const [showDetails,setShowDetails] = useState(false);
  const [isScrolled,setIsScrolled] = useState(false);
  const [hamActive,setHamActive] = useState(false);
  // const menu=useRef(null);
  // const mobileMenu=useRef(null);
  
  window.onscroll=()=>{    
    setIsScrolled(window.pageYOffset!==0? true: false)
  }

  const toggleSearch = ()=>{  
    setShowDetails(false); 
    setSearchActive(!searchActive);
  }
  const changeView=()=>{
    setHamActive(!hamActive);
  }

  // const checkClick = (e)=>{
  //   if(menu.current.contains(e.target)) setHamActive(true)
  //   else console.log("first");
  // }

  return (
    <div id='navbar' style={{backgroundColor: isScrolled && "black"}}>

      <div id="left">
        <div id="logo" >          
          <Menu onClick={changeView} />
          <Link to={"/"}><img src={logo} alt="" /></Link>
        </div>        
        <MainNavBar name={hamActive ?"mobile-view-navbar":"main"} isScrolled={isScrolled}  setHamActive={ setHamActive}/>
      </div>

      <div id="right">
        {searchActive && <input type="text" placeholder='Search here ...' onBlur={toggleSearch}/>}        
        <Search className='icon' onClick={()=> setSearchActive(!searchActive)}/>   

          {(!searchActive && !hamActive) && 
            <div>
              <Person className='icon' id='person' onMouseEnter={()=> setShowDetails(true)} onClick={()=> setShowDetails(!showDetails)} /> 
              {showDetails &&  <Options setShowDetails={setShowDetails} isScrolled={isScrolled}/>}
            </div>
          }        
      </div>
    </div>
  )
}
