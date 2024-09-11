import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Heading from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <div>
      <Heading/>
      <div>
        <Main contenido = "Tengo 21 anos" />
        <Sidebar   contenido = "soy ingeniero de sistemas"/>
      </div>
      <Nav first = 'Nicolas'/>
    </div>
  )
}

export default App;
