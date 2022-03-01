import {BrowserRouter , Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import './App.css';
// import Homepage from "./pages/Homepage";
import Home from "./pages/Home";
import Homepage from "./pages/Homepage";



function App() {
  return (
    <BrowserRouter>
      <div className="app">
      <Header/>
      <Home/>
      {/* <Homepage /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
