
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import '@fontsource/roboto/400.css';
import Home from './pages/home';
import Ocorrencia from './pages/ocorrencia';
import Localização from './pages/localização';
import Protocolo from './pages/protocolo';
import Contato from './pages/contato';
import Sobre from './pages/sobre';
import Inicio from './pages/inicio';

function App() {
  return (
  //  <Home/>
    // <Ocorrencia/>
    // <Localização/>
    // <Protocolo/>
    // <Contato/>
    // <Sobre/>
    // <Inicio/>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/ocorrencia" element={<Ocorrencia/>} />
            <Route path="/localizacao" element={<Localização/>} />
            <Route path="/protocolo" element={<Protocolo/>} />
            <Route path="/contato" element={<Contato/>} />
            <Route path="/sobre" element={<Sobre/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
