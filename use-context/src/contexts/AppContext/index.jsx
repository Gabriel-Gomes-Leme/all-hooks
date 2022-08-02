import { createContext,React, useState } from "react"
import { globalState } from "./data"
export const GlobalContext = createContext()
export const AppContext = (props) =>{
    const [contextState, setState] = useState(globalState)
    return(
        <GlobalContext.Provider value={{contextState, setState}}>
            {props.children}
        </GlobalContext.Provider>
    )
}