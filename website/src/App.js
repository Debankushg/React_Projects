// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Navbar from './Navbar';
import {Routes,Route} from 'react-router-dom';
import Footer from './Footer';








function App() {
  return (
    <>
      <Navbar />,
      
      <Routes>
          <Route exact path ="/" element ={<Home/>} />,
          <Route exact path ="/about" element ={<About/>} />,
          <Route exact path ="/service" element ={<Services/>} />,
          <Route exact path ="/contact" element ={<Contact/>} />,
        
      </Routes>,
      <Footer />
          
    </>
  );
}

export default App;
