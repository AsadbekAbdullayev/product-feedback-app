import React,{useState,useContext} from 'react'
import { Container,Title,AntButton,Selected ,OptionAnt} from './style'
import { Link } from 'react-router-dom'
import {FeedbackContext} from '../../context/feedbackContext'
import { useNavigate } from 'react-router'



const NewFeedbackComponent = () => {

  const nav = useNavigate()
  const [feedData,setfeedData] = useContext(FeedbackContext)
 
  const [title,setTitle] = useState('')
  const [desc,setDesc] = useState('')
  const [cat,setCat] = useState('Feature')

  function handleChange(value) {
    setCat(value)
  }

const SetInputTitle = (e)=>{
  setTitle(e.target.value)
}

const SetInputDesc = (e)=>{
  setDesc(e.target.value)

  }

const addF = ()=>{
  if((title.length > 0) && (desc.length > 0) && (cat.length > 0) ){
    const ND =   {
      feedback_id:feedData.length + 1,
      feedback_title: title,
      feedback_description: desc,
      feedback_status: 1,
      feedback_like: 0,
      category_id: 1,
      category_name: cat,
      comment_count: 0
  }
    setfeedData([...feedData,ND])
    nav('/')
}else{
  alert('Sorovnomani toldiring !')
}
}
  return (
    <Container>
      <Container.CardBody>

      <Link style={{display:'flex'}} to={'/'}><Title color='#647196' size='14px' weight={700} height='20px' margin='0 5px 68px 0'>
         {'< '}   </Title>
         <Title color='#647196' size='14px' weight={700} height='20px'  className='link'>
          Go Back </Title>

         </Link>
      

      <Container.Card>

<Container.IconButton>
  <Container.IconPlus/>
</Container.IconButton>

<Title margin='12px 0 40px 0'>
Create New Feedback
      </Title>

      <Title color='#647196' size='14px' weight={700} height='20px' margin='0 0 4px 0'>
      Feedback Title
      </Title>
      <Title color='#647196' size='14px' weight={400} height='20px' margin='0 0 16px 0'>
      Add a short, descriptive headline
      </Title>
      <Container.inputCon margin='0 0 24px 0'>
      <Container.Input name='title' onChange={SetInputTitle}/>

      </Container.inputCon>


      <Title color='#647196' size='14px' weight={700} height='20px' margin='0 0 4px 0'>
      Category
      </Title>
      <Title color='#647196' size='14px' weight={400} height='20px' margin='0 0 16px 0'>
      Choose a category for your feedback
      </Title>

      <Container.inputCon margin='0 0 24px 0'>
      <Selected defaultValue="Feature" style={{ width: 456 }} onChange={handleChange} className={'ant-select-selector'}>
      <OptionAnt value="Feature">
      Feature
      </OptionAnt>
      <OptionAnt value="UI">
      UI
      </OptionAnt>
      <OptionAnt value="UX">
      UX
      </OptionAnt>
      <OptionAnt value="Enhancement">
      Enhancement
      </OptionAnt>
      <OptionAnt value="Bug">
      Bug
      </OptionAnt>
  
      
      
    </Selected>
      </Container.inputCon>

      <Title color='#647196' size='14px' weight={700} height='20px' margin='0 0 4px 0'>
      Feedback Detail
      </Title>
      <Title color='#647196' size='14px' weight={400} height='20px' margin='0 0 16px 0'>
      Include any specific comments on what should be improved, added, etc.
      </Title>

      <Container.inputCon margin='0 0 32px 0' height='96px'>

        <Container.Input height='96px' name='desc' onChange={SetInputDesc}/>
        
        </Container.inputCon>
        <div style={{display:'flex', marginLeft:'auto'}}>
<AntButton color='#3A4374' hcolor='#656EA3'>
<Title color='#F2F4FE' size='14px' weight={700} height='20px' >
Cancel
      </Title>
</AntButton>

<AntButton margin='0 0 0 20px' hcolor='#C75AF6' onClick={addF}>
<Title color='#F2F4FE' size='14px' weight={700} height='20px' >
Add Feedback
      </Title>
</AntButton>
</div>

      </Container.Card>


      </Container.CardBody>
    </Container>
  )
}

export default NewFeedbackComponent