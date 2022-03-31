import styled from 'styled-components'
import { Button } from "antd"

export const Container = styled.div`
width: 1440px;
height: 1469px;
padding:80px 335px;
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
`
export const Wrap = styled.div`
display: flex;
flex-direction:column;
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

export const AntButton = styled(Button)`
height:44px !important;
background:${({color})=>color ? color :'#AD1FEA'}!important;
margin:${({margin})=>margin ? margin :'#AD1FEA'}!important;
padding:${({padding})=>padding ? padding :''}!important;
:hover{
background:${({hcolor})=>hcolor ? hcolor :''}!important;

}
border-radius: 10px !important;
display:flex!important;
flex-direction:${({column})=>column && 'column'};
align-items:center!important;
justify-content:center!important;
outline:none !important;
border:none!important;
`

Container.Input = styled.input`
width: 664px;
height: 80px;
background: #F7F8FD;
border-radius: 5px;
outline: none;
border: none;
padding: 16px 24px;
display: flex;
align-items:flex-start;
margin:0 0 16px 0;
`
Container.InputCon = styled.div`
width: 730px;
height: 246px;
background: #FFFFFF;
border-radius: 10px;
margin: 24px 0;
padding:24px 32px;
`
