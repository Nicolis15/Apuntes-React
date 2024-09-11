import logo from './logo.svg';
import './App.css';
import Heading from './components/head';
/*
function Heading(){
  return <h1>Nicolas Lis Cruz es el mejor</h1>
}*/

function App() {
  return (
    <div>
      <Heading name = 'Nicolas Lis Cruz es el mejor' color = 'purple'/>
      <Heading name = 'Si es el mejor del mundo' color = 'purple'/>
    </div>
  );
}
export default App;

