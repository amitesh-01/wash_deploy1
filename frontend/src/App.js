import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Register from './components/register';
import Index from './components';
import Cart from './components/cart';
import Entry from './components/entry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [data, setData] = useState({});

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login setData={setData} data={data} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Index data={data} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;