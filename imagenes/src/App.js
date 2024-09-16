import logo from './logo.svg';
import './App.css';
import img from'./assets/img.jpg'

function App() {
  const bag = {
    display: 'flex',
    flexDirection: 'column'
  }
  const url = 'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-the-small-kid-looks-sad-while-sitting-on-the-ground-image_2681004.jpg'
  return (
    <div className="App">
      <h1>Mi nombre es Nicolas Lis Cruz</h1>
      <img height = {200} src = {img} alt = 'Imagen de nicolas con el gato'/>
      <img height = {200} src = {require('./assets/img.jpg')} />
      <img height = {200} src = {url} />
    </div>
  );
}

export default App;
