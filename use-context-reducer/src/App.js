import logo from './logo.svg';
import P from 'prop-types'
import './App.css';
import { createContext, useContext, useReducer, useRef } from 'react';

//actions.js
export const actions={
  CHANGE_TITLE:'CHANGE_TITLE'
}

/* data.js */

const globalState={
  title:'The Lord of the rings',
  body:'Eu quero o aneeeeeel, meu precioso (voz do gollum de fundo)',
  id:1
}

// reducer.js
export const reducer=(state, action)=>{
  console.log(action)
  switch(action.type){
    case actions.CHANGE_TITLE:{
      console.log('mudar título')
      return {...state, title:action.payload}
    }
  }
  return {...state}
}
export const Context = createContext()
export const AppContext =({children})=>{
  const [state, dispatch] = useReducer(reducer, globalState)
  const changeTitle = (payload)=>{
    dispatch({type:actions.CHANGE_TITLE, payload})
  }
  return(
    <Context.Provider value={{state, changeTitle}}>
      {children}
    </Context.Provider>
  )
}
AppContext.propTypes={
  children:P.node
}

// h1
export const H1 = () =>{
  const context = useContext(Context)
  const inputRef = useRef()
  return (
    <>
    <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
    <input type="text" ref={inputRef}/>
    </>
  )
}

// App.jsx
function App() {
  return (
    <div className="App">
      <AppContext>
        <div>
          <H1></H1>
        </div>
      </AppContext>
    </div>
  );
}

export default App;
