import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function Site() {
  const [pathName, setPathName] = useState(window.location.pathname);
  return (
   <>
    < Navbar pathName = {pathName}/>
    <Router>
        <Routes>
            < Route index element = {<Home/>} />
            < Route path='index.html' element = {<Home/>} />
            < Route path='about' element = {<About/>} />
        </Routes>
    </Router>
   </>
  );
}

export default Site;