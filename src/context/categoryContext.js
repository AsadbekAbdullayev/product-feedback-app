import React,{createContext,useState} from 'react'
import {CategoryData} from '../mock/Categories'

export const Categorycontext = createContext();

export const CategorycontextProvider = ({children}) => {

const [category, setCategory] = useState(CategoryData)
    
  return (
    <Categorycontext.Provider value={[category, setCategory]}>
        {children}
    </Categorycontext.Provider>
  )
}
