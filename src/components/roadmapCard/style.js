import styled from "styled-components";
import { Button } from "antd"
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg'
import {ReactComponent as Massage} from '../../assets/icons/massage.svg'

export const IconM = styled(Massage)`
width: 18px;
height: 16px;
font-size:10px;
`

export const Container = styled.div`
width: 350px;
height: 272px;
position: relative;
background: #FFFFFF;
border-radius: 5px;
padding:30px;
margin:0 0 24px 0;
`

export const Icon = styled(Arrow)`
font-size:10px;
`

export const Category = styled.div`
height: 30px;
display:flex;
align-items:center;
justify-content:center;
background: #F2F4FF;
border-radius: 10px;
padding:5px 16px;
margin: 0 0 16px 0;
`

Container.Border = styled.div`
position: absolute;
width: 350px;
height: 6px;
top:0;
left:0;
background: ${({color})=>color ? color : '#AD1FEA'};
border-radius: 5px 5px 0px 0px;
`
export const Title = styled.div`
font-style: normal;
font-weight: ${({weight})=>weight ? weight : 700};
font-size:${({size})=>size ? size : '24px'};
line-height:${({height})=>height ? height :'35px'};
color:${({color})=>color ? color :'#3A4374'};
margin:${({margin})=>margin ? margin :''};
text-decoration-line:${({underline})=>underline && 'underline'};
`


export const Sircle = styled.div`
width: 8px;
height: 8px;
background: ${({color})=>color ? color : '#F49F85'};
border-radius:50%;
`

export const AntButton = styled(Button)`
height:40px !important;
background:${({color})=>color ? color :'#AD1FEA'}!important;
margin:${({margin})=>margin ? margin :''}!important;
:hover{
background:${({hcolor})=>hcolor ? hcolor :''}!important;

}
border-radius: 10px !important;
display:flex!important;
align-items:center!important;
outline:none !important;
border:none!important;
padding: 10px;
`