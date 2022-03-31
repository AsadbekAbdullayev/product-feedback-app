import styled from "styled-components";
import { Button } from "antd"
import image from '../../assets/image/userlogo.png'

export const Container = styled.div`
width: 730px;
padding:24px 32px;
background: #FFFFFF;
border-radius: 10px;
`

export const Userlogo = styled.div`
width: 40px;
height: 40px;
background:url(${image});
background-size:cover;
border-radius:50%;  
`
Container.CommentBody = styled.div`
width:100%;
border-bottom: 1px solid #8C92B3;
padding:0 0 20px 0;
margin:0 0 30px 0;
`
Container.CommentHeader = styled.div`
width:100%;
height:40px;
display: flex;
justify-content:space-between;
align-items:center;
`
Container.CommentTitle = styled.div`
width:594px;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #647196;
margin:17px 0 32px 0;
margin-left:auto;
`

Container.CommentReplyBody = styled.div`
width:621px;
padding:0 0 20px 0;
margin-left:auto;
`
Container.CommentReplyHeader = styled.div`
width:100%;
height:40px;
display: flex;
justify-content:space-between;
margin-left:auto;
align-items:center;
`
Container.CommentReplyTitle = styled.div`
width:549px;
font-style: normal;
font-weight: 400;
font-size: 15px;
line-height: 22px;
color: #647196;
margin:17px 0 0 0;
margin-left:auto;
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