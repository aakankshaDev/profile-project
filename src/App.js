import {BrowserRouter, Routes, Navigate} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
