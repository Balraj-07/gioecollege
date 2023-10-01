import Header from './Components/Header';
import Navbar from './Components/navbar';
import Home from './Components/Home';
import Alerts from './Components/Alerts';


import './App.css';

function App() {
  const newsItems = [
    'Breaking News: React app created successfully!',
    'Acme Corp. announces record profits',
    'New product launch event scheduled for next week',
    'Weather update: Sunny skies expected for the weekend',
    'Local sports team wins championship',
  ]

  return (
    <div className="background-main">
      <div className="background shadow-lg mb-5 bg-white rounded  ">
        <Header />
        <Navbar/>
        <Home/>
        <Alerts newsItems={newsItems}/>
      </div>
    </div>
  );
}

export default App;
