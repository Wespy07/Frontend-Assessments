import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Property from './components/Property';
import Wishlist from './components/Wishlist';
import Showmap from './components/Showmap';
import Login from './components/Login';
import Details from './components/Details'; 

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Property />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/map" element={<Showmap />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} /> 
      </Routes>
    </>
  );
}

export default App;
