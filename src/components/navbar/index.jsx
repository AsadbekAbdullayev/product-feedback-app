import React from 'react'
import  {Container,Logo,Title,Selected,OptionAnt,AntButton } from './style'
import {Link } from 'react-router-dom'
const Navbar = () => {
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
      <Selected defaultValue="Most Upvotes"   className={'ant-select-selector'}>
      <OptionAnt value="Most Upvotes">
      Most Upvotes
      </OptionAnt>
      <OptionAnt value="Least Upvotes">
      Least Upvotes
      </OptionAnt>
      <OptionAnt value="Most Comments">
      Most Comments
      </OptionAnt>
      <OptionAnt value="Least Comments">
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