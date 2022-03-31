import styled from "styled-components";
import { Button } from "antd"
import {ReactComponent as Arrow} from '../../assets/icons/arrow.svg'
import {ReactComponent as Massage} from '../../assets/icons/massage.svg'

export const Container = styled.div`
width:${({width})=>width ? width : '825px'};
height: 151px;
background: #FFFFFF;
border-radius: 10px;
display:flex;
padding:28px 32px;
margin: 0 0 20px 0;
`
export const Icon = styled(Arrow)`
font-size:10px;
`
export const IconM = styled(Massage)`
width: 18px;
height: 16px;
font-size:10px;
`

Container.Category = styled.div`
height: 151px;
display:flex;
align-items:center;
justify-content:center;
background: #F2F4FF;
border-radius: 10px;
padding:5px 16px;
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
height:53px !important;
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