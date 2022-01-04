import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home page/home/Home';
import Services from './pages/services/Services';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='service' element={<Services />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
