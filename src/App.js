import './App.css';
import React from 'react';
import Nav from "./components/nav";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import home from './pages/home';

function App() {
  return (
    <>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/' exact Component={home}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
