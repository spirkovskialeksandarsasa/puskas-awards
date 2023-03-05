
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import HomeSection from './components/HomeSection';
import Nominees from './components/pages/Nominees';

function App() {
  return (
    <>
    <Router>
     <Routes>
       <Route path='/' element ={<Home/>} />
       <Route path='/nominees' element={<Nominees/>} />
     </Routes>
     </Router>
      </>
  );
}

export default App;
