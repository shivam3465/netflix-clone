import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './app.scss'
import Home from './pages/home/Home';
import Login from './pages/login/Login.jsx';
import Movie from './components/movie/Movie';
import Register from './pages/register/Register';
import Page from './pages/page/Page';
import ComingSoon from './components/comingSoon/ComingSoon';
import Navbar from './components/navbar/Navbar'
import TvSeries from './pages/tvShows/TvSeries';
import Movies from './pages/movies/Movies';
import TvShow from './components/TvShow/TvShow'

export const baseUrl = 'https://api.themoviedb.org/3';
export const apiKey='0e60dc2cb3e238675effce08a8cdd770'
export const imagebaseUrl= `https://image.tmdb.org/t/p/original/`
export const imageLowQualityUrl= `https://image.tmdb.org/t/p/w500/`

function App() { 
    
  return (    
    <div className="App">      
       <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>    
            <Route exact path="/login" element={<Login/>}/>    
            <Route exact path="/register" element={<Register/>}/>  
            <Route exact path="/tv-series" element={<TvSeries/>}/>
            <Route exact path="/movies" element={<Movies/>}/>            
            <Route exact path="/page/:category" element={<Page/>}/>  
            <Route exact path="/details/:id" element={<Movie/>}/>
            <Route exact path="/tv/:id" element={<TvShow/>}/>            
            <Route path="/:other" element={<ComingSoon/>}/>
          </Routes>          
       </Router>      
    </div>    
  );
}

export default App;
