import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Profile from './components/Profile';
import Navbar2 from './components/Navbar2';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Recipes from './components/Recipes';
import Bookmarksfail from './components/Bookmarksfail';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Home/>}/>
      <Route path='/1'element={<Profile/>}/>
      <Route path='/2'element={<Recipes/>}/>
      <Route path='/3'element={<Bookmarksfail/>}/>

    </Routes>
    
    </BrowserRouter>

  );
}

export default App;
