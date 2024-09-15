import logo from './logo.svg';
import './App.css';
import Contact from './Components/Contact';
import Nicolas from './Components/Nicolas';
import { Routes, Route , Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        <Link to="/contact" className='nav-item'>Contact</Link>
        <Link to="/nicolas" className='nav-item'>About me</Link>
      </nav>
      <Routes>
        <Route path='/contact' element = {<Contact/>}/>
        <Route path='/nicolas' element = {<Nicolas/>}/>
      </Routes>

    </div>
  );
}

export default App;
