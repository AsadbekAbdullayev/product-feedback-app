import React,{useContext,useState} from 'react'
import { Container,Title,AntButton,Icon,IconM } from './style'
import { Link } from 'react-router-dom'
import {FeedbackContext} from '../../context/feedbackContext'


const FeedBackComponent = ({width,id,title,
  desc,status,
  like,category_id,category_name,comment_count}) => {

  const [feedData,setfeedData] = useContext(FeedbackContext)
  const [llike,setLlike] = useState(1)
const onLike = (e) =>{
  setLlike(-1*llike)
const ND = feedData.map((v,i)=>(v.feedback_id=== id ? {...v,feedback_like:v.feedback_like + llike}:v));
setfeedData(ND);
}
  return (
    <Container width={width}>
<AntButton color='#F2F4FE' column={'true'} padding='10px' like={llike < 0 ? 'true' : 'false'} onClick={()=>onLike(id)}> 
  <Icon/>

<Title color='#3A4374' size='13px' weight={700} height='20px' margin='5px 0 0 0' like={llike < 0 ? 'true' : 'false'} >
{
  like
}
      </Title>
</AntButton>


<div style={{height:'100%',width:'650px',display:'flex',alignItems:'flex-start',justifyContent:'center',flexDirection:'column',margin:'0 0 0 40px',flexWrap:'wrap'}}>
<Title color='#3A4374' size='18px' weight={700} height='26px'  margin='0 0 5px 0'>
{title}
      </Title>

      <Title color='#647196' size='16px' weight={400} height='23px' margin='0 0 12px 0' >
     {desc}
      </Title>
      <Container.Category>
      <Title color='#4661E6' size='13px' weight={600} height='19px'  >
      {category_name}
      </Title>
      </Container.Category>

</div>

<div style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'auto'}}>
  <div style={{display:'flex',alignItems:'center'}}>

<Link to={`/comments/${id}`} style={{display:'flex',alignItems:'center'}} >
<IconM/>
</Link>

<Title color='#3A4374' size='18px' weight={700} height='26px' margin='0 0 0 8px' >
{
  comment_count
}
      </Title>
</div>
</div>
    </Container>
  )
}

export default FeedBackComponent