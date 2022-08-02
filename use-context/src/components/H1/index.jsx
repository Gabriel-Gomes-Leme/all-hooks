import { useContext } from "react"
import { GlobalContext } from "../../contexts/AppContext"
export const H1=()=>{
    const theContext = useContext(GlobalContext)
    const {contextState:{title, counter}, contextState, setState} = theContext
    return (
      <>
      <h1 onClick={()=>setState((s)=>({...s, counter:s.counter+1}))}>
      {title}
      </h1>
      <p>Contador {counter}</p>
      </>
    )
  }