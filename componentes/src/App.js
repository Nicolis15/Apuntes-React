import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Heading from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import img from './img.jpg'

function Logo(props){
  const style = {width : "500px"}
  const userpic =<img src={img} style = {style}/>
  return userpic;
}

function App() {
  return (
    <div>
      <Heading/>
      <div>
        <Main contenido = "Tengo 21 anos" />
        <Sidebar   contenido = "soy ingeniero de sistemas"/>
        <Logo/>
      </div>
      <Nav first = 'Nicolas'/>
    </div>
  )
}

export default App;
