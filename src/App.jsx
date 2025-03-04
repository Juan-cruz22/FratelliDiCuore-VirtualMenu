import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './components/DetailPizza/detail';
import Carrito from './components/Carrito/carrito';
import Home from './components/Home.jsx/home';
import { CarritoProvider } from './context/carritoContext';
import Outro from './components/Outro/outro';

function App() {
  return (
    <CarritoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detail/:name" element={<Detail />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path='/Outro' element={<Outro/>} />
        </Routes>
      </Router>
    </CarritoProvider>
  );
}

export default App;