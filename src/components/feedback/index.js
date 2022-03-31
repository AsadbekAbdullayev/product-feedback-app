import React from 'react'
import { Container,Title,AntButton,Icon,IconM } from './style'
import { Link } from 'react-router-dom'

const FeedBackComponent = ({width}) => {
  return (
    <Container width={width}>
<AntButton color='#F2F4FE' column padding='10px'> 
  <Icon/>

<Title color='#3A4374' size='13px' weight={700} height='20px' margin='5px 0 0 0' >
112
      </Title>
</AntButton>


<div style={{height:'100%',display:'flex',alignItems:'flex-start',justifyContent:'center',flexDirection:'column',margin:'0 0 0 40px'}}>
<Title color='#3A4374' size='18px' weight={700} height='26px'  margin='0 0 5px 0'>
Add tags for solutions
      </Title>

      <Title color='#647196' size='16px' weight={400} height='23px' margin='0 0 12px 0' >
      Easier to search for solutions based on a specific stack.
      </Title>
      <Container.Category>
      <Title color='#4661E6' size='13px' weight={600} height='19px'  >
      Enhancement
      </Title>
      </Container.Category>

</div>

<div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'auto'}}>
  <div style={{display:'flex',alignItems:'center'}}>

<Link to='/comments' style={{display:'flex',alignItems:'center'}} >
<IconM/>
</Link>

<Title color='#3A4374' size='18px' weight={700} height='26px' margin='0 0 0 8px' >
2
      </Title>
</div>
</div>
    </Container>
  )
}

export default FeedBackComponent