import logo from './logo.svg';
import './App.css';
import { useReducer } from 'react';

const globalState ={
  id:1,
  name:'Gabriel',
  age:23
}
const reducer = (state, action) =>{
  switch(action.type){
    case 'muda':
      console.log('Muda')
      return{...state, name:action.payload}
    case 'inverter':
      const {name} = state
      return{...state, name:name.split('').reverse().join('')}
  }
  return{...state}
}
function App() {
  const [state, dispatch] = useReducer(reducer, globalState)
  const {name, age} = state
  return (
    <div className="App">
      <h1>{name}</h1>
      <button onClick={()=>dispatch({type:'muda', payload:new Date().toLocaleString('pt-BR')})}>Muda</button>
      <button onClick={()=>dispatch({type:'inverter'})}>inverter</button>
    </div>
  );
}

export default App;
