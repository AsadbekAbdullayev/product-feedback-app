import React from 'react'
import Navbar from '../../components/navbar'
import Section from '../../components/section'
import Main from '../../components/main'
import MainEmpty from '../../components/main_empty'
import { Container,Wrap} from './style'

const HomePage = () => {
  return (
    <Container>
      <Wrap>
      <Section/>
      <div>
      <Navbar/>
      <Main/>
      </div>
      </Wrap>

    </Container>
  )
}

export default HomePage