
import React from 'react'
import { Container,Title,AntButton,Selected ,OptionAnt} from './style'
import { Link } from 'react-router-dom'



const EditFeedbackComponent = () => {
  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  return (
    <Container>
      <Container.CardBody>

      <Title color='#647196' size='14px' weight={700} height='20px' margin='0 0 68px 0'>
      <Link to={'/'}><Title color='#647196' size='14px' weight={700} height='20px' margin='0 0 68px 0'> {'<'} Go Back </Title></Link>
      
      </Title>

      <Container.Card>

<Container.IconButton>
  <Container.IconShape/>
</Container.IconButton>

<Title margin='12px 0 65px 0'>
Editing ‘Add a dark theme option’
      </Title>

      <Title color='#647196' size='14px' weight={700} height='20px' margin='0 0 4px 0'>
      Feedback Title
      </Title>
      <Title color='#647196' size='14px' weight={400} height='20px' margin='0 0 16px 0'>
      Add a short, descriptive headline
      </Title>
      <Container.inputCon margin='0 0 24px 0'>
      <Container.Input/>

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
      Update Status
      </Title>
      <Title color='#647196' size='14px' weight={400} height='20px' margin='0 0 16px 0'>
      Change feedback state
      </Title>

      <Container.inputCon margin='0 0 24px 0'>
      <Selected defaultValue="Suggestion" style={{ width: 456 }} onChange={handleChange} className={'ant-select-selector'}>
      <OptionAnt value="Suggestion">
      Suggestion
      </OptionAnt>
      <OptionAnt value="Planned">
      Planned
      </OptionAnt>
      <OptionAnt value="In-Progress">
      In-Progress
      </OptionAnt>
      <OptionAnt value="Live">
      Live
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
        <Container.Input height='96px'/>

        
        </Container.inputCon>
        <div style={{display:'flex',justifyContent:'space-between',width:'100%'}}>
        <AntButton color='#D73737' hcolor='#E98888'>
<Title color='#F2F4FE' size='14px' weight={700} height='20px' >
Delete
      </Title>
</AntButton>

        <div style={{display:'flex'}}>
<AntButton color='#3A4374' hcolor='#656EA3'>
<Title color='#F2F4FE' size='14px' weight={700} height='20px' >
Cancel
      </Title>
</AntButton>

<AntButton margin='0 0 0 20px' hcolor='#C75AF6'>
<Title color='#F2F4FE' size='14px' weight={700} height='20px' >
Add Feedback
      </Title>
</AntButton>
</div>
</div>

      </Container.Card>


      </Container.CardBody>
    </Container>
  )
}

export default EditFeedbackComponent