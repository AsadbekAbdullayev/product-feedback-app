import React,{useContext} from 'react'
import {Container } from './style'
import FeedBackComponent from '../feedback'
import {FeedbackContext} from '../../context/feedbackContext'
import {SetCategorycontext} from '../../context/setCategory'

const Main = () => {
  const [feedData,setfeedData] = useContext(FeedbackContext)
  const [togglecategory, setToggleCategory] = useContext(SetCategorycontext)
  
  return (
    
    <Container>
{
togglecategory > 0 ?
  feedData.map(({feedback_id,feedback_title,
    feedback_description,feedback_status,
    feedback_like,category_id,category_name,comment_count})=> 
    category_id == togglecategory &&
    <FeedBackComponent
   id={feedback_id}  key={feedback_id} title={feedback_title} desc={feedback_description}
      status={feedback_status} like={feedback_like} category_name={category_name}
       category_id={category_id} comment_count={comment_count}/>)

       
       : feedData.map(({feedback_id,feedback_title,
        feedback_description,feedback_status,
        feedback_like,category_id,category_name,comment_count})=> 
        
        <FeedBackComponent
       id={feedback_id}  key={feedback_id} title={feedback_title} desc={feedback_description}
          status={feedback_status} like={feedback_like} category_name={category_name}
           category_id={category_id} comment_count={comment_count}/>)
  }


    
    </Container>
  )
}

export default Main