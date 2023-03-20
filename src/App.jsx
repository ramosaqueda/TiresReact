 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header  from './components/AppBar/Header'
import Finder from './components/Finder/Finder'
import HomePage from './pages/HomePage/HomePage'
import TiendaContainer from './pages/Tiendas/TiendaContainer';
import About from './pages/About/About';
import './App.css'
 

function App() { 
  return (
    <div className="App">
       
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Finder />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/tiendas" element={<TiendaContainer />} />
        <Route path="/finder" element={<Finder />} />
      </Routes>
    </Router>
    </div>
  )
 
}

export default App
