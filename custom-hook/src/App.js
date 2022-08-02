import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';

const useMyHook = (cb, delay=100) =>{
  const savedCb = useRef()
  useEffect(()=>{
    savedCb.current = cb
  }, [cb])

  useEffect(()=>{
    const interval = setInterval(()=>{
       savedCb.current()
    }, delay)
    return ()=> clearInterval(interval)
  }, [delay])
}

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(100)
  const [incrementor, setIncrementor] = useState(100)
  useMyHook(() => setCounter((c)=>c+1), delay)
  return (
    <div className="App">
      <h2>Contador = {counter}</h2>
      <p>Delay: {delay}</p>
      <button onClick={()=>setDelay((d)=>d+incrementor)}>+ {incrementor}</button>
      <button onClick={()=>setDelay((d)=>d-incrementor)}>- {incrementor}</button> <br></br>
      <input type="number" value={incrementor} onChange={(e)=>setIncrementor(Number(e.target.value))}></input>
    </div>
  );
}

export default App;
