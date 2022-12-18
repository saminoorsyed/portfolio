// import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';

// import pages
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
// import components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Router>
        <p>hello</p>
        {/* navigation and header should show up on every page */}
        <Header/>
        <Navigation/>
        <main>
          <Route path = "/" exact>
            <HomePage/>
          </Route>
          
          <Route path = "/blog">
            <BlogPage/>
          </Route>

          <Route path = "/contact">
            <ContactPage/>
          </Route>

          <Route path = "/resume">
            <ResumePage/>
          </Route>
        </main>
        <Footer/>
      </Router>
    </>
  );
}

export default App