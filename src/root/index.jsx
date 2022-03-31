
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Container } from './style'

import NewFeedback from '../pages/new_feedback'
import RoadMap from '../pages/roadMap'
import EditFeedback from '../pages/edit_feedback'
import FeedbackDetail from '../pages/feedback_detail'
import Comments from '../pages/comments'
import HomePage from '../pages/home'

const Root = () => {
  return (
    <Container>
      <Routes>
        <Route path={'/'} element={<HomePage/>} />
        <Route path={'/feedbackDetail'} element={<FeedbackDetail/>} />
        <Route path={'/newFeedback'} element={<NewFeedback/>} />
        <Route path={'/roadMap'} element={<RoadMap/>} />
        <Route path={'/editFeedback'} element={<EditFeedback/>} />
        <Route path={'/comments'} element={<Comments/>} />
      </Routes>
    </Container>
  )
}

export default Root