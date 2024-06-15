import './App.css';
import React, { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home_page';
import SignupForm from './pages/signup_page';
import SigninForm from './pages/signin_page';
import Add from './pages/add_page';
import Search from './pages/search_page';

function App() {
  return (
    <BrowserRouter> 
      <Routes> 
        <Route index element={<Home />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />
      </Routes> 
    </BrowserRouter>
  );
}

export default App;
