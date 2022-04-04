
import styled from "styled-components"
import { Button } from "antd"

export const Container = styled.div`
width: 1440px;
height: 1367px;
padding:78px 165px;
`
Container.Navbar = styled.div`
width: 1110px;
height: 113px;
background: #373F68;
border-radius: 10px;
padding:27px 32px;
display:flex;
justify-content:space-between;
align-items:center;
.link{
    :hover{
        text-decoration:underline;
    }
}
`
Container.Wrapper = styled.div`
width: 1110px;

margin: 48px 0 0 0;
display: flex;
justify-content:space-between;

`
Container.Section = styled.div`
width: 350px;
height: 972px;
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