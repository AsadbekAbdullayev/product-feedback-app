import React,{createContext,useState} from 'react'
import {FeedbackData} from '../mock/feedbackData'

export const FeedbackContext = createContext();

export const FeedbackContextProvider = ({children}) => {

const [feedback, setFeedback] = useState(FeedbackData)
    
  return (
    <FeedbackContext.Provider value={[feedback, setFeedback]}>
        {children}
    </FeedbackContext.Provider>
  )
}
