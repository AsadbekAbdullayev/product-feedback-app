import styled from 'styled-components'
import { ReactComponent as Plus } from '../../assets/icons/plus.svg'
import { ReactComponent as Shape } from '../../assets/icons/shape.svg'
import { Button } from "antd"
import { Select } from 'antd';

const { Option } = Select;

export const Selected = styled(Select)`

`
export const OptionAnt = styled(Option)`
`

export const Container = styled.div`
width: 1440px;
height: 1024px;
background:inherit;
display:flex;
justify-content:center;
padding:40px 0 0 0;
`

Container.CardBody = styled.div`
width: 540px;
height: 735px;
.link{
    :hover{
        text-decoration:underline;
    }
}
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

Container.Input = styled.input`
width:${({width})=>width ? width :'456px'};
height:${({height})=>height ? height :'48px'};
background: inherit;
border: none;
border-radius: 5px;
outline:none;
padding: 15px 20px;
display:flex;
justify-content:flex-start;
`


Container.inputCon = styled.div`
width:${({width})=>width ? width :'456px'};
height:${({height})=>height ? height :'48px'};
margin:${({margin})=>margin ? margin :''};
background: #F7F8FD;
border-radius: 5px;
.ant-select-selector {
    border:none !important;
    width:100%!important;
    height:100% !important;
    background: #F7F8FD !important;
border-radius: 5px !important;
display: flex !important;
align-items:center !important;
border:none !important;

font-style: normal!important;
font-weight: 400!important;
font-size: 15px!important;
line-height: 22px!important;
color: #3A4374!important;
:focus{
    border: 1px solid #4661E6 !important;
}
}
.ant-select{
}



`
Container.IconPlus = styled(Plus)`
width:16px;
height:16px;
`

Container.IconShape = styled(Shape)`
width:24px;
height:24px;
`
Container.IconButton = styled.div`
width:56px;
height:56px;
background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position: absolute;
top:-28px;
left:42px;
`
Container.Card = styled.div`
position:relative;
width:540px;
height:657px;
background: #FFFFFF;
border-radius: 10px;
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
padding:40px;
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