import React,{createContext,useState,useEffect,useContext} from 'react'
import { SortingContext } from '../context/sorting'

export const FeedbackContext = createContext();

export const FeedbackContextProvider = ({children}) => {

  const [feedback, setFeedback] = useState([])

useEffect(()=>fetch('https://feedback-app-1.herokuapp.com/feedbacks')
.then((res)=>res.json()).then((res)=>setFeedback(res)).catch((err)=>console.log(err)),[])
    
  return (
    <FeedbackContext.Provider value={[feedback, setFeedback]}>
        {children}
    </FeedbackContext.Provider>
  )
}
