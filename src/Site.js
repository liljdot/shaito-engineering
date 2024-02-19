import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Site() {
  return (
   <>
    < Navbar />
    <Router>
        <Routes>
            < Route index element = {<Home/>} />
            < Route path='about' element = {<About/>} />
        </Routes>
    </Router>
   </>
  );
}

export default Site;