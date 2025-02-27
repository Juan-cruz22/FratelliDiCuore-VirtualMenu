import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './components/DetailPizza/detail';
import Carrito from './components/Carrito/carrito';
import Home from './components/Home.jsx/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:name" element={<Detail />} /> {/* Aquí cambiamos /Detail por /Detail/:name */}
        <Route path="/Carrito" element={<Carrito />} />
      </Routes>
    </Router>
  );
}

export default App;