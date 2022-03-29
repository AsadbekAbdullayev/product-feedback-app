import React from 'react'
import { Container,Title,AntButton,Selected ,OptionAnt} from './style'
import { Link } from 'react-router-dom'



const NewFeedbackComponent = () => {
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
      <Container.Input/>

      </Container.inputCon>


      <Title color='#647196' size='14px' weight={700} height='20px' margin='0 0 4px 0'>
      Category
      </Title>
      <Title color='#647196' size='14px' weight={400} height='20px' margin='0 0 16px 0'>
      Choose a category for your feedback
      </Title>

      <Container.inputCon margin='0 0 24px 0'>
      <Selected defaultValue="lucy" style={{ width: 456 }} onChange={handleChange} className={'ant-select-selector'}>
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
        <Container.Input height='96px'/>

        
        </Container.inputCon>
        <div style={{display:'flex', marginLeft:'auto'}}>
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

      </Container.Card>


      </Container.CardBody>
    </Container>
  )
}

export default NewFeedbackComponent