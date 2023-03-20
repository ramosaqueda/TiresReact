 
import Header  from './components/AppBar/Header'
import Finder from './components/Finder/Finder'
import HomePage from './pages/HomePage/HomePage'
import './App.css'
 

function App() { 
  return (
    <div className="App">
     <Header />
     <HomePage/>
     <Finder />
    </div>
  )
}

export default App
