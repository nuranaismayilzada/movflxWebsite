import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Detail from './pages/detail/Detail';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Reservation from './pages/rezervation/Reservation';


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path="/movies/:moviesId" element={<Detail />} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
