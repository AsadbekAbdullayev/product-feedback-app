import { Button } from "antd"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
width: 255px;
height: 600px;
display: flex;
flex-direction:column;

`
export const AntButton = styled(Button)`
height:30px !important;
background:${({color})=>color ? color :'#AD1FEA'}!important;
margin:${({margin})=>margin ? margin :'#AD1FEA'}!important;
:hover{
background:${({hcolor})=>hcolor ? hcolor :''}!important;

}
border-radius: 10px !important;
display:flex!important;
align-items:center!important;
justify-content:center!important;
outline:none !important;
border:none!important;
`


export const Section1 = styled.div`
width: 255px;
height: 137px;
padding:24px;
background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
border-radius: 10px;
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:flex-start;
margin:0 0 20px 0;
`

export const Section2 = styled.div`
width: 255px;
height: 166px;
padding:24px;

background: #FFFFFF;
border-radius: 10px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
margin:0 0 20px 0;

`

export const Section3 = styled.div`
width: 255px;
height: 178px;
padding:20px 24px;
background: #FFFFFF;
border-radius: 10px;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
margin:0 0 20px 0;

`
export const Title = styled.div`
font-style: normal;
font-weight: ${({weight})=>weight ? weight : 700};
font-size:${({size})=>size ? size : '24px'};
line-height:${({height})=>height ? height :'35px'};
color:${({color})=>color ? color :'#3A4374'};
margin:${({margin})=>margin ? margin :''};
text-decoration-line:${({underline})=>underline && 'underline'};
.link{
    :hover{
        text-decoration:underline;
    }
}
`

export const Sircle = styled.div`
width: 8px;
height: 8px;
background: ${({color})=>color ? color : '#F49F85'};
margin:0 16px 0 0;
border-radius:50%;
`
