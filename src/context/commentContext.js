import React,{createContext,useState} from 'react'
import {CommentData} from '../mock/commentData'

export const CommentContext = createContext();

export const CommentContextProvider = ({children}) => {

const [comment, setComment] = useState(CommentData)
    
  return (
    <CommentContext.Provider value={[comment, setComment]}>
        {children}
    </CommentContext.Provider>
  )
}
