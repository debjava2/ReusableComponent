//import React from 'react'
import { createContext, useEffect, useState } from 'react'

const NavigationContext=createContext();

function NavigationProvider({children}) {
    const[currentPath,setCurrentPath]=useState(window.location.pathname);
    useEffect(()=>{
        const handeler=()=>{
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate',handeler);
        return()=>{
            window.removeEventListener('popstate',handeler);
        }
    },[])

    const navigate=(to)=>{
        window.history.pushState({},'',to)
        setCurrentPath(to);
    }

  return (
    <NavigationContext.Provider value={{currentPath,navigate}}>
      {children}
    </NavigationContext.Provider>
  )
}
export { NavigationProvider }
export default NavigationContext