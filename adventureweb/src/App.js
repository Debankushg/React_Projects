
import './App.css';
import Navbar from './components/Navbar';
import{ Routes ,Route} from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/signup';
import Services from './pages/services';
import Products from './pages/products';
import FormLogin from './pages/FormLogin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route exact path ="/" element ={<Home/>} />,
          <Route exact path ="/services" element ={<Services/>} />,
          <Route exact path ="/products" element ={<Products/>} />,
          <Route exact path ="/signup" element ={<Signup/>} />,
          <Route exact path ="/login" element ={<FormLogin/>} />,
      </Routes>
    </>
  );
}

export default App;
