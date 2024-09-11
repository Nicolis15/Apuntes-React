import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Heading from './components/Header';
import Main from './components/Main';


function App() {
  return (
    <div>
      <Heading/>
      <div>
        <Main/>
      </div>
      <Nav first = 'Nicolas'/>
    </div>
  )
}

export default App;
