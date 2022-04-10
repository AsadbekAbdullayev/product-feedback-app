import React,{useEffect,useState,useContext} from 'react'
import {Container,Section1,Section2,Section3,Title,AntButton,Sircle } from './style'
import { Link } from 'react-router-dom'
import {Categorycontext} from '../../context/categoryContext'
import {SetCategorycontext} from '../../context/setCategory'
const Section = () => {
      
const [category,setCategory] = useContext(Categorycontext)
const [togglecategory, setToggleCategory] = useContext(SetCategorycontext)


const onCategory = (e)=>{
      setToggleCategory(e)
}

  return (
    <Container>
      <Section1>
      <Title color='#fff' size='20px' weight={700} height='29px' >Frontend Mentor</Title>
      <Title color='#fff' size='15px' weight={500} height='22px' >Feedback Board </Title>
      
      </Section1>

      <Section2>
    
      {
             
            category.map(({category_id,category_name})=>
                  <AntButton color='#F2F4FF' key={category_id} click={`${togglecategory==category_id}`==`true` ? 'true' :'false'} onClick={()=>onCategory(category_id)}> 
                  <Title color='#4661E6' size='13px' weight={600} height='20px' click={`${togglecategory==category_id}`==`true` ? 'true' :'false'} >
                  {category_name}
                        </Title>
                  </AntButton>
            )
      }

      </Section2>

      <Section3>
      <div style={{display:'flex',justifyContent:'space-between',width:'100%',margin:'0 0 24px 0'}}>
      <Title color='#3A4374' size='18px' weight={700} height='26px' >
      Roadmap
      </Title>
      <Link to='/roadMap'>
      <Title color='#4661E6' size='13px' weight={600} height='19px' underline className={'link'} >
      View
      </Title>
      </Link>

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