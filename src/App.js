import './App.css';
import React from 'react';
import Nav from "./components/nav";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import home from './pages/home';
import AboutUs from './pages/about-us';
import Rooms from './pages/rooms';
import Book from './pages/book';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' exact Component={home}/>
          <Route path='/About-Us' exact Component={AboutUs}/>
          <Route path='/Rooms' exact Component={Rooms}/>
          <Route path='/Book' exact Component={Book}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
