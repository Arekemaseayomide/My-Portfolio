import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import './App.css';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
        <Navbar/>
       <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/projects' element={<Projects/>}/>
       </Routes>
    </>
  );
}


export default App;
