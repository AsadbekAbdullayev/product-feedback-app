import React,{useContext} from 'react'
import Comment from '../../components/comment'
import { Container,Title,AntButton } from './style'
import FeedBackComponent from '../../components/feedback'
import { Link,useParams } from 'react-router-dom'
import {FeedbackContext} from '../../context/feedbackContext'

const Comments = () => {
      const { idd } = useParams()
  const [feedData,setfeedData] = useContext(FeedbackContext)
      const newData = feedData.filter((v)=>v.feedback_id == idd)
  return (
    <Container>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'730px',margin:'0 0 24px 0'}}>
      <Link style={{display:'flex'}} to={'/'}><Title color='#647196' size='14px' weight={700} height='20px'>
         {'< '}   </Title>
         <Title color='#647196' size='14px' weight={700} height='20px' margin='0 0 0 5px' className='link' >
          Go Back </Title>
          </Link>
          <Link to={`/editFeedback/${idd}`}>
          <AntButton color='#4661E6' hcolor='#7C91F9'>
<Title color='#F2F4FE' size='14px' weight={700} height='20px' >
Edit Feedback
      </Title>
</AntButton>
</Link>

      </div>
      {
            newData.map(({feedback_id,feedback_title,
                  feedback_description,feedback_status,
                  feedback_like,category_id,category_name,comment_count})=> 
                        <FeedBackComponent width='730px'
                 id={feedback_id}  key={feedback_id} title={feedback_title} desc={feedback_description}
                    status={feedback_status} like={feedback_like} category_name={category_name}
                     category_id={category_id} comment_count={comment_count}/>
                        
                  
                     )
      }
      



        <Comment/>

<Container.InputCon>
<Title color='#3A4374' size='18px' weight={700} height='26px' margin='0 0 24px 0' >
Add Comment
      </Title>

<Container.Input placeholder='Type your comment here'/>

<div style={{display:'flex',height:'44px',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
<Title color='#647196' size='15px' weight={400} height='22px'>
250 Characters left
      </Title>
<AntButton>
<Title color='#F2F4FE' size='14px' weight={700} height='20px'>
Post Comment
      </Title>
</AntButton>

</div>

</Container.InputCon>

    </Container>
  )
}

export default Comments