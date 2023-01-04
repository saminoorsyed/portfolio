// import dependencies
import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";

// import style
import './App.css';
// import pages
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
// import components
import Navigation from './components/Navigation';
import Footer from './components/Footer';


export default function App() {
  return (
    <div className='application'>
        <Navigation/>
        <main>
            <Routes>
              <Route path = "/" element = {<HomePage/>}/>
              <Route path = "/blog" element = {<BlogPage/>}/>
              <Route path = "/contact" element = {<ContactPage/>}/>
              <Route path = "/resume" element = {<ResumePage/>}/>
            </Routes>
        </main>
        <Footer/>
    </div>
  );
}