import logo from './logo.svg';
import './App.css';
import WeatherApplication from './component/WeatherApplication';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './component/LandingPage';
import ContactsPage from './component/ContactsPage';
import AboutPage from './component/AboutPage';

function App() {
  return (
    // <div className="App">
    //   <WeatherApplication/>
    // </div>
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/weatherApplication" element={< WeatherApplication/>} />
        <Route path="/contacts" element={< ContactsPage/>} />
        <Route path="/about" element={< AboutPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
