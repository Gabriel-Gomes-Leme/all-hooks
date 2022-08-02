import { useContext } from "react"
import { GlobalContext } from "../../contexts/AppContext"
export const P=()=>{
    const theContext = useContext(GlobalContext)
    const {contextState:{body, counter}} =  theContext
    console.log(theContext)
    return (
      <p>
      {body} - {counter}
      </p>
    )
  }