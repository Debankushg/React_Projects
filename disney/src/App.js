import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import {BrowserRouter as Router ,Routes, Route,NavLink} from 'react-router-dom';
import Login from './components/Login';



function App() {
  return (
    < >
    <Router>
      <Header />
      <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path= "/detail" element = {<Detail />} />
      <Route exact path ="/" element ={<Home/>} />

      </Routes>
    </Router>

    </>
  );
}

export default App;
