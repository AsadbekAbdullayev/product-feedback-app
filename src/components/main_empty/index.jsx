import React from 'react'
import { Link } from 'react-router-dom'
import { Empty } from 'antd';
import { Container, NoDataImg, AddButton, Add,Title } from './style'

const MainEmpty = () => {
  return (
    <React.Fragment>
      <Container>
        <Empty
        image={<NoDataImg/>}
        description = {false}
        >
          <Title color='#3A4374' size='24px' weight={700} height='35px'  margin='0 0 15px 0'>
          There is no feedback yet.
      </Title>
      <Title color='#647196' size='16px' weight={400} height='23px'  margin='0 0 15px 0'>
      Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.
      </Title>
     
          <AddButton><Link to={'/newFeedback'}><Add/>Add Feedback</Link></AddButton>
        </Empty>
      </Container>
    </React.Fragment>
  )
}

export default MainEmpty