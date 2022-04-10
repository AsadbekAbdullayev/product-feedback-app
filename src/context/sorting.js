import React,{createContext,useState} from 'react'

export const SortingContext = createContext();

export const SortingContextProvider = ({children}) => {

const [sorting, setSorting] = useState('leastL')
    
  return (
    <SortingContext.Provider value={[sorting, setSorting]}>
        {children}
    </SortingContext.Provider>
  )
}
