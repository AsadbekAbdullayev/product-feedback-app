import React,{useState,useContext} from 'react'
import  {Container,Logo,Title,Selected,OptionAnt,AntButton } from './style'
import { SortingContext } from '../../context/sorting'
import { FeedbackContext } from '../../context/feedbackContext'
import {Link } from 'react-router-dom'
const Navbar = () => {

  const [sorting, setSorting] = useContext(SortingContext)
  const [feedback, setFeedback] = useContext(FeedbackContext)

function handleChange(value) {
  setSorting(value)
  fetch(`https://feedback-app-1.herokuapp.com/feedbacks?sorting=${sorting}`)
.then((res)=>res.json()).then((res)=>setFeedback(res)).catch((err)=>console.log(err))
  console.log(feedback);
}
// antd dagi select valuesi birxil bulsas error beradi
  return (
    <Container>
      <div style={{display:'flex',alignItems:'center',margin:'0 0 0 8px'}}>
        <Logo/>
      <Title color='#fff' size='18px' weight={700} height='26px' margin='0 38px 0 16px'>
      6 Suggestions
      </Title>

      <div style={{display:'flex',alignItems:'center',margin:'0 0 0 8px'}}>

      <Title color='#F2F4FE' size='14px' weight={400} height='20px' >
      Sort by:
      </Title>
      <Container.inputCon width='160px' margin='0 0 5px 4px'>
      <Selected defaultValue="mostL"   className={'ant-select-selector'} onChange={handleChange}>
     
      <OptionAnt value="mostL" >
      Least Upvotes
      </OptionAnt>
      <OptionAnt value="mostC">
      Most Comments
      </OptionAnt>
      <OptionAnt value="leastC" >
      Least Comments
      </OptionAnt>
     
  
    </Selected>
      </Container.inputCon>
      </div>

      </div>
  <Link to='/newFeedback'>
      <AntButton color='#AD1FEA' hcolor='#656EA3'>
<Title color='#F2F4FE' size='14px' weight={700} height='20px' >
+ Add Feedback
      </Title>
</AntButton>
</Link>
    </Container>
  )
}

export default Navbar