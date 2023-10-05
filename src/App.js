import {Route,Routes} from "react-router-dom";
import Header from './Components/Header';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import AboutCollege from './Components/AboutCollege'
import Contactus from './Components/Contactus'

import './App.css';

function App() {

  return (
    <div className="background-main">
      <div className="background shadow-lg mb-5 bg-white rounded  ">
        <Header />
        <Navbar/>
        <Routes>
        <Route path="/" exact Component={Home}/>
        <Route path="/about" Component={AboutCollege}/>
        <Route path="/contactus" Component={Contactus}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
