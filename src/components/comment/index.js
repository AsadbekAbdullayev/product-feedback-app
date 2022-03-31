import React from 'react'
import {Container,Title,Userlogo} from './style'
const Comment = () => {
  return (
  <>
    <Container>
       <Title color='#3A4374' size='18px' weight={700} height='26px' margin='0 0 28px 0' >
       4 Comments </Title>

       <Container.CommentBody>
         <Container.CommentHeader>
           <div style={{display:'flex'}}>
<Userlogo/> 

          <div style={{margin:'0 0 0 32px'}} >
          <Title color='#3A4374' size='14px' weight={700} height='20px' margin='' >
          Elijah Moss </Title>
       <Title color='#647196' size='14px' weight={400} height='20px' margin='' >
       @hexagon.bestagon </Title>
        
           </div>
           </div>
           <Title color='#4661E6' size='13px' weight={600} height='19px' margin='' >
       Reply </Title>
         </Container.CommentHeader>

<Container.CommentTitle>
Also, please allow styles to be applied based on system preferences. 
I would love to be able to browse Frontend Mentor in the evening after
 my device’s dark mode turns on without the bright background it currently has.
</Container.CommentTitle>


       </Container.CommentBody>


       <Container.CommentBody>
         <Container.CommentHeader>
           <div style={{display:'flex'}}>
<Userlogo/> 

          <div style={{margin:'0 0 0 32px'}} >
          <Title color='#3A4374' size='14px' weight={700} height='20px' margin='' >
          Elijah Moss </Title>
       <Title color='#647196' size='14px' weight={400} height='20px' margin='' >
       @hexagon.bestagon </Title>
        
           </div>
           </div>
           <Title color='#4661E6' size='13px' weight={600} height='19px' margin='' >
       Reply </Title>
         </Container.CommentHeader>

<Container.CommentTitle>
Also, please allow styles to be applied based on system preferences. 
I would love to be able to browse Frontend Mentor in the evening after
 my device’s dark mode turns on without the bright background it currently has.
</Container.CommentTitle>

<Container.CommentReplyBody>
         <Container.CommentReplyHeader>
           <div style={{display:'flex'}}>
<Userlogo/> 

          <div style={{margin:'0 0 0 32px'}} >
          <Title color='#3A4374' size='14px' weight={700} height='20px' margin='' >
          Elijah Moss </Title>
       <Title color='#647196' size='14px' weight={400} height='20px' margin='' >
       @hexagon.bestagon </Title>
        
           </div>
           </div>
           <Title color='#4661E6' size='13px' weight={600} height='19px' margin='' >
       Reply </Title>
         </Container.CommentReplyHeader>

<Container.CommentReplyTitle>
Also, please allow styles to be applied based on system preferences. 
I would love to be able to browse Frontend Mentor in the evening after
 my device’s dark mode turns on without the bright background it currently has.
</Container.CommentReplyTitle>
       </Container.CommentReplyBody>

       
<Container.CommentReplyBody>
         <Container.CommentReplyHeader>
           <div style={{display:'flex'}}>
<Userlogo/> 

          <div style={{margin:'0 0 0 32px'}} >
          <Title color='#3A4374' size='14px' weight={700} height='20px' margin='' >
          Elijah Moss </Title>
       <Title color='#647196' size='14px' weight={400} height='20px' margin='' >
       @hexagon.bestagon </Title>
        
           </div>
           </div>
           <Title color='#4661E6' size='13px' weight={600} height='19px' margin='' >
       Reply </Title>
         </Container.CommentReplyHeader>

<Container.CommentReplyTitle>
Also, please allow styles to be applied based on system preferences. 
I would love to be able to browse Frontend Mentor in the evening after
 my device’s dark mode turns on without the bright background it currently has.
</Container.CommentReplyTitle>
       </Container.CommentReplyBody>

       </Container.CommentBody>
    </Container>
    
    </>
  )
}

export default Comment