import React from 'react'
import {Container,Section1,Section2,Section3,Title,AntButton,Sircle } from './style'

const Section = () => {
  return (
    <Container>
      <Section1>
      <Title color='#fff' size='20px' weight={700} height='29px' >Frontend Mentor</Title>
      <Title color='#fff' size='15px' weight={500} height='22px' >Feedback Board </Title>
      
      </Section1>

      <Section2>
        <div style={{display:'flex',margin:'0 0 14px 0'}}>
      <AntButton color='#F2F4FF' margin='0 8px 0 0'>
<Title color='#4661E6' size='13px' weight={600} height='20px' >
All
      </Title>
</AntButton>
<AntButton color='#F2F4FF' margin='0 8px 0 0'>
<Title color='#4661E6' size='13px' weight={600} height='20px' >
UI
      </Title>
</AntButton>
<AntButton color='#F2F4FF'>
<Title color='#4661E6' size='13px' weight={600} height='20px' >
UX
      </Title>
</AntButton>

        </div>

        <div style={{display:'flex',margin:'0 0 14px 0'}}>
      <AntButton color='#F2F4FF' margin='0 8px 0 0'>
<Title color='#4661E6' size='13px' weight={600} height='20px' >
Enhancement
      </Title>
</AntButton>
<AntButton color='#F2F4FF' margin='0 8px 0 0'>
<Title color='#4661E6' size='13px' weight={600} height='20px' >
Bug
      </Title>
</AntButton>


        </div>

        <div style={{display:'flex'}}>
      <AntButton color='#F2F4FF' margin='0 8px 0 0'>
<Title color='#4661E6' size='13px' weight={600} height='20px' >
Feature
      </Title>
</AntButton>

        </div>


      </Section2>

      <Section3>
      <div style={{display:'flex',justifyContent:'space-between',width:'100%',margin:'0 0 24px 0'}}>
      <Title color='#3A4374' size='18px' weight={700} height='26px' >
      Roadmap
      </Title>
      <Title color='#4661E6' size='13px' weight={600} height='19px'underline >
      View
      </Title>

      </div>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',margin:'0 0 8px 0'}}>
      <div style={{display:'flex',alignItems:'center'}}>
      <Sircle/>
      <Title color='#647196' size='16px' weight={400} height='23px' >
      Planned
      </Title>
      </div>
      <Title color='#647196' size='16px' weight={700} height='23px' >
      2
      </Title>
      </div>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',margin:'0 0 8px 0'}}>
      <div style={{display:'flex',alignItems:'center'}}>
      <Sircle color='#AD1FEA'/>
      <Title color='#647196' size='16px' weight={400} height='23px' >
      In-Progress
      </Title>
      </div>
      <Title color='#647196' size='16px' weight={700} height='23px' >
      3
      </Title>
      </div>

      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
      <div style={{display:'flex',alignItems:'center'}}>
      <Sircle color='#62BCFA'/>
      <Title color='#647196' size='16px' weight={400} height='23px' >
      Live
      </Title>
      </div>
      <Title color='#647196' size='16px' weight={700} height='23px' >
      1
      </Title>
      </div>


        
      </Section3>

    </Container>
  )
}

export default Section