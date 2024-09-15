import logo from './logo.svg';
import './App.css';
import {useReducer} from 'react'


const reducer = (state, action) =>{
  if (action.type === 'ride') return {money : state.money + 10};
  if (action.type === 'fuel') return {money : state.money - 50};
  return new Error();
}

function App() {
  const initialState = 100
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={()=> dispatch({type : 'ride'})}>Nuevo cliente</button>
        <button onClick={()=> dispatch({type : 'fuel'})}>reabastecer tanque</button>
      </div>
    </div>
  );
}

export default App;
