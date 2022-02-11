
import './App.css';
// import Navbar from './component/Navbar';
import{ Routes ,Route} from 'react-router-dom';
import {Home, Users , Clients} from './pages/Home';
import Products from './pages/products';
// import Reports from './pages/Reports';
import Sbar from './component/Sbar';
import { Reports,ReportsOne, ReportsTwo, ReportsThree } from './pages/Report';
import Team from './pages/Team'
import Bargraph from './component/Bargraph';



function App() {
  return (
    <>
    {/* <Navbar /> */}
    <Sbar/>
    {/* <Bargraph /> */}
    <Routes>
    <Route exact path='/' element={<Home/>} />,
    <Route exact path='/home/users' element={<Users/>} />,
    <Route exact path='/home/client' element={<Clients/>} />,
    <Route  exact path ="/products" element ={<Products/>} />,
    <Route  exact path ="/reports" element ={<Reports/>} />
    <Route  exact path ="/reports/report1"  element={<ReportsOne/>} />
    <Route exact path='/reports/report2' element={<ReportsTwo />} />
    <Route exact path='/reports/report3' element = {<ReportsThree />} />
    <Route exact path='/team' element={<Team/>} />
   </Routes>
    </>
  );
}

export default App;
