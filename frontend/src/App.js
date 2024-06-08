import './App.css';
import React, { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home_page';

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route index element={<Home />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
