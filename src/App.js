import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Canopy from './components/Canopy';
import Inspection from './components/Inspection';
import Rigging from './components/Rigging';

function App() {
  return (
    <BrowserRouter>    
        <Routes>
          <Route path="/" element={<Canopy />} />
          <Route path="/page2" element={<Inspection />} />
          <Route path="/page3" element={<Rigging />} />
          <Route ></Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
