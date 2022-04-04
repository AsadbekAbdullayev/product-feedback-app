import React,{useContext} from 'react'
import Navbar from '../../components/navbar'
import Section from '../../components/section'
import Main from '../../components/main'
import MainEmpty from '../../components/main_empty'
import { Container,Wrap} from './style'
import {FeedbackContext} from '../../context/feedbackContext'
const HomePage = () => {
  const [feedback] = useContext(FeedbackContext)
  return (
    <Container>
      <Wrap>
      <Section/>
      <div>
      <Navbar/>
      {
        feedback.length > 0 ? <Main/> : <MainEmpty/>
      }
      </div>
      </Wrap>

    </Container>
  )
}

export default HomePage