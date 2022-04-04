import React,{createContext,useState} from 'react'

export const SetCategorycontext = createContext();

export const SetCategorycontextProvider = ({children}) => {

const [togglecategory, setToggleCategory] = useState('')
    
  return (
    <SetCategorycontext.Provider value={[togglecategory, setToggleCategory]}>
        {children}
    </SetCategorycontext.Provider>
  )
}
