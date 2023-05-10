import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './app.scss'
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Page from './components/page/Page';
import Movie  from './components/movie/Movie';
import Login from './components/login/login';
import Register from './components/register/Register.jsx';
import ComingSoon from './components/ComingSoon.jsx';

function App() { 
    
  return (    
    <div className="App">      
       <Router>
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>    
            <Route exact path="/login" element={<Login/>}/>    
            <Route exact path="/register" element={<Register/>}/>    
            <Route path="/:other" element={<ComingSoon/>}/>
            <Route exact path="/page/:category" element={<Page/>}/>  
            <Route exact path="/details/:id" element={<Movie/>}/> 
          </Routes>          
       </Router>      
    </div>    
  );
}

export default App;
