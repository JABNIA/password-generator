import React, { createContext, useContext } from "react"
import { GeneralContext } from "../App"

  
  
  export const MainContext = createContext<GeneralContext | undefined>(undefined)
 

  export function useDataContext() {
    const data = useContext(MainContext)
    
    if(data === undefined){
        throw new Error()
    }

    return data
  }