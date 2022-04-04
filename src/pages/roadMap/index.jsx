import React from 'react'
import { Container,Title,AntButton } from './style'
import {RoadmapCardPlannned,RoadmapCardInProgress,RoadmapCardLive} from '../../components/roadmapCard'
import {Link} from 'react-router-dom'

const RoadMap = () => {
  return (
    <Container>
      <Container.Navbar>
<div>
<Link style={{display:'flex'}} to={'/'}><Title color='#fff' size='14px' weight={700} height='20px'>
         {'< '}   </Title>
         <Title color='#fff' size='14px' weight={700} height='20px' margin='0 0 0 5px' className='link'>
          Go Back </Title>

         </Link>
         <Title color='#fff' size='24px' weight={700} height='35px'>
         Roadmap
          </Title>   
</div>

<Link to='/newFeedback'>
      <AntButton color='#AD1FEA' hcolor='#656EA3'>
<Title color='#F2F4FE' size='14px' weight={700} height='20px' >
+ Add Feedback
      </Title>
</AntButton>
</Link>
      </Container.Navbar>

<Container.Wrapper>

      <Container.Section>
      <Title color='#3A4374' size='18px' weight={700} height='26px' >
      Planned (2)
      </Title>
      <Title color='#647196' size='16px' weight={400} height='23px' margin='0 0 30px 0' >
      Ideas prioritized for research
      </Title>

      <RoadmapCardPlannned/>
      <RoadmapCardPlannned/>

      </Container.Section>

      <Container.Section>
      <Title color='#3A4374' size='18px' weight={700} height='26px' >
      In-Progress (3)
      </Title>
      <Title color='#647196' size='16px' weight={400} height='23px' margin='0 0 30px 0'>
      Currently being developed
      </Title>

      <RoadmapCardInProgress/>
      <RoadmapCardInProgress/>
      <RoadmapCardInProgress/>

      </Container.Section>

      <Container.Section>
      <Title color='#3A4374' size='18px' weight={700} height='26px' >
      Live (1)
      </Title>
      <Title color='#647196' size='16px' weight={400} height='23px' margin='0 0 30px 0'>
      Released features
      </Title>

      <RoadmapCardLive/>

      </Container.Section>

</Container.Wrapper>

    </Container>
  )
}

export default RoadMap