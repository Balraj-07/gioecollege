import Loginpage from './Components/Loginpage';
import Navbar from './Components/navbar';
import Home from './Components/Home';


import './App.css';

function App() {
  return (
    <div className="background-main">
      <div className="background shadow-lg mb-5 bg-white rounded  ">
        <Loginpage />
        <Navbar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
