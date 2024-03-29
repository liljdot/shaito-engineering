import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'))
const About = lazy(() => import('./About'))
const Services = lazy(() => import('./Services'))
const Contact = lazy(() => import('./Contact'))
const Gallery = lazy(() => import('./Gallery'))

function Site() {
  const [pathName, setPathName] = useState(window.location.pathname);
  return (
    <>
      < Navbar pathName={pathName} />
      <Suspense fallback={<h1>Shaito</h1>}>
        <Router>
          <Routes>
            < Route index element={<Home />} />
            < Route path='index.html' element={<Home />} />
            < Route path='about' element={<About />} />
            < Route path='services' element={<Services />} />
            < Route path='contact' element={<Contact />} />
            < Route path='gallery' element={<Gallery />} />
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default Site;